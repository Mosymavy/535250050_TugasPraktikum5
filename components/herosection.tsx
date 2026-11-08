"use client"
import Carousel from 'react-bootstrap/Carousel';
import styles from "./herosection.module.css";

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Number One Bakery Worldwide",
            subtitle: "Experience the finest baked goods, crafted with passion and quality ingredients to bring you an unforgettable taste.",
            imageUrl: "/images/banner_01.jpg",
        },
        {
            title: "Different Flavors",
            subtitle: "Discover a delightful variety of flavors, from timeless classics to unique creations made to satisfy every craving.",
            imageUrl: "/images/banner_02.jpg",
        },
        {
            title: "Multiple Variants",
            subtitle: "Explore our wide selection of freshly baked treats, offering something special for every taste and occasion.",
            imageUrl: "/images/banner_03.jpg",
        },
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark" className={ styles.carousel }>
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage: `url(${ slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition:"center",
                            height:"60vh",
                        }}>
                        </div>
                        <Carousel.Caption>
                            <h1 className={`display-4 fw-bold ${styles.carouseltitle}`}>{ slide.title }</h1>
                            <p className={`lead ${styles.carouseldesc}`}>{ slide.subtitle }</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;