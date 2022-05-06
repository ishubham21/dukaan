import style from "./Tutorial.module.css";

const TutorialCard = ({ title, desc, img }) => {
    return (
        <>
            <div className={style.tutorial__card}>
                <img
                    src={img}
                    alt={`${title} image`}
                    className={style.tutorial__img}
                />
                <p className={style.tutorial__title}>{title}</p>
                <p className={style.tutorial__desc}>{desc}</p>
            </div>
        </>
    );
};

export default TutorialCard;
