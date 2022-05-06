import style from "./Navbar.module.css";
import logo from "../../assets/images/dukaan-logo.svg";

const Navbar = () => {
    return (
        <>
            <div className={style.background__container}>
                <div className={style.navbar__container}>
                    <div className={style.navbar__child}>
                        <div className={style.navbar__logo}>
                            <img src={logo} alt="Dukaan Logo" />
                        </div>
                        <div className={style.navbar__right}>
                            <a href="/" className={style.navbar__signin}>
                                Sign In
                            </a>
                            <a href="/" className={style.navbar__pclink}>
                                <button href="/" className={style.navbar_forpc}>
                                    <span className={style.navbar__btntext}>
                                        Dukaan for PC
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
