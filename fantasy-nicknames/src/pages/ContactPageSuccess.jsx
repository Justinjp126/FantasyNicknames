import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSuccess from "../components/ContactSuccess";
import { Link } from "react-router-dom";

export default function ContactPageSuccess() {
  return (
    <>
      <main>
        <Header />
        <ContactSuccess />
        <Footer />
      </main>
    </>
  );
}
