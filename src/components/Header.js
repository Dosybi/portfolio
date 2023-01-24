import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Navigation from './Navigation'

import { AiOutlineMenu } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'

const Header = ({ title, navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    document.body.style.overflow = 'unset'
  }, [])

  useEffect(() => {
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  })

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
    <header className="relative py-4 md:pt-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center md:mb-8">
          <div className="mr-6 text-xs font-bold uppercase tracking-widest">
            {title}
          </div>
          <div>
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
        <div onClick={() => (isMenuOpen ? closeMenu() : openMenu())}>
          {isMenuOpen ? (
            <MdClose className="text-2xl md:hidden" />
          ) : (
            <AiOutlineMenu className="text-2xl md:hidden" />
          )}
        </div>
      </div>
      <div
        className={`md:flex
          ${
            isMenuOpen
              ? 'absolute left-0 right-0 top-full z-10 flex h-screen flex-col items-center justify-center gap-8 bg-white'
              : 'hidden'
          }`}
      >
        <Navigation navigation={navigation} />
      </div>
    </header>
  )
}

export default Header
