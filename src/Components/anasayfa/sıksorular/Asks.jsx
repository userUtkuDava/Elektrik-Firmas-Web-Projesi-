import React, { useEffect, useState } from 'react'
import './sorular.css'


const Asks = () => {
    const data = [
        {
            question: "Kaliteli Elektrik Malzemesi Nedir ?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti libero cum ut nisi voluptate incidunt aliquam. Vitae repellat asperiores, quas placeat suscipit delectus ab, hic, quis nam officiis fugit?"

        },
        {
            question: "Kaliteli Elektrik Malzemesi Nedir ?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti libero cum ut nisi voluptate incidunt aliquam. Vitae repellat asperiores, quas placeat suscipit delectus ab, hic, quis nam officiis fugit?"

        },
        {
            question: "Kaliteli Elektrik Malzemesi Nedir ?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "

        },
        {
            question: "Kaliteli Elektrik Malzemesi Nedir ?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "

        }
    ]

    const [selected, setSelected] = useState(null);
    const toogle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
        console.log(selected)


    }



    return (

        <div className='asks-content'>
            <h2 className='page-title'>
                Sık Sorulan Sorular
            </h2>
            <hr className='title-line'></hr>
            <div className='ask-content'>

                {
                    data.map((item, i) => (

                        <div className="faq" key={i} >
                            <div className="question" onClick={() => toogle(i)}>
                                <h3>  {item.question}</h3>
                                <span><i className={selected === i ? "bi bi-dash-lg" : "bi bi-plus"}></i></span>
                            </div>
                            <div className={selected === i ? "answer-show" : "answer"}>
                                <p>
                                    {item.answer}
                                </p>
                            </div>

                        </div>



                    ))
                }
            </div>

        </div >
    )
}

export default Asks