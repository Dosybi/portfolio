import Link from 'next/link'
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'

import {
  isHeading,
  isLink,
  isList,
  isParagraph,
} from 'datocms-structured-text-utils'

import { BsTags } from 'react-icons/bs'

const BlogPost = ({ heading, text, tags, date }) => {
  const readableDate =
    date &&
    new Intl.DateTimeFormat('ru', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date))

  return (
    <div className="text-[#22272A]">
      <div className="mb-2 text-2xl font-bold">{heading}</div>
      <div className="mb-4 flex items-center ">
        <div className="mr-3 text-sm">{readableDate}</div>
        <div className="mr-3">|</div>
        <BsTags className="mr-1.5" />
        {tags?.map((tag) => {
          return (
            <Link href={`tags/${tag.slug}`} key={tag.tag}>
              <div className="text-sm transition-colors duration-300 hover:text-[#dc2638]">
                #{tag.tag}
              </div>
            </Link>
          )
        })}
      </div>
      <StructuredText
        data={text}
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
