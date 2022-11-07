import React from "react";
import Header from "../components/Header";
import { Outlet, Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <main>
        <Header />
        <div className="error">
          <h1 className="error__title">Oops</h1>
          <p className="error__description">This page doesn't exist :(</p>
          <Link to={`/`} className="error__container">
            <button className="error__container_btn">BACK TO HOME</button>
          </Link>
        </div>
      </main>
    </>
  );
}
