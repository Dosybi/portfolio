import Button from './elements/Button'

const Education = ({ heading, content }) => {
  return (
    <div className="mb-14 md:w-1/3">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      {content.map((item) => {
        return (
          <div className="mb-6" key={item.subheading}>
            <h3 className="font-subheading mb-1 text-lg text-gray-600 dark:text-slate-300">
              {item.subheading}
            </h3>
            <p className="mb-2">{item.text}</p>
            <div className="mb-4 h-0.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={`h-0.5 rounded-full text-end text-xs ${
                  item.progress === '100%' ? 'bg-green-200' : 'bg-red-200'
                }`}
                style={{ width: `${item.progress}` }}
              >
                {item.progress}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education
