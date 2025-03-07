import React, { useEffect, useState } from "react";
import "./register.css";
import Header from "../header/header";
// import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Footer from "../footer/footer";
import { Alert } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const register = () => {
  const [User, SetUser] = useState({
    Name: "",
    Mobile: "",
    Password: "",
    ConfPassword: "",
    Email: "",
  });
  // var box=document.getElementById('check')
  let [isAgreed, setIsAgreed] = useState(false);

  let handleCheckBox = (e) => {
    setIsAgreed (e.target.checked)
  };
  const handleChange = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    SetUser({
      ...User,
      [Name]: Value,
    });
  };
  const [errors, SetErrors] = useState({});
  // const ip=false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!User.Name) {
      newErrors.Name = "user name is mandatory";
    }
    if (!User.Mobile) {
      newErrors.Mobile = "user mobile no is mandatory";
    } else if (isNaN(User.Mobile)) {
      newErrors.Mobile = "Mobile Number should be an integer value ";
    } else if (User.Mobile.length !== 10) {
      newErrors.Mobile = "Mobile Number should be min & max 10 ";
    }
    if (!User.Password) {
      newErrors.Password = "Enter Password";
    } else if (User.Password.length < 8) {
      newErrors.Password = "Password should contain minimum 8 values ";
    }
    if (!User.ConfPassword) {
      newErrors.ConfPassword = "Confirmatory password is required";
    } else if (User.ConfPassword !== User.Password) {
      newErrors.ConfPassword = "Password & Confirm password must be match";
    }
    if (!User.Email) {
      newErrors.Email = "Email is mandatory";
    }
    if (!isAgreed) {
      newErrors.Agreement = "Terms & Conditions should be accepted ";
    }

    SetErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/user", User);
        console.log("User Register Successfully: ", User);
        toast.success("Registration Successfull");
        SetUser({
          Name: "",
          Mobile: "",
          Password: "",
          ConfPassword: "",
          Email: "",
        });
      } catch (error) {
        console.log("Error in Registering User", error);
        toast.error("Registration failed please try again");
      }
    } else {
      // console.log('Signin validation failed',newErrors);
      // console.log('User Data: ',User);
      Object.values(newErrors).forEach((err) => {
        toast.warning(err);
      });
    }
  };
  const notify = () => toast();

  return (
    <>
      <Header />
      <div className="register-banner">
        {/* <img src="https://moitech.in/img/registerbanner.jpg"
          //  style={{position:"relative",display:"inline-block"}} alt="" class="register-banner"/> */}
        <div className="inner-banner row">
          <div className="col-lg-6">
            <h2
              className="mt-5"
              style={{
                textAlign: "center",
                padding: "120px",
                color: "MenuText",
              }}
            >
              Welcome to VJAN-MoiTech
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="register">
              <h2 style={{ color: "black", textAlign: "center" }}>
                Register Now
              </h2>
              <Form id="Logform" onSubmit={handleSubmit} className="inner-form">
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    id="formInput"
                    name="Name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={User.Name}
                    type="text"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="Mobile"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    value={User.Mobile}
                    type="text"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="Password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={User.Password}
                    type="password"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="ConfPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={User.ConfPassword}
                    type="password"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="Email"
                    placeholder="Email Id"
                    onChange={handleChange}
                    value={User.Email}
                    type="email"
                  />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  checked={isAgreed}
                  onChange={handleCheckBox}
                  label="I agree to Event Planning terms of services"
                />
                <Button type="submit">Register</Button>
                <ToastContainer />
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default register;
