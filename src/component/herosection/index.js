import React from "react";
import styles from './herosection.module.scss'

const HeroSection = () => {
    const images = [
        { url: 'https://chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=352%20352w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=832%20832w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=1200%201200w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=1920%201920w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=4800%204800w' },
        { url: 'https://chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=352%20352w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=832%20832w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=1200%201200w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=1920%201920w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=4800%204800w' },
        { url: 'https://chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=352%20352w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=832%20832w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=1200%201200w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=1920%201920w,%20//chaayos.com/cdn/shop/files/ic_our_menu.webp?v=1679045778&width=4800%204800w' },
    ]

    return (
        <div>
            <img src={images[0].url} width="100%" height="400px" />
        </div>
    )

}

export default HeroSection;