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

const TeamPage = ({
  data: {
    prismicTeam: { data },
  },
}) => (
  <Page>
    <Meta
      title={data.page_title.text}
      author={data.author}
      description={data.description.text}
    />

    <Navbar active="team" />

    <Sections>
      <TitleSlice>
        <ContentTube>
          <h1 className="is-size-1">{data.title.text}</h1>
        </ContentTube>
      </TitleSlice>

      <ContentSlice>
        <ContentTube>
          <Content html={data.intro_text.html} />
        </ContentTube>
      </ContentSlice>

      <ContentSlice>
        <ContentTube>
          <div className="columns">
            <div className="column is-7">
              <div className="columns is-multiline">
                {data.trusted_contributors.map((it, index) => (
                  <ListItem key={index} className="column is-3">
                    <ProfilePicture src={it.trusted_contributor_avatar.url} />

                    <ProfileDescription>
                      <h3>{it.trusted_contributor_name.text}</h3>
                      <Content html={it.trusted_contributor_description.html} />
                    </ProfileDescription>
                  </ListItem>
                ))}
              </div>
            </div>

            <div className="column is-5">
              <Content html={data.trusted_contributors_intro.html} />
            </div>
          </div>
        </ContentTube>
      </ContentSlice>

      <ContentSlice>
        <ContentTube>
          <SubTeams className="columns">
            <Content
              className="column is-5 text"
              html={data.members_text.html}
            />

            <div className="column is-7 teams">
              {data.body.map((slice, sliceIndex) => {
                switch (slice.slice_type) {
                  case "sub_team":
                    return (
                      <SubTeam
                        key={sliceIndex}
                        className="columns is-multiline"
                      >
                        <h2>{slice.primary.team_name.text}</h2>

                        {slice.items.map((it, index) => (
                          <ListItem key={index} className="column is-3">
                            <ProfilePicture src={it.team_member_avatar.url} />

                            <ProfileDescription>
                              <h3>{it.team_member_name.text}</h3>
                              <Content html={it.team_member_description.html} />
                            </ProfileDescription>
                          </ListItem>
                        ))}
                      </SubTeam>
                    )
                    break
                  default:
                    break
                }
              })}
            </div>
          </SubTeams>
        </ContentTube>
      </ContentSlice>

      <ContentSlice>
        <ContentTube>
          <div className="columns">
            <div className="column is-7">
              <div className="columns is-multiline">
                {data.directors.map((it, index) => (
                  <ListItem key={index} className="column is-3">
                    <ProfilePicture src={it.director_avatar.url} />

                    <ProfileDescription>
                      <h3>{it.director_name.text}</h3>
                      <Content html={it.director_description.html} />
                    </ProfileDescription>
                  </ListItem>
                ))}
              </div>
            </div>

            <div className="column is-5">
              <Content html={data.directors_text.html} />
            </div>
          </div>
        </ContentTube>
      </ContentSlice>

      <ContentSlice>
        <ContentTube>
          <Content html={data.board_text.html} />

          <div className="columns">
            {data.board_members.map((it, index) => (
              <ListItem key={index} className="column">
                <ProfilePicture src={it.board_member_avatar.url} />

                <ProfileDescription>
                  <h3>{it.board_member_name.text}</h3>
                  <Content html={it.board_member_description.html} />
                </ProfileDescription>
              </ListItem>
            ))}
          </div>
        </ContentTube>
      </ContentSlice>
    </Sections>

    <Footer />
  </Page>
)

const SubTeams = styled.div`
  margin: 0 -0.8rem 0 -0.8rem;
  height: 40rem;
  display: flex;
  flex-flow: column wrap;

  .text {
  }

  .teams {
    margin-top: -1.8rem;
  }
`

const SubTeam = styled.div`
  border-radius: 12px;
  border: 4px solid #7f41ef;
  margin: 3.8rem 0.8rem 0.8rem 0.8rem;
  padding: 0.2rem;
  position: relative;
  flex-grow: 1;
  flex-wrap: wrap;

  > h2 {
    position: absolute;
    color: #7f41ef;
    font-weight: 800;
    font-size: 1.1rem;
    top: -2.5rem;
    left: 0rem;
    font-family: "Arvo", sans-serif;
  }
`

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  text-align: center;

  h3 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  > div {
    font-size: 0.8em;
  }
`

const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const query = graphql`
  query {
    prismicTeam {
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
        intro_text {
          html
        }
        directors_text {
          html
        }
        board_text {
          html
        }
        members_text {
          html
        }
        trusted_contributors_intro {
          html
        }
        directors {
          director_avatar {
            url
          }
          director_name {
            text
          }
          director_description {
            html
          }
        }
        board_members {
          board_member_avatar {
            url
          }
          board_member_name {
            text
          }
          board_member_description {
            html
          }
        }
        trusted_contributors {
          trusted_contributor_avatar {
            url
          }
          trusted_contributor_name {
            text
          }
          trusted_contributor_description {
            html
          }
        }
        body {
          ... on PrismicTeamBodySubTeam {
            slice_type
            primary {
              team_name {
                text
              }
            }
            items {
              team_member_avatar {
                url
              }
              team_member_name {
                text
              }
              team_member_description {
                html
              }
            }
          }
        }
      }
    }
  }
`

export default TeamPage
