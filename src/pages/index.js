import { useTheme } from 'next-themes'

import Header from '@/components/Header'
import HeadSection from '@/components/HeadSection'
import PortfolioCard from '@/components/PortfolioCard'
import Education from '@/components/Education'
import About from '@/components/About'
import Contact from '@/components/Contact'

import putty from '../../assets/photos/putty-title-md.png'
import amlify from '../../assets/photos/amplify-title-md.png'
import lula from '../../assets/photos/lula-title-md.jpg'
import photoAndVideo from '../../assets/photos/photo-video-title-md.jpg'
import avatar from '../../assets/photos/avatar.png'
import avatarWhite from '../../assets/photos/avatar-white.png'

import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTelegram } from 'react-icons/tb'
import Image from 'next/image'

const content = {
  meta: {
    title: 'Антон Досыбиев',
  },
  header: {
    title: 'Антон Досыбиев',
    navigation: [
      // {
      //   label: 'Проекты',
      //   link: '#work',
      // },
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
      image: putty,
      category: 'React, Next, Tailwind, SSR, Jamstack',
      title: 'Ramotion Agency',
      year: '2022 — настоящее время',
      subtitle: 'фронтенд и информационная архитектура',
      text: 'В составе команды агентства разрабатываю сайты для компаний из США и Великобритании. Верстаем по макетам в Фигме, чаще всего используем Next, но бывает Gatsby или Astro. Настраиваем серверный рендеринг и обратную совместимость с ЦРМ-системами вроде DatoCMS или Contentful.',
      button: {
        label: 'Агентство',
        link: 'https://www.ramotion.com',
      },
    },
    {
      image: photoAndVideo,
      category: 'Next, Tailwind',
      title: 'Groovy Calcs',
      year: '2022 — настоящее время',
      subtitle: 'идея, разработка, дизайн, копирайтинг и деплой',
      text: 'Набор забавных и иногда пугающих калькуляторов — это мой пет-проект, который я делаю в свободное время ради развлечения. Стек минималистичный: Next и Tailwind. Приложения несложные, поэтому стейт-менеджерами не пользуюсь и управляю состоянием с помощью хуков.',
      button: {
        label: 'Калькуляторы',
        link: 'https://groovy-calcs.vercel.app',
      },
    },
    {
      image: amlify,
      category: 'Wordpress',
      title: 'Pure',
      year: '2019 — 2020',
      subtitle: 'CSS-стили для блога, плагины, доработка интерфейса',
      text: 'Набор забавных и иногда пугающих калькуляторов — это мой пет-проект, который я делаю в свободное время ради развлечения. Стек минималистичный: Next и Tailwind. Приложения несложные, поэтому стейт-менеджерами не пользуюсь и управляю состоянием с помощью хуков. Набор забавных и иногда пугающих калькуляторов — это мой пет-проект, который я делаю в свободное время ради развлечения. Стек минималистичный: Next и Tailwind. Приложения несложные, поэтому стейт-менеджерами не пользуюсь и управляю состоянием с помощью хуков.',
      button: {
        label: 'Приложение',
        link: 'https://pure.app/',
      },
    },
    // {
    //   image: lula,
    //   category: 'HTML, CSS',
    //   title: 'Международная школа фриланса',
    //   year: '2015 — 2018',
    //   subtitle: 'вёрстка посадочных страниц, дизайн',
    //   button: {
    //     label: 'Школа',
    //     link: 'https://helppy.pro/helppy',
    //   },
    // },
  ],
  education: {
    heading: 'Учёба',
    content: [
      {
        subheading: 'The Complete JavaScript Course: From Zero to Expert',
        text: 'Udemi',
        button: {
          label: 'Read Paper',
          link: '/',
        },
      },
      {
        subheading: 'Complete React Developer',
        text: 'Udemi',
        button: {
          label: 'Read Paper',
          link: '/',
        },
      },
      {
        subheading: 'Школа дизайнеров Бюро Горбунова',
        text: 'Дизайн-бюро Артёма Горбунова',
        button: {
          label: 'Read Paper',
          link: '/',
        },
      },
      {
        subheading: 'Creative Coding 2.0 in JS: Animation, Sound, & Color',
        text: 'Domestika',
        button: {
          label: 'Read Paper',
          link: '/',
        },
        isCurrent: true,
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
        link: 'www.github.com/dosybi',
        icon: <AiOutlineGithub />,
      },
      {
        label: 'instagram.com/dosybi',
        link: 'www.instagram.com/dosybi',
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
      link: '/',
    },
  },
}

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="bg-[#f5f4f0] px-5 transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
      <HeadSection title={content.meta.title} />
      <div className="md:flex">
        <Header {...content.header} />
        <div className="md:w-2/4">
          <div className="mb-14">
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
          <div className="relative flex justify-between">
            <Contact {...content.contact} />
            {theme === 'light' ? (
              <Image
                className="absolute bottom-0 right-0"
                src={avatar}
                alt="Антон Досыбиев"
                width={200}
                height={'100%'}
              />
            ) : (
              <Image
                className="absolute bottom-0 right-0"
                src={avatarWhite}
                alt="Антон Досыбиев"
                width={200}
                height={'100%'}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
