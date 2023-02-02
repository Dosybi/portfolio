import Link from 'next/link'
import { request, blogPageQuery, tagsQuery } from '../../../../lib/datocms'
import { useState, useEffect } from 'react'

import BlogLayout from '@/components/BlogLayout'
import HeadSection from '@/components/HeadSection'
import Tag from '@/components/elements/Tag'

const TagsPage = ({ data, tags }) => {
  const [allTags, setAllTags] = useState()
  const [posts, setPosts] = useState()

  useEffect(() => {
    setAllTags(tags.allTags)
    setPosts(data.allPosts)
  }, [])

  return (
    <>
      <HeadSection title="Теги" />
      <BlogLayout name="Антон Досыбиев">
        <div className="mb-8 text-xl font-bold">Теги</div>
        {allTags?.map((tag) => {
          console.log(posts?.filter((post) => post.tags.includes(tag)))
          return (
            <div className="mb-4 flex w-fit" key={tag.tag}>
              <Link href={tag.slug}>
                <Tag tag={tag.tag} />
              </Link>
              <div>
                — {posts?.filter((post) => post.tags.includes(tag)).length}{' '}
                постов
              </div>
            </div>
          )
        })}
      </BlogLayout>
    </>
  )
}

export default TagsPage

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
