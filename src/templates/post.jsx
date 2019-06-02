import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import * as moment from "moment"

import { Page, Sections, ContentTube, Content } from "../components/common"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"

const PostTemplate = ({
  data: {
    prismicPost: { data },
  },
}) => {
  const date = moment(data.published).format("MMM Do YYYY")
  
  return (
    <Page>
      <Meta
        title={data.post_title.text || ""}
        author={data.author || "The Amethyst Engine Team"}
        description={data.intro.text || ""}
      />

      <Navbar active="blog" />

      <Sections>
        <Title>
          <ContentTube>
            <h1 className="is-size-1">{data.post_title.text}</h1>
            <span>
              Published on {date}
              {data.author_name && (
                <span>
                  {" "}by{" "}
                  <a
                    href={data.author_link.url}
                    target={data.author_link.target}
                  >
                    {data.author_name}
                  </a>
                </span>
              )}
            </span>
          </ContentTube>
        </Title>

        <Article>
          <ContentTube>
            <Content html={data.post_content.html} />
          </ContentTube>
        </Article>
      </Sections>

      <Footer />
    </Page>
  )
}

const Title = styled.header.attrs({ className: "section" })`
  padding: 4.5rem 1.5rem;
`

const Article = styled.article.attrs({ className: "section" })`
  padding: 3rem 1.5rem;
`

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      data {
        published
        post_title {
          text
        }
        intro {
          text
        }
        post_content {
          html
        }
        author_name
        author_link {
          url
          target
        }
      }
    }
  }
`

export default PostTemplate
