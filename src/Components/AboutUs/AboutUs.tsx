import "./AboutUs.css";
const AboutUs = () => {
    return (
        <>
            <div className="aboutus-container">
                <div className="aboutus-image-container">
                    <img
                        src="../../public/aboutus-img.jpg"
                        alt="image with cars"
                        className="aboutus-img"
                    />
                    <span className="aboutus-text">
                        Jeżeli szukasz wyjątkowego pojazdu, który wyróżni Cię z tłumu i dostarczy
                        niezapomnianych wrażeń za kierownicą, to import aut z USA jest idealnym
                        rozwiązaniem. Zapewnimy kompleksową obsługę – od znalezienia idealnego
                        modelu, przez bezpieczny transport, aż po dostarczenie samochodu pod Twoje
                        drzwi. Odkryj z nami nieograniczone możliwości i rozpocznij swoją
                        motoryzacyjną przygodę już dziś!
                    </span>
                </div>

                <div className="container"></div>
            </div>
        </>
    );
};
export default AboutUs;
