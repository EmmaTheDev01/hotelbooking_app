import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroVid from '../assets/images/2.mp4'
import heroImg01 from '../assets/images/11.jpg'
import heroImg03 from '../assets/images/12.jpg'
import Img02 from '../assets/images/15.jpg'
import Img03 from '../assets/images/9.jpg'
import Img04 from '../assets/images/17.jpg'
import Img05 from '../assets/images/7.jpg'
import Img06 from '../assets/images/14.jpg'
import SearchBar from '../shared/SearchBar'
import Subtitle from '../shared/Subtitle'
import ServiceList from '../services/ServiceList'
import FeaturedHotels from '../components/Featured-hotels/FeaturedHotels'


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

                </div>
                <h1>Dwell within luxurious<span className='highlight'> Possibilities</span></h1>
                <p>Join our community of explorers and have the best experience of seeing beyond perfect, We help you discover your
                  perfect stays and homes. Not only that you find from our platform, you can als share your experience or your own property.
                  There is no limit to what you can do with us!</p>
              </div>
            </Col>
            <Col lg='2'>

              {/* Hero images section */}
              <div className='hero-img-box '>
                <img src={heroImg01} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero-img-box mt-4'>
                <video width="320" height="240" controls >
                  <source src={heroVid} type="video/mp4" />
                </video>
              </div>

            </Col>
            <Col lg='2'>
              <div className='hero-img-box mt-5'>
                <img src={heroImg03} alt='' />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* Beggining of featured serfices  */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>
                What we offer
              </h5>
              <h2 className='services__title'>We deliver</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Beginning of featured hotels section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Featured hotels'} />
              <h2 className='featured-title'>Our Featured Hotels</h2>
            </Col>
            <FeaturedHotels />
          </Row>
        </Container>
      </section>
      {/* Begginning of cities browse */}
      <Container>
        <Row>
          <Col lg='12' className='mb-1'>
            <Subtitle subtitle={'Popular city in Rwanda'} />
            <h2 className='featured-title'>Popular Cities</h2>
          </Col>
          <div className="Cities d-flex align-items-center justify-content-between gap-0">
            <div className="city-section">
              <img src={Img02} alt="avatar2" />
              <span className="headcity-section">Kigali</span>
              <p className="childcity-section">84 properties</p>
            </div>
            <div className="city-section">
              <span className="headcity-section">Huye</span>
              <p className="childcity-section">6 properties</p>
              <img src={Img03} alt="avatar2" />
            </div>
          </div>
          <div className="citythree d-flex align-items-center justify-content-between gap3">
            <div className="city-section">
              <img src={Img04} alt="avatar2" />
              <span className="headcity-section">Musanze</span>
              <p className="childcity-section">7 properties</p>
            </div>
            <div className="city-section">
              <img src={Img05} alt="avatar2" />
              <span className="headcity-section">Gisenyi</span>
              <p className="childcity-section">20 properties</p>
            </div>
            <div className="city-section">
              <img src={Img06} alt="avatar2" />
              <span className="headcity-section">Nyamata</span>
              <p className="childcity-section">10 properties</p>
            </div>
          </div>
        </Row>
      </Container>
      <section>
        <Container>
          <Row>
            
          </Row>
        </Container>
      </section>



    </div>
  )
}

export default Home