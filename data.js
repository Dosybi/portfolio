import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTelegram } from 'react-icons/tb'

export const dataRussian = {
  meta: {
    title: 'Антон Досыбиев',
  },
  header: {
    title: 'Антон Досыбиев',
    navigation: [
      {
        label: 'Обо мне',
        link: '#about',
      },
      {
        label: 'Контакты',
        link: '#contact',
      },
    ],
  },
  portfolio: [
    {
      stack: 'React, Next, Tailwind, SSR, Jamstack',
      title: 'Ramotion Agency',
      year: '2022 — настоящее время',
      text: 'В составе команды агентства разрабатываю сайты для компаний из США и Великобритании. Верстаем по макетам в Фигме, чаще всего используем Next, но бывает Gatsby или Astro. Настраиваем серверный рендеринг и обратную совместимость с ЦРМ-системами вроде DatoCMS или Contentful.',
      button: {
        label: 'Агентство',
        link: 'https://www.ramotion.com',
      },
    },
    {
      stack: 'Next, Tailwind',
      title: 'Groovy Calcs',
      year: '2022 — настоящее время',
      text: 'Набор забавных и иногда пугающих калькуляторов — мой пет-проект, который я делаю в свободное время ради развлечения. Стек минималистичный: Next и Tailwind. Приложения несложные, поэтому стейт-менеджерами не пользуюсь и управляю состоянием с помощью хуков.',
      button: {
        label: 'Калькуляторы',
        link: 'https://groovy-calcs.vercel.app',
      },
    },
    {
      stack: 'Wordpress',
      title: 'Pure',
      year: '2019 — 2020',
      text: 'Настраивал стили и плагины для блога, верстал баннеры, оптимизировал контент в соответствии с требованиями СЕО, редактировал статьи и управлял командой авторов.',
      button: {
        label: 'Приложение',
        link: 'https://pure.app/',
      },
    },
  ],
  education: {
    heading: 'Учёба',
    content: [
      {
        subheading: 'Школа дизайнеров Бюро Горбунова',
        text: 'Дизайн-бюро Артёма Горбунова',
        progress: '100%',
      },
      {
        subheading: 'The Complete JavaScript Course: From Zero to Expert',
        text: 'Udemi',
        progress: '100%',
      },
      {
        subheading: 'Complete React Developer',
        text: 'Udemi',
        progress: '100%',
      },
      {
        subheading: 'Creative Coding 2.0 in JS: Animation, Sound, & Color',
        text: 'Domestika',
        progress: '56%',
      },
    ],
  },
  about: {
    heading: 'Обо мне',
    text: [
      'Работаю фронтенд-разработчиком в американском диджитал-агентстве на стеке: React, Next, Gatsby, Tailwind, SSR, GitLab. Знаю Vue, Vuex, Nuxt, Webflow и Astro. Умею разбираться в чужом коде. Люблю учиться и делаю это быстро.',
      'Из-за NDA не могу рассказать подробнее о проектах, на которых работаю в агентстве, но буду рад обсудить этот опыт, если захотите поговорить лично.',
      'Этот сайт сделал на Next, стилизовал с помощью Tailwind, задеплоил в Vercel.',
    ],
    subheading: 'До фронтенда',
    extra: [
      'Работал копирайтером и редактором, возглавлял команды авторов в бренд-медиа, запускал свои коммерческие проекты, поэтому умею смотреть на любую задачу не только как технарь, но и с точки зрения пользы для клиента и продукта.',
    ],
  },
  contact: {
    heading: 'Контакты',
    contacts: [
      {
        label: 'dosybi@gmail.com',
        link: 'mailto:dosybi@gmail.com',
        icon: <FiMail />,
      },
      {
        label: 'github.com/dosybi',
        link: 'https://github.com/dosybi',
        icon: <AiOutlineGithub />,
      },
      {
        label: 'instagram.com/dosybi',
        link: 'https://instagram.com/dosybi',
        icon: <BsInstagram />,
      },
      {
        label: 'telegram.me/dosybi',
        link: 'https://telegram.me/dosybi',
        icon: <TbBrandTelegram />,
      },
    ],
    button: {
      label: 'Резюме',
      link: 'https://hh.ru/resume/b127f5d0ff09d4f7050039ed1f645757594647',
    },
  },
}

