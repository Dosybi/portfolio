import { request, blogPageQuery } from '../../../lib/datocms'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useWindowSize from '@/components/hooks/useWindowSize'

import { ThreeDots } from 'react-loader-spinner'

import HeadSection from '@/components/HeadSection'
import BlogPost from '@/components/BlogPost'
import BlogLayout from '@/components/BlogLayout'
import Button from '@/components/elements/Button'

const BlogPostPage = ({ data }) => {
  const [isHoveredPrev, setIsHoveredPrev] = useState(false)
  const [isHoveredNext, setIsHoveredNext] = useState(false)
  const [post, setPost] = useState()
  const [nextPost, setNextPost] = useState()
  const [prevPost, setPrevPost] = useState()
  const { asPath } = useRouter()
  const size = useWindowSize()

  useEffect(() => {
    setPost(
      data.allPosts.filter((post) =>
        post.slug.includes(asPath.split('/')[asPath.split('/').length - 1])
      )[0]
    )
  }, [asPath, data.allPosts])

  useEffect(() => {
    if (!post) return

    const postIndex = data.allPosts.indexOf(post)
    setNextPost(data.allPosts[postIndex - 1])
    setPrevPost(data.allPosts[postIndex + 1])
  }, [post, data.allPosts])

  const showPrevArticleHeading = () => setIsHoveredPrev(true)
  const showNextArticleHeading = () => setIsHoveredNext(true)
  const hidePrevArticleHeading = () => setIsHoveredPrev(false)
  const hideNextArticleHeading = () => setIsHoveredNext(false)

  if (!post) {
    return (
      <div className="flex justify-center">
        <ThreeDots height={80} width={80} color="black" />
      </div>
    )
  }

  return (
    <>
      <HeadSection title={post?.heading} description={post?.lead} />
      <BlogLayout name="Антон Досыбиев">
        <BlogPost
          heading={post?.heading}
          text={post?.text}
          tags={post?.tags}
          date={post?._publishedAt}
        />
        <div className="my-10 flex justify-between">
          {prevPost ? (
            <div
              onMouseEnter={() => showPrevArticleHeading()}
              onMouseLeave={() => hidePrevArticleHeading()}
            >
              <Button
                label={
                  isHoveredPrev && size.width >= 640
                    ? prevPost.heading
                    : 'Предыдущий'
                }
                link={prevPost.slug}
                isArrowLeft
              />
            </div>
          ) : (
            <div></div>
          )}
          {nextPost && (
            <div
              onMouseEnter={() => showNextArticleHeading()}
              onMouseLeave={() => hideNextArticleHeading()}
            >
              <Button
                label={
                  isHoveredNext && size.width >= 640
                    ? nextPost.heading
                    : 'Следующий'
                }
                link={nextPost.slug}
              />
            </div>
          )}
        </div>
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
