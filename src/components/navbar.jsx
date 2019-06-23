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

  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(40, 38, 49, 0.1);

  transition: all 0.15s ease-in-out;
  transition-property: background-color, border;

  ${props =>
    props.hidden &&
    css`
      background-color: rgba(255, 255, 255, 0);
      border-bottom: 1px solid rgba(40, 38, 49, 0);
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

      height: 100vh;
      width: 100vw;

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
      <Toggle onClick={() => setOpened(!opened)} light={hidden && !opened}>
        {opened && <FaTimes size="1.6em" />}
        {!opened && <FaBars size="1.6em" />}
      </Toggle>

      <Content hidden={hidden && !opened}>
        <Link className="logo" to="/" hidden={hidden}>
          <LogoSvg />
          <span>Amethyst</span>
        </Link>

        <LinksContainer opened={opened}>
          <NavLink active={active === "blog"}>
            <Link to="/news">Blog</Link>
          </NavLink>

          <NavLink active={active === "team"}>
            <Link to="/team">Blog</Link>
          </NavLink>

          {links
            .filter(it => it.link !== "Team")
            .map((it, index) => (
              <NavLink key={index} active={active === it.url}>
                <Link to={`/${it.url}`}>{it.link}</Link>
              </NavLink>
            ))}

          <NavLink active={active === "donate"}>
            <Link to="/donate">Donate</Link>
          </NavLink>
        </LinksContainer>
      </Content>
    </NavbarContainer>
  )
}

const Content = styled(ContentTube)`
  opacity: 1;
  transform: translateY(0);

  transition: all 0.15s ease-in-out;
  transition-property: transform, opacity;

  svg {
    z-index: 11;
  }

  ${props =>
    props.hidden &&
    css`
      opacity: 0;
      transform: translateY(-10px);
    `}
`

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

  ${props =>
    props.light &&
    css`
      color: #fff;
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
      bottom: 0.6rem;
      transition: width 0.2s ease-in-out;
      border-radius: 4px;

      ${mobile`
        height: 8px;
        bottom: 0rem;
      `}
    }

    @media (hover) {
      &:hover::before {
        width: 50%;
      }
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
