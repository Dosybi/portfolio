import { useEffect, useState, useMemo } from 'react'
import { useTheme } from 'next-themes'
import { request, homePageQuery } from '../../lib/datocms'
import Image from 'next/image'

import Header from '@/components/Header'
import HeadSection from '@/components/HeadSection'
import PortfolioCard from '@/components/PortfolioCard'
import Education from '@/components/Education'
import About from '@/components/About'
import Contact from '@/components/Contact'

import avatar from '../../assets/photos/avatar.png'
import avatarWhite from '../../assets/photos/avatar-white.png'

export default function Home({ data }) {
  const localeRu = useMemo(
    () => ({
      metaTags: {
        title: data.home.metaTags._allTitleLocales[1].value,
        desription: data.home.metaTags._allDescriptionLocales[1].value,
      },
      header: {
        title: data.home._allHeaderTitleLocales[1].value,
        navigation: data.home.navigation.map((item) => ({
          label: item._allLabelLocales[1].value,
          link: item.anchorLink,
          slug: item.slug,
        })),
      },
      portfolio: data.home.project.map((item) => ({
        title: item._allTitleLocales[1].value,
        stack: item.stack,
        year: item._allYearLocales[1].value,
        text: item._allTextLocales[1].value,
        button: {
          label: item.button._allLabelLocales[1].value,
          link: item.button.link,
        },
      })),

      about: {
        heading: data.home._allAboutHeadingLocales[1].value,
        text: data.home._allTextLocales[1].value,
      },
      education: {
        heading: data.home._allLearningHeadingLocales[1].value,
        content: data.home.course.map((item) => ({
          course: item._allCourseLocales[1].value,
          school: item._allSchoolLocales[1].value,
          progress: item.progress,
        })),
      },
      contact: {
        heading: data.home._allContactHeadingLocales[1].value,
        contacts: data.home.contact.map((item) => ({
          label: item.label,
          link: item.link,
          platform: item.platform,
        })),
        button: {
          label: data.home.button._allLabelLocales[1].value,
          link: data.home.button.link,
        },
      },
    }),
    [data]
  )
  const localeEn = useMemo(
    () => ({
      metaTags: {
        title: data.home.metaTags._allTitleLocales[0].value,
        desription: data.home.metaTags._allDescriptionLocales[0].value,
      },
      header: {
        title: data.home._allHeaderTitleLocales[0].value,
        navigation: data.home.navigation.map((item) => ({
          label: item._allLabelLocales[0].value,
          link: item.anchorLink,
          slug: item.slug,
        })),
      },
      portfolio: data.home.project.map((item) => ({
        title: item._allTitleLocales[0].value,
        stack: item.stack,
        year: item._allYearLocales[0].value,
        text: item._allTextLocales[0].value,
        button: {
          label: item.button._allLabelLocales[0].value,
          link: item.button.link,
        },
      })),
      about: {
        heading: data.home._allAboutHeadingLocales[0].value,
        text: data.home._allTextLocales[0].value,
      },
      education: {
        heading: data.home._allLearningHeadingLocales[0].value,
        content: data.home.course.map((item) => ({
          course: item._allCourseLocales[0].value,
          school: item._allSchoolLocales[0].value,
          progress: item.progress,
        })),
      },
      contact: {
        heading: data.home._allContactHeadingLocales[0].value,
        contacts: data.home.contact.map((item) => ({
          label: item.label,
          link: item.link,
          platform: item.platform,
        })),
        button: {
          label: data.home.button._allLabelLocales[0].value,
          link: data.home.button.link,
        },
      },
    }),
    [data]
  )
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')
  const [content, setContent] = useState(localeRu)

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  const changeLanguage = () => {
    setContent(content === localeRu ? localeEn : localeRu)
  }

  return (
    <>
      <HeadSection
        title={content.metaTags.title}
        description={content.metaTags.desription}
      />
      <div className="bg-[#f5f4f0] px-5 transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="md:flex">
          <Header
            {...content.header}
            handleLanguageChange={changeLanguage}
            language={content === localeRu ? 'russian' : 'english'}
          />
          <div className="relative">
            <div className="mb-14 lg:w-3/5">
              {content.portfolio.map((item) => {
                return <PortfolioCard {...item} key={item.title} />
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
                © {content.metaTags.title}, {new Date().getFullYear()}{' '}
                <span className="ml-4">Make love, not war ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await request({
    query: homePageQuery,
  })

  return {
    props: { data },
  }
}
