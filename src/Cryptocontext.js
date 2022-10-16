import React, { createContext, useContext, useEffect, useState } from "react";
const Crypto = createContext();

const Cryptocontext = ({ children }) => {
  const [currency, setCurrency] = useState("LKR");
  const [symbol, setSymbol] = useState("Rs.");

  useEffect(() => {
    const sym = currency === "LKR" ? "Rs." : "$";
    setSymbol(sym);
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default Cryptocontext;

export const CryptoState = () => {
  return useContext(Crypto);
};
