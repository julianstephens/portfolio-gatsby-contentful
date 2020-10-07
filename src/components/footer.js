import React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer`
  ${tw`px-6 md:px-0 py-8 md:py-8 bg-white text-center`};
`
const Inner = styled.div`
  ${tw`opacity-75 my-2`};
`
const SocialLink = styled('a')`
  ${tw`no-underline shadow-none mx-1`}
`

const Footer = () => (
  <Container>
    {/* <Inner>
      No copyright here :)
    </Inner> */}
    <Inner></Inner>
    <Inner>
      Check me out on 
      <SocialLink href="https://github.com/julianstephens">
        Github
      </SocialLink>
      or 
      <SocialLink href="https://linkedin.com/in/juliangstephens">
        LinkedIn
      </SocialLink>
    </Inner>
  </Container>
)

export default Footer
