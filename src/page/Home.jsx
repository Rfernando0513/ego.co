import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import FooterFinal from '../components/footer/Footer-final'
import Dividder from '../components/dividder/Dividder';
import Service from '../components/service';
import About from '../components/about';
import Contact from '../components/contato'

function Home() {

    return (
        <>
            <Header />
            <Dividder />
            <Banner />
            <Service />
            <About />
            <Contact />
            <Dividder />
            <FooterFinal />
        </>
    );
}
export default Home;