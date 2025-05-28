import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img111.jpg";
import projImg2 from "../assets/img/project-img22.jpg";
import projImg3 from "../assets/img/project-img33.jpg";
import projImg4 from "../assets/img/project-img44.jpg";
import projImg5 from "../assets/img/project-img55.jpg";
import projImg6 from "../assets/img/project-img66.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
{
    title: "Portfolio Website",
    description: "Web Development",
    imgUrl: projImg1, // Assuming projImg1 is the correct image for this project
  },
  {
    title: "Cybersecurity Extension",
    description: "Browser Security",
    imgUrl: projImg4, // Assuming projImg2 is the correct image for this project
  },
  {
    title: "n8n AI Agent",
    description: "Automation AI",
    imgUrl: projImg3, // Assuming projImg3 is the correct image for this project
  },
  {
    title: "Password Manager",
    description: "Security Utility",
    imgUrl: projImg2, // Assuming projImg1 is the correct image for this project
  },
  {
    title: "AI Mental Chatbot",
    description: "AI Healthcare",
    imgUrl: projImg5, // Assuming projImg2 is the correct image for this project
  },
  {
    title: "Mental Health Forum",
    description: "Community Platform",
    imgUrl: projImg6, // Assuming projImg3 is the correct image for this project
  },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a collection of innovative projects that reflect my journey through web technologies, artificial intelligence, automation, and cybersecurity. Each project showcases a blend of technical proficiency and creative design, built with purpose and precision. From dynamic web apps to secure systems, every build tells a story of learning, growth, and passion.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
