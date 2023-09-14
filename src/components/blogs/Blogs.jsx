import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark, handleRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div className=" w-3/4">
            {
                blogs.map(blog => <Blog key={blog.id} handleRead={handleRead} handleBookmark={handleBookmark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleRead: PropTypes.func.isRequired,
}

export default Blogs;