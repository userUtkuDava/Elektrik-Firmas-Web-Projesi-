import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { PiArrowFatLineUp } from "react-icons/pi";
const UpButton = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Kaydırma hareketinin yumuşak olmasını sağlar
        });
    }


    return (
        <div><button onClick={scrollToTop} className='upbutton'>
            <PiArrowFatLineUp className='mb-2' />
        </button></div>
    )
}

export default UpButton