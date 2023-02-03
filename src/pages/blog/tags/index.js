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

  const getLastDigit = (number) => {
    return Number(
      number.toString().split('')[number.toString().split('').length - 1]
    )
  }

  return (
    <>
      <HeadSection title="Теги" />
      <BlogLayout name="Антон Досыбиев">
        <div className="mb-8 text-xl font-bold">Теги</div>
        {allTags?.map((tag) => {
          const postsNumber = posts?.filter((post) =>
            post.tags.map((t) => t.tag).includes(tag.tag)
          ).length
          return (
            <div className="mb-4 flex w-fit" key={tag.tag}>
              <Link href={`tags/${tag.slug}`}>
                <Tag tag={tag.tag} />
              </Link>
              <div>
                — {postsNumber}{' '}
                {getLastDigit(postsNumber) === 1
                  ? 'пост'
                  : getLastDigit(postsNumber) > 1 &&
                    getLastDigit(postsNumber) < 5
                  ? 'поста'
                  : 'постов'}
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
