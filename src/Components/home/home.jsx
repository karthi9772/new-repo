// import React from "react";
import Header from "../header/header";
import Carousel from "react-bootstrap/Carousel";
// import Banner from "assets/img/Banner.jpg";
// import Banner1 from "assets/img/Banner1.jpg";
// import Banner2 from "assets/img/Banner2.jpg";
// import Banner3 from "assets/img/bride-groom.jpg";
// import Banner4 from "assets/img/pic.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import ComCard from "assets/Cards/moiat.jpg";
// import OldnoteCard from "assets/Cards/oldnotes.jpg";
// import RupeeCard from "assets/Cards/rupeeshand.jpg";
import { Link } from "react-router-dom";

import "./home.css";
import HomeFeatures from "./homeFeatures";

const home = () => {
  return (
    <>
      <Header />
      <div className="gradientBackground " style={{height:"600px"}}>
        <Carousel className="carousalStyle">
          <Carousel.Item interval={1000}>
            <img id="carousalImg" className="d-block w-50 mt-5 my-5 mx-auto " src='assets/img/Banner.jpg' alt="" />
            <Carousel.Caption>
              <h3 style={{ fontFamily: "sans-serif", fontSize: "larger" }}>
                We Calculate your dowry
              </h3>
              {/* <p>ulla vitae elit libero, a pharetra augue mollis interdum.N</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img id="carousalImg" className="d-block w-50 mt-5 my-5 mx-auto" src="assets/img/pic.jpg" alt="" />
            <Carousel.Caption>
              <h3>Happy Wedding</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id="carousalImg" className="d-block w-50 mt-5 my-5 mx-auto" src="assets/img/Banner2.jpg" alt="" />
            <Carousel.Caption interval={2000}>
              <h3>Third slide label</h3>
              <p>
                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img id="carousalImg" className="d-block w-50 mt-5 my-5 mx-auto" src="assets/img/bride-groom.jpg" alt="" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>
                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img id="carousalImg" className="d-block w-50 mt-5 my-5 mx-auto" src="assets/img/Banner1.jpg" alt="" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>
                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <section className="content" id="gradientBackground1">
        <div className="home-event">
          <div className="heading">
            <div className="icon icon-heading-icon">icon</div>
            <div className="text">
              <h2>Objective of Moi-Tech </h2>
            </div>
            <div className="">
              <p style={{ fontSize: "18px", margin: "10px 0px" }}>
                Do moi !!! Let's get moi !!! Preserve our culture in a modern
                way.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  margin: "10px 0px",
                  height: "20px",
                  textAlign: "center",
                }}
              >
                Our moi-tech towards the new dimension of modern culture.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12 ">
              <div className="cards d-flex flex-column align-items-center">
                <Card style={{ width: "24rem" }}>
                  <img className="card-class" src="assets/Cards/moiat.jpg" alt="" />
                  <Card.Body>
                    <Link to={"/"}>
                      <Button style={{ marginLeft: "100px" }} variant="primary">
                        Moi @ Computer
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-8 col-12 ">
              <div className="cards d-flex flex-column align-items-center">
                <Card style={{ width: "24rem" }}>
                  <img className="card-class" src="assets/Cards/oldnotes.jpg" alt="" />
                  <Card.Body>
                    <Link to={"/"}>
                      <Button style={{ marginLeft: "100px" }} variant="primary">
                        Renewing Old Moi
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 cl-12 ">
              <div className="cards d-flex flex-column align-items-center">
                <Card style={{ width: "24rem" }}>
                  <img className="card-class" src="assets/Cards/rupeeshand.jpg" alt="" />
                  <Card.Body>
                    <Link to={"/"}>
                      <Button style={{ marginLeft: "100px" }} variant="primary">
                        Moi in Your hands
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFeatures/>
      
    </>
  );
};

export default home;
