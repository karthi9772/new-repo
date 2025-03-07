import React from "react";
import Header from "../header/header";
import Card from "react-bootstrap/Card";
import "./page.css";
import Footer from "../footer/footer";
// import { SlSocialTwitter } from "react-icons/sl";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { IoLogoInstagram } from "react-icons/io5";

// import { LuFacebook } from "react-icons/lu";
// import Vjaan from "./vjan-neg.png";
const page = () => {
  return (
    <>
      <Header />
      <section className="page-header shadow mt-1 ">
        <div className="bg-white">
          <Card
            id="corner"
            className="container-fluid"
            style={{ padding: "0" }}
          >
            <Card.Body
              style={{ height: "130px", backgroundColor: "lightgray" }}
            >
              <div className="pt-1 my-3">
                <h2 className="justify-content-center">VJAN Moi-Tech</h2>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section className="content" id="gradientBackground">
        <div className="container">
          <div className="home-event">
            <div className="heading">
              <div className="icon icon-heading-icon">icon</div>
              <div className="text">
                <h2>Moi at hand </h2>
              </div>
              <div  className="stickline">__________</div>
            </div>
            <div className="contact-box" style={{ marginTop: "50px" }}>
              <p>
                ஆண்ட்ராய்டு அப்ளிகேசன் வழியாக நீங்கள் தினசரி
                செய்துகொண்டிருக்கும் மொய் விபரங்களை உங்கள் மொபைலில் அவ்வப்போது
                நீங்களே ஏற்றிக்கொள்ளும் வசதி. நீங்கள் வாங்கிய மொய் விபரங்களையும்
                உங்கள் மொபைலில் ஏற்றிக்கொள்ளும் வசதி.
              </p>
              <p>
                செய்த மற்றும் வாங்கிய மொய்களை ஒரே LOGIN ல் SYSTEM-லிம் பதிவு
                செய்யலாம்.
              </p>
              <p>
                எங்கள் ஆண்ட்ராய்டு செயலியை பதிவிறக்கம் செய்ய கீழே உள்ள லிங்க்-ஐ
                க்ளிக் செய்யவும்
              </p>
              <a href="https://vjansoftware.com/">Our Website Link</a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default page;
