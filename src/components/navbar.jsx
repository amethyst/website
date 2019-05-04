import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

import { ContentTube, mobile } from "./common"
import LogoSvg from "../assets/logo-color.svg"

const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, .95);
  border-bottom: 1px solid rgba(40, 38, 49, 0.1);
  height: 3.5rem;

  > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: rgba(40,38,49,0.8);

    ${mobile`
      margin-left: 1rem;
    `}

    svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.4rem;
    }
  }
`

const Navbar = ({ active }) => {
  const {
    allPrismicPage: { edges },
  } = useStaticQuery(graphql`
    query {
      allPrismicPage {
        edges {
          node {
            uid
            data {
              link
              page_title {
                text
              }
              nav_order
            }
          }
        }
      }
    }
  `)

  const links = edges.map(it => ({
    url: it.node.uid,
    link: it.node.data.link,
    order: it.node.data.nav_order,
  }))

  links.sort((a, b) => a - b)

  return (
    <NavbarContainer>
      <ContentTube>
        <Link className="logo" to="/">
          <LogoSvg />
          <span>Amethyst</span>
        </Link>

        <ul>
          <NavLink active={active === "blog"}>
            <Link to="/blog">Blog</Link>
          </NavLink>

          {links.map((it, index) => (
            <NavLink key={index} active={active === it.url}>
              <Link to={`/${it.url}`}>{it.link}</Link>
            </NavLink>
          ))}

          <NavLink active={active === "donate"}>
            <Link to="/donate">Donate</Link>
          </NavLink>
        </ul>
      </ContentTube>
    </NavbarContainer>
  )
}

const NavLink = styled.li`
    a {
      color: rgba(40, 38, 49, 0.9);
      height: 3.5rem;
      line-height: 3.5rem;
      padding: 0 1rem;

      position: relative;
      display: flex;
      justify-content: center;

      &::before {
        position: absolute;
        content: " ";
        display: block;
        width: 0;
        background-color: #7f41ef;
        height: 4px;
        bottom: 0.6rem;
        transition: width 0.2s ease-in-out;
        border-radius: 4px;
      }

      &:hover::before {
        width: 50%;
      }
    }

    ${props => props.active && css`
      a::before {
        width: 50%;
      }
    `}
`

export default Navbar
