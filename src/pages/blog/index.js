import Link from 'next/link'
import { useState, useEffect } from 'react'
import { request, blogPageQuery, tagsQuery } from '../../../lib/datocms'

import { BsTags } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner'

import HeadSection from '@/components/HeadSection'
import BlogPostPreview from '@/components/BlogPostPreview'
import Tag from '@/components/elements/Tag'
import BlogLayout from '@/components/BlogLayout'
import Button from '@/components/elements/Button'

const Blog = ({ data, tags }) => {
  const [posts, setPosts] = useState()
  const [allTags, setAllTags] = useState()

  useEffect(() => {
    setPosts(data.allPosts)
    setAllTags(tags.allTags)
  }, [data, tags])

  if (!posts) {
    return (
      <div className="flex justify-center">
        <ThreeDots height={80} width={80} color="black" />
      </div>
    )
  }

  return (
    <>
      <HeadSection title="Блог" />
      <BlogLayout name="Антон Досыбиев">
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
          <Link href={'blog/tags'}>
            <div className="text-xl font-bold">Теги</div>
          </Link>
        </div>
        <div className="mb-16">
          <div className="mb-4 flex flex-wrap">
            {allTags?.map((tag) => {
              return (
                <Link href={`blog/tags/${tag.slug}`} key={tag.tag}>
                  <Tag tag={tag.tag} />
                </Link>
              )
            })}
          </div>
          <Button label="Все теги" link="/blog/tags" />
        </div>
      </BlogLayout>
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
