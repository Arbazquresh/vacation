import React, { useState } from "react";
import { Grid, TextField, Button, Table } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [srno, setSrno] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addhar, setAddhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [occupation, setOccupation] = useState("");
  const [positions, setPositions] = useState("");

  const handlesubmit = () => {
    navigate("/table");
    const type = "ADD-DATA";
    const payload = {
      srno,
      name,
      address,
      addhar,
      mobile,
      occupation,
      positions,
    };
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(e) => setSrno(e.target.value)}
            variant="outlined"
            label="Enter Sr.No"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            label="Enter Full Name"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            variant="outlined"
            label="Enter Address"
            fullWidth
          />{" "}
          <br /> <br />
          <TextField
            onChange={(e) => setAddhar(e.target.value)}
            variant="outlined"
            label="Enter Addhar No"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => setMobile(e.target.value)}
            variant="outlined"
            label="Enter Mobile No"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => setOccupation(e.target.value)}
            variant="outlined"
            label="Enter Occupation"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => setPositions(e.target.value)}
            variant="outlined"
            label="Enter Positions"
            fullWidth
          />
          <br /> <br />
          <Grid item xs={12}>
            <Button
              onClick={handlesubmit}
              fullWidth
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="warning">
              Cancel
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};
