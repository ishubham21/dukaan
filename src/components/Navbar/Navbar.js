import style from './Navbar.module.css'
import logo from '../../assets/images/dukaan-logo.svg'

const Navbar = () => {
    return (<>
        <div className={style.navbar__container}>
            <div className={style.navbar__child}>
                <div className={style.navbar__logo}>
                    <img src={logo} />
                </div>
                <div className={style.navbar__right}>
                    <a href='/' className={style.navbar__signin}>
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar;