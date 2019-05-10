import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"

import { ContentTube, mobile } from "./common"
import LogoSvg from "../assets/logo-color.svg"

const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(40, 38, 49, 0.1);
  height: 3.5rem;

  > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: rgba(40, 38, 49, 0.8);

    ${mobile`
      margin-left: 1rem;

      span {
        display: none;
      }
    `}

    svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.4rem;
    }
  }

  transform: translateY(0);
  transition: all .15s ease-in-out;
  transition-property: opacity, transform;
  ${props => props.hidden && css`
    opacity: 0;
    transform: translateY(-.5rem);
  `}
`

const LinksContainer = styled.ul`
  display: flex;

  ${mobile`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 2;
      background-color: #fff;

      opacity: 0;
      pointer-events: none;
      transition: opacity .15s ease-in;

      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        font-size: 2rem;
        padding: 1.5rem 2rem;
      }

      ${props =>
        props.opened &&
        css`
          opacity: 1;
          pointer-events: initial;
        `}
    `}
`

const Navbar = ({ active, hidden }) => {
  const {
    allPrismicPage: { edges },
  } = useStaticQuery(graphql`
    query {
      allPrismicPage(sort: { fields: [data___nav_order], order: ASC }) {
        edges {
          node {
            uid
            data {
              link
              page_title {
                text
              }
            }
          }
        }
      }
    }
  `)

  const [opened, setOpened] = useState(false)

  const links = edges.map(it => ({
    url: it.node.uid,
    link: it.node.data.link,
  }))

  return (
    <NavbarContainer hidden={hidden}>
      <Toggle onClick={() => setOpened(!opened)}>
        {opened && <FaTimes size="1.6em" />}
        {!opened && <FaBars size="1.6em" />}
      </Toggle>

      <ContentTube>
        <Link className="logo" to="/">
          <LogoSvg />
          <span>Amethyst</span>
        </Link>

        <LinksContainer opened={opened}>
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
        </LinksContainer>
      </ContentTube>
    </NavbarContainer>
  )
}

const Toggle = styled.div`
  opacity: 0;
  pointer-events: none;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  padding: 1rem;
  color: #222;
  cursor: pointer;

  ${mobile`
    opacity: 1;
    pointer-events: initial;
  `}
`

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
      bottom: .6rem;
      transition: width 0.2s ease-in-out;
      border-radius: 4px;

      ${mobile`
        height: 8px;
        bottom: 0rem;
      `}
    }

    &:hover::before {
      width: 50%;
    }
  }

  ${props =>
    props.active &&
    css`
      a::before {
        width: 50%;
      }
    `}
`

export default Navbar
