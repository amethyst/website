import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import {
  Page,
  ContentTube,
  Content,
  Sections,
  Title,
  mobile,
} from "../components/common"
import ScrollDetector from "../components/scroll-detector"
import Meta from "../components/meta"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import LogoSvg from "../assets/logo.svg"
import LogoOutlineSvg from "../assets/logo-outline.svg"

const IndexPage = ({
  data: {
    prismicHome: { data },
    prismicCommon: common,
    allPrismicPage: { edges },
  },
}) => {
  const links = edges.map(it => ({
    url: it.node.uid,
    link: it.node.data.link,
  }))

  const newsFlash = common.data.news_flash.text.trim()
  const shouldRenderNewsFlash = newsFlash.length > 0

  return (
    <Page noPadding>
      <Meta
        title={data.page_title.text}
        author={data.author}
        description={data.description.text}
        isHome
      />
      <ScrollDetector render={scrolled => <Navbar hidden={!scrolled} />} />
      <Hero>
        <HeroTitle>
          <LogoMain />
          <TitleContainer>
            <Title>{data.title.text}</Title>
            <Subtitle>{data.subtitle.text}</Subtitle>
          </TitleContainer>
        </HeroTitle>

        <HeroMenu>
          <HeroLink>
            <Link to="/news">Blog</Link>
          </HeroLink>

          {links.map((it, index) => (
            <HeroLink key={index}>
              <Link to={`/${it.url}`}>{it.link}</Link>
            </HeroLink>
          ))}

          <HeroLink>
            <Link to="/donate">Donate</Link>
          </HeroLink>
        </HeroMenu>

        {shouldRenderNewsFlash && (
          <NewsFlash>
            <img src={common.data.news_flash_icon.url} alt="news" />
            <Content html={common.data.news_flash.html} />
          </NewsFlash>
        )}

        <LogoOutline />
        <Swirl />
      </Hero>
      <Sections>
        {data.sections.map((section, index) => (
          <section key={index} className="section">
            <ContentTube>
              <div className="columns reversed">
                <SectionContent>
                  <h2 className="is-size-2">{section.section_title.text}</h2>
                  <Content html={section.section_content.html} />
                </SectionContent>

                <SectionImage>
                  <img src={section.section_image.url} alt="3d" />
                </SectionImage>
              </div>
            </ContentTube>
          </section>
        ))}

        {data.body.map((slice, index) => {
          switch (slice.slice_type) {
            case "plain":
              return (
                <section key={index} className="section">
                  <ContentTube>
                    <SliceTitle>{slice.primary.slice_title.text}</SliceTitle>
                    <Content html={slice.primary.slice_content.html} />
                  </ContentTube>
                </section>
              )
            case "repeatable_images":
              return (
                <section key={index} className="section has-text-centered">
                  <ContentTube>
                    <SliceTitle>{slice.primary.slice_title.text}</SliceTitle>

                    <div className="columns">
                      <div className="column is-half is-offset-3">
                        <Content html={slice.primary.slice_intro.html} />
                      </div>
                    </div>

                    <ImageList>
                      {slice.items.map((item, index) => (
                        <div key={index} className="column is-one-third">
                          <a
                            href={item.image_link.url}
                            target={item.image_link.target}
                          >
                            <img
                              src={item.image.url}
                              alt={`sponsor: ${item.image.alt}`}
                            />
                          </a>
                        </div>
                      ))}
                    </ImageList>
                  </ContentTube>
                </section>
              )
            case "title_image":
              return (
                <section key={index} className="section has-text-centered">
                  <ContentTube>
                    <img src={slice.primary.title_image.url} alt="example" />
                    <SliceTitle>{slice.primary.slice_title.text}</SliceTitle>

                    <div className="columns">
                      <div className="column is-half is-offset-3">
                        <Content html={slice.primary.slice_content.html} />
                      </div>
                    </div>
                  </ContentTube>
                </section>
              )
            default:
              break
          }

          return <React.Fragment />
        })}
      </Sections>
      <Footer />
    </Page>
  )
}

