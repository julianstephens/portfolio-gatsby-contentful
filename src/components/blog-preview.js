import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import BlockRevealAnimation from 'react-block-reveal-animation'
import { useInView } from 'react-intersection-observer'

const Container = styled.div`
  ${tw`w-full flex flex-grow flex-wrap md:flex-no-wrap items-center mb-12 md:mb-20`};
`

const TextWrapper = styled.div`
  ${tw`w-full md:w-2/5 md:mx-6 xl:px-12`};
`
const Title = styled.h3`
  ${tw`leading-normal font-sans font-bold py-0 mb-2 text-2xl`};
`
const Description = styled.p`
  ${tw`text-base mt-2 mb-3`};
`
const Tags = styled.div`
  ${tw`text-sm text-red font-sans font-semibold tracking-wide uppercase`};
`

const ImageWrapper = styled.div`
  ${tw`w-full md:w-3/5 block relative lg:mx-6`};
`
const ImageWrapperInner = styled(BlockRevealAnimation)`
  ${tw`lg:w-4/5 xl:w-3/4 mx-auto block z-20`};
`
const ImageWrapperInnerPreload = styled.div`
  ${tw`lg:w-3/4 xl:w-2/3 mx-auto block opacity-0`};
`
const ImageBackground = styled.div`
  ${tw`h-full w-full block absolute pin-t z-10 py-10`};
`
const ImageBackgroundInner = styled.div`
  ${tw`block h-full w-full bg-grey-lighter rounded`};
`
const Image = styled(Img)`
  ${tw`object-cover mb-4 rounded-sm w-full relative z-20 shadow-lg`};
`

const PreviewBlog = ({ article }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  })

  return (
    <Container className="articleContainer">
      <ImageWrapper className="imageWrapper">
        <div ref={ref}>
          {inView === true ? (
            <ImageWrapperInner
              color={article.postColor}
              delay={0}
              duration={0.6}
            >
              <Image
                alt={article.title}
                title={article.title}
                fluid={article.heroImage.fluid}
              />
            </ImageWrapperInner>
          ) : (
            <ImageWrapperInnerPreload>
              <Image
                alt={article.title}
                title={article.title}
                fluid={article.heroImage.fluid}
              />
            </ImageWrapperInnerPreload>
          )}
        </div>
        <ImageBackground>
          <ImageBackgroundInner />
        </ImageBackground>
      </ImageWrapper>
      <TextWrapper className="textWrapper">
        <Title>
          <Link className="leading-normal py-0" to={`/blog/${article.slug}`}>
            {article.concept}
          </Link>
        </Title>
        <Description>{article.description}</Description>
        <Tags>
          {article.tags.map(tag => (
            <span className="mb-0" key={tag}>
              {tag}
            </span>
          ))}
        </Tags>
      </TextWrapper>
    </Container>
  )
}

export default PreviewBlog
