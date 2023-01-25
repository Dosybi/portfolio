import Link from 'next/link'

const Navigation = ({ navigation }) => {
  return (
    <nav className="hidden w-full md:mr-56 md:block">
      <ul>
        {navigation.map((navItem) => {
          return (
            <Link href={navItem.link} key={navItem.label}>
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
  )
}

export default Navigation
