import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" id="slide-1">
                    <img src="src/Components/anasayfa/banners/img/slide-1.png" className="d-block w-100" alt="..."></img>
                    <div className='anabaslik'>
                        <h1 >DAS <span className='vurgubaslik'>ELEKTRİK</span></h1>
                        <p className='baslik-aciklamasi '>Güven Verilmez Kazanılır</p>
                    </div>
                    <div className="carousel-caption d-none d-md-block" id="slide-aciklama">
                        <h3 >Toptan Elektrik Malzeme Satışı</h3>
                        <p>Kaliteli Uygun çok çeşit elektrik malzemesi </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src/Components/anasayfa/banners/img/slide-2.png" className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block" id="slide-aciklama">
                        <h3>Yüksek Kalite Elektrik</h3>
                        <p>Uygun fiyat & Kaliteli Hizmet</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src/Components/anasayfa/banners/img/slide-3.png" className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block" id="slide-aciklama">
                        <h3>Dönüştürülebilir Enerji</h3>
                        <p>Enerji tasarrufu & Kaliteli Hizmet</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner