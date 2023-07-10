import React from "react";
import CommonSections from "../shared/CommonSections";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import tourData from '../assets/data/tours'
import SideSearch from '../components/search/SIdeSearch'
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
          <Col lg='3'>
            <SideSearch />
          </Col>
          <Col lg='9'>
          {tourData?.map((tour) => (
              <Col lg="12" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Col>
           
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Tours;
