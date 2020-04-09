import React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer`
  ${tw`px-6 md:px-0 py-8 md:py-8 bg-white text-center`};
`
const Inner = styled.div`
  ${tw`opacity-75 my-2`};
`

const Footer = () => (
  <Container>
    {/* <Inner>
      Site built with <a href="https://www.gatsbyjs.org/">Gatsby</a>,{' '}
      <a href="https://tailwindcss.com/">Tailwind</a> and beer. Content served
      from <a href="https://www.contentful.com/">Contentful</a>.
    </Inner> */}
    <Inner></Inner>
  </Container>
)

export default Footer
