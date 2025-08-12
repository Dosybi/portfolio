export interface TypografOptions {
  includeConjunctions?: boolean // склеивать "и", "а" (по умолчанию true)
  extraShortWords?: string[] // добавить свои короткие слова
  enableQuotes?: boolean // «кавычки» → «…», „…“ (по умолчанию true)
  enableEllipsis?: boolean // "..." → "…" (по умолчанию true)
  enableDashRules?: boolean // правила про тире/диапазоны (по умолчанию true)
  enableParticles?: boolean // склейка "же/ли/бы/ль" (по умолчанию true)
  enableUnits?: boolean // числа + единицы/%, №, §, °C (по умолчанию true)
  groupThousands?: boolean // тонкие неразрывные между тысячами (по умолчанию true)
  groupFourDigit?: boolean // группировать 4-значные (по умолчанию false)
  protect?: {
    // что прятать "под колпак" перед заменами
    urls?: boolean // https://… и www.… (по умолчанию true)
    emails?: boolean // user@host (по умолчанию true)
    backticks?: boolean // `inline` и ```blocks``` (по умолчанию true)
  }
}

const NBSP = '\u00A0' // неразрывный пробел
const NNBSP = '\u202F' // тонкий неразрывный
const MDASH = '\u2014' // — em dash
const NDASH = '\u2013' // – en dash
const MINUS = '\u2212' // −

type Range = { start: number; end: number; text: string }

export function typografRu(input: string, opt: TypografOptions = {}): string {
  const options: Required<TypografOptions> = {
    includeConjunctions: opt.includeConjunctions ?? true,
    extraShortWords: opt.extraShortWords ?? [],
    enableQuotes: opt.enableQuotes ?? true,
    enableEllipsis: opt.enableEllipsis ?? true,
    enableDashRules: opt.enableDashRules ?? true,
    enableParticles: opt.enableParticles ?? true,
    enableUnits: opt.enableUnits ?? true,
    groupThousands: opt.groupThousands ?? true,
    groupFourDigit: opt.groupFourDigit ?? false,
    protect: {
      urls: opt.protect?.urls ?? true,
      emails: opt.protect?.emails ?? true,
      backticks: opt.protect?.backticks ?? true,
    },
  }

  // 0) Защитим куски, куда нельзя лезть
  const protectedResult = protectSegments(
    input,
    options.protect as Required<TypografOptions['protect']>
  )
  let text = protectedResult.text

  // 1) Простые символьные замены
  text = simpleSymbols(text, options)

  // 2) Тире/диапазоны/реплики
  if (options.enableDashRules) text = dashes(text)

  // 3) Склейка коротких предлогов/союзов
  text = glueShortPreps(text, options)

  // 4) Частицы "же/ли/бы/ль"
  if (options.enableParticles) text = glueParticles(text)

  // 5) Числа, проценты, единицы, №, §, градусы
  if (options.enableUnits) text = numbersAndUnits(text, options)

  // 6) Разделители тысяч (после всего числового)
  if (options.groupThousands)
    text = groupThousands(text, options.groupFourDigit)

  // 7) Кавычки
  if (options.enableQuotes) text = smartQuotes(text)

  // 8) Лишние пробелы/причесывание
  text = tidySpaces(text)

  // 9) Вернём защищённые сегменты
  return protectedResult.restore(text)
}

/* ---------------- helpers ---------------- */

