import { useState } from "react";
import "./App.scss";

// components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// pages
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
