import strelka from "./home.svg";
import "./home.css";
import { useEffect, useState } from "react";
export const Home = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("https://invoices-8ehs.onrender.com/invoices")
      .then((res) => res.json())
      .then((data) => setInvoices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(invoices);

  return (
    <div>
      <div className="mainHomeDiv">
        {invoices.map((item, index) => (
          <div key={index} className="elements">
            <h3>#{item.userId}</h3>
            <p>{item.dueDate}</p>
            <p>{item.to}</p>
            <h3>£ {item.price}</h3>
            <div className="forOrder">
              <div className="forCircle"></div>
              <p className="paid">Paid</p>
            </div>
            <img src={strelka} alt="photo" />
          </div>
        ))}
      </div>
    </div>
  );
};
