import {
    BsBriefcaseFill,
    BsFillCarFrontFill,
    BsImage,
    BsPersonVcard,
    BsJustify,
} from "react-icons/bs";
import "./Navbar.css";
import { useState, MouseEvent, useEffect } from "react";
const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [fullScreenMenu, setFullScreenMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const hrefAttribute = event.currentTarget.getAttribute("href");
        const targetId = hrefAttribute ? hrefAttribute.slice(1) : "";

        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        if (fullScreenMenu) setFullScreenMenu((prev) => !prev);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleBurgerClick = () => {
        setBurgerMenu(!burgerMenu);
        setFullScreenMenu(!fullScreenMenu);
    };
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Cleanup function
        return () => {
            // Remove the event listener when the component is unmounted
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="navbar-wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="navbar-left">
                        <div
                            id="home"
                            className="navbar-logo"
                            onClick={scrollToTop}
                            style={{ cursor: "pointer" }}
                        >
                            <a href="#home">
                                <img src="./../conslogo.jpg" alt="logo" className="navlogo" />
                            </a>
                            <div className="title-container">
                                <h1 className="title-one">
                                    <strong>Import Aut z USA i Kanady</strong>
                                </h1>
                                <h1 className="title-two">Mariusz Korolczuk</h1>
                            </div>
                        </div>
                    </div>
                    {windowWidth < 768 && (
                        <div className="burger-menu" onClick={handleBurgerClick}>
                            <span className={fullScreenMenu ? "burger-white" : "burger-black"}>
                                <BsJustify />
                            </span>
                        </div>
                    )}

                    <div className="navbar-right">
                        <ul className="links">
                            <li className="navbar-link-li">
                                <div className="navbar-link-cont">
                                    <a
                                        href="#aboutus"
                                        className="navbar-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsPersonVcard className="navbar-text" />
                                        <span className="navbar-text">O nas </span>
                                    </a>
                                </div>
                            </li>
                            <li className="navbar-link-li">
                                <div className="navbar-link-cont">
                                    <a
                                        href="#services"
                                        className="navbar-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsFillCarFrontFill className="navbar-text" />
                                        <span className="navbar-text">Usługi</span>
                                    </a>
                                </div>
                            </li>
                            <li className="navbar-link-li">
                                <div className="navbar-link-cont">
                                    <a
                                        href="#gallery"
                                        className="navbar-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsImage className="navbar-text" />
                                        <span className="navbar-text">Galeria</span>
                                    </a>
                                </div>
                            </li>
                            <li className="navbar-link-li">
                                <div className="navbar-link-cont">
                                    <a
                                        href="#contact"
                                        className="navbar-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsBriefcaseFill className="navbar-text" />
                                        <span className="navbar-text">Kontakt</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div
                        className={fullScreenMenu ? "full-screen-menu active" : "full-screen-menu"}
                    >
                        <ul>
                            <li>
                                <div className="fullscreen-link-cont">
                                    <a
                                        href="#aboutus"
                                        className="fullscreen-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsPersonVcard />
                                        <span className="fullscreen-text">O nas</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="fullscreen-link-cont">
                                    <a
                                        href="#services"
                                        className="fullscreen-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsFillCarFrontFill />
                                        <span className="fullscreen-text">Usługi</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="fullscreen-link-cont">
                                    <a
                                        href="#gallery"
                                        className="fullscreen-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsImage />
                                        <span className="fullscreen-text">Galeria</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="fullscreen-link-cont">
                                    <a
                                        href="#contact"
                                        className="fullscreen-link"
                                        onClick={scrollToSection}
                                    >
                                        <BsBriefcaseFill />
                                        <span className="fullscreen-text">Kontakt</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
