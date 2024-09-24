import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CardSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
