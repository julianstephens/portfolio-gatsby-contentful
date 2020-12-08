import React from 'react'
import styled from '@emotion/styled'
import get from 'lodash/get'
import SEO from '../components/seo'

import Layout from '../components/layout'

const Wrapper = styled.div`
  ${tw`w-full lg:w-3/4 xl:w-2/3 py-10 lg:pt-8 pb-20 mx-auto`};
`
const Title = styled.h2`
  ${tw`text-black font-normal text-4xl md:text-5xl`};
`
const Body = styled.div`
  ${tw`text-lg`};
`
const FormWrapper = styled.div`
  ${tw`w-full max-w-md mt-12`};
  & > form {
    ${tw`flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4`};

    & > label {
      ${tw`block text-gray-700 font-semibold mb-2`};
    }

    & > input {
      ${tw`rounded w-full mb-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none`};
    }

    & > textarea {
      ${tw`rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`};
    }

    & > button {
      ${tw`rounded mt-6 text-gray-700 hover:shadow`};
    }
  }
`

class ContactPage extends React.Component {
  render() {
    const [contactHeadline] = get(this, 'props.data.allContentfulContact.edges')
    const [contactBody] = get(
      this,
      'props.data.allContentfulContactBodyTextNode.edges'
    )
    return (
      <Layout>
        <SEO
          title="Contact - Julian Stephens"
          description="Julian is a fourth-year computer science student at Georgia Tech. He likes to think of himself as a designer who codes."
          keywords={[`design`, `blog`, `ui`, `ux`, `gatsby`, `react`]}
        />
        <Wrapper>
          <Title>{contactHeadline.node.headline}</Title>
          <Body
            dangerouslySetInnerHTML={{
              __html: contactBody.node.childMarkdownRemark.html,
            }}
          />
          <FormWrapper className="contactContainer">
            <form
              method="post"
              action="https://getform.io/f/913330e3-a478-44cc-9047-0696ce652892"
            >
              <h3>Contact Julian</h3>
              <label>Name</label>
              <input type="text" name="name" placeholder="Spiderman" />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="spider@theweb.net"
              />
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                rows="5"
                placeholder="Type your super awesome message here"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </FormWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulContact {
      edges {
        node {
          headline
        }
      }
    }
    allContentfulContactBodyTextNode {
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
