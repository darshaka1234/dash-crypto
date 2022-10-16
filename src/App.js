import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";

function App() {
  const style = {
    backgroundColor: "#040f24",
    color: "white",
    minHeight: "100vh",
  };

  return (
    <Router>
      <div style={style}>
        <Header />
        <Routes>
          <Route path="" element={<Homepage />}></Route>
          <Route path="coins/:id" element={<Coinpage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
