import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();

export default function BlogPost({ data}) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>Tags: {post.frontmatter.tags}</p>
        <p>Category: {post.frontmatter.category}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        category
      }
    }
  }
`