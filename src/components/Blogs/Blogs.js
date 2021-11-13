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
            <div style={{background:'#000', height:'5px', width:'250px', margin:'auto', marginTop:'-30px', marginBottom:'70px'}}></div>
            <div className="all-blogs" style={{ minHeight:'700px', marginBottom:'100px'}}>
            {
                allBlogs.map((blog,index) => 
                <a href={blog.url} target="_blank" rel="noreferrer"  key={index} >
                <div className='single-blog'>
                   <div className="blog-info">
                        <img src={blog.img} alt="" />
                        <h3 className='mt-2 '>{blog.title}</h3>
                   </div>
                       <div className="blog-link">
                        <h2 className='text-center text-white' style={{paddingTop:'150px'}}>READ MORE...</h2>
                    </div>
                   
                </div>
                
                </a>)
            }
            </div>
            <div style={{height: '200px', backgroundColor:'#000'}} className='more-blogs'>
                <p style={{fontSize:'40px', color:'#fff', textAlign:'center', paddingTop:'70px'}} 
                >To see more blogs, please visit: <a href="https://akmfozlolhoq.medium.com/" target="_blank" rel='noreferrer'>Here</a></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;