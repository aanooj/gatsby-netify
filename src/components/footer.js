import React from 'react';
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"


export default () => (
    <div css={css`
        display:flex;
        color: #fff;
        background: #000;
        margin-bottom: ${rhythm(1)}
        height:100px;
    `}>
    
        <Link
        to={`/contact/`}
        css={css`
            float: right;
            color:#fff;
            padding: ${rhythm(1)};
            display: inline-block;
            font-style: normal;
        `}
        >
        Anooj Ayyappan
        </Link>
    </div>
)