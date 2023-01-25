import { useTheme } from 'next-themes'
import Image from 'next/image'

import Header from '@/components/Header'
import HeadSection from '@/components/HeadSection'
import PortfolioCard from '@/components/PortfolioCard'
import Education from '@/components/Education'
import About from '@/components/About'
import Contact from '@/components/Contact'

import avatar from '../../assets/photos/avatar.png'
import avatarWhite from '../../assets/photos/avatar-white.png'

import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTelegram } from 'react-icons/tb'

const content = {
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
      text: 'Настраивал стили и плагигы для блога, верстал баннеры, оптимизировал контент в соответствие с требованиями СЕО, редактировал статьи и управлял командой авторов.',
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
      'Работаю фронтенд-разработчиком в американском диджитал-агентстве на стеке: React, Next, Gatsby, Tailwind, SSR. Знаю Vue, Vuex, Nuxt, Webflow и Astro. Умею разбираться в чужом коде. Люблю учиться и делаю это быстро.',
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

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <HeadSection title={content.meta.title} />
      <div className="bg-[#f5f4f0] px-5 transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="md:flex">
          <Header {...content.header} />
          <div className="relative">
            <div className="mb-14 md:w-3/5">
              {content.portfolio.map((item, index, arr) => {
                return (
                  <PortfolioCard
                    {...item}
                    isLast={index + 1 !== arr.length ? false : true}
                    key={item.title}
                  />
                )
              })}
            </div>
            <div className="lg:flex">
              <About {...content.about} />
              <Education {...content.education} />
            </div>
            <div className="relative flex justify-between md:w-4/5">
              <Contact {...content.contact} />

              {theme === 'light' ? (
                <Image
                  className="absolute -bottom-4 right-0 hidden md:block"
                  src={avatar}
                  alt="Антон Досыбиев"
                  width={150}
                  height={'100%'}
                />
              ) : (
                <Image
                  className="absolute -bottom-4 right-0 hidden md:block"
                  src={avatarWhite}
                  alt="Антон Досыбиев"
                  width={150}
                  height={'100%'}
                />
              )}
            </div>
            <div className="text-xs">
              <div>
                © Антон Досыбиев, {new Date().getFullYear()}{' '}
                <span className="ml-4">Make love, not war ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
