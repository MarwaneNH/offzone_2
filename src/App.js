import React from "react";
import Document from "./components/Document";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Agenda from "./components/Agenda";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Document />} />
          <Route path="/document" element={<Document />} />
          <Route exact path="/agenda" element={<Agenda />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
