import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png"

export default function Navbar() {
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="topbar">
      <div className="container topbarInner">
        <button className="brandBtn" type="button" onClick={() => navigate("/")}>
            <img className="brandImg" src={logo} alt="Wash & Care" />
          <span className="brandText">Wash &amp; Care</span>
        </button>

        <nav className="topnav">
          <NavLink to="/pricing" className="toplink">
            Pricing
          </NavLink>

          <div className="langWrap" ref={menuRef}>
            <button
              className="toplink langBtn"
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
            >
              Language <span className="caret" aria-hidden="true">▾</span>
            </button>

            {langOpen && (
              <div className="langMenu" role="menu">
                <button className="langItem" type="button">English</button>
                <button className="langItem" type="button">Thai</button>
              </div>
            )}
          </div>

          <button className="signinBtn" type="button" onClick={() => navigate("/login")}>
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
