import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import patient from "../../Assets/Projects/patients.png";
import chifae from "../../Assets/Projects/chifae.png";
import enset from "../../Assets/Projects/enset.png";

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
              description="A simple web application to manage patients (CRUD operations). Developed using Spring from the backend, themleaf for the frontend part."
              ghLink="https://github.com/sokainadaabal/SokainaDaabalJEE/tree/main/Activit%C3%A9%20Pratique%20N%C2%B04"
              demoLink="https://github.com/sokainadaabal/SokainaDaabalJEE/blob/main/Activit%C3%A9%20Pratique%20N%C2%B04/README.md"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chifae}
              isBlog={false}
              title="Chifae Project"
              description=" A simple web application to manage pharmacy, buy a medicament oline, import and export data(csv) , send an email and generate a report. Developed using Python and framework Django."
              ghLink="https://github.com/sokainadaabal/chifae/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enset}
              isBlog={false}
              title="Enset Blog"
              description="A template for a blog site make with HTML and Bootstrap."
              ghLink="https://github.com/sokainadaabal/web-tp"
              demoLink="https://vercel.com/daabalsokaina/tp-boostrap-sokainadaabal"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
