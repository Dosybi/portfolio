import Link from 'next/link'
import classNames from 'classnames'
import useHover from '../hooks/useHover'

import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'

const Button = ({ label, link, isArrowLeft = false }) => {
  const [hoverRef, isHovered] = useHover()
  const isExternal = link.startsWith('http')

  const labelClassNames = classNames(
    'text-sm',
    'uppercase',
    'tracking-widest',
    'transition-all',
    'duration-300',
    {
      'ml-3': isHovered && isArrowLeft,
      'ml-1': !isHovered && isArrowLeft,
      'mr-3': isHovered && !isArrowLeft,
      'mr-1': !isHovered && !isArrowLeft,
    }
  )

  return (
    <Link
      className="flex w-fit items-center font-bold"
      href={link}
      ref={hoverRef}
      target={isExternal ? '_blank' : '_self'}
    >
      {isArrowLeft && <HiOutlineArrowLongLeft className="text-2xl" />}
      <div className={labelClassNames}>{label}</div>
      {!isArrowLeft && <HiOutlineArrowLongRight className="text-2xl" />}
    </Link>
  )
}

export default Button
