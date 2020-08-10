import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PreviewCase from '../components/case-preview'

const Hero = styled.div`
  ${tw`w-full md:max-w-md xl:max-w-lg md:h-screen-60 flex items-center my-10 md:my-0`};
`
const Title = styled.h1`
  ${tw`text-4xl md:text-5xl text-black font-normal my-4 md:my-6`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl w-full md:w-2/3`};
`
const Section = styled.section`
  ${tw``};
`
const Articles = styled.div`
  ${tw`flex flex-wrap my-4 font-sans text-base text-grey`};
`

class IndexPage extends React.Component {
  render() {
    const [siteSettings] = get(this, 'props.data.allContentfulSettings.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const cases = get(this, 'props.data.allContentfulPortfolioEntry.edges')
    return (
      <Layout>
        <SEO
          title="Julian Stephens"
          description="Julian is a fourth-year computer science student at Georgia Tech. He likes to think of himself as a designer who codes."
          keywords={[`design`, `blog`, `ui`, `ux`, `frontend`, `react`]}
        />
        <Hero>
          <div>
            <Title
              dangerouslySetInnerHTML={{
                __html: siteSettings.node.headline.childMarkdownRemark.html,
              }}
            />
            <Subline
              dangerouslySetInnerHTML={{
                __html: siteSettings.node.subline.childMarkdownRemark.html,
              }}
            />
          </div>
        </Hero>
        <Section id="latestWork">
          <Articles>
            {cases.map(({ node }) => {
              return <PreviewCase entry={node} key={node.slug} />
            })}
          </Articles>
        </Section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPortfolioEntry(
      sort: { fields: [publishDate], order: DESC }
      limit: 6
      filter: { promoteCase: { ne: false } }
    ) {
      edges {
        node {
          title
          clientName
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1200, maxHeight: 875, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          clientColor
          description
        }
      }
    }
    allContentfulSettings(
      filter: { contentful_id: { eq: "1LELDthnT6CgRFXFnH8nBV" } }
    ) {
      edges {
        node {
          headline {
            childMarkdownRemark {
              html
            }
          }
          subline {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
