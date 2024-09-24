import React from 'react'
import { useParams } from 'react-router-dom'
import { markalar } from './markalar';
import Deneme from './Deneme'
import { useEffect } from 'react';

const Pdfs = () => {
    const params = useParams();

    const { id } = params;
    const click = () => {
        // PDF'yi yeni pencerede aç
        window.open("./pdfs/viko.pdf", '_blank');
    };



    return (
        <>
            <button onClick={click}>tıkla</button>
        </>
    )
}

export default Pdfs