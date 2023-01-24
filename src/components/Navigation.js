import Link from 'next/link'

const Navigation = ({ navigation }) => {
  return (
    <nav className="w-full md:mr-56">
      <ul>
        {navigation.map((navItem, index, arr) => {
          return (
            <Link href={navItem.link} key={navItem.label}>
              <li
                className={`flex items-center justify-between md:border-b-0 ${
                  index + 1 !== arr.length
                    ? 'border-b-2 border-black'
                    : 'border-b-0'
                }`}
              >
                <div className="link-decorated py-4 text-3xl font-bold uppercase md:my-2 md:py-0 md:text-xs">
                  {navItem.label}
                </div>
                <div className="font-italic md:hidden">{`0${index + 1}`}</div>
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
