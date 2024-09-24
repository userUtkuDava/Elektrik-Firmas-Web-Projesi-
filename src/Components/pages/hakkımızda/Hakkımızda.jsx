import React from 'react'
import { useEffect } from 'react'
import PageSmallNav from '../../page-nav-small/PageSmallNav';
import { FcOk } from "react-icons/fc";
import './hakkımızda.css'
import baslikArkaPlan from '../images/title-img/hakkımızda.jpg'
import Footer from '../../footer/Footer';
const referanslar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='page-big-title'>
                <img src={baslikArkaPlan}></img>
            </div>

            <div className='container main-hakkimizda'>
                <PageSmallNav currentPage="hakkımızda" />
                <h3 className='title-blog'>Hakkımızda</h3>
                <div className='hakkimizda-content'>
                    <p>20XX yılında enerji sektöründe kaliteli ve güvenilir hizmet sunma hedefiyle kurulmuştur. Elektrik enerjisinin hayatımızın her alanında kritik bir rol oynadığını bilerek, müşterilerimize en iyi çözümleri sunmayı misyon edindik. Yenilikçi yaklaşımlarımız ve müşteri odaklı hizmet anlayışımızla sektördeki yerimizi sağlamlaştırıyoruz., Das Elektrik</p>
                    <p>Günümüz dünyasında enerji, hayatımızın her anında kritik bir rol oynar. Das Elektrik, elektrik sektöründeki köklü deneyimi ve müşteri odaklı yaklaşımıyla enerji ihtiyacınızı güvenilir ve etkili bir şekilde karşılamak için burada.</p>
                    <h4 className='title-blog'>
                        Vizyon ve Misyon
                    </h4>
                    <p>Vizyonumuz, enerji sektöründe yenilikçi çözümler sunarak sürdürülebilir bir geleceğe katkıda bulunmaktır. Misyonumuz ise müşteri memnuniyetini en üst düzeyde tutarak, kaliteli hizmet sunmak ve teknolojiyi en iyi şekilde kullanarak enerji verimliliğini artırmaktır.</p>
                    <ul>
                        <li><FcOk className='icon-list' />Elektrik Dağıtımı ve Tedariki: Yüksek güvenlik standartlarıyla elektrik enerjinizi kesintisiz ve düzenli bir şekilde sağlıyoruz.</li>
                        <li><FcOk className='icon-list' /> Enerji Yönetimi: Enerji verimliliğini artırmak ve maliyetleri düşürmek için kapsamlı enerji yönetim hizmetleri sunuyoruz.</li>
                        <li><FcOk className='icon-list' />Acil Müdahale: Olası arızalarda hızlı ve etkili çözüm sağlamak için 7/24 acil müdahale hizmeti sunuyoruz.</li>
                        <li><FcOk className='icon-list' />Danışmanlık ve Proje Yönetimi: Enerji projelerinizin planlama ve uygulama aşamalarında uzman danışmanlık hizmetleri veriyoruz.</li>

                    </ul>
                </div>

            </div>
            <Footer />


        </>
    )
}

export default referanslar