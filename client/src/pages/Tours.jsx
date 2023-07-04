import React from "react";
import CommonSections from "../shared/CommonSections";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import HotelCard from "../shared/HotelCard";
import HotelData from "../assets/data/hotels";
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
            {HotelData?.map((hotel) => (
              <Col lg="3" key={hotel.id}>
                <HotelCard hotel={hotel} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Tours;
