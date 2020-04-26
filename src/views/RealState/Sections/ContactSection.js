import React from 'react';
import { title } from "assets/jss/material-kit-react.js";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from 'components/Grid/GridItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      flexGrow: 1,
      width: '25ch',
    },
    
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  description: {
    color: "#999",
    marginBottom : "5rem"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
}));

export default function ContactSection() {
    const classes = useStyles();


  return (
    <div className={classes.section}>
    <GridContainer className={classes.root}
    >
      <GridItem   xs={12} sm={12} md={12}>
        
        <GridContainer justify="space-between">
        <GridItem   xs={12} sm={12} md={4}>
      <h2 className={classes.title}>Contáctanos</h2>
      <h5 className={classes.description}>
        This is the paragraph where you can write more details about your
        product. Keep you user engaged by providing meaningful information.
        Remember that by this time, the user is curious, otherwise he wouldn
        {"'"}t scroll to get here. Add a button if you want the user to see
        more.
      </h5>
      </GridItem>
          <form  noValidate autoComplete="off">
          <GridItem xs={12} sm={12} md={4}>
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Nombre"
                variant="filled"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Email"
                variant="filled"
              />      
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
            <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
            <TextField
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Comentarios"
                variant="filled"
              />
              </GridItem>
          </form>
          </GridContainer>
          <GridItem   xs={12} sm={12} md={12}>
          <GridContainer justify="flex-end">
          <GridItem   xs={12} sm={12} md={4} >
              <Button variant="outlined" color="primary" > 
              Enviar
              </Button>
              </GridItem>
          </GridContainer>
          </GridItem> 
        </GridItem>
    </GridContainer>
    </div>
  );
}