import { faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import { faCheckDouble, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
  return (
    <section className="py-5">
      <Container className="py-5 w-75 m-auto">
        <h2 className="text-center font-weight-bold mb-5 pb-5 text-info">About Us</h2>
        <Row>
          <Col className="mb-4" md={6}>
            <div className="d-flex">
              <div className="mr-4 text-info" style={{ fontSize: "40px" }}>
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div >
                <h5>Real World Project Development</h5>
                <div className="text-secondary"> Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server. </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex">
              <div className="mr-4 text-info" style={{ fontSize: "40px" }}>
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              <div>
                <h5>Follow Latest Industry Standard Tools and Techniques</h5>
                <div className="text-secondary"> Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge. </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex">
              <div className="mr-4 text-info" style={{ fontSize: "40px" }}>
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              <div>
                <h5>Follow Latest Industry Standard Tools and Techniques</h5>
                <div className="text-secondary"> Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge. </div>
              </div>
            </div>

          </Col>
          <Col md={6}>
            <div className="d-flex">
              <div className="mr-4 text-info" style={{ fontSize: "40px" }}>
                <FontAwesomeIcon icon={faTeamspeak} />
              </div>
              <div>
                <h5>Learn Teamwork and Collaboration</h5>
                <p className="text-secondary"> Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work. </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default About;