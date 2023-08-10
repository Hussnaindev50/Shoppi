import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./Routes/protectedRoutes";
import AuthRoutes from "./Routes/auth";
// import Signup from "./Components/User/Signup";
// import Login from "./Components/User/Login";
import "./App.css";
import Header from "./Components/View/header";
function App() {
	const user = "";
	
  return (
		<div className="App">
			<Header/>
			<h3>Welcome to E-Shop!</h3>
      <Router>
        {user ? <ProtectedRoutes /> : <AuthRoutes />}
      </Router>
    </div>
  );
}

export default App;
