import React, {useState, useEffect} from 'react'
import CommonSections from '../shared/CommonSections'
import HotelCard from '../shared/HotelCard'
import SearchBar from '../shared/SearchBar'
import HotelData from '../assets/data/hotels'
import { Col, Container, Row } from 'reactstrap'
import '../styles/hotels.css'
const Hotels = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() =>{

    const pages = Math.ceil(5/ 4);
    setPageCount(pages);

  },[page]);

  return (
    <>
      <CommonSections title={'Explore Hotels'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-1'>
        <Container>
          <Row>
            {
              HotelData?.map(hotel =>(
                <Col lg='3' className='mb-1' key={hotel.id}>
                  <HotelCard hotel={hotel} />
                </Col>)
              )
            }
            <Col lg='12'>
            <div className='pagination d-flex align-items-center justify-content-center mt-3 gap-3'>
            {[...Array(pageCount).keys()].map(number =>(
              <span key={number} onClick={()=> setPage(number)} className={page === number ? 'active-page' : ''}>
                {number + 1}
              </span>
            ))}
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hotels