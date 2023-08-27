import React from 'react';
import './BlogHomePanel.css';
import img1 from "../../../images/airport-blog.jpg";
import img2 from "../../../images/airline-blog.png";
import img3 from "../../../images/flight-blog.jpg";
import {NavLink} from "react-router-dom";

const BlogHomePanel = () => {
    return (
        <div className="blog-home-highlights flex-homepage-item">
            <NavLink to="/blogs/1" className="blog-home-entry">
                <div className="blog-home-text">
                    <img src={img1} alt="Blog Entry" />
                    <p className="blog-title-text">Top 10 Airports by Daily Traffic</p>
                    <p className="blog-description-text">+ bonus tips!</p>
                </div>
            </NavLink>
            <NavLink to="/blogs/2" className="blog-home-entry">
                <div className="blog-home-text">
                    <img src={img2} alt="Blog Entry" />
                    <p className="blog-home-title-text">Fastest Growing Airlines: 2023</p>
                    <p className="blog-home-description-text">+ start your own airline?</p>
                </div>
            </NavLink>
            <NavLink to="/blogs/3" className="blog-home-entry">
                <div className="blog-home-text">
                    <img src={img3} alt="Blog Entry" />
                    <p className="blog-home-title-text">All About Planes</p>
                    <p className="blog-home-description-text">+ you can fly them after reading this</p>
                </div>
            </NavLink>
        </div>
    );
};


export default BlogHomePanel;
