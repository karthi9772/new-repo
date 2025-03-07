import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Form, Button } from "react-bootstrap";
import './AdminRegister.css'
const AdminRegister = () => {
  const [AdminUser, SetAdminUser] = useState({
    Name:"",
    Mobile:"",
    Password:"",
    ConfPassword:"",
    Email: "",
  });
  const handleSubmit = ()=>{

  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center">Earn with us Grow with us</h2>
          </div>
          <div className="col-lg-6">
            <h2 className="text-center">Sign in</h2>
            <Form id="Logform" onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Control
                    id="formInput"
                    name="Name"
                    placeholder="Name"
                    // onChange={handleChange}
                    value={AdminUser.Name}
                    style={{width:'70%'}}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Control
                    id="formInput"
                    name="Mobile"
                    placeholder="Mobile Number"
                    // onChange={handleChange}
                    value={AdminUser.Mobile}
                    style={{width:'70%'}}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Control
                    id="formInput"
                    name="Password"
                    placeholder="Password"
                    // onChange={handleChange}
                    value={AdminUser.Password}
                    style={{width:'70%'}}
                    type="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Control
                    id="formInput"
                    name="ConfPassword"
                    placeholder="Confirm Password"
                    // onChange={handleChange}
                    value={AdminUser.ConfPassword}
                    style={{width:'70%'}}
                    type="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Control
                    id="formInput"
                    name="Email"
                    placeholder="Email"
                    // onChange={handleChange}
                    value={AdminUser.Email}
                    style={{width:'70%'}}
                    type="email"
                  />
                </Form.Group>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminRegister;
