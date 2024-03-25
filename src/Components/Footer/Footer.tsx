import "./Footer.css";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-container">
            <p className="footer-text">Import Group &copy; {currentYear}</p>
        </div>
    );
};

export default Footer;
