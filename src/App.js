import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import CountryPage from "./pages/countryPage";
import DestinationPage from "./pages/destination";
import EachPlace from "./pages/EachPlace";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countries" element={<CountryPage />} />
        <Route path="/:countries/:name" element={<DestinationPage />} />
        <Route path="/:countries/:name/:place" element={<EachPlace />} />
      </Routes>
    </div>
  );
}

export default App;
