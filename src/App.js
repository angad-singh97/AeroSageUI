import './App.css';
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
    return (<>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/search" element={<SearchPage/>}></Route>
            </Routes>
        </>)
}

export default App;
