import React from 'react'
import { useEffect } from 'react';
import baslikArkaPlan from '../images/iletisim.jpg'
import PageSmallNav from '../../page-nav-small/PageSmallNav';
import './iletisim.css'
import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineDirectionsWalk } from "react-icons/md";
import Footer from '../../footer/Footer';

const İletişim = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='page-big-title'>
                <img src={baslikArkaPlan}></img>
            </div>
            <div className="container iletisim">
                <PageSmallNav currentPage={"iletisim"} />
                <h3 className='title-blog'>İletisim</h3>
                <div className='col-md-12 iletisim-content '>
                    <div className='row '>
                        <div className='col-sm-12 col-md-4 p-3'>
                            <div className='iletisim-content-box  p-3'>
                                <h5>
                                    Adres <PiMapPinLineDuotone />
                                </h5>
                                <p className='description'>
                                    Bağlar, semdal22@gmail.com, 34212 Bağcılar/İstanbul

                                </p>

                                <p>
                                    <hr></hr>
                                    Sizleri Ağırlamaktan gurur duyarız<span className='vurgu'> Das Elektrik</span>
                                    <br></br><br></br>
                                    Haftaiçi 07:00 : 19:00<br></br>
                                    Cumartesi 07:00 : 19:00


                                </p>

                            </div>
                        </div>

                        <div className='col-sm-12 col-md-4 p-3'>
                            <div className='iletisim-content-box  p-3'>
                                <h5>
                                    Telefon <MdLocalPhone />

                                </h5>
                                <p className='description'>
                                    0212 568 70 81

                                </p>


                                <p>
                                    <hr></hr>
                                    Anında İletişim <span className='vurgu'> Hafta ici / Hafta sonu </span>
                                    çağrı yapabilirsiniz
                                </p>

                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4 p-3'>
                            <div className='iletisim-content-box  p-3'>
                                <h5>
                                    E-posta <IoMailUnreadOutline />
                                </h5>
                                <p className='description'>
                                    İnfo@das.com
                                </p>
                                <p>
                                    <hr></hr>
                                    Mailleriniz güncel olarak takip edilip<span className='vurgu'> 7/24 </span>  okunmakta Hemen
                                    dönüş yapan destek ekibimiz
                                    sizlere hizmet verkmekten memnuniyet duyar

                                </p>

                            </div>

                        </div>
                        <div className=''>
                            <iframe className='harita' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48141.689719859496!2d28.80210972489208!3d41.05028661395263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f637d45707%3A0x5008bf2a7fd2d2e0!2sDAS%20ELEKTR%C4%B0K!5e0!3m2!1str!2str!4v1724064815050!5m2!1str!2str"></iframe>
                            <div className='flex-row justify-content-center'>
                                <a href='https://www.google.com/maps/place/DAS+ELEKTR%C4%B0K/@41.027225,28.822107,13z/data=!4m6!3m5!1s0x14caa5f637d45707:0x5008bf2a7fd2d2e0!8m2!3d41.0280772!4d28.8191189!16s%2Fg%2F11gjzr9r71?hl=tr&entry=ttu' target='_blank' className='harita-links'> <FaMapLocationDot className='harita-icons' />Haritada Görüntüle</a>
                                <a href='https://www.google.com/maps/dir//DAS+ELEKTR%C4%B0K+Ba%C4%9Flar+semdal22@gmail.com+34212+Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul/@41.0280772,28.8191189,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14caa5f637d45707:0x5008bf2a7fd2d2e0' target='_blank' className='harita-links'><MdOutlineDirectionsWalk className='harita-icons' />Yol Tarifi</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>

                <Footer /></div>
        </>
    )
}

export default İletişim