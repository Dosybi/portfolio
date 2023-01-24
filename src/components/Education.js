import Button from './elements/Button'

const Education = ({ heading, content, isCurrent }) => {
  return (
    <div className="mb-14 md:w-1/3">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      {content.map((item) => {
        return (
          <div className="mb-4" key={item.subheading}>
            <h3 className="font-subheading mb-1 text-gray-600 dark:text-slate-300 md:text-lg">
              {item.subheading}{' '}
              {item.isCurrent && (
                <span className="text-xs text-red-600">...изучаю сейчас</span>
              )}
            </h3>
            <p className="mb-2">{item.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Education
