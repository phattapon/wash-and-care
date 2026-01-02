import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Register (ต่อ backend ทีหลัง)");
  };

  return (
    <div className="authWrap">
      <div className="authCard">
        <h1 className="authTitle">Register</h1>

        <form onSubmit={onSubmit} className="authForm">
          <label className="label">Full Name</label>
          <input
            className="input"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          />

          <label className="label">Email Address</label>
          <input
            className="input"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />

          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            value={form.password}
            onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
          />

          <label className="label">Confirm Password</label>
          <input
            className="input"
            type="password"
            value={form.confirm}
            onChange={(e) => setForm((p) => ({ ...p, confirm: e.target.value }))}
          />

          <div className="authRow">
            <div className="muted">
              Already have an account? <Link className="link" to="/login">Login</Link>
            </div>
            <button className="btnPrimary" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
