import React from 'react'
import styled from '@emotion/styled'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import SmallPost from '../components/article-preview'

const Wrapper = styled.div`
  ${tw`w-full lg:w-3/4 xl:w-2/3 py-10 lg:py-20 mx-auto`};
`
const Body = styled.div`
  ${tw`border-t border-l-0 border-r-0 border-b-0 border-solid border-grey-light mt-10`};
`
const Title = styled.h2`
  ${tw`text-black font-normal text-4xl md:text-5xl`};
`
const Subtitle = styled.span`
  ${tw`text-lg`};
`

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout>
        <SEO
          title="Blog - Julian Stephens"
          description="A random assortment of things I find interesting enough to write about."
          keywords={[`design`, `blog`, `writing`, `internet`, `productivity`, `philosophy`]}
        />
        <Wrapper>
          <header>
            <Title>Blog</Title>
            <Subtitle>
            A random assortment of things I find interesting enough to write about.
            </Subtitle>
          </header>
          <Body>
            {posts.map(({ node }) => {
              return <SmallPost article={node} key={node.slug} />
            })}
          </Body>
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: [DESC] }
      limit: 6
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 800, maxHeight: 560, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description
        }
      }
    }
  }
`
