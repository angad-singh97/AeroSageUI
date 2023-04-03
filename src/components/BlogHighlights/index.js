import React from 'react';
import './BlogHighlights.css';

const BlogHighlights = () => {
    return (
        <div className="blog-highlights">
            <div className="blog-entry">
                <img src="https://via.placeholder.com/150x100" alt="Blog Entry" />
                <div className="blog-text">
                    <h3>All About Airports</h3>
                    <p>Blog entry description</p>
                </div>
            </div>
            <div className="blog-entry">
                <img src="https://via.placeholder.com/150x100" alt="Blog Entry" />
                <div className="blog-text">
                    <h3>All About Airlines</h3>
                    <p>Blog entry description</p>
                </div>
            </div>
            <div className="blog-entry">
                <img src="https://via.placeholder.com/150x100" alt="Blog Entry" />
                <div className="blog-text">
                    <h3>All About Planes</h3>
                    <p>Blog entry description</p>
                </div>
            </div>
        </div>
    );
};

export default BlogHighlights;
