const Footer = ({ name }) => {
  return (
    <footer className="mt-10 text-xs">
      <div>
        © {name}, {new Date().getFullYear()}{' '}
        <span className="ml-4">Make love, not war ❤️</span>
      </div>
    </footer>
  )
}

export default Footer
