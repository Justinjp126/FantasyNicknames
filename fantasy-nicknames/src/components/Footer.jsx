import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <small className="footer__text">
          <Link className="footer__text_name" to="/about">
            Made by Justin Puthenpurayil
          </Link>
        </small>
      </footer>
    </>
  );
}
