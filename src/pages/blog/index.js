import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { request, blogPageQuery, tagsQuery } from '../../../lib/datocms'

import { BsTags } from 'react-icons/bs'

import HeadSection from '@/components/HeadSection'
import BlogHeader from '@/components/BlogHeader'
import BlogPostPreview from '@/components/BlogPostPreview'
import Footer from '@/components/Footer'
import Tag from '@/components/elements/Tag'

const Blog = ({ data, tags }) => {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')
  const [posts, setPosts] = useState()
  const [allTags, setAllTags] = useState()

  useEffect(() => {
    setPosts(data.allPosts)
    setAllTags(tags.allTags)
  }, [])

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  return (
    <>
      <HeadSection title="Блог" />
      <div className="bg-[#f5f4f0] px-6 font-mono transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-between">
          <div>
            <BlogHeader theme={currentTheme} />
            <div className="mb-8 text-xl font-bold">Посты</div>
            <div className="mb-16">
              {posts?.map((post) => {
                return (
                  <div className="mb-10" key={post.heading}>
                    <BlogPostPreview post={post} />
                  </div>
                )
              })}
            </div>
            <div className="mb-2 flex items-center">
              <BsTags className="mr-1.5" />
              <div className="text-xl font-bold">Теги</div>
            </div>
            <div className="flex">
              {allTags?.map((tag) => {
                return (
                  <Link href={`blog/tags/${tag.slug}`} key={tag.tag}>
                    <Tag tag={tag.tag} />
                  </Link>
                )
              })}
            </div>
          </div>
          <Footer name="Антон Досыбиев" />
        </div>
      </div>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const data = await request({
    query: blogPageQuery,
  })

  const tags = await request({
    query: tagsQuery,
  })

  return {
    props: { data, tags },
  }
}
