import style from "./index.module.css";
import arrow from "./../../../assets/icons/next_arrow.svg";

const Pagination = () => {
    return (
        <>
            <div className={style.pagination__container}>
                <div></div>
                <div className={style.pagination__pages}>
                    <a
                        href="/"
                        className={`${style.pagination__pageno} ${style.pagination__pageActive}`}
                    >
                        1
                    </a>
                    <a href="/" className={`${style.pagination__pageno}`}>
                        2
                    </a>
                    <a href="/" className={`${style.pagination__pageno}`}>
                        3
                    </a>
                    <a href="/" className={`${style.pagination__pageno}`}>
                        ...
                    </a>
                    <a href="/" className={`${style.pagination__pageno}`}>
                        21
                    </a>
                </div>
                <a href="/" className={style.pagination__next}>
                    <p>Next</p>
                    <img
                        className={style.pagination__nextarr}
                        src={arrow}
                        alt="Next Arrow"
                    />
                </a>
            </div>
        </>
    );
};

export default Pagination;
