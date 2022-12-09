import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./Routes/Hero";
import { About } from "./Routes/About";
import { DirectorsPage } from "./Routes/DirectorsPage";
import { Training } from "./Routes/Training";
import { Contact } from "./Routes/Contact";
import { Blog } from "./Routes/Blog";
import { Arabic } from "./Components/LanguageComponents/Arabic";
import { English } from "./Components/LanguageComponents/English";
import { French } from "./Components/LanguageComponents/French";
import { Germany } from "./Components/LanguageComponents/Germany";
import { Japanies } from "./Components/LanguageComponents/Japanies";
import { Korean } from "./Components/LanguageComponents/Korean";
import { Russian } from "./Components/LanguageComponents/Russian";
import { Spanish } from "./Components/LanguageComponents/Spanish";
import { Courses } from "./Routes/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Director" element={<DirectorsPage />} />
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Arabic" element={<Arabic />} />
        <Route path="/English" element={<English />} />
        <Route path="/French" element={<French />} />
        <Route path="/Germany" element={<Germany />} />
        <Route path="/Japanese" element={<Japanies />} />
        <Route path="/Korean" element={<Korean />} />
        <Route path="/Russian" element={<Russian />} />
        <Route path="/Spanish" element={<Spanish />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
