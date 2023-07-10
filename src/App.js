import './App.css';
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import {Link, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import AirportDetails from "./components/AirportDetails/AirportDetails";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/airports/:id" element={<AirportDetails/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}

export default App;
