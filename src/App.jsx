import Characters from "./components/views/characters/Characters";
import Banner from "./components/views/banner/Banner";
import Episodes from "./components/views/episodes/Episodes";
import Locations from "./components/views/locations/Locations";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/rick-and-morty-api/" element={<Banner />} />
        <Route path="/rick-and-morty-api/characters" element={<Characters />} />
        <Route path="/rick-and-morty-api/episodes" element={<Episodes />} />
        <Route path="/rick-and-morty-api/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
