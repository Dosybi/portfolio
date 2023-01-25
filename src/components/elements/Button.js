import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'

import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const Button = ({ label, link }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isExternal = [...link][0] === '/' ? false : true

  const onMouseEnter = () => {
    setIsHovered(true)
  }

  const onMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Link
      className="flex w-fit items-center font-bold"
      href={link}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      target={isExternal ? '_blank' : '_self'}
    >
      <div
        className={classNames(
          'text-sm uppercase tracking-widest transition-all duration-300',
          isHovered ? 'mr-3' : 'mr-1'
        )}
      >
        {label}
      </div>
      <HiOutlineArrowLongRight className="text-2xl" />
    </Link>
  )
}

export default Button
