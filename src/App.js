import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ListUsers from "./components/ListUsers";
import Navbar from "./components/Dashboard";
import EditUser from "./components/EditUser";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import Developer from "./components/developer";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        marginLeft: "80px",
        marginRight: "80px",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
