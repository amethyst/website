import React from "react"
import styled, { css } from "styled-components"

export const mobile = (...args) => css`
  @media (max-width: 1024px) {
    ${css(...args)}
  }
`

export const TitleSlice = styled.section.attrs({ className: "section" })`
  padding: 4.5rem 1.5rem;
`

export const ContentSlice = styled.section.attrs({ className: "section" })`
  padding: 3rem 1.5rem;
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  margin-top: 3.5rem;

  ${props =>
    props.noPadding &&
    css`
      margin-top: 0;
    `}
`

export const ContentTube = styled.div`
  width: 60rem;

  ${mobile`
        width: 100%;
    `}
`

export const Content = ({ html, className }) => (
  <div
    className={`content ${className || ""}`}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export const Sections = styled.div`
  width: 100%;

  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(even) {
      background-color: #fafaff;

      div.columns.reversed {
        flex-direction: row-reverse;
      }
    }
  }
`

const TitleBase = ({ className }) => (
  <h1 className={className}>
    <span className="main">Amethyst</span>
    <span className="sub">Game Engine</span>
  </h1>
)

export const Title = styled(TitleBase)`
  font-size: 1.2em;

  position: relative;
  font-family: "Arvo", sans-serif;
  padding-bottom: 1.2em;
  margin-bottom: 0.8rem;

  .main {
    font-size: 3.2em;
    font-weight: bold;
  }

  .sub {
    font-size: 1.6em;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
