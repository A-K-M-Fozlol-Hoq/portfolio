import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="blogs-wapper" style={{background:'yellow', minHeight:'700px'}}>
            <h2 className='text-primary pt-5 text-center'>Blogs are coming soon</h2>
            </div>
        </div>
    );
};

export default Blogs;