import style from "./Tutorial.module.css";
import TutorialCard from "./TutorialCard";
import search from "./../../assets/icons/search.svg";
import select from "./../../assets/icons/select.svg";
import stand_out from "./../../assets/icons/stand_out.svg";

const Tutorial = () => {
    const tutorials = [
        {
            title: "Search",
            img: search,
            desc: "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.",
        },
        {
            title: "Select",
            img: select,
            desc: "Choose from thousands of options generated by the slogan maker that fit your needs.",
        },
        {
            title: "Stand Out",
            img: stand_out,
            desc: "Congrats on your new slogan. It's time to win the world!",
        },
    ];

    return (
        <>
            <div className={style.tutorial__container}>
                <div className={style.tutorial__inner}>
                    {tutorials.map((tutorial, i) => (
                        <TutorialCard
                            key={i}
                            title={tutorial.title}
                            img={tutorial.img}
                            desc={tutorial.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tutorial;
