// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './index.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function LoginNav() {
  return (
    React.createElement("h1", null, "Login")
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginNav />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// function mainNav() {
//   return (
//     React.createElement("Link to='/login'", null, "Login")
//   );
// }

export default App;
