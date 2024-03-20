import "./WhyUs.css";
import { BsCalendar3, BsStopwatch, BsWrench } from "react-icons/bs";
const WhyUs = () => {
    return (
        <div className="whyus-wrapper">
            <div className="whyus-container">
                <div className="topbar"></div>
                <div className="whyus-text-container">
                    <h1 className="whyus-title">Dlaczego warto nas wybrać?</h1>
                </div>
                <div className="whyus-content-container">
                    <div className="whyus-content">
                        <div className="whyus-content-icon">
                            <BsWrench />
                        </div>
                        <h2 className="whyus-content-title">Wsparcie posprzedażowe</h2>
                        <p className="whyus-content-text">
                            Oferujemy kompleksowe wsparcie posprzedażowe, w tym pomoc w rejestracji
                            pojazdu, serwisie, a także doradztwo w zakresie eksploatacji i
                            utrzymania samochodu.
                        </p>
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-content-icon">
                            <BsStopwatch />
                        </div>
                        <h2 className="whyus-content-title">Doświadczenie</h2>
                        <p className="whyus-content-text">
                            Z wieloletnim doświadczeniem w imporcie aut z USA i Kanady, oferujemy
                            nie tylko bogatą wiedzę na temat procedur celnych, ale także doradztwo w
                            wyborze najlepszego samochodu dostosowanego do indywidualnych potrzeb
                            klienta. 
                        </p>
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-content-icon">
                            <BsCalendar3 />
                        </div>
                        <h2 className="whyus-content-title">Transparentność</h2>
                        <p className="whyus-content-text">
Klienci są na bieżąco informowani o
                            statusie ich zamówienia oraz ewentualnych kosztach, co buduje zaufanie i
                            satysfakcję.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WhyUs;
