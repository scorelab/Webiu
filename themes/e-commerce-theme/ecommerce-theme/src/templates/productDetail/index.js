import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import Layout from "../../ui/layout"
import ClickableCard from "../../ui/clickableCard"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import Button from "@material-ui/core/Button"
import { CartContext } from "../../contexts"
import { addToCart } from "../../contexts/actions/cart-actions"
import { useMediaQuery } from "@material-ui/core"

const ProductDetail = ({ pageContext }) => {
  const [quantity, setQuantity] = useState(1)
  const { cart, dispatchCart } = useContext(CartContext)
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const classes = Styles({ quantity, amount: pageContext.quantity })
  const additionHandler = () => {
    if (quantity < pageContext.quantity) {
      setQuantity(quantity + 1)
    }
  }
  const subtractionHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleCart = () => {
    dispatchCart(
      addToCart(
        pageContext.id,
        pageContext.image,
        quantity,
        pageContext.name,
        pageContext.price,
        pageContext.quantity
      )
    )
  }
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            classes={{ root: classes.mainContainer }}
            justifyContent={matchesMD ? "flex-start" : "space-around"}
          >
            {matchesMD ? (
              <Grid item>
                <ClickableCard
                  img={pageContext.image}
                  containerStyle={{
                    height: "420px",
                    width: "300px",
                    margin: "0px 0px 50px 0px",
                    borderRadius: 10,
                    backgroundColor: "#fff",
                    boxShadow: 5,
                  }}
                  imageContainerStyle={{ width: 260, height: 380 }}
                  imageStyle={{ width: 260, height: 380 }}
                />
              </Grid>
            ) : (
              <Grid item>
                <ClickableCard
                  img={pageContext.image}
                  imageContainerStyle={{ width: 260, height: 380 }}
                  imageStyle={{ width: 260, height: 380 }}
                />
              </Grid>
            )}
            <Grid item>
              <Grid
                container
                direction="column"
                classes={{ root: classes.detailContainer }}
              >
                <Grid item classes={{ root: classes.wrapper }}>
                  <Typography align="center" variant="h3">
                    {pageContext.name}
                  </Typography>
                  <Typography align="center" variant="body1">
                    ${pageContext.price}
                  </Typography>
                  <Typography align="center" variant="body1">
                    {pageContext.details}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-around"
                    classes={{ root: classes.container }}
                  >
                    <Grid item>
                      <Typography variant="h3">Quantity</Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        classes={{ root: classes.cartAdditionStyle }}
                      >
                        <Grid item>
                          <IconButton onClick={additionHandler}>
                            <FontAwesomeIcon
                              icon={faPlusSquare}
                              size="1x"
                              color="#000"
                            />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <Typography>{quantity}</Typography>
                        </Grid>
                        <Grid item>
                          <IconButton onClick={subtractionHandler}>
                            <FontAwesomeIcon
                              icon={faMinusSquare}
                              size="1x"
                              color="#000"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        classes={{ root: classes.btnContainer }}
                        justifyContent="space-around"
                      >
                        <Grid item>
                          <Button
                            component={Link}
                            to="/cart"
                            classes={{ root: classes.btnStyle }}
                            onClick={handleCart}
                          >
                            Add To Cart
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            component={Link}
                            to="/shipping"
                            classes={{ root: classes.buyBtnStyle }}
                          >
                            Buy Now
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item>
          <Typography variant="h3">Reviews</Typography>
        </Grid> */}
      </Grid>
    </Layout>
  )
}

export default ProductDetail
