import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Page, ContentTube, Content, Sections } from "../components/common"
import Meta from "../components/meta"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import LogoSvg from "../assets/logo.svg"

const IndexPage = ({
  data: {
    prismicHome: { data },
  },
}) => (
  <Page noPadding>
    <Meta
      title={data.page_title.text}
      author={data.author}
      description={data.description.text}
    />

    <Navbar />
    <Hero>
      <LogoSvg />
      <Title>{data.title.text}</Title>
      <Subtitle>{data.subtitle.text}</Subtitle>
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
                      <img key={index} src={item.image.url} alt="sponsor" />
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

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 3rem;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const Title = styled.h1.attrs({
  className: "is-size-1",
})`
  text-align: center;
  margin: 1rem 0 0.5rem 0;
`

export const query = graphql`
  query {
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
