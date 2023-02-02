import Link from 'next/link'
import classNames from 'classnames'
import { useState, useRef } from 'react'
import useOnClickOutside from './hooks/useOnClickOutside'

import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

const Navigation = ({ navigation }) => {
  const ref = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useOnClickOutside(ref, () => setIsMenuOpen(false))

  return (
    <>
      <nav className="hidden w-full md:mr-56 md:block">
        <ul>
          {navigation.map((navItem) => {
            return (
              <Link href={navItem.link || navItem.slug} key={navItem.label}>
                <li>
                  <div className="link-decorated mb-4 w-fit text-xs font-bold uppercase">
                    {navItem.label}
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
      <nav
        className="fixed bottom-2 right-4 z-10 cursor-pointer dark:text-black md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        ref={ref}
      >
        {isMenuOpen && (
          <div>
            <ul className="bottom-8 mb-10 rounded-xl bg-white px-3 py-6">
              {navigation.map((navItem) => {
                return (
                  <Link href={navItem.link || navItem.slug} key={navItem.label}>
                    <li>
                      <div className="link-decorated mb-6 w-fit font-bold uppercase">
                        {navItem.label}
                      </div>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        )}
        <div
          className={classNames(
            'fixed bottom-4 right-4 h-12 w-12 rounded-full bg-white p-3 text-2xl',
            isMenuOpen && 'rounded-t-none'
          )}
        >
          {isMenuOpen ? <GrClose /> : <AiOutlineMenu />}
        </div>
      </nav>
    </>
  )
}

export default Navigation
