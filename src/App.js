import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./demo/Demo";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Demo />} />
        <Route exact path='/index-1' element={<HomeOne />} />
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
