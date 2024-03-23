import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Lightbox } from "react-modal-image";
import "./Galery.css";
import img1 from "../../assets/car-images/Image1.jpeg";
import img2 from "../../assets/car-images/Image2.jpeg";
import img3 from "../../assets/car-images/Image3.jpeg";
import img4 from "../../assets/car-images/Image4.jpeg";
import img5 from "../../assets/car-images/Image5.jpeg";
import img6 from "../../assets/car-images/Image6.jpeg";
import img7 from "../../assets/car-images/Image7.jpeg";
import img8 from "../../assets/car-images/Image8.jpeg";
import img9 from "../../assets/car-images/Image9.jpeg";
import img10 from "../../assets/car-images/Image10.jpeg";

const images: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
declare module "react-modal-image" {
    export interface ModalImageProps {
        onClose?: () => void; // Assuming onClose is optional
        small?: string | undefined;
    }
}
const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (index: number) => {
        setSelectedImage(images[index]);
        setLightboxOpen(true);
    };
    const handleCloseImage = () => {
        setLightboxOpen(false);
    };
    return (
        <div id="gallery">
            <div className="topbar"></div>

            <div className="carousel-title-container">
                <h1 className="carousel-title">Sprowadzone auta</h1>
            </div>
            <div className="carousel-wrapper">
                <Carousel
                    onClickItem={handleImageClick}
                    width="50%"
                    className="carousel-container"
                    showThumbs={false}
                    emulateTouch={true}
                >
                    {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt="car" className="carousel-container-img " />
                        </div>
                    ))}
                </Carousel>
                {lightboxOpen && <Lightbox large={selectedImage} onClose={handleCloseImage} />}
            </div>
        </div>
    );
};
export default Gallery;
