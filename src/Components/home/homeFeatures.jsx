import React from 'react'
import "./home.css";
import { BsCloudUploadFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { FaSms } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { TbChartPieFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaArrowDownAZ } from "react-icons/fa6";
import ContentFooter from './contentFooter';

const homeFeatures = () => {
  return (
    <>
        <section className="service-type " id='gradientBackground1'>
        <div className="heading mt-5">
          <div className="icon icon-heading-icon">icon</div>
          <div className="text">
            <h2>VJAN-MoiTech Features </h2>
          </div>
          <div className="stickline">__________</div>
        </div>
        <div className="container mt-5" style={{ marginLeft: "110px" }}>
          <section
            className="features align-items-center ps-4"
            style={{
              textAlign: "center",
              paddingLeft: "auto",
              paddingRight: "auto",
            }}
          >
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <BsCloudUploadFill className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Manage Moi Accounts in Online
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                 <FaServer  className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Facility to Add or Update MOI's
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <BsPersonFillGear  className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Details of the Individual     
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <FaSms   className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      SMS Reminder of the Events
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <FaReceipt    className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Instant Computer Receipt for MOI 
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <TbChartPieFilled  className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text"
                      style={{ height: "1rem", textAlign: "center", }}
                    >
                      Analyze the amount of the MOI Giving
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <FaCalendarAlt  className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Details of the Past / Future Events
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <FaCalculator className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Accurate MOI Calculation
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card" style={{ width: "12rem" }}>
                <FaMobileScreen className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      Details of the MOI in your Mobile 
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <section className="service-category mt-5">
              <a href="#">
                <div className="card mb-5" style={{ width: "12rem" }}>
                <FaArrowDownAZ className='ms-5 pt-3' size={80} />
                  <div className="card-body mb-4">
                    <p
                      className="card-text "
                      style={{ height: "1rem", textAlign: "center" }}
                    >
                      MOI According to the City / Town Name
                    </p>
                  </div>
                </div>
              </a>
            </section>
          </section>
        </div>
      </section> <br />
            <ContentFooter/>
    </>
  )
}

export default homeFeatures