export const dataEnglish = {
  meta: {
    title: 'Anton Dossybiyev',
  },
  header: {
    title: 'Anton Dossybiyev',
    navigation: [
      {
        label: 'About',
        link: '#about',
      },
      {
        label: 'Contact',
        link: '#contact',
      },
    ],
  },
  portfolio: [
    {
      stack: 'React, Next, Tailwind, SSR, Jamstack',
      title: 'Ramotion Agency',
      year: '2022 — now',
      text: 'As part of the agency team I develop websites for US and UK companies. We work with designs in Figma, mostly using Next, but sometimes Gatsby or Astro, configure server-side rendering and backward compatibility with CRM-systems like DatoCMS or Contentful.',
      button: {
        label: 'Agency',
        link: 'https://www.ramotion.com',
      },
    },
    {
      stack: 'Next, Tailwind',
      title: 'Groovy Calcs',
      year: '2022 — now',
      text: `A set of funny and sometimes frightening calculators is my pet project that I keep developing in my spare time for fun. The stack is minimalistic: Next and Tailwind. The applications aren't complex, so I don't use state managers and handle state with hooks.`,
      button: {
        label: 'Calcs',
        link: 'https://groovy-calcs.vercel.app',
      },
    },
    {
      stack: 'Wordpress',
      title: 'Pure',
      year: '2019 — 2020',
      text: 'I configured styles and plugins for the blog, designed banners, optimized content according to SEO requirements, edited articles, and managed the team of authors.',
      button: {
        label: 'App',
        link: 'https://pure.app/',
      },
    },
  ],
  education: {
    heading: 'Learning',
    content: [
      {
        subheading: 'Gorbunov Bureau Design School',
        text: 'Artem Gorbunov Design Bureau',
        progress: '100%',
      },
      {
        subheading: 'The Complete JavaScript Course: From Zero to Expert',
        text: 'Udemi',
        progress: '100%',
      },
      {
        subheading: 'Complete React Developer',
        text: 'Udemi',
        progress: '100%',
      },
      {
        subheading: 'Creative Coding 2.0 in JS: Animation, Sound, & Color',
        text: 'Domestika',
        progress: '56%',
      },
    ],
  },
  about: {
    heading: 'Обо мне',
    text: [
      `I work as a frontend developer for a US-based digital agency with React, Next, Gatsby, Tailwind, SSR, GitLab. I have a good knowledge of Vue, Vuex, Nuxt, Webflow and Astro. I can understand others' code, like to learn and do it quickly.`,
      `Because of the NDA, I can't share details about the projects I work on at the agency, but I'd be happy to discuss the experience if you'd like to talk in person.`,
      'This site was made using Next, styled with Tailwind, and deployed with Vercel.',
    ],
    subheading: 'Before frontend',
    extra: [
      'I worked as a copywriter and editor, headed teams of authors in brand media, and launched my commercial projects, so I can approach any task not only as a technician but also from the perspective of benefits for the client and the product.',
    ],
  },
  contact: {
    heading: 'Contact',
    contacts: [
      {
        label: 'dosybi@gmail.com',
        link: 'mailto:dosybi@gmail.com',
        icon: <FiMail />,
      },
      {
        label: 'github.com/dosybi',
        link: 'https://github.com/dosybi',
        icon: <AiOutlineGithub />,
      },
      {
        label: 'instagram.com/dosybi',
        link: 'https://instagram.com/dosybi',
        icon: <BsInstagram />,
      },
      {
        label: 'telegram.me/dosybi',
        link: 'https://telegram.me/dosybi',
        icon: <TbBrandTelegram />,
      },
    ],
    button: {
      label: 'CV',
      link: 'https://hh.ru/resume/b127f5d0ff09d4f7050039ed1f645757594647',
    },
  },
}
