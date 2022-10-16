import React from "react";
import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CryptoState } from "../Cryptocontext";

const Header = () => {
  const HeaderStyle = {
    flex: 1,
    fontFamily: "Montserrat",
    color: "gold",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      main: "#040f24",
    },
  });
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => navigate("")}
              style={HeaderStyle}
            >
              Dash MarketCap
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"LKR"}>LKR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
