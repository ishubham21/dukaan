import style from "./index.module.css";
import { useState } from "react";

const SloganCard = ({ content }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const copyText = (e) => {
        setIsCopied(true);
        console.log("happ");
        //writing to the clipboard
        navigator.clipboard.writeText(content);
    };

    //display toast on hover
    const displayToast = () => {
        setShowToast(true);
    };

    //hide toast & set copied to false on mouse out
    const hideToast = () => {
        setShowToast(false);
        setIsCopied(false);
    };

    return (
        <>
            <div
                className={style.card__container}
                onMouseOver={displayToast}
                onMouseOut={hideToast}
                onClick={copyText}
            >
                <p className={style.card__text}>{content}</p>
                {/* display toast only on hover */}
                {showToast ? (
                    <p
                        className={`${style.card__copycont} ${
                            !isCopied ? style.card__copy : style.card__copied
                        }`}
                    >
                        {/* change inner text after copying the content to the clipboard */}
                        {!isCopied ? "Click to copy" : "Copied!"}
                    </p>
                ) : null}
            </div>
        </>
    );
}

export default SloganCard;