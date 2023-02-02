const Footer = ({ name }) => {
  return (
    <footer className="mt-10 text-center text-xs md:text-left">
      <div>
        © {name}, {new Date().getFullYear()} | Make love, not war ❤️
      </div>
    </footer>
  )
}

export default Footer
