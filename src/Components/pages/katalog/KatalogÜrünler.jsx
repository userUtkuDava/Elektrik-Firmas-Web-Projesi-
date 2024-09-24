import React from 'react'
import './katalog.css'
import './markalar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const KatalogÜrünler = ({ KatalogÜrünü }) => {

    const { id, url, marka, pdf } = KatalogÜrünü;
    const navigate = useNavigate();
    const a = () => {
        window.open(pdf)

    }

    return (
        <>



            <div className='marka'>
                <div><img src={url} onClick={a} /></div>
                <div><p className='yazi'>{marka}</p></div>
            </div>



        </>
    )
}

export default KatalogÜrünler