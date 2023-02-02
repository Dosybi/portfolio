import BlogHeader from './BlogHeader'
import Footer from './Footer'

const BlogLayout = ({ children, name }) => {
  return (
    <>
      <div className="bg-[#f5f4f0] px-6 font-mono transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-between">
          <div>
            <BlogHeader />
            {children}
          </div>
          <Footer name={name} />
        </div>
      </div>
    </>
  )
}

export default BlogLayout
