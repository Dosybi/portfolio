import Link from 'next/link'
import classNames from 'classnames'
import { useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'

const Navigation = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="hidden w-full md:mr-56 md:block">
        <ul>
          {navigation.map((navItem) => {
            return (
              <Link href={navItem.link || navItem.slug} key={navItem.label}>
                <li>
                  <div className="link-decorated mb-4 w-fit text-xs font-bold uppercase">
                    {navItem.label !== 'Blog' && navItem.label}
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
      <nav
        className="fixed bottom-2 right-2 z-10 cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen && (
          <div>
            <ul className="bottom-8 mb-10 rounded-xl bg-white p-3">
              {navigation.map((navItem) => {
                return (
                  <Link href={navItem.link || navItem.slug} key={navItem.label}>
                    <li>
                      <div className="link-decorated mb-6 w-fit text-xs font-bold uppercase">
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
            'fixed bottom-2 right-2 h-12 w-12 rounded-full bg-white p-3 text-2xl',
            isOpen && 'rounded-t-none'
          )}
        >
          <AiOutlineMenu />
        </div>
      </nav>
    </>
  )
}

export default Navigation
