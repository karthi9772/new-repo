import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Table } from "react-bootstrap";

const UserDashboard = () => {
  return (
    <>
      <Header />
      <div className="container">
        {/* <Card>
            <Card.Header as='h2'>
                Book Your Events
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    gdf
                </Card.Title>
            </Card.Body>
        </Card> */}
        <Table>
          <thead>
            <h2>Book your Events Today</h2>
          </thead>
          <tr style={{fontSize:'20px', fontFamily:'open sanc'}}>
            Hello
            <td>Iam</td>
            <td>18</td>
            <td>Iam</td>
            <td>18</td>
            <td>Iam</td>
            <td>18</td>
          </tr>
        </Table>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
