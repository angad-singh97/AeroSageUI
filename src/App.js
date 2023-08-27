import './App.css';
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import {Link, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import AirportDetails from "./components/AirportDetails/AirportDetails";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import BlogpostPage from "./components/BlogpostPage/BlogpostPage";
import BlogpostHome from "./components/BlogpostHome/BlogpostHome";
import WorkInProgress from "./components/WorkInProgressPage/WorkInProgress";


function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/airports/:id" element={<AirportDetails/>}/>
                <Route path="/blogs" element={<BlogpostHome/>}/>
                <Route path="/blogs/:id" element={<BlogpostPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/wip" element={<WorkInProgress/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}

export default App;
