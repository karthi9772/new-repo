import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./adminLogin.css";

const adminLogin = () => {
  const [Admin, SetAdmin] = useState({
    Mobile: "",
    Pass: "",
  });
  const handleChange = (e) => {
    //e for event listening
    const Mob = e.target.name;
    const Pas = e.target.value;
    SetAdmin({
      ...Admin,
      [Mob]: Pas,
    });
  };
  const navigate = useNavigate(); // navigating another page or url
  const [errors, SetErrors] = useState({});
  const handleSubmit = async (e) => {
    const trimmedMobile = Admin.Mobile.trim(); //trim method for avoid extra spaces or white spaces for input
    const trimmedPass = Admin.Pass.trim();
    e.preventDefault();
    const newErrors = {}; //creating empty object
    //validation for mobile number
    if (!Admin.Mobile) {
      newErrors.Mobile = "Enter Mobile Number to Login";
    } else if (isNaN(Admin.Mobile)) {
      newErrors.Mobile = "Enter appropriate Mobile number";
    }
    if (!Admin.Pass) {
      newErrors.Pass = "Enter Password to Login";
    } else if (Admin.Pass.length < 8) {
      newErrors.Pass = "Password should contain minium 8 values";
    }
    SetErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.get("http://localhost:3000/admin");
        const users = response.data;
        const user = users.find(
          (u) => u.Mobile === trimmedMobile && u.Pass === trimmedPass
        );
        if (user) {
          console.log("Login Successfull: ", user);
          navigate("/home");
        } else {
          console.log("Invalid User: ", Admin);
          SetErrors({
            ...newErrors,
            general: "Invalid Admin Name Or Password",
          });
        }
      } catch (error) {
        console.log("Error during Login: ", error);
        SetErrors({
          ...newErrors,
          general: "Error during login please try again later",
        });
      }
    } else {
      console.log("Login Requirement validated: ", Admin);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="text"></div>
          <h2 className="justify-content-center d-flex">
            Login to your Account
          </h2>
          <div className="col-lg-6 mx-auto justify-content-center align-items-center">
            <img
              style={{ width: "40rem", marginTop: "10%" }}
              src="https://www.datamanagements.in/wp-content/uploads/2022/01/gif.gif"
              alt=""
            />
          </div>
          <div className="col-lg-6 mx-auto " style={{ marginTop: "5%" }}>
            <h2 className="text-center">Welcome to VJAN-MoiTech</h2>
            <div className="container">
              <Form className="Logform" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" id="formInput" controlId="formBasicMobile">
                  <Form.Label id="formInput">Mobile Number</Form.Label>
                  <Form.Control id="formInput"
                    name="Mobile"
                    type="text"
                    placeholder="Enter Mobile Number"
                    onChange={handleChange}
                    style={{ width: "70%" }}
                  />
                  <Form.Text id="formInput" className="text-muted">
                    We'll never share your info with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group id="formInput" className="mb-3" controlId="formBasicPassword">
                  <Form.Label id="formInput">Password</Form.Label>
                  <Form.Control
                    id="formInput"
                    name="Pass"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    style={{ width: "70%" }}
                  />
                </Form.Group>
                <Form.Group 
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button id="formButtons"
                  variant="outline-success"
                  type="submit"
                  style={{ textDecoration: "white" }}
                >
                  Login
                </Button>
                <Button 
                id="formButtons"
                  variant="none"
                  as={Link}
                  to={"/adminRegister"}
                  style={{ textDecoration: "white" }}
                >
                  Sign in
                </Button>
                <a id="formButtons" className="col-lg-3" href="#">
                  {" "}
                  Forget Password ?
                </a>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default adminLogin;
