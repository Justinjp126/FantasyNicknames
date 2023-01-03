import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <main>
        <Header />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
