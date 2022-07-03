import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../ui/layout"
import DynamicToolBar from "../../component/productList/dynamicToolBar"
import ProductsArray from "../../component/productList/listOfProducts"
import {
  alphabetic,
  price,
} from "../../component/productList/sort/sortFunction"

const ProductList = ({ pageContext, data }) => {
  const filterOptionList = []
  pageContext.filterValues.map(option =>
    filterOptionList.push({ label: option, checked: false })
  )
  const [filterOptions, setFilterOptions] = useState(filterOptionList)
  const [sortOptions, setSortOptions] = useState([
    { label: "A-Z", active: true, function: data => alphabetic(data, "asc") },
    { label: "Z-A", active: false, function: data => alphabetic(data, "des") },
    { label: "PRICE ↑", active: false, function: data => price(data, "asc") },
    { label: "PRICE ↓", active: false, function: data => price(data, "des") },
  ])
  const [layout, setLayout] = useState("grid")

  return (
    <Layout>
      <DynamicToolBar
        sortOptions={sortOptions}
        setSortOptions={setSortOptions}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        name={pageContext.name}
        layout={layout}
        setLayout={setLayout}
      />
      <ProductsArray
        productList={data.products.edges}
        layout={layout}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
      />
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
