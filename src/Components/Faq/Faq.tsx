import { useState } from "react";

import "./Faq.css";
type Faqs = {
    title: string;
    text: string | string[];
};

const faqs: Faqs[] = [
    {
        title: "Jakie są opłaty za sprowadzenie pojazdu z USA do Polski?",
        text: [
            "– opłata licytacyjna",
            "– opłata brokerska",
            "– transport do portu w USA",
            "– transport do portów europejskich, w tym wynajem kontenera",
            "– odprawa celna",
            "– cło",
            "– podatek VAT",
            "– akcyza",
            "– przegląd techniczny",
            "– tłumaczenie dokumentacji",
            "– rejestracja pojazdu",
            "– prowizja pośrednika",
        ],
    },
    {
        title: "Dlaczego warto ściągnąć auto z USA?",
        text: "Nawet najmniejsze uszkodzenie  obniża wartość pojazdu w USA. Biorąc pod uwagę koszty naprawy i doprowadzenie samochodu do stanu uzytecznosci, można znacząco zwiększyć jego wartość i finalnie auto wychodzi znacznie taniej niż w Polsce.",
    },
    {
        title: "Jak wygląda wycena auta?",
        text: "Każde zamówienie wyceniamy indywidualnie na podstawie marki, rocznika, modelu auta jak i samego uszkodzenia.",
    },
    {
        title: "Czy ściągniete auto będzie przystosowane do standardów europejskich?",
        text: "Oczywiście na życzenie klienta doprowadzamy auto do pełnych standardow EU.",
    },
    {
        title: "Co jeszcze, prócz AUT można importować z USA?",
        text: "Z USA możemy kupic praktycznie każdy pojazd od Łodzi, motocykle po sprzęty budowlane.",
    },
    {
        title: "Ile trwa cała procedura od importu do rejestracji?",
        text: "2-3 miesiące, zależnie od Stanu w jakim zakupimy auto i uszkodzenia auta.",
    },
];

const Faq = () => {
    const [curOpen, setCurOpen] = useState<number | null>(null);

    const handleToggle = (num: number) => {
        setCurOpen(curOpen === num ? null : num);
    };

    return (
        <>
            <div className="faq-wrapper" id="services">
                <div className="faq-container">
                    <div>
                        <div className="accordion">
                            <h1 className="faq-title">Najcześciej zadawane pytania</h1>
                            {faqs.map((el, i) => {
                                const isOpen = i === curOpen;
                                return (
                                    <div
                                        key={el.title}
                                        className={`item ${isOpen ? "open" : ""}`}
                                        onClick={() => handleToggle(i)}
                                    >
                                        {/* <p className="number">{i < 9 ? `0${i + 1}` : i + 1}</p> */}
                                        <p className="title">{el.title}</p>
                                        <p className="icon">{isOpen ? "-" : "+"}</p>
                                        <div className={`content-box ${isOpen ? "opened" : ""}`}>
                                            {Array.isArray(el.text) ? (
                                                el.text.map((line, index) => (
                                                    <div key={index}>{line}</div>
                                                ))
                                            ) : (
                                                <p>{el.text}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Faq;
