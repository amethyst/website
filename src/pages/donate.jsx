import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Page, Sections, ContentTube, Content } from "../components/common"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"

class DonatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { height: 0 }
  }

  donorboxListen = event => {
    if (
      event.origin === "https://donorbox.org" &&
      event.data.src &&
      event.data.height
    )
      this.setState({ height: event.data.height })
  }

  componentDidMount() {
    window.addEventListener("message", this.donorboxListen)
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.donorboxListen)
  }

  render() {
    const {
      data: {
        prismicDonate: { data },
      },
    } = this.props

    return (
      <Page>
        <Meta
          title={data.page_title.text}
          author={data.author}
          description={data.description.text}
        />

        <Navbar active="donate" />
        <script src="https://donorbox.org/widget.js" paypalexpress="true" />

        <Sections>
          <TitleSection>
            <ContentTube>
              <h1 className="is-size-1">{data.title.text}</h1>
              <h2 className="is-size-3">{data.subtitle.text}</h2>

              <iframe
                title="donorbox-progress"
                src="https://donorbox.org/embed/amethyst-founding?only_donation_meter=true&donation_meter_color=%234f29d0"
                height="93px"
                width="100%"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
              />
            </ContentTube>
          </TitleSection>

          <section className="section">
            <ContentTube>
              <div className="columns">
                <DonorboxContainer>
                  <iframe
                    title="donorbox-donate"
                    src="https://donorbox.org/embed/amethyst-founding?amount=30&hide_donation_meter=true"
                    width="100%"
                    seamless="seamless"
                    frameBorder="0"
                    scrolling="no"
                    allowpaymentrequest="true"
                    style={{ minHeight: "650px" }}
                  />
                </DonorboxContainer>

                <DonorboxAside>
                  <h2 className="is-size-3">{data.donorbox_title.text}</h2>
                  <Content html={data.donorbox_text.html} />
                </DonorboxAside>
              </div>
            </ContentTube>
          </section>

          {data.body.map((slice, index) => {
            switch (slice.slice_type) {
              case "text":
                return (
                  <section className="section" key={index}>
                    <ContentTube>
                      <Content html={slice.primary.text.html} />
                    </ContentTube>
                  </section>
                )
              default:
                break
            }

            return <React.Fragment />
          })}

          <section className="section">
            <ContentTube>
              <iframe
                title="donorbox-wall"
                src="https://donorbox.org/embed/amethyst-founding?only_donor_wall=true"
                style={{
                  width: `100%`,
                  minWidth: `310px`,
                  height: `${this.state.height}px`,
                }}
                seamless="seamless"
                name="donorbox"
                frameBorder="0"
                scrolling="no"
              />
            </ContentTube>
          </section>
        </Sections>

        <Footer />
      </Page>
    )
  }
}

const TitleSection = styled.header.attrs({ className: "section" })`
  margin-top: 1.5rem;

  h2 {
    margin-bottom: 2rem;
  }
`

const DonorboxAside = styled.div.attrs({ className: "column is-half" })`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1rem 0;
  }
`

const DonorboxContainer = styled.div.attrs({ className: "column is-half" })`
  display: flex;
  justify-content: center;
`

export const query = graphql`
  query {
    prismicDonate {
      data {
        page_title {
          text
        }
        description {
          text
        }
        author
        title {
          text
        }
        subtitle {
          text
        }
        donorbox_title {
          text
        }
        donorbox_text {
          html
        }
        body {
          ... on PrismicDonateBodyText {
            slice_type
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`

export default DonatePage
