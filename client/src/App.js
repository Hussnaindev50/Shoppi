import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes/routes";

import "./App.css";
import Header from "./Components/View/header";
import Footer from "./Components/View/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <h3>Welcome to E-Shop!</h3>
      {/* <Products /> */}
      <Router>
        <AllRoutes />
			</Router>
			<Footer/>
    </div>
  );
}

export default App;
