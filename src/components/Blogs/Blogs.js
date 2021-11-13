import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import {allBlogs} from './blogsData'
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="blogs-wrapper" style={{backgroundColor: '#FFFBF0'}}>
            <Navbar></Navbar>
            <h1 className="pb-5 text-center">BY BLOGS AT MEDIUM</h1>
            <div className="all-blogs" style={{ minHeight:'700px', marginBottom:'100px'}}>
            {
                allBlogs.map((blog,index) => 
                <div className='single-blog' key={index}>
                   <div className="blog-info">
                        <img src={blog.img} alt="" />
                        <h3 className='mt-2 '>{blog.title}</h3>
                   </div>
                   <div className="blog-link" >
                       <h2 className='text-center '>Read blog</h2>
                   </div>
                </div>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;