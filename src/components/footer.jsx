import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { ContentTube, mobile, Title } from "./common"
import LogoSvg from "../assets/logo.svg"

const Footer = () => (
  <FooterContainer>
    <SwirlR1 />
    <SwirlR2 />
    <SwirlR3 />

    <SwirlL1 />
    <SwirlL2 />
    <SwirlL3 />

    <ContentTube>
      <div className="columns">
        <LogoContainer>
          <LogoSvg />
          <Title />
        </LogoContainer>

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
              <Link to="/brand">Branding</Link>
            </li>
          </ul>
        </Links>
      </div>
    </ContentTube>
  </FooterContainer>
)

const FooterContainer = styled.footer.attrs({
  className: "footer",
})`
  position: relative;
  margin-top: auto;
  background-color: #282631;
  width: 100%;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  overflow: hidden;

  > * {
    z-index: 1;
  }
`

const LogoContainer = styled.div.attrs({
  className: "column is-quarter",
})`
  display: flex;
  align-items: center;
  font-size: .5rem;
  color: #fff;
  margin-right: 4rem;

  svg {
    height: 100px;
    width: 100px;
    margin-right: 1rem;
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

const Swirl = styled.div`
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  border: 5px solid #393741;
  width: 1em;
  height: 1em;
`

const SwirlR1 = styled(Swirl)`
  font-size: 20rem;
  transform: translate(20vw, 60%);
`
const SwirlR2 = styled(Swirl)`
  font-size: 15rem;
  transform: translate(calc(20vw - 2.5rem), 60%);
`
const SwirlR3 = styled(Swirl)`
  font-size: 10rem;
  transform: translate(calc(20vw - 5rem), 60%);
`

const SwirlL1 = styled(Swirl)`
  font-size: 20rem;
  transform: translate(calc(-30vw), 40%);
`
const SwirlL2 = styled(Swirl)`
  font-size: 15rem;
  transform: translate(calc(-30vw - 1rem), 40%);
`
const SwirlL3 = styled(Swirl)`
  font-size: 10rem;
  transform: translate(calc(-30vw - 2rem), 40%);
`

export default Footer
