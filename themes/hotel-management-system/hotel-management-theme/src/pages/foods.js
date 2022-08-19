import React from "react"
import Layout from "../ui/layout"
import FoodCard from "../components/food"

const FoodsPage = () => {
  return (
    <Layout>
      <FoodCard
        imgUrl="https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NDYxNDYwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        title="Coke"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s."
        price="10"
        availability={true}
      />
    </Layout>
  )
}

export default FoodsPage
