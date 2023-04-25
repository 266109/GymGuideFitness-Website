import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "30px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="10px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "80px",
          height: "80px",
          position: "absolute",
          left: "30px",
          top: "20px",
        }}
      />
    </Link>
    <Stack
      sx={{ marginTop: { sm: "10px", xs: "100px" } }}
      direction="row"
      gap="40px"
      fontSize="24px"
      fontWeight={800}
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          borderBottom: "3px solid white",
          fontFamily: "sans-serif",
        }}
      >
        Home
      </Link>

      <a
        href="#search"
        style={{
          textDecoration: "none",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        Exercises
      </a>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        Login
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
