import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import {
  Page,
  Sections,
  ContentTube,
  Content,
  TitleSlice,
  ContentSlice,
} from "../components/common"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"

const BrandPage = ({
  data: {
    prismicBrand: { data },
  },
}) => (
  <Page>
    <Meta
      title={data.page_title.text}
      author={data.author}
      description={data.description.text}
    />

    <Navbar active="brand" />

    <Sections>
      <TitleSlice>
        <ContentTube>
          <h1 className="is-size-1">{data.title.text}</h1>
          <span className="is-size-3">{data.subtitle.text}</span>
        </ContentTube>
      </TitleSlice>

      {data.body.map((slice, index) => {
        switch (slice.slice_type) {
          case "text":
            return (
              <ContentSlice key={index}>
                <ContentTube>
                  <Content html={slice.primary.content.html} />
                </ContentTube>
              </ContentSlice>
            )
          case "files":
            return (
              <ContentSlice key={index}>
                <ContentTube>
                  <FilesTitle>{slice.primary.files_title.text}</FilesTitle>
                  <Content html={slice.primary.files_intro.html} />

                  {slice.items.map((file, index) => (
                    <FileItem key={index}>
                      <FileDescription>
                        <h3 className="is-size-4">{file.file_title.text}</h3>
                        <Content html={file.file_description.html} />
                        <a href={file.file_link.url}>{file.download_text}</a>
                      </FileDescription>

                      <FileImage>
                        <img
                          className={file.background}
                          src={file.file_image.url}
                          alt={file.file_title.text}
                        />
                      </FileImage>
                    </FileItem>
                  ))}
                </ContentTube>
              </ContentSlice>
            )
          case "colors":
            return (
              <React.Fragment key={index}>
                <ContentSlice>
                  <ColorTitle>Colors</ColorTitle>

                <ContentTube>
                  <div className="columns is-multiline" style={{justifyContent: "center"}}>
                    {[1, 2, 3, 4].map((color, index) => (
                      <div class="column is-4">
                        <ColorBox>
                          <div style={{ backgroundColor: "#3e1b93" }}>
                            Deeper Purple <span>#3e1b93</span>
                          </div>
                          <div style={{ backgroundColor: "#4f29d0" }}>
                            Deep Purple <span>#4f29d0</span>
                          </div>
                          <div style={{ backgroundColor: "#7f41ef" }}>
                            Mid Purple <span>#7f41ef</span>
                          </div>
                          <div style={{ backgroundColor: "#dfadff" }}>
                            Bright Purple <span>#dfadff</span>
                          </div>
                        </ColorBox>
                      </div>
                    ))}
                  </div>
                </ContentTube>
                </ContentSlice>

                <ContentSlice>
                  <h3 className="is-size-3">Gradients</h3>
                  <div className="columns" />
                </ContentSlice>
              </React.Fragment>
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

const ColorTitle = styled.h3.attrs({ className: "is-size-3" })`
  margin-bottom: 2rem;
`

const ColorBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 0.5rem 2rem 0 rgba(79, 41, 208, 0.2);

  div {
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    color: white;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.8em;
    }
  }
`

const FileDescription = styled.div.attrs({ className: "column is-7" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FileImage = styled.div.attrs({ className: "column is-5" })`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 230px;
    height: 230px;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0.5rem 2rem 0 rgba(79, 41, 208, 0.2);

    &.white {
      background-color: white;
    }

    &.black {
      background-color: #282631;
    }

    &.gradient {
      background: linear-gradient(45deg, #a84a82 0%, #ffa6a6 100%);
    }
  }
`

const FileItem = styled.div.attrs({ className: "columns" })`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const FilesTitle = styled.h2.attrs({ className: "is-size-2" })`
  margin-bottom: 1rem;
`

export const query = graphql`
  query {
    prismicBrand {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        description {
          text
        }
        author
        page_title {
          text
        }
        body {
          ... on PrismicBrandBodyFiles {
            slice_type
            primary {
              files_title {
                text
              }
              files_intro {
                html
              }
            }
            items {
              file_image {
                url
              }
              file_title {
                text
              }
              file_description {
                html
              }
              download_text
              background
              file_link {
                url
              }
            }
          }
          ... on PrismicBrandBodyText {
            slice_type
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicBrandBodyColors {
            slice_type
          }
        }
      }
    }
  }
`

export default BrandPage
