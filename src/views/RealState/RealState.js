import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ConceptSection from "./Sections/ConceptSection.js";
import ExploreSection from "./Sections/ExploreSection.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function RealState(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Link Tower"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/building.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Tu historia inicia con nosotros.</h1>
                <h4>
                  Every landing page needs a small description after the big bold
                  title, that{"'"}s why we added this text here. Add here all the
                  information that can make you or your product create the first
                  impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ThreeDRotation/>
                  Explorar en Realidad Virtual.
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ConceptSection />
          <ExploreSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  