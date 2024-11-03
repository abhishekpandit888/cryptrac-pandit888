/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/cryptrac_logo.png";
import arrow from "../../assets/submit.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/Service"}>
          <li>Services</li>
        </Link>
        <Link to={"/About"}>
          <li>About Us</li>
        </Link>
        <Link to={"/Contact"}>
          <li>Contact Us</li>
        </Link>
        <Link to={"/Ask"}>
          <li>Ask Me</li>
        </Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          <a href="https://en.wikipedia.org/wiki/Cryptocurrency" target="_blank">More</a>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
