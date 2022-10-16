import axios from "axios";
import React, { useState, useEffect } from "react";
import { CryptoState } from "../../Cryptocontext";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Corousel = () => {
  const [trending, setTrending] = useState([]);

  const CourseLink = styled(Link)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  }));

  const Alice = styled(AliceCarousel)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  }));

  const corousel = {
    height: "50%",
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  };

  const corouseItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  };

  const { currency, symbol } = CryptoState();

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <CourseLink to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin.symbol}
          <span
            style={{
              color: profit ? "rgb(14,203,129" : "red",
              fontWeight: 500,
            }}
          >
            {profit
              ? ` +${coin.price_change_percentage_24h.toFixed(2)}%`
              : ` ${coin.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {`${symbol} ${numberWithCommas(coin.current_price.toFixed(2))}`}
        </span>
      </CourseLink>
    );
  });

  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    };
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div style={corousel}>
      <Alice
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Corousel;