const NewsFlash = styled.div.attrs({ className: "box" })`
  font-size: 0.85rem;
  width: 30em;
  z-index: 1;
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;

  img {
    height: 5em;
    max-height: 100%;
    max-width: 5em;
    margin-right: 1rem;
  }

  ${mobile`
    position: relative;
    max-width: 90vw;

    img {
      opacity: 0.3;
      position: absolute;
      height: auto;
      z-index: 0;
      width: 5rem;
    }
  `}
`

const HeroTitle = styled.div`
  display: flex;
  margin: 4rem 0 2rem 0;

  ${mobile`
    flex-direction: column;
    align-items: center;
  `}
`

const Swirl = styled.div`
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.15);
  height: 30rem;
  width: 30rem;
  top: 0;
  left: 0;
  transform: translate(-20%, -20%);

  ${mobile`
  display: none;
  `}
`

const LogoMain = styled(LogoSvg)`
  z-index: 1;
  margin-right: 2rem;

  ${mobile`
  margin-right: 0;
  `}
`

const LogoOutline = styled(LogoOutlineSvg)`
  position: absolute;
  z-index: 0;
  right: 0;
  transform: translateX(20%);
  color: rgba(0, 0, 0, 0.15);

  svg {
    fill: currentColor;
  }
`

const TitleContainer = styled.div`
  z-index: 1;

  ${mobile`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

const HeroMenu = styled.ul`
  display: flex;
  font-size: 1.1em;
  font-weight: bold;
  z-index: 1;

  ${mobile`
    display: none;
  `}
`

const HeroLink = styled.li`
  margin-top: 2rem;

  :not(first-child) {
    margin-left: 1.6em;
  }

  ${mobile`
  margin-left: 0!important;
  `}

  a {
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 0.5em 1em;
    color: #fff;
    transition: all 0.15s ease-in-out;
    transition-property: background-color, color;

    :hover {
      background-color: #fff;
      color: #7f41ef;
    }
  }
`

const ImageList = styled.div.attrs({ className: "columns is-multiline" })`
  justify-content: center;

  div.column {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const SliceTitle = styled.h2.attrs({ className: "is-size-3" })`
  margin: 1.5rem 0;

  &:first-child {
    margin-top: 0;
  }
`

const Hero = styled.header.attrs({
  className: "hero is-gradient-wine is-fullheight",
})`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const SectionContent = styled.div.attrs({
  className: "column is-half",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
  }
`

const SectionImage = styled.div.attrs({
  className: "column is-half",
})`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 2rem 0 rgba(79, 41, 208, 0.2);
  }
`

const Subtitle = styled.span.attrs({
  className: "is-size-4",
})`
  text-align: center;
  opacity: 0.7;
  max-width: 80vw;
`

export const query = graphql`
  query {
    allPrismicPage(sort: { fields: [data___nav_order], order: ASC }) {
      edges {
        node {
          uid
          data {
            link
            page_title {
              text
            }
          }
        }
      }
    }

    prismicCommon {
      data {
        news_flash {
          html
          text
        }
        news_flash_icon {
          url
        }
      }
    }

    prismicHome {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        sections {
          section_image {
            url
          }
          section_title {
            text
          }
          section_content {
            html
          }
        }
        body {
          ... on PrismicHomeBodyPlain {
            slice_type
            primary {
              slice_title {
                text
              }
              slice_content {
                html
              }
            }
          }
          ... on PrismicHomeBodyTitleImage {
            slice_type
            primary {
              title_image {
                url
              }
              slice_title {
                text
              }
              slice_content {
                html
              }
            }
          }
          ... on PrismicHomeBodyRepeatableImages {
            slice_type
            items {
              image {
                url
                alt
              }
              image_link {
                url
                target
              }
            }
            primary {
              slice_title {
                text
              }
              slice_intro {
                html
              }
            }
          }
        }
        page_title {
          text
        }
        author
        description {
          text
        }
      }
    }
  }
`

export default IndexPage
