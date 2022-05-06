import style from "./index.module.css";
import Pagination from "./Pagination";
import SloganList from "./SloganList";

const Results = ({ sloganWord }) => {
    return (
        <>
            <div className={style.result__container}>
                <div className={style.result__header}>
                    <p>We have generated 1,023 slogans for "{sloganWord}"</p>
                    <button className={style.result__downloadBtn}>
                        Download All
                    </button>
                </div>
                <SloganList />
            </div>
            <Pagination />
        </>
    );
};

export default Results;
