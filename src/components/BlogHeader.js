import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { MdDarkMode } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'

import avatar from '../../assets/photos/avatar.png'
import avatarWhite from '../../assets/photos/avatar-white.png'

const BlogHeader = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between pt-10">
        <div className="flex items-center">
          <Image
            className="mr-6 border-b-2 border-black"
            src={theme === 'light' ? avatar : avatarWhite}
            alt="Антон Досыбиев"
            width={30}
            height={'100%'}
            priority
          />
          <Link href={'/blog'}>
            <div className="cursor-pointer text-2xl font-bold transition-colors duration-300 hover:text-[#dc2638]">
              Блог
            </div>
          </Link>
        </div>
        <div className="text-xl md:text-lg">
          {theme === 'dark' ? (
            <BsSunFill
              className="cursor-pointer"
              onClick={() => changeTheme()}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer"
              onClick={() => changeTheme()}
            />
          )}
        </div>
      </div>
      <Link href={'/'}>
        <div className="mb-16 w-fit text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-[#dc2638]">
          ← Портфолио
        </div>
      </Link>
    </>
  )
}

export default BlogHeader
