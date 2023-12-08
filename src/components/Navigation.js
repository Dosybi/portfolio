import Link from 'next/link'
import classNames from 'classnames'
import { useState, useRef } from 'react'
import useOnClickOutside from './hooks/useOnClickOutside'
import { motion, AnimatePresence } from 'framer-motion'

import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

const Navigation = ({ navigation }) => {
  const ref = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useOnClickOutside(ref, () => setIsMenuOpen(false))
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <nav className="hidden w-full md:mr-56 md:block">
        <ul>
          {navigation.map((navItem) => {
            return (
              <Link href={navItem.link || navItem.slug} key={navItem.label}>
                <li className="navitem flex items-center">
                  <div className="link-decorated mb-4 w-fit text-xs font-bold uppercase">
                    {navItem.label !== 'Blog' && navItem.label}
                  </div>
                  <div className="mb-4 ml-1 lowercase">
                    {navItem.label === 'Блог' && 'β'}
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto', bottom: '2rem' }}
              exit={{ height: 0 }}
              transition={{ ease: 'easeOut' }}
            >
              <ul className="mb-10 rounded-xl bg-white px-3 py-6">
                {navigation.map((navItem) => {
                  return (
                    <Link
                      href={navItem.link || navItem.slug}
                      key={navItem.label}
                    >
                      <li>
                        <div className="link-decorated mb-6 w-fit font-bold uppercase">
                          {navItem.label !== 'Blog' && navItem.label}
                        </div>
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={classNames(
            'fixed bottom-4 right-4 h-12 w-12 rounded-full bg-white p-3 text-2xl',
            isMenuOpen && 'rounded-t-none'
          )}
        >
          {isMenuOpen ? (
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                rotate: isHovered ? 90 : 0,
              }}
            >
              <GrClose />
            </motion.div>
          ) : (
            <AiOutlineMenu />
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
