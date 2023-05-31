//\src\App.js  
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Register from "./page/Register";
import Explore from "./page/Explore";
import CreateEvent from './CreateEvent';
import ProtectedRoute from './ProtectedRoute';
import EventDashboard from './EventDashboard';
import EventDetails from './EventDetails';
import EventsList from './EventsList';
import About from './page/About';  // New import here
import Contact from './page/Contact';  // New import here



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/createevent" element={<ProtectedRoute />} />
          <Route path="/eventdashboard" element={<ProtectedRoute />} />
          <Route path="/about" element={<About />} />  // New route here
          <Route path="/Contact" element={<Contact />} />  // New route here


          <Route
            path="/eventdashboard/*"
            element={<ProtectedRoute userTypeRequired="event_organizer" />}
          >
            <Route index element={<EventDashboard />} />
            <Route path="createevent" element={<CreateEvent />} />

            {/* Add more nested routes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
