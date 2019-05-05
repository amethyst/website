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
  const date = moment(data.first_publication_date).format("MMM Do YYYY")

  return (
    <Page>
      <Meta
        title={data.post_title.text || ""}
        author={data.author || ""}
        description={data.intro.text || ""}
      />

      <Navbar active="blog" />

      <Sections>
        <Title>
          <ContentTube>
            <h1 className="is-size-1">{data.post_title.text}</h1>
            <span>
              Published on {date} by {data.author}
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
      first_publication_date
      data {
        post_title {
          text
        }
        intro {
          text
        }
        post_content {
          html
        }
      }
    }
  }
`

export default PostTemplate
