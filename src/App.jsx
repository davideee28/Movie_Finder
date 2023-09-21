import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import NoPage from "./assets/pages/NoPage";
import Header from "./assets/components/Header";
import "./App.css";
import Movies from "./assets/pages/Movies";
import Series from "./assets/pages/Series";
import Details from "./assets/pages/Details";
import Footer from "./assets/components/Footer";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/details/:type/:id/:title" element={<Details />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}
