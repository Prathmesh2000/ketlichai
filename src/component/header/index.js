import React from 'react';
import styles from "./header.module.scss"
import cart from "./cart.png"
import account from "./account.png"

const Header = (props) => {

    const headerList = [
        {
            label: 'About Us',
        },
        {
            label: 'Shop Locator',
        },
        {
            label: 'Contact Us',
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>

            </div>
            <div className={styles.middle}>
                <ul className={styles.middleContainer}>
                    {
                        headerList.map((list) => {
                            return (
                                <li className={styles.middleOption}>
                                    {list.label}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.rightContainer}>
                <img className={styles.icon} src={account} />
                <img className={styles.icon} src={cart} />
            </div>
        </div>
    )
}

export default Header;