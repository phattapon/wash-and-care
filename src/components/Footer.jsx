import React from "react";
import logo from "../assets/Logo.png"
export default function Footer({ variant = "simple" }) {
  if (variant === "big") {
    return (
      <footer className="footerBig">
        <div className="container footerBigInner">
          <div className="footerBrand">
            <div className="footerBrandRow">
            <img className="footerLogoImg" src={logo} alt="Wash & Care" />
            <div className="footerBrandName">Wash &amp; Care</div>
          </div>
          </div>

          <div className="footerCols">
            <div className="footerCol">
              <div className="footerHead">Company</div>
              <a className="footerLink" href="#">Pricing</a>
              <a className="footerLink" href="#">Contact</a>
              <a className="footerLink" href="#">Support</a>
            </div>

            <div className="footerCol">
              <div className="footerHead">Language</div>
              <a className="footerLink" href="#">English</a>
              <a className="footerLink" href="#">Thai</a>

              <div className="footerHead" style={{ marginTop: 14 }}>Wash &amp; Care Services</div>
              <a className="footerLink" href="#">Express Laundry</a>
              <a className="footerLink" href="#">Hotel Laundry</a>
            </div>

            <div className="footerCol">
              <div className="footerHead">Provinces</div>
              <a className="footerLink" href="#">Bangkok</a>
              <a className="footerLink" href="#">Chiang Mai</a>
              <a className="footerLink" href="#">Pattaya</a>
              <a className="footerLink" href="#">Phuket</a>
              <a className="footerLink" href="#">Samet</a>
              <a className="footerLink" href="#">Hua Hin</a>
            </div>

            <div className="footerCol">
              <div className="footerHead">Download Our App</div>
              <div className="storeBadges">
                <div className="storeBadge">Download on the App Store</div>
                <div className="storeBadge">Get it on Google Play</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          © 2025 Wash &amp; Care. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="footerSimple">
      <div className="container footerSimpleInner">
        © 2025 Wash &amp; Care. All rights reserved.
      </div>
    </footer>
  );
}
