import style from "./index.module.css";
import SloganCard from "./SloganCard";

const SloganList = () => {
    const slogans = [
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
    ];

    return (
        <>
            <div className={style.list__cards}>
                {slogans.map((slogan, i) => (
                    <SloganCard content={slogan} key={i} />
                ))}
            </div>
        </>
    );
};

export default SloganList;
