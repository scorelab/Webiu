import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../ui/layout"
import DynamicToolBar from "../../component/productList/dynamicToolBar"
import ProductsArray from "../../component/productList/listOfProducts"

const ProductList = ({ pageContext, data }) => {
  const filterOptionList = []
  console.log(pageContext)
  pageContext.filterValues.map(option =>
    filterOptionList.push({ label: option, checked: false })
  )
  const [filterOptions, setFilterOptions] = useState(filterOptionList)
  const [sortOptions, setSortOptions] = useState([
    { label: "A-Z", active: true },
    { label: "Z-A", active: false },
    { label: "NEWEST", active: false },
    { label: "OLDEST", active: false },
    { label: "PRICE ↑", active: false },
    { label: "PRICE ↓", active: false },
  ])
  console.log(filterOptions)
  console.log(data)
  return (
    <Layout>
      <DynamicToolBar
        sortOptions={sortOptions}
        filterOptions={filterOptions}
        name={pageContext.name}
      />
      <ProductsArray productList={data.products.edges} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategoryProducts($name: String!) {
    products: allItem(filter: { maincategory: { eq: $name } }) {
      edges {
        node {
          details
          id
          image
          maincategory
          name
          price
          quantity
          subcategory
        }
      }
    }
  }
`

export default ProductList
