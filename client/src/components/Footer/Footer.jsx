// import { fontWeight } from "@material-ui/system";
import React from "react";
import FooterWhite from "./FooterWhite";

const input1 = {
  width: "25%",
  marginRight: "5px",
  height: "44px",
  border: "1px solid grey",
  borderRadius: "4px",
  fontSize: "20px",
  fontWeight: "100",
  paddingLeft: "8px",
};
const label = { color: "black", fontSize: "14px", padding: "0", marginLeft: "10px" };
const button = {
  backgroundColor: "rgb(0,53,128)",
  border: "none",
  borderRadius: "4px",
  height: "46px",
  padding: "13px",
  color: "white",
  fontSize: "18px",
  fontWeight: "100",
};
const p1 = {
  color:"var(--primary-color)",
  fontSize: "30px",
  fontWeight: "600",
  padding: "0",
  margin: "0",
};
const p2 = {
  color: "black",
  fontSize: "16px",
  padding: "0",
  margin: "5px",
  marginBottom: "14px",
};

const link = {
  color: "black",
  fontSize: "14px",
  fontWeight: "500",  
  textDecoration:"none"
}

const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "white",
          padding: "30px",
          textAlign: "center",
          width: "100vw",
          marginLeft: "-8px ",
          overflowY: "hidden"

        }}
      >
        <p style={p1}>Save time, save money!</p>
        <p style={p2}>Sign up and we'll send the best deals to you</p>
        <div style={{ padding: "10px"}}>
          <input style={input1} type="text" placeholder=" Your email" />
          <button style={button}>Subscribe</button>
        </div>
        <input type="checkbox" id="c1" />
        <label style={label} forhtml="c1">
          Send me ads from 250Heights app!
        </label>
      </div>
      <div
        style={{
          backgroundColor: "white",
          paddingTop: "20px",
          paddingBottom: "15px",
          border: "none",
          width: "100vw",
          marginLeft: "-8px ",
          //  marginTop: "-8px" ,
          overflowY: "hidden",
        }}
      >
        
        <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
          <a href="/" style={link}>Mobile version</a>
          <a href="/" style={link}>Your account</a>
          <a href="/" style={link}>Make changes online to your booking</a>
          <a href="/" style={link}>Contact Customer Service</a>
          <a href="/" style={link}>Become an affiliate</a>
          <a href="/" style={link}>Become an affiliate</a>
          
        </div>
      </div>
      <FooterWhite />
    </>
  );
};

export default Footer;
