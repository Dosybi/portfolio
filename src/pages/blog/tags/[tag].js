import { request, blogPageQuery, tagsQuery } from '../../../../lib/datocms'

const TagPage = () => {
  return (
    <div>
      <div></div>
    </div>
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
