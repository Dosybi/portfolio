import classNames from 'classnames'
import { motion } from 'framer-motion'

const Education = ({ heading, content }) => {
  return (
    <div className="mb-14 lg:w-1/3">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      {content.map((item) => {
        return (
          <div className="mb-6" key={item.course}>
            <h3 className="font-subheading mb-1 text-lg text-gray-600 dark:text-slate-300">
              {item.course}
            </h3>
            <p className="mb-2">{item.school}</p>
            <div className="mb-4 h-0.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <motion.div
                className={classNames(
                  'h-1 rounded-full text-end text-xs',
                  item.progress === '100%' ? 'bg-green-200' : 'bg-red-200'
                )}
                initial={{ width: 0 }}
                whileInView={{
                  width: item.progress,
                  backgroundColor: [
                    'rgb(229 231 235)',
                    item.progress === '100%'
                      ? 'rgb(187 247 208)'
                      : 'rgb(254 202 202)',
                  ],
                  transition: {
                    duration: 4,
                  },
                }}
              >
                {item.progress}
              </motion.div>
            </div>
          </div>
        )
      })}
      <div className="mt-10 w-fit">
        <a
          href="https://www.codewars.com/users/Dosybi"
          target="_blank"
          rel="noreferrer"
        >
          <picture
            srcSet="https://www.codewars.com/users/Dosybi/badges/micro?theme=dark"
            type="image/svg"
          >
            <img
              src="https://www.codewars.com/users/Dosybi/badges/micro?theme=dark"
              alt="Codewars"
              title="Codewars"
            />
          </picture>
        </a>
      </div>
    </div>
  )
}

export default Education
