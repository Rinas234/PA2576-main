import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Register from "./page/Register";
import Contact from "./page/Contact";
import Explore from "./page/Explore";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          {/* Add your protected routes below */}
          {/* <ProtectedRoute path="/protected" component={ProtectedComponent} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
