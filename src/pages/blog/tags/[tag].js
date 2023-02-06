import Link from 'next/link'
import { request, blogPageQuery, tagsQuery } from '../../../../lib/datocms'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import HeadSection from '@/components/HeadSection'
import BlogLayout from '@/components/BlogLayout'
import BlogPostPreview from '@/components/BlogPostPreview'

const TagPage = ({ data }) => {
  const [posts, setPosts] = useState()
  const [tag, setTag] = useState()
  const { asPath } = useRouter()

  useEffect(() => {
    const filteredPosts = data.allPosts.filter((post) =>
      post.tags
        .map((tag) => tag.slug)
        .includes(asPath.split('/')[asPath.split('/').length - 1])
    )
    setPosts(filteredPosts)
    setTag(asPath.split('/')[asPath.split('/').length - 1])
  }, [asPath, data])

  return (
    <>
      <HeadSection title="Блог" />
      <BlogLayout name="Антон Досыбиев">
        <div className="mb-8 flex text-xl font-bold">
          <Link href="/blog/tags" className="hover:text-[#dc2638]">
            <div>Теги{` `}</div>
          </Link>
          <div>→ #{tag}</div>
        </div>
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
