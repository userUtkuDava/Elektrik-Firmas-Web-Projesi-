import { Component } from 'react';
import React, { useEffect, useState } from 'react'
import './menu.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Blog from '../pages/blog/Blog';


import { MdHome } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { ImBlog } from "react-icons/im";
import { GoCrossReference } from "react-icons/go";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";


const Menu = () => {


    const [mobilebBtn, setMobilBtn] = useState('bi bi-list');
    const [menuActive, setMenuActive] = useState('mobile-menu');

    const toggleIcon = () => {
        setMobilBtn(prevClass => prevClass === 'bi bi-list' ? 'bi bi-x' : 'bi bi-list');

        setMenuActive(prevClass => prevClass === 'mobile-menu-active' ? 'mobile-menu' : 'mobile-menu-active');
        console.log(menuActive);
        console.log(mobilebBtn)
    };

    return (

        <>


            <nav className='nav'>

                <div className='logo'>
                    <img
                        src='logodas.png'
                        alt='Das Elektrik Logo'
                        title='Das Elektrik'
                    >

                    </img>

                </div>


                <div >

                    <ul id='navbar' >
                        <Link to={"/"}><li><MdHome className='nav-ico' /><a href='#' className='active'>Ansayfa</a ></li></Link>
                        <Link to={"katalog"}><li><AiFillProduct className='nav-ico' /><a href='#'>Ürünler</a></li></Link>
                        <Link to={"blog"}> <li><ImBlog className='nav-ico' /><a href='#'>Blog</a></li></Link>
                        <Link to={"hakkımızda"}><li><GoCrossReference className='nav-ico' /><a href='#'>Hakkımızda</a></li></Link>
                        <Link to={"İletisim"}><li><RiCustomerService2Fill className='nav-ico' /><a href='#'>İletişim</a></li></Link>
                        <Link to={"hizmetler"}><li><RiServiceLine className='nav-ico' /><a href='#'>Hizmetlerimiz</a></li></Link>
                        <Link to={"hizmetler"}><li className='teklif'> <BsBoxArrowInUpRight className='nav-ico' />Teklif Al</li></Link>
                    </ul>
                </div>
                <div>
                    <button className='mobile-menu-button' onClick={toggleIcon}>
                        <i class={mobilebBtn}></i>
                    </button>

                </div>

            </nav>
            <div className={menuActive}>
                <ul className='deneme '>
                    <Link to={"/"} onClick={toggleIcon}>
                        <li>
                            <MdHome className='nav-ico' />
                            Ansayafa
                        </li>
                    </Link>
                    <Link to={"/katalog"} onClick={toggleIcon}>
                        <li>
                            <AiFillProduct className='nav-ico' />
                            Ürünler
                        </li>
                    </Link>
                    <Link to={"/blog"} onClick={toggleIcon}>
                        <li>
                            <ImBlog className='nav-ico' />
                            Blog
                        </li>
                    </Link>
                    <Link to={"/hakkımızda"} onClick={toggleIcon}>
                        <li>
                            <GoCrossReference className='nav-ico' />
                            Hakkımızda
                        </li>
                    </Link>
                    <Link to={"/İletisim"} onClick={toggleIcon}>
                        <li>
                            <RiCustomerService2Fill className='nav-ico' />
                            iletisim
                        </li>
                    </Link>
                    <Link to={"/hizmetler"} onClick={toggleIcon}>
                        <li>
                            <RiServiceLine className='nav-ico' />
                            Hizmetler
                        </li>
                    </Link>
                    <Link to={"hizmetler"} onClick={toggleIcon}><li className='teklif text-danger p-0'> <BsBoxArrowInUpRight className='nav-ico' />Teklif Al</li></Link>
                    <button id='menu-close-btn' className='mobile-menu-button' onClick={toggleIcon}>
                        <i className={mobilebBtn} ></i>
                    </button>

                </ul>

            </div>
        </>
    )

}


export default Menu