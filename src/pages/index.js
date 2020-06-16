import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Technology blogs
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div css={css `
          display: flex;
          justify-content:flex-start;
          flex-wrap: wrap;
        `}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} css={css `
              display: flex;
              flex-grow:1;
            `}>
            <img css={css`
              width:200px;
            `} src={node.frontmatter.banner} ></img>
            <Link
              to={node.fields.slug}
              css={css`
                margin-left:10px;
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
            
          </div>
        ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            category
            banner
          }
          fields {
            slug
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`