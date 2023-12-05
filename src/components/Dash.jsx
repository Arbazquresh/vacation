import { Card, CardContent, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import React from "react";
import { Link } from "react-router-dom";

export const Dash = () => {
  return (
    <Link to={"/dash"}>
      <Card style={{ marginLeft: 30, marginTop: "60px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <br />
              <Card>
                <CardContent>
                  <SchoolIcon />
                  <p>68</p>
                  <b>Total Vendors</b>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <br />

              <Card>
                <CardContent>
                  <PersonPinOutlinedIcon />
                  <p>64</p>
                  <b>Total Suppliers</b>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <br />

              <Card>
                <CardContent>
                  <PersonPinOutlinedIcon />
                  <p>64</p>
                  <b>Total Suppliers</b>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <br />

              <Card>
                <CardContent>
                  <PersonPinOutlinedIcon />
                  <p>64</p>
                  <b>Total Suppliers</b>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Dash;
