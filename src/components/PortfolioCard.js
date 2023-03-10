import Button from './elements/Button'

const PortfolioCard = ({ stack, title, year, text, button }) => {
  return (
    <div className="mb-8 box-border overflow-hidden pt-6">
      <div className="md:flex md:flex-row-reverse md:justify-between">
        <div className="md:mr-8">
          <h2 className="mb-2 text-3xl font-bold uppercase md:mr-8 md:text-4xl lg:text-6xl">
            {title}
          </h2>
          <div className="mb-2 text-sm">{year}</div>
          <div className="mb-4 text-xs uppercase tracking-widest text-red-600 dark:text-red-400">
            {stack}
          </div>
          <p className="mb-4">{text}</p>
          <Button {...button} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
