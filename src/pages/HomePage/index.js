import React from 'react';
import Carousel from "../../components/Carousel";
import BlogHighlights from "../../components/BlogHighlights";

const HomePage = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>AeroSage</h1>
                </header>
            </div>
            <div className="home-page-main-parent">
                <Carousel/>
                <div className="home-page-bottom-component-parent">
                    <div>
                        <BlogHighlights/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default HomePage;