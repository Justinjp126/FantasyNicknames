import React from "react";
import Header from "../components/Header"
export default function ErrorPage() {
  
  return (
    <>
      <main>
        <Header />
        <div className="error">
          <h1 className="error__title">Oops</h1>
          <p className="error__description">This page doesn't exist :(</p>
          <button className="error__btn">BACK TO HOME</button>
        </div>
      </main>
      
    </>
    
  );
}
