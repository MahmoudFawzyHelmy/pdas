import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function ProfileCard({ title, handle, img, description }) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="shadow-lg">
        <Card.Img variant="top" src={img} alt="image for testing" />
        <Card.Body>
          <Card.Title> Title : {title}</Card.Title>
          <Card.Text>{handle}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
