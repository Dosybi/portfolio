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
      text: '',
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
      button: {
        label: 'Приложение',
        link: 'https://pure.app/',
      },
    },
    {
      image: lula,
      category: 'HTML, CSS',
      title: 'Международная школа фриланса',
      year: '2015 — 2018',
      subtitle: 'вёрстка посадочных страниц, дизайн',
      button: {
        label: 'Школа',
        link: 'https://helppy.pro/helppy',
      },
    },
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
  return (
    <div className="px-5 transition-colors duration-500 dark:bg-gray-800 dark:text-slate-50">
      <HeadSection title={content.meta.title} />
      <div className="md:flex md:justify-between">
        <Header {...content.header} />
        <div className="md:w-3/4">
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
          <Contact {...content.contact} />
        </div>
      </div>
    </div>
  )
}
