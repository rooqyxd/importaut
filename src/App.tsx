import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import WhyUs from "./Components/WhyUs/WhyUs";
import Faq from "./Components/Faq/Faq";
import Gallery from "./Components/Gallery/Gallery";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <WhyUs />
            <Faq />
            <Gallery />
            <ContactUs />
        </>
    );
}

export default App;
