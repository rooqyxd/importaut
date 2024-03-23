import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import WhyUs from "./Components/WhyUs/WhyUs";
import Faq from "./Components/Faq/Faq";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";

function App() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <WhyUs />
            <Faq />
            <Gallery />
            <Contact />
        </>
    );
}

export default App;
