import React from 'react'
import get from 'lodash/get'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import SmallCase from '../components/case-small'
import PreviewCase from '../components/case-preview'

const Hero = styled.div`
  ${tw`w-full xl:w-3/4 mt-12 mb-10 md:my-24 flex items-center`};
`
const Title = styled.h1`
  ${tw`text-black font-normal text-4xl md:text-5xl`};
`
const Subtitle = styled.span`
  ${tw`text-lg`};
`
const Section = styled.section`
  ${tw``};
`
const Articles = styled.div`
  ${tw`flex flex-wrap my-4`};
`
class PortfolioPage extends React.Component {
  render() {
    const cases = get(this, 'props.data.allContentfulPortfolioEntry.edges')
    return (
      <Layout>
        <SEO
          title="Portfolio - Patrik Arvidsson"
          description="Clients I've worked with and projects I've been involved in throughout the years."
          keywords={[`design`, `portfolio`, `ui`, `ux`, `case`]}
        />
        <Hero>
          <div>
            <Title>A collection of my recent projects and internships.</Title>
          </div>
        </Hero>
        <Section>
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

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulPortfolioEntry(
      sort: { fields: [publishDate], order: [DESC] }
      limit: 20
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
  }
`
