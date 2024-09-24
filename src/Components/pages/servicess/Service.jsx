import React from 'react'
import './service.css'
import resim1 from '../images/hizmletler/1.png';

const Service = () => {
    return (
        <>
            <div className="container aciklama" data-aos="zoom-in">
                <div className="row">


                    <div className="row hizmetler">

                        <div className="col-md-4 kutu" id="bx-1" >
                            <div className='box-img'>
                                <div className='title-track'>
                                    <h2 id="title-1">Tecrubeli Ekip İle</h2>
                                </div>
                                <img id="img"
                                    src={resim1}
                                    title=''
                                    alt=''>
                                </img>
                            </div>
                            <h4 className='title-service'>
                                Kablo ve Hat Çekme
                            </h4>
                            <ul>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik kablosu çekimi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik bağlantılarının kontrol edilmesi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Kablo değişimi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik tesisatının çekilmesi</li>
                            </ul>
                        </div>

                        <div className="col-md-4 kutu" id="bx-2" >
                            <div className='box-img'>
                                <div className='title-track'>
                                    <h2 id="title-2">Tecrubeli Ekip İle</h2>
                                </div>
                                <img id="img"
                                    src={resim1}
                                    title=''
                                    alt=''>
                                </img>
                            </div>
                            <h4 className='title-service'>
                                Kablo ve Hat Çekme
                            </h4>
                            <ul>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik kablosu çekimi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik bağlantılarının kontrol edilmesi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Kablo değişimi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik tesisatının çekilmesi</li>
                            </ul>
                        </div>

                        <div className="col-md-4 kutu" id='bx-3' >
                            <div className='box-img'>
                                <div className='title-track'>
                                    <h2 id="title-3">Tecrubeli Ekip İle</h2>
                                </div>
                                <img id="img"
                                    src={resim1}
                                    title=''
                                    alt=''>
                                </img>
                            </div>
                            <h4 className='title-service'>
                                Kablo ve Hat Çekme
                            </h4>
                            <ul>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik kablosu çekimi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik bağlantılarının kontrol edilmesi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Kablo değişimi</li>
                                <li><i className="bi bi-caret-right-fill"></i>Elektrik tesisatının çekilmesi</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </>

    )
}

export default Service