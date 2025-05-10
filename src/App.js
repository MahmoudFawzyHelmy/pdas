import ProfileCard from "./ProfileCard";
import alexaImage from "./assets/alexa.png";
import cortanaImage from "./assets/cortana.png";
import siriImage from "./assets/siri.png";
import { Col, Container, Row } from "react-bootstrap";
export default function App() {
  return (
    <Container>
      <div className="bg-primary text-white p-3 mb-4 rounded">
        <h1 className="text-center">Personal Digital Assistants</h1>
        <p className="text-center">This is a simple profile card component</p>
      </div>
      <Row className="m-auto g-4 text-center">
        <Col>
          <ProfileCard
            title="Alexa"
            handle="alexa@99"
            img={alexaImage}
            description="Alexa was created by Amazon and helps you buy things."
          />
        </Col>
        <Col>
          <ProfileCard
            title="Cortana"
            handle="cortana@99"
            img={cortanaImage}
            description="Cortana was made by Microsoft. Who knows what it does?"
          />
        </Col>
        <Col>
          <ProfileCard
            title="Siri"
            handle="siri@99"
            img={siriImage}
            description="Siri was made by Apple and is being phased out"
          />
        </Col>
      </Row>
    </Container>
  );
}
