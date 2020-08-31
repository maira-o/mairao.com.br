import React from 'react'
import { graphql } from 'gatsby'

const BlogPost = () => {

  const { MarkdownRemark } = graphql`
    query Post($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug }}) {
        frontmatter {
          title
        }
        html
      }
    }
  `
  const post = MarkdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )

}

export default BlogPost