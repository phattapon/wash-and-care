import React, { useMemo, useState } from "react";

export default function Booking() {
  const [city, setCity] = useState("Bangkok");
  const [service, setService] = useState("economy");
  const [weight, setWeight] = useState(1);

  const services = useMemo(
    () => ({
      economy: { title: "Economy — 3 Days", price: 79, window: "4 hour collection window", next: "Tomorrow, 12:00 PM – 4:00 PM" },
      standard: { title: "Standard — Next Day", price: 109, window: "2 hour collection window", next: "Today, 6:00 PM – 8:00 PM" },
      express: { title: "Express — Same Day", price: 209, window: "2 hour collection window", next: "Tomorrow, 10:00 AM – 12:00 PM" },
    }),
    []
  );

  const selected = services[service];
  const washCost = Math.round(selected.price * weight);
  const minCharge = 399;
  const total = Math.max(minCharge, washCost);

  return (
    <div className="container bookingPage">
      <div className="bookingGrid2">
        <section className="panel">
          <h2 className="stepTitle">1. Choose your service</h2>

          <div className="chipRow">
            <button className={"chip" + (city === "Bangkok" ? " active" : "")} onClick={() => setCity("Bangkok")} type="button">
              Bangkok
            </button>
            <button className={"chip" + (city === "Chiang Mai" ? " active" : "")} onClick={() => setCity("Chiang Mai")} type="button">
              Chiang Mai
            </button>
          </div>

          <div className="serviceList">
            {Object.entries(services).map(([key, s]) => (
              <label key={key} className={"serviceCard" + (service === key ? " selected" : "")}>
                <input
                  type="radio"
                  name="service"
                  checked={service === key}
                  onChange={() => setService(key)}
                />
                <div className="serviceMain">
                  <div className="serviceTitle">{s.title}</div>
                  <div className="serviceMeta">{s.window}</div>
                  <div className="serviceMeta">Next available collection: {s.next}</div>
                  <div className="servicePrice">฿ {s.price} / kg</div>
                </div>
              </label>
            ))}
          </div>

          <hr className="divider" />

          <h2 className="stepTitle">3. Tell us about your laundry</h2>
          <div className="weightRow">
            <button className="btnGhost" type="button" onClick={() => setWeight((w) => Math.max(0, w - 1))}>- 1kg</button>
            <div className="weightNum">{weight} kg</div>
            <button className="btnGhost" type="button" onClick={() => setWeight((w) => w + 1)}>+ 1kg</button>
          </div>

          <div style={{ marginTop: 18 }}>
            <button className="btnPrimary" type="button" onClick={() => alert("Request collection (ต่อ backend ทีหลัง)")}>
              Request collection
            </button>
          </div>
        </section>

        <aside className="summaryPurple">
          <div className="summaryHead">Order Summary</div>
          <div className="summaryText">
            Your laundry will be collected today and returned to you tomorrow.
          </div>

          <div className="summaryLine" />
          <div className="sumRow">
            <div>Estimated weight:</div>
            <div><b>{weight}kg</b></div>
          </div>
          <div className="sumRow">
            <div>Cost of wash:</div>
            <div><b>THB {washCost}</b></div>
          </div>
          <div className="sumRow">
            <div>Collection and delivery:</div>
            <div><b>Free*</b></div>
          </div>

          <div className="summaryLine" />
          <div className="sumTotalRow">
            <div>Estimated Total</div>
            <div className="sumTotalNum">THB {total}</div>
          </div>
          <div className="summarySmall">
            Our service has a minimum charge of THB {minCharge}.
          </div>
        </aside>
      </div>
    </div>
  );
}
