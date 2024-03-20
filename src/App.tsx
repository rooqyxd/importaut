import "./App.css";
import "../public/fonts/Roboto/Roboto-Regular.ttf";
import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Faq from "./Components/Faq/Faq";


function App() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <Faq/>
            <Faq/>
            <Faq/>
        </>
    );
}

export default App;
