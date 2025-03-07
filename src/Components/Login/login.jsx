  import React, { useState } from "react";
  import Header from "../header/header";
  import Form from "react-bootstrap/Form";
  import Button from "react-bootstrap/Button";
  import Alert from "react-bootstrap/Alert";
  import Footer from "../footer/footer";
  import '../footer/footer.css'
  import { Link, Navigate, useNavigate } from "react-router-dom";
  import axios from "axios";
  import './login.css';


  const login = () => {
  
    const [User, SetUser] = useState({
      Mobile: "",
      Pass: "",
    });
  
    const handleChange = (e) =>{
      const Mob=e.target.name;
      const Pas=e.target.value;
      SetUser({
        ...User,
        [Mob]:Pas,
      })
    }

    const navigate =useNavigate();
    const [errors, setErrors] = useState({})
    
    const handleSubmit= async (e)=>{
      const trimmedMobile=User.Mobile.trim()
      const trimmedPass=User.Pass.trim()
        e.preventDefault()
        const  newErrors={}
            //validate Mobile
        if (!User.Mobile) {
            newErrors.Mobile="Mobile Number is Mandatory"        
        }
        else if (isNaN(User.Mobile)) {
            newErrors.Mobile="Enter Appropriate Mobile Number" 
          }   //VALIDATE PASSword
        if (!User.Pass) {
            newErrors.Pass="Password is Mandatory"
        } 
          else if (User.Pass.length<8) {
            newErrors.Pass="Password should contain minimum 8 values "
          }
          //If no validation error proceed with api request
          setErrors(newErrors)
            if (Object.keys(newErrors).length===0) {
              try {
                const response = await axios.get('http://localhost:3000/user')
                const users = response.data;
                const user = users.find (
                   u => u.Mobile === trimmedMobile && u.Password === trimmedPass
                  )          
                if (user) {                                  
                  console.log('Login Successfull',user);
                    navigate('/home')
                }
                else{
                  console.log('Invallid User',User);
                  setErrors({...newErrors, general:"Invalid Mobile Number or Password"})
                  
                }

              } catch (error) {
                console.log("Error during Login", error);
                setErrors({...newErrors, general:"An error occurred during login , please try again later..."})
                
              }
              // console.log('Login Validation: ',newErrors);
            }
            else{
              console.log('Login requirement validated: ',User);
              // console.log( 'User Data: ',  User);
              
            }

    }

    return (
      <>
        <Header /> 
        <div className="container">
          <div className="row">
         <div className="text justify-content-center d-flex align-items-center mt-5">
         <h2 className="">Login to your Account</h2>
         </div>
          <div className="col-lg-6 mx-auto justify-content-center align-items-center" style={{marginTop:"10%",}}>
                    <img style={{marginTop:"-100px",padding:'-10%', width: '34rem'}} src="https://gifdb.com/images/high/money-rain-memoji-50dzecvgdit478pz.gif" alt="" />
            </div>
            <div className="col-lg-6 mx-auto justify-content-center align-items-center" style={{marginTop:"5%",}}>
               <h2 className="text-center">Welcome to VJAN-MoiTech</h2>
              <div  className="container">
              <Form className="Logform" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupMobile">
                  <Form.Label id="formInput">Mobile Number</Form.Label>
                  <Form.Control
                    // id="Mobile"
                    id="formGroupMobile"
                    name="Mobile"
                    onChange={handleChange}
                    value={User.Mobile}
                    type="text"
                    style={{ width: "70%", }}
                    placeholder="Enter Mobile Number"
                  />
                  <Form.Text id="formInput" className="text-muted">
                  We'll never share your info with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label id="formInput">Password</Form.Label>
                  <Form.Control
                  id="formInput"
                    // id="Pass"
                    name="Pass"
                    onChange={handleChange}
                    value={User.Pass}
                    type="password"
                    style={{ width: "70%" }}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button id="formButtons" type="submit" variant="">
                  Login
                </Button> 
                <Button id="formButtons" variant="none" as={Link} to={'/register'} style={{textDecoration:"white",}} >Sign in </Button>
                <a id="formButtons" className="col-lg-3" href="#"> Forget Password ?</a> 
                
                      {/* {Object.keys(errors).length > 0 && (
              <Alert style={{textAlign:"center"}} variant='danger' className=" col-lg-6">
                <ul >
                      {Object.values(errors).map((error, index) => (
                        <li  key={index}>{error}</li>                   //{Alert need some improvements}
                      ))}
                </ul>
              </Alert>
              )}
                      {errors.general && (
                          <Alert style={{ textAlign: "center" }} variant="danger" className="col-lg-6">
                        {errors.general}
                          </Alert>
                    )} */}

              </Form>
              </div>
            </div>
            
          </div>
        </div>
        <Footer/>
      </>
    );
  };

  export default login;
