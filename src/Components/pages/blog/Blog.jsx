import React from 'react'
import { useEffect } from 'react';
import BlogDesign from './BlogDesign';
import PageSmallNav from '../../page-nav-small/PageSmallNav';
import baslikArkaPlan from '../images/title-img/hakkımızda.jpg'
import './blog.css'
import AllGetBlog from './AllGetBlog';
import Footer from '../../footer/Footer';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    return (
        <>
            <div className='page-big-title'>
                <img src={baslikArkaPlan}></img>
            </div>
            <div className='container blog-main'>
                <PageSmallNav currentPage="hakkımızda" />
                <h3 className='title-blog'>Blog</h3>

                <AllGetBlog />

            </div>


            <Footer />
        </>
    )
}

export default Blog