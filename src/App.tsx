import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import Pagenotfound from "./components/Pagenotfound/Pagenotfound";

function App() {
  // React router setup done
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<Movie />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
