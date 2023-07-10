import React from 'react';
import Carousel from "../../components/Carousel";
import BlogHighlights from "../../components/HomePanels/BlogHighlights";
import QuickActions from "../../components/HomePanels/QuickActions/QuickActions";
import UserInsights from "../../components/HomePanels/UserInsights/UserInsights";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="home-page-main-parent">
                <Carousel/>
                <div className="home-page-bottom-component-parent">
                    <QuickActions/>
                    <BlogHighlights/>
                    <UserInsights/>
                </div>
            </div>
        </>
    );
};


export default HomePage;