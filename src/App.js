import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WatchHistory from "./pages/WatchHistory";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
