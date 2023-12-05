import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Grid } from "@mui/material";

export const Calender = () => {
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Calendar onChange={changeValue} value={date} />
          <p>The selected date is - {date.toLocaleDateString()}</p>
        </Grid>
      </Grid>
    </div>
  );
};
