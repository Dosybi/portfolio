import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect, useMemo } from 'react'
import { request, blogPageQuery } from '../../../lib/datocms'

import HeadSection from '@/components/HeadSection'

import avatar from '../../../assets/photos/avatar.png'
import avatarWhite from '../../../assets/photos/avatar-white.png'
import BlogPost from '@/components/BlogPost'
import Link from 'next/link'

const Blog = ({ data }) => {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('light')
  const [posts, setPosts] = useState()

  console.log(posts)

  useEffect(() => {
    setPosts(data.allPosts)
  }, [])

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  return (
    <>
      <HeadSection title="Блог" />
      <div className="min-h-screen bg-[#f5f4f0] px-6 font-mono transition-colors duration-500 dark:bg-zinc-900 dark:text-slate-50">
        <div className="mx-auto max-w-2xl">
          <div className="mb-16 flex items-center pt-10">
            <Image
              className="mr-6 border-b-2 border-black"
              src={currentTheme === 'light' ? avatar : avatarWhite}
              alt="Антон Досыбиев"
              width={30}
              height={'100%'}
              priority
            />
            <div className="text-2xl font-bold">Блог</div>
          </div>
          <div className="mb-8 text-xl font-bold">Посты</div>
          {posts.map((post) => {
            return (
              <div className="mb-10" key={post.heading}>
                <div className="mb-2 flex flex-wrap items-center">
                  <div className="mr-2 mb-2 text-sm font-light text-[#6b7280]">
                    {new Intl.DateTimeFormat('ru', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).format(new Date(post._publishedAt))}
                  </div>
                  <Link href={'blog/' + post.slug}>
                    <div className="mb-2 cursor-pointer text-sm text-[#22272A] underline underline-offset-4 transition-colors duration-200 hover:text-[#dc2638]">
                      {post.heading}
                    </div>
                  </Link>
                </div>
                <div className="mb-2 text-sm font-light">«{post.lead}»</div>
              </div>
            )
          })}
          {/* {posts.map((post) => {
            return (
              <div key={post.heading}>
                <BlogPost {...post} date={post._publishedAt} />
              </div>
            )
          })} */}
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

  return {
    props: { data },
  }
}
