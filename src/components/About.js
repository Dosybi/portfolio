const About = ({ heading, text, subheading, extra }) => {
  return (
    <div className="mb-14 md:w-1/2 lg:mr-24" id="about">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      <div className="mb-4">
        {text.map((paragraph) => {
          return (
            <p className="mb-2" key={paragraph}>
              {paragraph}
            </p>
          )
        })}
      </div>
      <h3 className="font-subheading mb-1 text-gray-600 dark:text-slate-300 md:text-lg">
        {subheading}
      </h3>
      {extra.map((paragraph) => {
        return (
          <p className="mb-2" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default About
