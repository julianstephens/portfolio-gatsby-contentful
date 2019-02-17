import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import get from 'lodash/get'

import Layout from '../components/layout'
import SmallCase from '../components/small-case'

const Hero = styled.div`
  ${tw`w-full xl:w-3/4 mt-12 mb-10 md:my-24 flex items-center`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-5xl text-black`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl`};
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
        <Hero>
          <div>
            <Title>Clients I've worked with and projects I've been involved in throughout the years.</Title>
            <Subline>Unlinked projects are not ready to be presented yet for various reasons. Contact me for more information. Design studies and explorations can be found in my <a href="/journal">journal</a>.</Subline>
          </div>
        </Hero>
        <Section>
          <Articles>
            {cases.map(({ node }) => {
              return (
                <SmallCase entry={node} key={node.slug} />
              )
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
    allContentfulPortfolioEntry(sort: { fields: [publishDate], order: DESC }, limit: 6) {
      edges {
        node {
          title
          clientName
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
