import Image from 'next/image'
import Button from './elements/Button'

const PortfolioCard = ({
  image,
  category,
  title,
  year,
  subtitle,
  text,
  button,
  isLast,
}) => {
  return (
    <div className={`mb-4 box-border overflow-hidden pt-9 pb-10`}>
      <div className="md:flex md:flex-row-reverse md:justify-between">
        {/* <Image className="mb-3 h-full w-1/3" src={image} alt={title} /> */}
        <div className="md:mr-8">
          <h2 className="text-3xl font-bold uppercase md:mr-8 md:text-4xl lg:text-6xl">
            {title}
          </h2>
          <div className="mb-2 text-sm">{year}</div>
          <div className="mb-4 text-xs uppercase tracking-widest text-red-600 dark:text-red-400">
            {category}
          </div>
          {/* <h3 className="font-italic mb-4 text-lg text-gray-600 dark:text-slate-300">
            {subtitle}
          </h3> */}
          <p className="mb-4">{text}</p>
          <div className="self-end">
            <Button {...button} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
