import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "../component/CoinInfo";
import { CryptoState } from "../Cryptocontext";
import { LinearProgress, styled, Typography } from "@mui/material";
import Parser from "html-react-parser";
import { numberWithCommas } from "./../component/Banner/Corousel";

const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const Onediv = styled("div")(({ theme }) => ({
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  }));
  const Sidediv = styled("div")(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  }));
  const Maindiv = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const DisTypography = styled(Typography)(({ theme }) => ({
    width: "100%",
    fontFamily: "Montserrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
  }));
  const HeadTypography = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  }));

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    };
    fetchCoin();
  }, []);

  if (!coin)
    return (
      <LinearProgress style={{ backgroundColor: "gold" }}></LinearProgress>
    );

  return (
    <Maindiv>
      <Sidediv>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <HeadTypography variant="h4">{coin?.name}</HeadTypography>
        <DisTypography>
          {Parser(`<p>${coin?.description.en.split(". ")[0]}</p>`)}
        </DisTypography>
        <Onediv>
          <span style={{ dispaly: "flex" }}>
            <HeadTypography variant="subtitle1">
              {`Rank : ${coin?.market_cap_rank}`}
            </HeadTypography>
            <HeadTypography variant="subtitle1">
              {`Current Price: ${symbol} ${numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}`}
            </HeadTypography>
            <HeadTypography variant="subtitle1">
              {`Market Cap: ${symbol} ${numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}`}
            </HeadTypography>
          </span>
        </Onediv>
      </Sidediv>
      <CoinInfo coin={coin} />
    </Maindiv>
  );
};

export default Coinpage;
