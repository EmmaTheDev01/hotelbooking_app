import React from "react";
import CommonSections from "../shared/CommonSections";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import tourData from '../assets/data/tours'
const Tours = () => {
  return (
    <div>
      <CommonSections title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-1">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="6" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Tours;
