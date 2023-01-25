import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Navigation from './Navigation'

import { MdDarkMode } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'

const Header = ({ title, navigation }) => {
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
      </div>

      <Navigation navigation={navigation} />
    </header>
  )
}

export default Header
