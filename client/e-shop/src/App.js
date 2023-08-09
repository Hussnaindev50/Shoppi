import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./Routes/protectedRoutes";
import AuthRoutes from "./Routes/auth";
// import Signup from "./Components/User/Signup";
// import Login from "./Components/User/Login";
import "./App.css";
function App() {
	const user = "";
	
  return (
		<div className="App">
			<h3>Welcome to E-Shop!</h3>
      <Router>
        {user ? <ProtectedRoutes /> : <AuthRoutes />}
        {/* <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/log11in" element={<Login />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
