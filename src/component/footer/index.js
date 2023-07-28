import React from "react";
import styles from "./footer.module.scss"

const Footer = (props) => {
    return (
        <div className={styles.container}>
            {`© 2023 ChaiKetli`}
        </div>
    )
}

export default Footer;