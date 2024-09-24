import React from 'react'
import './ürünler.css'

const Ürünler = () => {


    //    BURDAKİ ÜRÜNLER SERVİCE.JS'NİN İÇERSİNDE SAKLANMIŞTIR

    return (
        <>
            <h2 className='baslik'><i className="bi bi-star text-danger"></i> Favori Ürünlerimiz Nedir ?</h2>
            <div className="container malzemeler">

                {malzemeler.map((element) => {
                    return (
                        <div className="urunler">
                            <div className="card">
                                <img className="card-img-top" src={element.url} alt="Card image cap"></img>
                                <div className="card-body">
                                    <p className="card-text">{element.malzemeAdi}</p>
                                </div>
                            </div>
                        </div>

                    )


                })}

            </div>


        </>

    )
}

export default Ürünler