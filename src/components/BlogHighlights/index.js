import React from 'react';
import './BlogHighlights.css';
import img1 from "../../images/airport-blog.jpg";
import img2 from "../../images/airline-blog.png";
import img3 from "../../images/flight-blog.jpg";

const BlogHighlights = () => {
    return (
        <div className="blog-highlights">
            <div className="blog-entry">
                <img src={img1} alt="Blog Entry" />
                <div className="blog-text">
                    <h3>All About Airports</h3>
                    <p>Blog entry description</p>
                </div>
            </div>
            <div className="blog-entry">
                <img src={img2} alt="Blog Entry" />
                <div className="blog-text">
                    <h3>All About Airlines</h3>
                    <p>Blog entry description</p>
                </div>
            </div>
            <div className="blog-entry">
                <img src={img3} alt="Blog Entry" />
                <div className="blog-text">
                    <h3>All About Planes</h3>
                    <p>Blog entry description</p>
                </div>
            </div>
        </div>
    );
};

export default BlogHighlights;
