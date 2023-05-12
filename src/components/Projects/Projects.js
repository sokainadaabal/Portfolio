import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import patient from "../../Assets/Projects/patients.png";
import chifae from "../../Assets/Projects/chifae.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patient}
              isBlog={false}
              title="Patients management App"
              description="Simple web application to manage patients (CRUD operations). Developed using Spring from the backend, themleaf for the frontend part."
              ghLink="https://github.com/sokainadaabal/SokainaDaabalJEE/tree/main/Activit%C3%A9%20Pratique%20N%C2%B04"
              demoLink="https://github.com/sokainadaabal/SokainaDaabalJEE/blob/main/Activit%C3%A9%20Pratique%20N%C2%B04/README.md"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chifae}
              isBlog={false}
              title="Chifae Project"
              description="Simple web application to manage pharmacy, buy a medecament oline, import and export data(csv) , send a email and generate a report. Developed using python and framework django."
              ghLink="https://github.com/sokainadaabal/chifae/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
