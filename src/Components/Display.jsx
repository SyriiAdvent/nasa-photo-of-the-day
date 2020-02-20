import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Display.css";

import Button from '@material-ui/core/Button';

const Display = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [dateBool, setDateBool] = useState(true);
  const [dateLoader, setDateLoader] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const dateHandler = e => {
    setStartDate(e);
    // const year = startDate.getFullYear();
    // const month = startDate.getMonth() + 1;
    // const day = startDate.getDate();
    setDateLoader(e.toISOString().slice(0, 10));
    // setDateLoader(`${year}-${month}-${day}`);
    setDateBool(dateBool ? false : true);
  };

  useEffect(() => {
    if (dateBool === true) {
      axios(
        `https://api.nasa.gov/planetary/apod?api_key=2WMibPBLcne3gkungmmKltcZNFPsM4vlP2xlddJg`
      )
        .then(response => {
          // console.log(response);
          // setNasa(response.data);
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
    <div className="display-container">
      <div className="nasa-image-container">
        <img src={image} alt={title} />
      </div>
      <DatePicker
        showPopperArrow={false}
        dateFormat="MM/dd/yyyy"
        selected={startDate}
        onSelect={date => dateHandler(date)}
        // onChange={date => setStartDate(date)}
      />
      {/* <Button variant="contained" color="primary"  onClick={() => console.log(startDate, dateLoader, dateBool)}>click</Button> */}

      <Details title={title} explanation={desc} />
    </div>
  );
};

export default Display;

// const calanderDate = () => {
//   const year = startDate.getFullYear();
//   const month = startDate.getMonth();
//   const day = startDate.getDate();

//   return `${year}-${month}-${day}`;
// };

// console.log(calanderDate());

// startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
// console.log(calanderDate);
