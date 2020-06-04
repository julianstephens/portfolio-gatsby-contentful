import React from 'react'
import styled from '@emotion/styled'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Layout from '../components/layout'

const Wrapper = styled.div`
  ${tw`w-full lg:w-3/4 xl:w-2/3 py-10 lg:py-20 mx-auto`};
`
const Title = styled.h2`
  ${tw`text-black font-normal text-4xl md:text-5xl`};
`
const Body = styled.div`
  ${tw`text-lg`};
`
const Image = styled(Img)`
  ${tw`text-red mt-6 mb-8 md:mb-12 rounded`};
`

class AboutPage extends React.Component {
  render() {
    const [aboutHeadline] = get(this, 'props.data.allContentfulAbout.edges')
    const [aboutBody] = get(
      this,
      'props.data.allContentfulAboutBodyTextNode.edges'
    )
    return (
      <Layout>
        <SEO
          title="About Julian"
          description="Julian is a third-year computer science student at Georgia Tech. He likes to think of himself as a designer who codes."
          keywords={[`design`, `blog`, `ui`, `ux`, `gatsby`, `react`]}
        />
        <Wrapper>
          <Image fluid={aboutHeadline.node.headshot.fluid} />
          {/* <Title>{aboutHeadline.node.headline}</Title> */}
          <Body
            dangerouslySetInnerHTML={{
              __html: aboutBody.node.childMarkdownRemark.html,
            }}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          headline
          headshot {
            fluid(
              maxWidth: 300
              maxHeight: 300
              quality: 100
              resizingBehavior: FILL
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulAboutBodyTextNode {
      edges {
        node {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
