import React from 'react'
import './blog.css'
import PageSmallNav from '../../page-nav-small/PageSmallNav';
import baslikArkaPlan from '../images/title-img/hakkımızda.jpg';

const BlogDetailDesign = ({ blog }) => {

    const { id, text, katagori, baslik, description, tarih, yazar, url } = blog;
    return (
        <>
            <div className='page-big-title'>
                <img src={baslikArkaPlan}></img>
            </div>
            <div className='container'>
                <PageSmallNav currentPage="hakkımızda" />
                <h3 className='title-blog'>Blog</h3>
            </div>
            <div className='container col-sm-12 content-box'>
                <div className='row '>
                    <div className='blog-img col-sm-12'>

                        <img src={`../${url}`} alt="" />
                    </div>
                    <div className='blog-detail '>
                        <p className='catagory'>{katagori}</p>
                        <h2 className='baslik'>{baslik}</h2>



                        <p className='metin'>{text}</p>
                        <h6 className='tarih'>{tarih}</h6>
                        <div className='user-info flex-row'>
                            <div className='user-box'>
                                <img className='user-img' src='https://via.placeholder.com/150x150?text=Image'  ></img>
                                <p className='user-name'>
                                    {yazar}
                                </p>
                            </div>
                            <div>
                                <a className='detail'>

                                </a>

                            </div>
                        </div>



                    </div>

                </div>
            </div >
        </>
    )
}

export default BlogDetailDesign