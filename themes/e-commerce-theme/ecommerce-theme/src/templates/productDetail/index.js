import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons"
import Layout from "../../ui/layout"
import ClickableCard from "../../ui/clickableCard"
import Typography from "@material-ui/core/Typography"
import Styles from "./styles"
import Button from "@material-ui/core/Button"

const ProductDetail = ({ pageContext }) => {
  const [quantity, setQuantity] = useState(1)
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
  return (
    <Layout>
      <Grid
        container
        direction="column"
        classes={{ root: classes.masterContainer }}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            classes={{ root: classes.mainContainer }}
            justifyContent="space-around"
          >
            <Grid item>
              <ClickableCard
                img={pageContext.image}
                imageContainerStyle={{ width: 260, height: 380 }}
                imageStyle={{ width: 260, height: 380 }}
              />
            </Grid>
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
                        classes={{ root: classes.cartAdditionStyle }}
                      >
                        <Grid item>
                          <FontAwesomeIcon
                            icon={faSquarePlus}
                            size="2x"
                            onClick={additionHandler}
                          />
                        </Grid>
                        <Grid item>
                          <Typography>{quantity}</Typography>
                        </Grid>
                        <Grid item>
                          <FontAwesomeIcon
                            icon={faSquareMinus}
                            size="2x"
                            onClick={subtractionHandler}
                          />
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
                          <Button classes={{ root: classes.btnStyle }}>
                            Add To Cart
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button classes={{ root: classes.buyBtnStyle }}>
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
        <Grid item>
          <Typography variant="h3">Reviews</Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ProductDetail
