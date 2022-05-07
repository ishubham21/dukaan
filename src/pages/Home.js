import style from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import SloganMaker from "../components/SloganMaker/SloganMaker";
import Tutorial from "../components/Tutorial/Tutorial";
import Product from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className={style.home__wrapper}>
                <Navbar />
                <div className={style.home__content}>
                    <SloganMaker />
                    <Tutorial />
                    <Product />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
