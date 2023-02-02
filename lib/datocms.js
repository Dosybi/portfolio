import { GraphQLClient } from 'graphql-request'
export function request({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  }
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true'
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true'
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers })
  return client.request(query, variables)
}

export const homePageQuery = `query HomePage {
  home {
    metaTags {
      _allDescriptionLocales {
        locale
        value
      }
      _allTitleLocales {
        locale
        value
      }
    }
    _allHeaderTitleLocales {
      locale
      value
    }
    navigation {
      _allLabelLocales {
        locale
        value
      }
      anchorLink
      slug
    }
    project {
      _allTitleLocales {
        locale
        value
      }
      stack
      _allYearLocales {
        locale
        value
      }
      _allTextLocales {
        locale
        value
      }
      button {
        _allLabelLocales {
          locale
          value
        }
        link
      }
    }
    _allLearningHeadingLocales {
      locale
      value
    }
    course {
      _allCourseLocales {
        locale
        value
      }
      _allSchoolLocales {
        locale
        value
      }
      progress
    }
    _allAboutHeadingLocales {
      locale
      value
    }
    _allTextLocales(markdown: true) {
      locale
      value
    }
    _allContactHeadingLocales {
      locale
      value
    }
    contact {
      label
      link
      platform
    }
    button {
      _allLabelLocales {
        locale
        value
      }
      link
    }
  }
}`

export const blogPageQuery = `query PlogPage {
  allPosts {
    heading
    lead
    text {
      blocks
      links
      value
    }
    tags {
      tag
      slug
    }
    slug
    _publishedAt
  }
}`

export const tagsQuery = `query TagsQuery {
  allTags {
    tag
    slug
  }
}`
