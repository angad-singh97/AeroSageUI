import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel'
import BlogHighlights from "./components/BlogHighlights";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h3>AeroSage</h3>
                </header>
            </div>

            <div className="outer-container">
                <div style={{width: '100%'}}>
                    <Carousel/>
                </div>
                <div style={{width: '33%', marginTop: '2px'}}>
                    <BlogHighlights/>
                </div>
            </div>
        </>
    );
}

export default App;
