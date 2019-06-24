import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { take, skip } from "../util"
import { mobile } from "../components/common"

import { FaGithub, FaHome } from "react-icons/fa"

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
          <Contributors className="columns is-multiline">
            {take(data.trusted_contributors, 4).map((it, index) => (
              <Contributor key={index} data={it} />
            ))}

            <div className="column is-4 text">
              <Content html={data.trusted_contributors_intro.html} />
            </div>

            {skip(data.trusted_contributors, 4).map((it, index) => (
              <Contributor key={index} data={it} />
            ))}
          </Contributors>
        </ContentTube>
      </ContentSlice>

      <ContentSlice>
        <ContentTube>
          <div class="columns">
            <Content className="column is-half" html={data.members_text.html} />
          </div>

          <div>
            {data.body.map((slice, sliceIndex) => {
              switch (slice.slice_type) {
                case "sub_team":
                  return (
                    <SubTeam key={sliceIndex}>
                      <div className="name">
                        <h2>{slice.primary.team_name.text}</h2>
                      </div>

                      <div className="members columns is-multiline">
                        {slice.items.map((it, index) => (
                          <ListItem key={index} className="column is-2">
                            <ProfilePicture src={it.team_member_avatar.url} />

                            <ProfileDescription>
                              <h3>{it.team_member_name.text}</h3>
                              {(it.github_link || it.website_link) && (
                                <ProfileLinks>
                                  {it.github_link && (
                                    <a
                                      href={it.github_link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FaGithub size="1.4em" />
                                    </a>
                                  )}
                                  {it.website_link && (
                                    <a
                                      href={it.website_link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FaHome size="1.4em" />
                                    </a>
                                  )}
                                </ProfileLinks>
                              )}
                            </ProfileDescription>
                          </ListItem>
                        ))}
                      </div>
                    </SubTeam>
                  )
                default:
                  return <React.Fragment />
              }
            })}
          </div>
        </ContentTube>
      </ContentSlice>

      <ContentSlice>
        <ContentTube>
          <Directors className="columns is-multiline">
            {data.directors.map((it, index) => (
              <ListItem key={index} className="column is-2">
                <ProfilePicture src={it.director_avatar.url} />

                <ProfileDescription>
                  <h3>{it.director_name.text}</h3>
                  <Content html={it.director_description.html} />
                </ProfileDescription>
              </ListItem>
            ))}

            <div className="column text">
              <Content html={data.directors_text.html} />
            </div>
          </Directors>
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

const Directors = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${mobile`
    display: flex;
    flex-direction: column;

    .text {
      order: -1;
    }
  `}
`

const Contributors = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${mobile`
  display: flex;
  flex-direction: column;

  .text {
    order: -1;
  }
`}
`

const Contributor = ({ data }) => (
  <ListItem className="column is-2">
    <ProfilePicture
      src={data.trusted_contributor_avatar.url}
      alt={data.trusted_contributor_name.text}
    />

    <ProfileDescription>
      <h3>{data.trusted_contributor_name.text}</h3>
      {data.github_link && (
        <ProfileLinks>
          <a
            href={data.github_link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.4em" />
          </a>
        </ProfileLinks>
      )}
    </ProfileDescription>
  </ListItem>
)

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;

  ${mobile`
    flex-direction: row;
  `}
`

const ProfileDescription = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  h3 {
    font-size: 1.2em;
    font-weight: 800;
    line-height: 1.2;
    min-height: 3rem;
    display: flex;
    align-items: center;
  }

  ${mobile`
    margin-top: 0;
    margin-left: 2rem;
    font-size: 1.2rem;
  `}
`

const ProfilePicture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const ProfileLinks = styled.div`
  margin-top: 0.25rem;

  > a {
    margin: 0 0.25rem;
    transition: opacity 0.1s linear;
    color: #000;
    opacity: 0.4;

    &:hover {
      opacity: 0.8;
    }
  }
`

const SubTeam = styled.div`
  margin-bottom: 3rem;

  .name {
    width: 100%;
    font-size: 1.3rem;
    font-family: "Arvo", serif;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    color: #7f41ef;
  }

  .members {
    border: 4px solid #7f41ef;
    border-radius: 10px;
    padding: 0 1rem;
  }
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
          github_link {
            url
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
              github_link {
                url
              }
              website_link {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default TeamPage
