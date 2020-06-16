import React from 'react';
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"


export default () => (
    <div css={css`
        color: #fff;
        background: #000;
        margin-bottom: ${rhythm(1)}
    `}>
    <Link to={`/`}>
      <h3
        css={css`
            color:#fff;
          margin: ${rhythm(1)};
          display: inline-block;
          font-style: normal;
        `}
      >
        SemanticScripting
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
      color:#fff;
          margin: ${rhythm(1)};
          display: inline-block;
          font-style: normal;
        float: right;
      `}
    >
      About me
    </Link>
  
    <Link
      to={`/contact/`}
      css={css`
        float: right;
        color:#fff;
          margin: ${rhythm(1)};
          display: inline-block;
          font-style: normal;
      `}
    >
      Contact me
    </Link>
    </div>
)