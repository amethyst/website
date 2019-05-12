import React from "react"
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

const PageTemplate = ({
  data: {
    prismicPage: { data, uid },
  },
}) => (
  <Page>
    <Meta
      title={data.page_title.text || ""}
      author={data.author || ""}
      description={data.description.text || ""}
    />

    <Navbar active={uid} />

    <Sections>
      {data.body.map((slice, index) => {
        switch (slice.slice_type) {
          case "title":
            return (
              <TitleSlice key={index}>
                <ContentTube>
                  <h1 className="is-size-1">{slice.primary.title.text}</h1>
                </ContentTube>
              </TitleSlice>
            )
          case "title_with_subtitle":
            return (
              <TitleSlice key={index}>
                <ContentTube>
                  <h1 className="is-size-1">{slice.primary.title.text}</h1>
                  <span className="is-size-3">
                    {slice.primary.subtitle.text}
                  </span>
                </ContentTube>
              </TitleSlice>
            )
          case "content":
            return (
              <ContentSlice key={index}>
                <ContentTube>
                  <Content html={slice.primary.content.html} />
                </ContentTube>
              </ContentSlice>
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

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        link
        page_title {
          text
        }
        author
        description {
          text
        }
        body {
          ... on PrismicPageBodyTitle {
            slice_type
            primary {
              title {
                text
              }
            }
          }
          ... on PrismicPageBodyContent {
            slice_type
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicPageBodyTitleWithSubtitle {
            slice_type
            primary {
              title {
                text
              }
              subtitle {
                text
              }
            }
          }
        }
      }
    }
  }
`

export default PageTemplate
