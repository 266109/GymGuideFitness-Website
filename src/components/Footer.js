import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "100px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      flexWrap="wrap"
      pb="5px"
    >
      "Transform your body, elevate your mind <br /> Your ultimate fitness guide
      to reach your goals."
    </Typography>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      flexWrap="wrap"
      pb="10px"
    >
      Made by Naman Jain, Naman Sahu,
      <br /> Harsh Bhurrak
    </Typography>
  </Box>
);

export default Footer;
