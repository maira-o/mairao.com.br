import React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </Layout>
)

export default IndexPage
