import Link from 'next/link'

const BlogPostPreview = ({ post }) => {
  return (
    <>
      <Link href={'blog/' + post.slug}>
        <div className="mb-2 flex flex-wrap items-center">
          <div className="mr-2 mb-2 text-sm font-light text-[#6b7280]">
            {new Intl.DateTimeFormat('ru', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(post._publishedAt))}
          </div>
          <div className="mb-2 cursor-pointer text-sm text-[#22272A] underline underline-offset-4 transition-colors duration-200 hover:text-[#dc2638]">
            {post.heading}
          </div>
        </div>
        <div className="mb-2 text-sm font-light">«{post.lead}»</div>
      </Link>
    </>
  )
}

export default BlogPostPreview
