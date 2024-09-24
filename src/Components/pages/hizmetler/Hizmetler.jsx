import React from 'react'
import Hizmetler from '../servicess/Service'
import baslikArkaPlan from '../images/title-img/hizmetler.jpg'
import PageSmallNav from '../../page-nav-small/PageSmallNav';

import { useEffect } from 'react';
import Footer from '../../footer/Footer';

const Hakkımızda = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div className='page-big-title'>
                <img src={baslikArkaPlan}></img>
            </div>

            <div className='container'>
                <PageSmallNav currentPage={"hizmetler"} />
                <h3 className='title-blog'>Hiztmetler</h3>
                <div>

                    <blockquote className='mt-5 mb-5 p-3'>

                        <h3 className='fw-bold'>Müşteri Memnuniyeti ve Güvenliği: Bizim Önceliğimiz</h3>

                        <h5 className='mt-3'>Değerli Müşterilerimiz,</h5>

                        <p>Das Elektrik olarak, sizlere sunduğumuz elektrik hizmetlerinde mükemmelliği hedefliyoruz. Gerek evlerinizde gerekse iş yerlerinizde, güvenli ve kesintisiz enerji sağlamanın yanı sıra, sizlerin memnuniyetini de en üst seviyede tutmak için çalışıyoruz.</p>
                    </blockquote>
                    <Hizmetler />
                    <h4 className='mt-5'>Hizmetlerimizden Memnuniyet:</h4>

                    <p>Yüzlerce müşteri, sunduğumuz hizmetlerin kalitesinden ve profesyonelliğimizden memnuniyetlerini ifade etmiştir. Evlerinizde elektrik altyapınızı güçlendirirken, iş yerlerinizde kesintisiz enerji akışı sağlamanın getirdiği rahatlık, iş verimliliğinizi artırmakta ve günlük yaşamınızı kolaylaştırmaktadır. Müşterilerimiz, teknik ekibimizin uzmanlığı ve sorumluluk sahibi yaklaşımı sayesinde güvenli bir hizmet deneyimi yaşamaktadır.</p>

                    <h4 className='mt-3'> İş Yerleriniz İçin Güvenilir Çözümler:</h4>

                    <p> İş yerlerinde elektrik kesintileri, iş akışını aksatabilir ve verimliliği etkileyebilir. Bizler, bu tür aksaklıkların önüne geçmek amacıyla özenli bakım ve hızlı müdahale hizmetleri sunuyoruz. Modern teknolojileri kullanarak iş yerlerinizin enerji ihtiyacını en iyi şekilde karşılamakta ve arızalara anında çözüm sunmaktayız.</p>

                    <h4 className='mt-3'>Sizlerle Birlikte Büyümek:</h4>

                    <p>Hizmet kalitemizi sürekli olarak artırmak ve sizin ihtiyaçlarınıza en uygun çözümleri sunmak için yenilikleri takip ediyor ve kendimizi geliştiriyoruz. Sizlerin değerli geri bildirimleriniz bizim için çok önemlidir. Memnuniyetiniz, bizim en büyük ödülümüzdür ve bu yolda sizlerle birlikte yürümekten mutluluk duyuyoruz.</p>

                    <p><strong>Güvenli ve kaliteli enerji hizmetlerimizle</strong> ilgili daha fazla bilgi almak veya herhangi bir talep ve sorunuz için bizimle iletişime geçebilirsiniz. Biz, Das Elektrik olarak her zaman yanınızdayız ve hizmetlerimizin kalitesini artırmak için buradayız.</p>


                    <hp>Saygılarımızla,</hp>

                    <p>Semih Dalyan<br />
                        Das Elektrik<br />
                        0212 568 70 81 <br />
                        info@das.com</p><br />
                </div>

            </div >

            <Footer />

        </>
    )
}

export default Hakkımızda