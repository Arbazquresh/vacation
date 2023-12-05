import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// jider data chaiye udher map maaro
export const Table = () => {
  const mydata = useSelector((state) => state.senddataReducer.alldata);

  return (
    <React.Fragment>
      <center>
        <h1>Table Component</h1>
      </center>
      <Grid container spacing={3}>
        {mydata.map((item) => (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <table border="1">
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Addhar Card</th>
                    <th>Mobile</th>
                    <th>Occupation</th>
                    <th>Position</th>
                  </tr>
                  <tr>
                    <td>{item.srno}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.addhar}</td>
                    <td>{item.mobile}</td>
                    <td>{item.occupation}</td>
                    <td>{item.positions}</td>
                  </tr>
                </table>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
