import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Header from './header';
import Footer from './footer';

import { rhythm } from "../utils/typography"

export default ({ children }) => ( 
  <div
    css={css`
      background-color: #fff;
      margin: 0 auto;
      max-width: 1024px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Header/>
    {children}
    <Footer/>
  </div>
)