function protectSegments(
  src: string,
  p: Required<TypografOptions['protect']> = {
    urls: true,
    emails: true,
    backticks: true,
  }
) {
  const ranges: Range[] = []
  const used: boolean[] = new Array(src.length).fill(false)

  function mark(re: RegExp) {
    for (const m of src.matchAll(re)) {
      const start = m.index ?? 0
      const end = start + m[0].length
      if (used.slice(start, end).some(Boolean)) continue
      for (let i = start; i < end; i++) used[i] = true
      ranges.push({ start, end, text: m[0] })
    }
  }

  if (p.backticks) {
    mark(/```[\s\S]*?```/g)
    mark(/`[^`\n]*`/g)
  }
  if (p.urls) {
    mark(/\bhttps?:\/\/[^\s<>()]+/gi)
    mark(/\bwww\.[^\s<>()]+/gi)
  }
  if (p.emails) {
    mark(/\b[\w.+-]+@[\w-]+(?:\.[\w-]+)+\b/gi)
  }

  ranges.sort((a, b) => a.start - b.start)

  const OPEN = '\uE000',
    CLOSE = '\uE001'
  const repls: string[] = []
  let out = ''
  let pos = 0

  ranges.forEach((r, i) => {
    out += src.slice(pos, r.start)
    const token = `${OPEN}${i}${CLOSE}`
    out += token
    repls[i] = r.text
    pos = r.end
  })
  out += src.slice(pos)

  const restore = (s: string) =>
    s.replace(new RegExp(`${OPEN}(\\d+)${CLOSE}`, 'g'), (_, n) => repls[+n])

  return { text: out, restore }
}

function simpleSymbols(s: string, o: Required<TypografOptions>) {
  // ... → …
  if (o.enableEllipsis) s = s.replace(/\.{3,}/g, '…')

  // (c)/(C)/(r)/(tm) → ©/®/™
  s = s
    .replace(/$begin:math:text$c$end:math:text$/gi, '©')
    .replace(/$begin:math:text$r$end:math:text$/gi, '®')
    .replace(/$begin:math:text$tm$end:math:text$/gi, '™')

  // Умножение: 3x4, 3*4 → 3 × 4 (NNBSP вокруг)
  s = s.replace(/(?<=\d)\s*[xх*]\s*(?=\d)/giu, `${NNBSP}×${NNBSP}`)

  // Минус перед числом: −5 (не когда это диапазон 5–7)
  s = s.replace(/(^|[^\d\-])-(?=\d)/g, `$1${MINUS}`)

  return s
}

function dashes(s: string) {
  // Диапазоны чисел: 5–7, 1995–2001 (без пробелов)
  s = s.replace(/(?<=\d)\s*-\s*(?=\d)/g, NDASH)

  // Реплики: начало строки/абзаца "- " → "— "
  s = s.replace(/(^|\n)[ \t]*-[ \t]+(?=\S)/g, (_, p1) => `${p1}${MDASH} `)

  // Окружённый пробелами дефис → тире: " — "
  s = s.replace(/(\s)-(\s)/g, `$1${MDASH}$2`)

  return s
}

function glueShortPreps(s: string, o: Required<TypografOptions>) {
  const base1 = ['в', 'к', 'с', 'у', 'о']
  const base2 = ['по', 'на', 'из', 'за', 'от', 'до', 'во', 'со']
  const conj = o.includeConjunctions ? ['и', 'а'] : []
  const extra = o.extraShortWords
    .map((w) => w.toLowerCase().trim())
    .filter(Boolean)
  const words = Array.from(new Set([...base1, ...base2, ...conj, ...extra]))

  if (!words.length) return s

  const alt = words
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')

  // (^|начало/пробел/открывающая пунктуация)(слово)\s+(?=буква/цифра)
  const re = new RegExp(
    `(^|[\\s\\u00A0([{"'«„—–-])((?:${alt}))\\b\\s+(?=[\\p{L}\\p{N}])`,
    'giu'
  )
  return s.replace(re, (_m, left, w) => `${left}${w}${NBSP}`)
}

function glueParticles(s: string) {
  // Ставим NBSP ПЕРЕД частицами: как же, если ли, он бы, кто ль
  return s.replace(/(\p{L})\s+(?=(же|ли|бы|ль)\b)/giu, `$1${NBSP}`)
}

function numbersAndUnits(s: string, o: Required<TypografOptions>) {
  // № 5 → № 5 ; § 10 → § 10
  s = s.replace(/№\s+(?=\d)/g, `№${NBSP}`)
  s = s.replace(/§\s+(?=\d)/g, `§${NBSP}`)

  // °C/°F: 25 °C / 25° C / 25°C → 25 °C
  s = s.replace(/(\d(?:[.,]\d+)?)\s*°\s*[cCСс]\b/gu, `$1${NBSP}°C`)
  s = s.replace(/(\d(?:[.,]\d+)?)\s*°\s*[fF]\b/g, `$1${NBSP}°F`)

  // Проценты/промилле: 50 % → 50 %
  s = s.replace(/(\d(?:[.,]\d+)?)\s*(?=%|‰)/g, `$1${NBSP}`)

  // Год: 2025 г. / 2025г. → 2025 г.
  s = s.replace(/(\d{3,4})\s*г\./g, `$1${NBSP}г.`)
  s = s.replace(/(\d{3,4})\s+год(?!\p{L})/giu, `$1${NBSP}год`)

  // День + месяц: 5 марта → 5 марта
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ].join('|')
  s = s.replace(
    new RegExp(`(\\b\\d{1,2})\\s+(?=${months}\\b)`, 'giu'),
    `$1${NBSP}`
  )

  // Число + единица измерения
  const units = [
    'мм',
    'см',
    'м',
    'км',
    'мл',
    'л',
    'мг',
    'г',
    'кг',
    'т',
    'с',
    'сек',
    'мин',
    'ч',
    'Вт',
    'кВт',
    'МВт',
    'ГВт',
    'байт',
    'КБ',
    'МБ',
    'ГБ',
    'ТБ',
    'стр\\.',
    'г\\.',
    'руб\\.',
    'руб',
    '₽',
    '₸',
    'KZT',
    'USD',
    'EUR',
    'GBP',
  ].join('|')

  // NBSP между числом (в т.ч. с уже разбитыми тысячами) и единицей
  s = s.replace(
    new RegExp(
      `(\\d(?:[\\s${NNBSP}]?\\d{3})*(?:[,.]\\d+)?)[ \\t]+(?=(?:${units}|°[CF])\\b)`,
      'giu'
    ),
    `$1${NBSP}`
  )

  // Углы: 45 ° → 45° (без пробела), если просто градусы без C/F
  s = s.replace(/(\d(?:[.,]\d+)?)\s+°(?![CF])/g, `$1°`)

  return s
}

function groupThousands(s: string, group4: boolean) {
  // Группируем только "чистые" целые (без 10:30, 1,23, без телефона с +7…)
  // — группы по 3, тонкий неразрывный между группами.
  return s.replace(
    /(?<![\d.,])\d{4,}(?![\d.,])/g, // целые 4+ цифр
    (m) => {
      if (!group4 && m.length === 4) return m // не трогаем 4-значные по умолчанию
      // не группируем похожие на телефоны: начинаются с 7/8 и 10–11 знаков
      if (/^(?:7|8)\d{9,10}$/.test(m)) return m
      return m.replace(/\B(?=(\d{3})+(?!\d))/g, NNBSP)
    }
  )
}

function smartQuotes(s: string) {
  // Простейший стек для двойных кавычек:
  // 0-й уровень: «…», 1-й: „…“
  const opens = ['«', '„']
  const closes = ['»', '“']
  let depth = 0
  let out = ''
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '"') {
      const isOpen = depth % 2 === 0
      out += isOpen ? opens[Math.min(1, depth)] : closes[Math.min(1, depth - 1)]
      depth += isOpen ? 1 : -1
      if (depth < 0) depth = 0
    } else {
      out += ch
    }
  }
  return out
}

function tidySpaces(s: string) {
  // Удаляем лишние обычные пробелы (NBSP/NNBSP сохраняем)
  s = s.replace(/[ \t]{2,}/g, ' ')

  // Нет пробела перед , . ! ? : ; ) » (кроме случаев, когда это уже NBSP/NNBSP не нужно)
  s = s.replace(/([^\s\u00A0\u202F])\s+([,.;:!?»])/g, `$1$2`)

  // Один пробел после , : ; ? ! если дальше буква/цифра (не трогаем числа с запятой)
  s = s.replace(/([,;:!?])(?!\s|$)(?=[^\d])/g, '$1 ')

  // Сжимаем пробелы вокруг тире до обычного пробела: " — "
  s = s.replace(/\s*—\s*/g, ` ${MDASH} `).replace(/^\s*—\s*/gm, `${MDASH} `)

  // Убираем пробелы в начале/конце строк
  s = s.replace(/[ \t]+$/gm, '').trim()

  return s
}
