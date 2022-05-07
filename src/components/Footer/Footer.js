import style from "./Footer.module.css";
import flag from "./../../assets/icons/indian_flag.svg";
import logo from './../../assets/images/dukaan-logo.svg'

const Footer = () => {
    
    let noOfJobs = 3

    return (
        <>
            <div className={style.footer__container}>
                <div className={style.footer__upper}>
                    <div className={style.footer__logo}>
                        <img src={logo} alt="Dukaan Logo"/>
                    </div>
                    <div className={style.footer__linkcontainer}>
                        <div className={style.footer__subcontainer}>
                            <a href="/">Contact</a>
                            <a href="/">FAQ's</a>
                        </div>
                        <div className={style.footer__subcontainer}>
                            <a href="/">Tutorials</a>
                            <a href="/">Blog</a>
                        </div>
                        <div className={style.footer__subcontainer}>
                            <a href="/">Privacy</a>
                            <a href="/">Banned Items</a>
                        </div>
                        <div className={style.footer__subcontainer}>
                            <a href="/">About</a>
                            <a href="/">
                                Jobs{" "}
                                <span className={style.footer__jobspan}>{noOfJobs}</span>
                            </a>
                        </div>
                        <div className={style.footer__subcontainer}>
                            <a href="/">Facebook</a>
                            <a href="/">Twitter</a>
                            <a href="/">Linkedin</a>
                        </div>
                    </div>
                </div>
                <div className={style.footer__lower}>
                    <p>Dukaan 2020, All rights reserved.</p>
                    <div className={style.footer__madein}>
                        <p>Made in</p>
                        <img src={flag} alt="Indian Flag" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
