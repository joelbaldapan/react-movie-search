import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const location = useLocation();

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home key={location.key} />} />
          <Route path="/favorites" element={<Favorites key={location.key} />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
