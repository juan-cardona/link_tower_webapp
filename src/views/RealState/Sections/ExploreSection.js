import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/realStateSections/conceptStyle.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

const useStyles = makeStyles(styles);

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const classes = useStyles();
  return (
    <GridContainer
    justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Yellowstone
                  National Park, United States
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Somewhere Beyond,
                  United States
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Yellowstone
                  National Park, United States
                </h4>
              </div>
            </div>
          </Carousel>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description} >
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem> 
    </GridContainer>
  );
}