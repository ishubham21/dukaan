import style from "./SloganMaker.module.css";
import { useState } from "react";
import Results from "./Results";

const SloganMaker = () => {
    const [sloganWord, setSloganWord] = useState("");
    const [displayResultBox, setDisplayResultBox] = useState(false);

    //update the word on input change
    const handleWordChange = (e) => {
        setSloganWord(e.target.value);
    };

    //clear input on clicking the cross
    const clearInput = () => {
        setSloganWord("");
        setDisplayResultBox(false);
    };

    //handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayResultBox(true);
        window.scroll({
            top: 100,
            left: 100,
            behavior: "smooth",
        });
    };

    //preventing default actions on form submit
    const handleNull = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className={style.slogan__container}>
                <div className={style.slogan__childcontainer}>
                    <div className={style.slogan__heading}>
                        <p className={style.slogan__title}>Free Slogan Maker</p>
                        <p className={style.slogan__desc}>
                            Simply enter a term that describes your business,
                            and get up to 1,000 relevant slogans for free.
                        </p>
                    </div>

                    <div className={style.slogan__formcontainer}>
                        {/* Adding submit handler only if there is something in the input */}
                        <form
                            onSubmit={sloganWord ? handleSubmit : handleNull}
                            className={style.slogan__form}
                        >
                            <label
                                htmlFor="slogan__keyword"
                                className={style.slogan__inputlabel}
                            >
                                Word for your slogan
                            </label>

                            <div className={style.slogan__inputcontainer}>
                                <input
                                    type="text"
                                    className={style.slogan__inputbox}
                                    id="slogan__keyword"
                                    onChange={handleWordChange}
                                    value={sloganWord}
                                />

                                {/* if word is empty, hide the cross */}
                                {sloganWord ? (
                                    <div
                                        onClick={clearInput}
                                        className={style.slogan__cross}
                                    >
                                        <span></span>
                                        <span></span>
                                    </div>
                                ) : null}
                            </div>

                            <button
                                type="submit"
                                className={`${style.slogan__submit} 
                            ${
                                sloganWord
                                    ? style.slogan__submitActive
                                    : style.slogan__submitMuted
                            }`}
                            >
                                Generate Slogan
                            </button>
                        </form>
                    </div>

                    {displayResultBox ? (
                        <Results sloganWord={sloganWord} />
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default SloganMaker;
