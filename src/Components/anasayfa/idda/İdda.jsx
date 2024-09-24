import React from 'react'
import './css/idda.css'
import resim1 from './img/image1.png'
import resim2 from './img/image2.png'
import resim3 from './img/image3.png'
const İdda = () => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="page-title">
                    Biz Kimiz?
                </h1>
                <hr className='title-line'></hr>
                <div className='idda-content'>
                    <div className='das-idda'>

                        <div className='col-sm-4 das-idda-bar'>
                            <img src={resim1} alt=''>

                            </img>
                            <h2>"<span className='TT'>D</span>inamik"</h2>
                            <p>Enerjik ve modern yaklaşımı temsil eder </p>
                        </div>
                        <div className='col-sm-4 das-idda-bar '>
                            <img src={resim2} alt=''>
                            </img>
                            <h2>"<span className='TT'>A</span>yrıcalık"</h2>
                            <p>Kaliteli ve güvenilir bir imaj oluşturur </p>
                        </div>
                        <div className='col-sm-4 das-idda-bar'>
                            <img src={resim3} alt=''>

                            </img>
                            <h2>"<span className='TT'>S</span>ağlam"</h2>
                            <p>Güçlü Malzeme, Güvenli Geleceğin temelidir </p>
                        </div>


                    </div>
                    <div className='logo'>
                        <img src="logodas.png" alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default İdda