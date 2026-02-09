import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import FooterFinal from '../components/footer/Footer-final'
import Dividder from '../components/dividder/Dividder';
import Service from '../components/service-description';
import About from '../components/about';
import Contact from '../components/contact/contato/'
import Plans from '../components/plans/Plans'

function Home() {

    return (
        <>
            <Header />
            <Dividder />
            <section id='inicio'>
                <Banner />
            </section>
            <section id='servicos'>
                <Service />
            </section>
            <section id='sobre'>
                <About />
            </section>
            <section id='pacotes'>
               <Plans />
            </section>
            <section id='contato'>
                <Contact />
            </section>
            <Dividder />
            <FooterFinal />
        </>
    );
}
export default Home;