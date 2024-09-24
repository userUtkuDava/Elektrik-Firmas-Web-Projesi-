import React from 'react'
import './footer.css'
import { SiMinutemailer } from "react-icons/si";
import { VscLocation } from "react-icons/vsc";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FiDisc } from "react-icons/fi";
import { FiCornerRightDown } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {

    return (
        <>
            <div className="container-fluid mt-5 bg-dark ">

                <footer className="text-white text-center text-lg-start ">
                    <div className="container p-4">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-3 mb-md-0 ">
                                <h5 className="text-uppercase mb-4 fw-bold">Şirket Hakkında</h5>

                                <div className='bg-light footer-logo'>
                                    <img
                                        src='logodas.png' className='footer-logo'>

                                    </img>
                                </div>

                                <p className='text-light fw-lighter mt-2'>
                                    <strong className='footer-text'>Das Elektrik</strong>, endüstriyel ve ticari alanlarda geniş bir elektrik ürünleri yelpazesi sunan bir toptan elektrikçi olarak sektördeki yerini sağlamlaştırmıştır. Müşterilerimize en yüksek kalitede ürünler sunmayı, teknolojik yeniliklere ayak uydurmayı ve sektörün gereksinimlerine uygun çözümler geliştirmeyi hedefliyoruz.
                                </p>



                            </div>



                            <div className="col-lg-4 col-md-6 mb-3 mb-md-0 ">
                                <h5 className="text-uppercase mb-4 fw-bold">Teklif Al</h5>
                                <p className='text-light fw-lighter'>Mail Adresinizi girin ve size özel tekliflerden haberder olun</p>
                                <div className='col-md-3 footer-mail'>
                                    <div className='flex-row  mail-block'>
                                        <input placeholder='Email Adresinizi Giriniz'></input>
                                        <button><SiMinutemailer className='mb-1' /></button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 mb-3 mb-md-0 ">
                                <h5 className="text-uppercase mb-4 pb-1 fw-bold">Bize Ulaşın</h5>

                                <ul className="fa-ul">
                                    <li className="mb-4">
                                        <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">
                                            <FaLocationDot className='footer-icons' />Bağlar, semdal22@gmail.com, 34212 Bağcılar/İstanbul</span>

                                    </li>
                                    <li className="mb-4">
                                        <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2"><SiMinutemailer className='footer-icons' />info@example.com</span>
                                    </li>
                                    <li className="mb-4">
                                        <FaPhone className='footer-icons' /> 01 234 567 88
                                    </li>
                                    <li className="mb-4">
                                        <BsWhatsapp className='footer-icons' /> 01 234 567 88
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>



                    <div className="text-center p-3" >
                        <p className='text-danger'>Yayımlanmadı</p> Tahmini Bitiş Tarihi
                        <a className="text-white" href="#">     2.10.24</a>
                    </div>
                </footer >

            </div >

        </>
    )
}

export default Footer