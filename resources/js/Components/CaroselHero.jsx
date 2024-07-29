import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselWithStatusBar = () => {
    const slides = [
        {
            id: 1,
            imageUrl:
                "https://w7.pngwing.com/pngs/850/600/png-transparent-white-and-green-vegan-menu-book-collage-smoothie-vegetarian-cuisine-hot-pot-menu-menu-cover-design-food-label-text.png",
            caption: "Slide 1",
        },
        {
            id: 2,
            imageUrl:
                "https://w7.pngwing.com/pngs/850/600/png-transparent-white-and-green-vegan-menu-book-collage-smoothie-vegetarian-cuisine-hot-pot-menu-menu-cover-design-food-label-text.png",
            caption: "Slide 2",
        },
        {
            id: 3,
            imageUrl:
                "https://w7.pngwing.com/pngs/850/600/png-transparent-white-and-green-vegan-menu-book-collage-smoothie-vegetarian-cuisine-hot-pot-menu-menu-cover-design-food-label-text.png",
            caption: "Slide 3",
        },
        {
            id: 4,
            imageUrl:
                "https://w7.pngwing.com/pngs/850/600/png-transparent-white-and-green-vegan-menu-book-collage-smoothie-vegetarian-cuisine-hot-pot-menu-menu-cover-design-food-label-text.png",
            caption: "Slide 4",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplayInterval, setAutoplayInterval] = useState(null);
    const [progress, setProgress] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
            setProgress(0);
        }, 4000);

        setAutoplayInterval(interval);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, slides.length]);

    const handleOnChange = (index) => {
        setCurrentSlide(index);
        clearInterval(autoplayInterval);
        setProgress(0);
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        clearInterval(autoplayInterval);
        setProgress(0);
    };
    console.log(currentSlide);

    useEffect(() => {
        let progressInterval;

        if (autoplayInterval) {
            setProgress(100);
        }
    }, [autoplayInterval]);
    console.log(progress);
    return (
        <div className="relative">
            <Carousel
                ref={carouselRef}
                selectedItem={currentSlide}
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
                onChange={handleOnChange}
                onClickItem={() => clearInterval(autoplayInterval)}
            >
                {slides.map((slide) => (
                    <div key={slide.id}>
                        <img
                            src={slide.imageUrl}
                            alt={slide.caption}
                            className="w-full h-[500px] object-cover"
                        />
                        <p className="legend">{slide.caption}</p>
                    </div>
                ))}
            </Carousel>
            <div className="inset-0 bg-red-500 h-32 w-full"></div>
            <div className="flex justify-center gap-2 mt-10">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`relative overflow-hidden transition-all duration-1000 h-2 rounded-full ${
                            index === currentSlide
                                ? "bg-blue-200 w-10"
                                : "bg-blue-500 w-2"
                        }`}
                        onClick={() => handleDotClick(index)}
                    >
                        <div
                            className={`transition-all duration-[4000ms] h-2 rounded-full ${
                                index === currentSlide ? "w-full" : "w-0"
                            }`}
                        >
                            <div
                                className="inset-0 bg-blue-500 h-2"
                                style={{
                                    width: `${progress}%`,
                                    transition: "width 1s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselWithStatusBar;
