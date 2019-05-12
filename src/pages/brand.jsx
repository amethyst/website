import React from "react"
import styled, { css } from "styled-components"
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
                  <ContentTube>
                    <ColorTitle>Colors</ColorTitle>

                    <ColorContainer>
                      {colorBoxes.map((box, boxIndex) => (
                        <div class="column is-4" key={boxIndex}>
                          <ColorBox>
                            {box.map(({ name, hex, text }, colorIndex) => (
                              <div
                                style={{ backgroundColor: hex, color: text }}
                                key={colorIndex}
                              >
                                {name} <span>{hex}</span>
                              </div>
                            ))}
                          </ColorBox>
                        </div>
                      ))}
                    </ColorContainer>
                  </ContentTube>
                </ContentSlice>

                <ContentSlice>
                  <ContentTube>
                    <ColorTitle>Gradients</ColorTitle>

                    <ColorContainer>
                      {gradientBoxes.map((box, boxIndex) => (
                        <div class="column is-4" key={boxIndex}>
                          <ColorBox
                            single
                            style={{
                              background: `linear-gradient(45deg, ${
                                box.fromHex
                              } 0%, ${box.toHex} 100%)`,
                              color: "white",
                            }}
                          >
                            <div>
                              <span>{box.name}</span>
                              <span>({box.fromTo})</span>
                            </div>
                          </ColorBox>
                        </div>
                      ))}
                    </ColorContainer>
                  </ContentTube>
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

const colorBoxes = [
  [
    { name: "Deeper Purple", hex: "#3e1b93", text: "white" },
    { name: "Deep Purple", hex: "#4f29d0", text: "white" },
    { name: "Mid Purple", hex: "#7f41ef", text: "white" },
    { name: "Bright Purple", hex: "#dfadff", text: "white" },
  ],
  [
    { name: "Deeper Plum", hex: "#84286f", text: "white" },
    { name: "Deep Plum", hex: "#a84a82", text: "white" },
    { name: "Mid Peach", hex: "#f27ea2", text: "white" },
    { name: "Bright Peach", hex: "#ffa6a6", text: "white" },
  ],
  [
    { name: "Dark", hex: "#282631", text: "white" },
    { name: "Alternative Dark", hex: "#2e2a39", text: "white" },
    { name: "Light", hex: "#ffffff", text: "#282631" },
    { name: "Alternative Light", hex: "#fafaff", text: "#282631" },
  ],
  [
    { name: "Error", hex: "#e56d94", text: "#282631" },
    { name: "Information", hex: "#79e0e6", text: "#282631" },
    { name: "Success", hex: "#89fb89", text: "#282631" },
    { name: "Warning", hex: "#ffeca0", text: "#282631" },
  ],
]

const gradientBoxes = [
  {
    name: "Amethyst",
    fromTo: "mid-purple - deep-purple",
    fromHex: "#7f41ef",
    toHex: "#4f29d0",
  },
  {
    name: "Wine",
    fromTo: "deep-plum - mid-purple",
    fromHex: "#a84a82",
    toHex: "#7f41ef",
  },
  {
    name: "Sunrise",
    fromTo: "deep-plum - bright-peach",
    fromHex: "#a84a82",
    toHex: "#ffa6a6",
  },
  {
    name: "Sunset",
    fromTo: "mid-peach - deep-plum",
    fromHex: "#f27ea2",
    toHex: "#a84a82",
  },
]

const ColorContainer = styled.div.attrs({ className: "columns is-multiline" })`
  justify-content: center;
`

const ColorTitle = styled.h2.attrs({ className: "is-size-2" })`
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

  ${props =>
    !props.single &&
    css`
      div {
        height: 3rem;
        line-height: 3rem;
        padding: 0 1rem;
        color: white;
        display: flex;
        justify-content: space-between;

        span {
          font-size: .8em;
        }
      }
    `}

  ${props =>
    props.single &&
    css`
      div {
        height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span:last-child {
          font-size: .8em;
        }
      }
    `}
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
