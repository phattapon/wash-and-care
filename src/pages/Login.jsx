import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Login (ต่อ backend ทีหลัง)");
  };

  return (
    <div className="authWrap">
      <div className="authCard">
        <h1 className="authTitle">Login</h1>

        <form onSubmit={onSubmit} className="authForm">
          <label className="label">Email</label>
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

          <div className="authRow">
            <span />
            <a className="link" href="#" onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </a>
          </div>

          <div className="authRow">
            <div className="muted">
              Don't have an account? <Link className="link" to="/register">Register</Link>
            </div>
            <button className="btnPrimary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
