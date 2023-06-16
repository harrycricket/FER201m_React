import React, { Component, useContext, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
export default function Navigation({ colorMode }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = useState(1);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <Grid2
        className="navBar"
        container
        sx={{
          backgroundColor: theme.palette.background.nav,
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          height: "60px",
          padding: "auto 0",
        }}
      >
        <Grid2 xs={3}>
          <Typography
            sx={{ fontSize: "2.4rem", marginLeft: "60px" }}
            color="brands.main"
          >
            Player Cards
          </Typography>
        </Grid2>
        <Grid2
          xs={9}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              onClick={() => navigate("/")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <HomeIcon /> <Typography>Home</Typography>
                </Box>
              }
              value={1}
            />
            <Tab
              onClick={() => navigate("/about")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <InfoOutlinedIcon /> <Typography> About</Typography>
                </Box>
              }
              value={2}
            />
            <Tab
              onClick={() => navigate("/news")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <ArticleOutlinedIcon /> <Typography> New</Typography>
                </Box>
              }
              value={3}
            />

            <Tab
              onClick={() => navigate("/contact")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <ContactsOutlinedIcon /> <Typography>Contact</Typography>
                </Box>
              }
              value={4}
            />
            <Tab
              onClick={() => navigate("/add")}
              label={
                <Box sx={{ display: "flex" }}>
                  <PersonAddAlt1Icon /> <Typography>Add player</Typography>
                </Box>
              }
              value={5}
            />
          </Tabs>
        </Grid2>
      </Grid2>
      <Box sx={{ height: "60px", width: "100%" }}></Box>
    </>
  );
}
