import React from 'react'
import './common-section.css'
import { Container, Row, Col } from 'reactstrap'
const CommonSections = ({ title }) => {

    return (
        <section className='common-section'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CommonSections