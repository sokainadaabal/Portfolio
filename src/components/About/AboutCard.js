import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daabal Sokaina </span>
            from <span className="purple"> Mohammedia, Morocco.</span>
            <br /> A junior Engineer in Big data and Cloud Computing  and also a full stack web developer.
            <br />
            <br />
            Other than coding, there are other activities I love doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Make short stories.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading romans
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not final, failure is not fatal : It is the courage to continue that counts."{" "}
          </p>
          <footer className="blockquote-footer">Winston S. Churchill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
