import { useState } from "react";
import "./App.scss";

// components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// pages
import Home from "./pages/home/home";
import Entrance from "./pages/entrance/entrance";
import Registration from "./pages/registration/registration";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Entrance /> */}
      <Registration />
      <Footer />
    </>
  );
}

export default App;
