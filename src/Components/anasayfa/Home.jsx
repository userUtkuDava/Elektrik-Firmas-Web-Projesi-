import React from 'react'
import SlideRefarance from './slide-reference/SlideRefarance'
import Banner from './banners/Banner'
import Product from './Product  Promotion/product'
import { useEffect } from 'react'
import Gecis from './gecis/Gecis'
import İdda from './idda/İdda'
import Asks from './sıksorular/Asks'
import Footer from '../footer/Footer'


const Home = () => {

    return (
        <>

            <Banner />
            <SlideRefarance />
            <Product />
            <Gecis />
            <İdda />
            <Gecis />
            <Asks />
            <Footer />


        </>
    )
}

export default Home