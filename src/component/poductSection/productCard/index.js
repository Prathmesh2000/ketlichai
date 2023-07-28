import React from "react";
import styles from "./productcard.module.scss"

const ProductCard = (props) => {

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.productImage} src={props.productImage} />
            </div>
            <div>
                <div>{props.productName}</div>
                <div>{`₹ ${props.price}`}</div>
            </div>
            <div className={styles.addToCart}>
                Add to cart
            </div>
        </div>
    )

}

export default ProductCard;