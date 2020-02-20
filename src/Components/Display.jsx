import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Display.css";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'black',
    height: '100%',
  },
});

const Display = props => {
  const classes = useStyles();
  
  const [startDate, setStartDate] = useState(new Date());
  const [dateBool, setDateBool] = useState(true);
  const [dateLoader, setDateLoader] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const dateHandler = e => {
    setStartDate(e);
    setDateLoader(e.toISOString().slice(0, 10));
    setDateBool(dateBool ? false : true);
  };

  useEffect(() => {
    if (dateBool === true) {
      axios(
        `https://api.nasa.gov/planetary/apod?api_key=2WMibPBLcne3gkungmmKltcZNFPsM4vlP2xlddJg`
      )
        .then(response => {
          setImage(response.data.url);
          setTitle(response.data.title);
          setDesc(response.data.explanation);
        })
        .catch(error => console.error("Could not obtain Image data ", error));
    } else if (dateBool === false) {
      axios(
        `https://api.nasa.gov/planetary/apod?api_key=2WMibPBLcne3gkungmmKltcZNFPsM4vlP2xlddJg&date=${dateLoader}`
      )
        .then(response => {
          console.log(response);
          // setNasa(response.data);
          setImage(response.data.url);
          setTitle(response.data.title);
          setDesc(response.data.explanation);
          setDateBool(true);
        })
        .catch(error => console.error("Could not obtain Image data ", error));
    }
  }, [startDate]);

  return (
    <Container className={classes.root} height="100%">
      <div className="nasa-image-container">
        <img src={image} alt={title} />

      </div>
      <DatePicker
        showPopperArrow={false}
        dateFormat="MM/dd/yyyy"
        selected={startDate}
        onSelect={date => dateHandler(date)}
      />
      {/* <Button variant="contained" color="primary"  onClick={() => console.log(startDate, dateLoader, dateBool)}>click</Button> */}

      <Details title={title} explanation={desc} />
    </Container>
  );
};

export default Display;