import style from "./Product.module.css";

const ProductCard = ({ title, desc, img }) => {
    return (
        <>
            <div className={style.product__card}>
                <img
                    src={img}
                    alt={`${title} image`}
                    className={style.product__img}
                />
                <p className={style.product__title}>{title}</p>
                <p className={style.product__desc}>{desc}</p>
            </div>
        </>
    );
};

export default ProductCard;
