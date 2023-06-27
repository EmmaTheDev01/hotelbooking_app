import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import herovid from '../assets/images/hero-video.mp4'
import worldImage from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
const Home = () => {
  return (
    <div>
      {/* Hero section of a web */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Enjoy your infinite confort'} />
                  <img src={worldImage} alt='hero' />
                </div>
                <h1>Dwell within luxurious<span className='highlight'> Possibilities</span></h1>
                <p>Join our community of explorers and have the best experience of seeing beyond perfect, We help you discover your
                  perfect stays and homes. Not only that you find from our platform, you can als share your experience or your own property.
                  There is no limit to what you can do with us!</p>
              </div>
            </Col>
            <Col lg='2'>

              {/* Hero images section */}
              <div className='hero-img-box'>
                <video src={herovid} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero-img-box'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero-img-box'>
                <img src={heroImg02} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home