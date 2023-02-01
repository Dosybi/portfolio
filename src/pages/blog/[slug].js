import { request, blogPageQuery } from '../../../lib/datocms'
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  isHeading,
  isLink,
  isList,
  isParagraph,
} from 'datocms-structured-text-utils'

import { BsTags } from 'react-icons/bs'

const BlogPost = ({ data }) => {
  const [readableDate, setReadableDate] = useState()
  const [post, setPost] = useState()
  const { asPath } = useRouter()

  useEffect(() => {
    setPost(
      data.allPosts.filter((post) =>
        post.slug.includes(asPath.split('/')[asPath.split('/').length - 1])
      )[0]
    )
  }, [asPath, data])

  console.log(post)

  useEffect(() => {
    setReadableDate(
      new Intl.DateTimeFormat('ru', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(post._publishedAt))
    )
  }, [])

  return (
    <div className="mb-10 text-[#22272A]">
      <div className="mb-2 text-2xl font-bold">{post.heading}</div>
      <div className="mb-4 flex items-center ">
        <div className="mr-3 text-sm">{readableDate}</div>
        <div className="mr-3">|</div>
        <BsTags className="mr-1.5" />
        {/* {post.tags.map((tag) => {
          return (
            <div className="text-sm" key={tag.tag}>
              #{tag.tag}
            </div>
          )
        })} */}
      </div>
      <StructuredText
        data={post.text}
        customNodeRules={[
          renderNodeRule(isParagraph, ({ children, key }) => {
            const Paragraph = `p`
            return (
              <Paragraph className="mb-2 text-sm font-light" key={key}>
                {children}
              </Paragraph>
            )
          }),
          renderNodeRule(isHeading, ({ children, key }) => {
            const Heading = `h2`
            return (
              <Heading className="mb-0 mt-4 text-lg font-bold" key={key}>
                <span className="-ml-4 mr-1.5 text-[#dc2638]">#</span>
                {children}
              </Heading>
            )
          }),
          renderNodeRule(isList, ({ children, key }) => {
            const List = `ul`
            return (
              <List className="-mt-1 mb-4 pl-4 text-sm" key={key}>
                {children}
              </List>
            )
          }),
          renderNodeRule(isLink, ({ node, children, key }) => {
            const Link = `a`
            return (
              <Link
                className="link-decorated cursor-pointer text-sm"
                href={node.url}
                key={key}
              >
                {children}
              </Link>
            )
          }),
        ]}
      />
    </div>
  )
}

export default BlogPost

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
