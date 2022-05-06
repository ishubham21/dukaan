import Navbar from '../components/Navbar/Navbar';
import style from './Home.module.css'

const Home = () => {
    return (<>
        <div className={style.wrapper}>
            <Navbar />
        </div>
    </>)
}

export default Home;
