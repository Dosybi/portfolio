import { useTheme } from 'next-themes'
import { request, blogPageQuery } from '../../../lib/datocms'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import HeadSection from '@/components/HeadSection'
import BlogHeader from '@/components/BlogHeader'
import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'
import BlogLayout from '@/components/BlogLayout'

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

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  return (
    <>
      <HeadSection title={post?.heading} />
      <BlogLayout name="Антон Досыбиев">
        <BlogPost
          heading={post?.heading}
          text={post?.text}
          tags={post?.tags}
          date={post?._publishedAt}
        />
      </BlogLayout>
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
