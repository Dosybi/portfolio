import { request, blogPageQuery, tagsQuery } from '../../../../lib/datocms'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

import HeadSection from '@/components/HeadSection'
import BlogLayout from '@/components/BlogLayout'
import BlogPostPreview from '@/components/BlogPostPreview'

const TagPage = ({ data }) => {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')
  const [posts, setPosts] = useState()
  const [tag, setTag] = useState()
  const { asPath } = useRouter()

  useEffect(() => {
    setPosts(
      data.allPosts.filter((post) =>
        post.tags
          .map((tag) => tag.slug)
          .includes(asPath.split('/')[asPath.split('/').length - 1])
      )
    )
    setTag(asPath.split('/')[asPath.split('/').length - 1])
  }, [])

  return (
    <>
      <HeadSection title="Блог" />
      <BlogLayout name="Антон Досыбиев">
        <div className="mb-8 text-xl font-bold">Теги → #{tag}</div>
        <div className="mb-16">
          {posts?.map((post) => {
            return (
              <div className="mb-10" key={post.heading}>
                <BlogPostPreview post={post} />
              </div>
            )
          })}
        </div>
      </BlogLayout>
    </>
  )
}

export default TagPage

export async function getStaticProps() {
  const data = await request({
    query: blogPageQuery,
  })
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const data = await request({ query: tagsQuery })

  return {
    paths: data.allTags.map((tag) => `/blog/tags/${tag.slug}`),
    fallback: false,
  }
}
