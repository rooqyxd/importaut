import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { ThreeDots } from "react-loader-spinner";
import { BsFillTelephoneFill, BsBriefcaseFill } from "react-icons/bs";
const ContactUs = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const serviceId = "service_p3y27jh";
        const templateId = "template_t6m4j6f";

        if (form.current) {
            const formElement = form.current;
            emailjs
                .sendForm(serviceId, templateId, formElement, {
                    publicKey: "P-gg3DWEMHASUstyf",
                })
                .then(
                    () => {
                        setIsSending(false);
                        setIsSent(true);
                        formElement.reset();
                        setTimeout(() => {
                            setIsSent(false);
                        }, 5000);
                    },

                    (error) => {
                        setIsSending(false);
                        console.log("FAILED...", error.text);
                    },
                );
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Kontakt</h1>
            <div className="info-wrapper" id="contact">
                <div className="company-info">
                    <h2 className="company-info-title">
                        <strong>Import Aut z Kanady i USA</strong>
                    </h2>
                    <h2 className="company-info-title">
                        <strong>Mariusz Korolczuk</strong>
                    </h2>
                    <p className="company-info-text">Zwierzyniecka 68 </p>
                    <p className="company-info-text">15-246 Białystok</p>
                    <p className="company-info-text">
                        <a href="tel:+48602345353" className="company-info-text-contact">
                            <BsFillTelephoneFill />{" "}
                            <span className="company-info-text-contact-info">+48 602 345 353</span>
                        </a>
                    </p>
                    <p className="company-info-text">
                        <a
                            href="mailto:import_group@yahoo.com"
                            className="company-info-text-contact"
                        >
                            <BsBriefcaseFill />{" "}
                            <span className="company-info-text-contact-info">
                                import_group@yahoo.com
                            </span>
                        </a>
                    </p>
                </div>

                <div className="contact-wrapper">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <label>Imię:</label>
                        <input type="text" name="user_name" />
                        <label>Email:</label>
                        <input type="email" name="user_email" />
                        <label>Numer telefonu:</label>
                        <input type="number" name="user_number" />
                        <label>Wiadomość:</label>
                        <textarea name="message" />
                        <button
                            type="submit"
                            className={`contact-button ${isSent && "sending-color"}`}
                        >
                            {isSending ? (
                                <div className="button-content">
                                    <span className="button-text-sending">Wysyłanie</span>
                                    <ThreeDots height={10} width={40} color="#08cc39" />
                                </div>
                            ) : isSent ? (
                                <span className="button-text-sent">Wysłano</span>
                            ) : (
                                <span className="button-text-sending">Wyślij</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ContactUs;
