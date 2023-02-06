const About = ({ heading, text }) => {
  return (
    <div className="mb-14 lg:mr-24 lg:w-1/2" id="about">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="about mb-4 dark:text-slate-50"
      ></div>
    </div>
  )
}

export default About
