import React from "react";
import ProductCard from "./productCard";
import styles from "./productSection.module.scss"

const ProductSection = (props) => {

    const productData = props.productData;

    return (
        <div className={styles.container}>
            {
                productData.map((data) => {
                    return (
                        <ProductCard
                            productImage={data.url}
                            productName={data.name}
                            price={data.price}
                        />
                    )
                })
            }
        </div>
    )

}

export default ProductSection;