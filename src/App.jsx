import {Home} from "./pages/home/Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Profile} from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/register"element={<Register/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
