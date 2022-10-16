import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Corousel from "./Corousel";

const Banner = () => {
  const bannerStyle = {
    height: 500,
    flexDirection: "column",
    display: "flex",
    paddingTop: 25,
    justifyContent: "space-around",
  };

  const tagline = {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  const TypoStyle = {
    fontFamily: "Montserrat",
    color: "gold",
    fontWeight: "bold",
    marginBottom: 10,
  };

  return (
    <div
      style={{
        backgroundImage: "url(./19.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container style={bannerStyle}>
        <div style={tagline}>
          <Typography variant="h1" style={TypoStyle}>
            Dash MarketCap
          </Typography>
          <Typography
            variant="subtitle2"
            color="darkgrey"
            styles={{
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Bulid Your Future With Us. Join Now ON DASH CRYPTO
          </Typography>
          <Corousel />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
