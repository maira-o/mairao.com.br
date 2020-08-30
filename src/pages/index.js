import React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <PostItem 
      slug="/about/"
      category="wcag"
      background="blue"
      date="30 de Agosto de 2020"
      timeToRead="5"
      title="Acessibilidade Web"
      description="Algumas razões pelas quais devemos criar a web com acessibilidade em mente."
    />
  </Layout>
)

export default IndexPage
