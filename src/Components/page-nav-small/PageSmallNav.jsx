import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";



const PageSmallNav = ({ currentPage }) => {


    const getNavText = () => {
        switch (currentPage) {
            case 'hakkımızda':
                return 'hakkımızda';

            case 'hizmetler':
                return 'Hizmetler';
            case 'iletisim':
                return 'İletisim';
            default:
                return 'Sayfa';
        }
    };


    return (
        <div className='container pages-links'>
            <Link to={"/"}> <a href='#'>Ansayfa</a ></Link> <IoIosArrowForward />      <Link to={`/${getNavText()}`}> <a href='#'>{getNavText()}</a></Link>


        </div>
    )
}

export default PageSmallNav