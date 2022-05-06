import style from "./Product.module.css";
import ProductCard from "./ProductCard";
import privacy from "./../../assets/images/privacy.png";
import terms from "./../../assets/images/terms.png";
import domain from "./../../assets/images/domain.png";
import invoice from "./../../assets/images/invoice.png";

const Product = () => {
    const products = [
        {
            title: "Privacy Policy Generator",
            desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            img: privacy,
        },
        {
            title: "Terms & Conditions Generator",
            desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            img: terms,
        },
        {
            title: "Domain Name Generator",
            desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            img: domain,
        },
        {
            title: "Invoice Generator",
            desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
            img: invoice,
        },
    ];

    return (
        <>
            <div className={style.product__container}>
                <p className={style.product__heading}>
                    Try our other free products
                </p>
                <div className={style.product__inner}>
                    {products.map((product, i) => (
                        <ProductCard
                            key={i}
                            title={product.title}
                            img={product.img}
                            desc={product.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Product;
