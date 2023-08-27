import {useParams} from "react-router-dom";
import './blogpostPage.css';
import blogApiClient from "../../clients/axiosClient/blogApiClient";
import {useEffect, useState} from "react";

export default function BlogpostPage () {
    const [blogObj, setBlogObj] = useState(null);
    const [blogTitle, setBlogTitle] = useState(null);
    const {id} = useParams();

    async function fetchBlogFromBackend (inputValue) {
        try {
            console.log(`Calling API endpoint: ${blogApiClient.defaults.baseURL}/${inputValue.id}`);
            const response = await  blogApiClient.get(`/${inputValue.id}`);
            setBlogObj(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        fetchBlogFromBackend({id});
    },[]);

    useEffect(()=>{
        if (blogObj) {
            setBlogTitle(blogObj.blogTitle)
        } else {
            setBlogTitle("UNKNOWN")
        }
    },[blogObj]);

    const BlogHeader = ({blogTitle}) => (
        <div className="blog-details-header">
            <h1>
                {blogTitle}
            </h1>
        </div>
    );

    const BlogContent = ({ blog }) => (
        <div className="blog-details-content">
             <div dangerouslySetInnerHTML={{ __html: blog.blogText }} />
        </div>
    );

    const BlogDetailsContainer = ({ blog }) => {
        if (!blog) {
            return <div></div>; // Render an empty div if airport is null
        }
        return (
            <>
                <div className="airport-details-container">
                    <BlogHeader blogTitle={blog.blogTitle} />
                    <BlogContent blog={blog} />
                </div>

            </>
        );
    };
    const MainComponent = () => {

        return (
            <BlogDetailsContainer blog={blogObj}/>
        );
    }

    return (<MainComponent/>);
}
