import { useEffect, useState } from 'react'
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

import { dataRussian, dataEnglish } from '../../data'

export default function Home() {
  const [content, setContent] = useState(dataRussian)
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    setCurrentTheme(theme)
    console.log(theme)
  }, [theme])

  const changeLanguage = () => {
    setContent(content === dataEnglish ? dataRussian : dataEnglish)
  }

  return (
    <>
      <HeadSection title={content.meta.title} />
      <div className="bg-[#f5f4f0] px-5 transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="md:flex">
          <Header
            {...content.header}
            handleLanguageChange={changeLanguage}
            language={content === dataRussian ? 'russian' : 'english'}
          />
          <div className="relative">
            <div className="mb-14 lg:w-3/5">
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
              <Image
                className="absolute -bottom-4 right-0 hidden md:block"
                src={currentTheme === 'light' ? avatar : avatarWhite}
                alt="Антон Досыбиев"
                width={150}
                height={'100%'}
              />
            </div>
            <div className="text-xs">
              <div>
                © {content.meta.title}, {new Date().getFullYear()}{' '}
                <span className="ml-4">Make love, not war ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
