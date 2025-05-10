import React from "react";
import ProfileCard from "./ProfileCard";
import alexaImage from "./assets/alexa.png";
import cortanaImage from "./assets/cortana.png";
import siriImage from "./assets/siri.png";
import { Col, Container, Row } from "react-bootstrap";
export default function App() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Personal Digital Assistants</h1>
      <p className="text-center">This is a simple profile card component</p>
      <Row>
        <Col>
          <ProfileCard title="Alexa" handle="alexa@99" img={alexaImage} />
        </Col>
        <Col>
          <ProfileCard title="Cortana" handle="cortana@99" img={cortanaImage} />
        </Col>
        <Col>
          <ProfileCard title="Siri" handle="siri@99" img={siriImage} />
        </Col>
      </Row>
    </Container>
  );
}
