import { Grid } from "@mui/material";
import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handledash = () => {
    navigate("/dash");
  };

  const handleForm = () => {
    navigate("/form");
  };

  const handlecal = () => {
    navigate("/calender");
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginTop: "20px" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <AppsIcon sx={{ fontSize: "20px" }} />
              <span style={{ marginLeft: "4px", lineHeight: "30px" }}>
                <b>Admin</b>
              </span>
            </span>
            <hr style={{ marginLeft: "10px" }} />
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <DisplaySettingsIcon fontSize="15px" />

              <span
                onClick={handledash}
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Dashboard
              </span>
            </span>
          </Grid>
          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <CalendarMonthOutlinedIcon fontSize="15px" />
              <span
                onClick={handlecal}
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Calender
              </span>
            </span>
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <DateRangeOutlinedIcon fontSize="15px" />
              <span
                onClick={handleForm}
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Forms
              </span>
            </span>
          </Grid>
          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <TableChartOutlinedIcon fontSize="15px" />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Table
              </span>
            </span>
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <SettingsOutlinedIcon fontSize="15px" />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Settings
              </span>
            </span>
            <hr style={{ marginLeft: "10px", opacity: "0.3" }} />
            <br />
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <DescriptionOutlinedIcon fontSize="15px" />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Notes
              </span>
            </span>
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <PersonAddAltOutlinedIcon fontSize="15px" />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Vendors
              </span>
            </span>
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <DonutSmallIcon fontSize="15px" />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Charts
              </span>
            </span>
          </Grid>

          <Grid item xs={12}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <AccountCircleIcon fontSize="15px" />
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  lineHeight: "20px",
                }}
              >
                Profile
              </span>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
