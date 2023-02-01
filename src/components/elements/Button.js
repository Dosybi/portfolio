import Link from 'next/link'
import classNames from 'classnames'
import useHover from '../hooks/useHover'

import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const Button = ({ label, link }) => {
  const [hoverRef, isHovered] = useHover()
  const isExternal = [...link][0] === '/' ? false : true

  return (
    <Link
      className="flex w-fit items-center font-bold"
      href={link}
      ref={hoverRef}
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
