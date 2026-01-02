import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container homeHero">
      <div className="heroBox">
        <h1 className="heroTitle">
          Laundry made
          <br />
          simple.
        </h1>
        <p className="heroSub">
          Wash & Care is a laundry service that collects, cleans, and delivers your laundry to your door.
        </p>

        <div className="heroBtns">
          <button className="btnPrimary" onClick={() => navigate("/booking")}>
            Schedule your pick up
          </button>
          <button className="btnGray" onClick={() => navigate("/pricing")}>
            How much does it cost?
          </button>
        </div>

        <ul className="heroList">
          <li>No upfront payment needed. Pay on delivery.</li>
          <li>Your clothes are never washed with other customers.</li>
          <li>Free collection and delivery.</li>
        </ul>
      </div>
    </div>
  );
}
