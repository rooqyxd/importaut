import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Lightbox } from "react-modal-image";
import "./Galery.css";
// import img1 from "../../assets/car-images/Image1.jpeg";
import img2 from "../../assets/car-images/Image2.jpeg";
import img3 from "../../assets/car-images/Image3.jpeg";
import img4 from "../../assets/car-images/Image4.jpeg";
import img5 from "../../assets/car-images/Image5.jpeg";
import img6 from "../../assets/car-images/Image6.jpeg";
import img7 from "../../assets/car-images/Image7.jpeg";
import img8 from "../../assets/car-images/Image8.jpeg";
import img9 from "../../assets/car-images/Image9.jpeg";
import img10 from "../../assets/car-images/Image10.jpeg";
import img11 from "../../assets/car-images/Image11.jpeg";
import img12 from "../../assets/car-images/Image12.jpeg";
import img14 from "../../assets/car-images/Image14.jpeg";
import img15 from "../../assets/car-images/Image15.jpeg";
import img16 from "../../assets/car-images/Image16.jpeg";
import img17 from "../../assets/car-images/Image17.jpeg";
import img18 from "../../assets/car-images/Image18.jpeg";
import img19 from "../../assets/car-images/Image19.jpeg";
import img20 from "../../assets/car-images/Image20.jpeg";
import img21 from "../../assets/car-images/Image21.jpeg";
import img22 from "../../assets/car-images/Image22.jpeg";
import img23 from "../../assets/car-images/Image23.jpeg";
import img24 from "../../assets/car-images/Image24.jpeg";
import img25 from "../../assets/car-images/Image25.jpeg";
import img26 from "../../assets/car-images/Image26.jpeg";
import img27 from "../../assets/car-images/Image27.jpeg";

const images: string[] = [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,

    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
];
declare module "react-modal-image" {
    export interface ModalImageProps {
        onClose?: () => void; // Assuming onClose is optional
    }
}
const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const carouselWidth = windowWidth < 768 ? "90%" : "50%";
    const handleImageClick = (index: number) => {
        setSelectedImage(images[index]);
        setLightboxOpen(true);
    };
    const handleCloseImage = () => {
        setLightboxOpen(false);
    };
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div id="gallery">
            <div className="topbar"></div>

            <div className="carousel-title-container">
                <h1 className="carousel-title">Sprowadzone auta</h1>
            </div>
            <div className="carousel-wrapper">
                <Carousel
                    onClickItem={handleImageClick}
                    width={carouselWidth}
                    className="carousel-container"
                    showThumbs={false}
                    dynamicHeight={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt="car" className="carousel-container-img " />
                        </div>
                    ))}
                </Carousel>
                {lightboxOpen && (
                    <Lightbox
                        small={selectedImage}
                        large={selectedImage}
                        onClose={handleCloseImage}
                    />
                )}
            </div>
        </div>
    );
};
export default Gallery;
