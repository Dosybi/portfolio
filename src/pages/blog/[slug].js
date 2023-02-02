import { useTheme } from 'next-themes'
import { request, blogPageQuery } from '../../../lib/datocms'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import HeadSection from '@/components/HeadSection'
import BlogHeader from '@/components/BlogHeader'
import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'

const BlogPostPage = ({ data }) => {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')
  const [post, setPost] = useState()
  const { asPath } = useRouter()

  useEffect(() => {
    setPost(
      data.allPosts.filter((post) =>
        post.slug.includes(asPath.split('/')[asPath.split('/').length - 1])
      )[0]
    )
  }, [])

  return (
    <>
      <HeadSection title={post?.heading} />
      <div className="bg-[#f5f4f0] px-6 font-mono transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-between">
          <div>
            <BlogHeader theme={currentTheme} />
            <BlogPost
              heading={post?.heading}
              text={post?.text}
              tags={post?.tags}
              date={post?._publishedAt}
            />
          </div>
          <Footer name="Антон Досыбиев" />
        </div>
      </div>
    </>
  )
}

export default BlogPostPage

export async function getStaticProps() {
  const data = await request({
    query: blogPageQuery,
  })
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const data = await request({ query: blogPageQuery })

  return {
    paths: data.allPosts.map((post) => `/blog/${post.slug}`),
    fallback: false,
  }
}
