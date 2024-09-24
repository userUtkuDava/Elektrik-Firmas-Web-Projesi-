import React from 'react'
import './css/product.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import './js/db'
import { malzemeler } from './js/db';
import { useState, useEffect } from 'react';


const product = () => {


    const [sayac, setSayac] = useState(0)
    const [ürün, setÜrün] = useState({
    })
    const [timeBar, setTimebar] = useState('time-bar')






    const nextProduct = () => {
        if (sayac < malzemeler.length - 1) {
            setSayac(sayac + 1)

        }



    }
    const backProduct = () => {
        if (sayac > 0) {
            setSayac(sayac - 1)
        }


    }

    const Products = (ürünSirasi) => {
        const malzeme = malzemeler[ürünSirasi];
        setÜrün({
            name: malzeme.malzemeAdi,
            description: malzeme.description,
            url: malzeme.url




        });
        console.log('Bileşen render edildi');
    }


    useEffect(() => {
        console.log('useEffect çalıştı');
        Products(sayac)
        console.log(sayac)


    }, [sayac])


    return (



        <>
            <div className='container-fluid'>
                {/* Başlık */}
                <h3 className='page-title'>

                    Ürünlerimiz Nelerdir ?
                </h3>
                <hr
                    className='title-line'>
                </hr>
                {/* Başlık */}
                {/* Slide Product */}
                <div className='slide-content col-12'>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 slide-content-1y">
                            {/* Slide Acount and arrow buttons */}
                            <div className='arrow-buttons'>
                                <div>
                                    <button><FaArrowLeft className='NB-icons' onClick={backProduct} /></button>
                                    <button><FaArrowRight className='NB-icons' onClick={nextProduct} /></button>

                                </div>

                                <p>0{sayac + 1}/<span style={{ fontSize: '10px' }}>08</span></p>
                            </div>
                            {/* Slide Acount and arrow buttons  */}
                            <hr></hr>
                            {/* Slide Product Content */}
                            <div className="slide-product-content">
                                <h3 className='product-title'>
                                    {ürün.name}
                                </h3>
                                <p className='product-information'>
                                    {ürün.description}

                                </p>
                                <button>
                                    <GoArrowRight className='arrow-icon' /> Daha Fazla
                                </button>
                            </div>
                            {/* Slide Product Content */}

                        </div>
                        <div className=" col-md-6 slide-content-2y">
                            <div className='ürün-img ürün-img-move'>
                                <img
                                    src={ürün.url}>

                                </img>



                            </div>




                        </div>
                    </div>



                </div>
                {/* Slide Product */}



            </div >


        </>


    )
}

export default product