import style from './Home.module.css'
import Navbar from '../components/Navbar/Navbar';
import Background from '../components/Background/Background';
import SloganMaker from '../components/SloganMaker/SloganMaker';

const Home = () => {
    return (<>
        <div className={style.wrapper}>
            <Background />
            <div className={style.home__content}>
                <Navbar />
                <SloganMaker />
            </div>
        </div>
    </>)
}

export default Home;
