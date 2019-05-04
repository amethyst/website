import React from "react"
import styled, { css } from "styled-components"

export const mobile = (...args) => css`
    @media (max-width: 1024px) { ${css(...args)} }
`

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    margin-top: 3.5rem;

    ${props => props.noPadding && css`
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

  section {
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
