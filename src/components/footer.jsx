import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { ContentTube, mobile } from "./common"
import LogoSvg from "../assets/logo.svg"

const FooterContainer = styled.footer.attrs({
  className: "footer",
})`
  margin-top: auto;
  background-color: #282631;
  width: 100%;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
`

const Logo = styled.div.attrs({
  className: "column is-quarter",
})`
  display: flex;
  align-items: center;

  svg {
    height: 100px;
    width: 100px;
  }

  ${mobile`
    justify-content: center;
    margin-bottom: 1rem;
  `}
`

const Links = styled.div.attrs({
  className: "column is-quarter",
})`
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 0.6rem;
    color: #fff;
  }

  a {
    color: #dfadff;

    &:hover {
      color: #fff;
    }
  }

  ${mobile`
    text-align: center;
  `}
`

const Footer = () => (
  <FooterContainer>
    <ContentTube>
      <div className="columns">
        <Logo>
          <LogoSvg />
        </Logo>

        <Links>
          <h4 className="is-size-6">Project</h4>
          <ul>
            <li>
              <a
                href="https://github.com/amethyst"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://amethyst.rs/doc"
                rel="noopener noreferrer"
                target="_blank"
              >
                Documentation
              </a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </Links>

        <Links>
          <h4 className="is-size-6">Community</h4>
          <ul>
            <li>
              <a
                href="https://discord.gg/amethyst"
                rel="noopener noreferrer"
                target="_blank"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://community.amethyst-engine.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Forums
              </a>
            </li>
          </ul>
        </Links>

        <Links>
          <h4 className="is-size-6">Foundation</h4>
          <ul>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/">Branding</Link>
            </li>
          </ul>
        </Links>
      </div>
    </ContentTube>
  </FooterContainer>
)

export default Footer
