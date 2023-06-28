import React from 'react'
import { Form } from 'reactstrap'
import './search-bar.css'
import { Col, FormGroup } from 'reactstrap'
import { useRef } from 'react'
import { FaBook, FaMapMarkerAlt,  FaRoad, FaSearch, } from 'react-icons/fa'
const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const guestNumberRef = useRef(0);

    const searchHandler = () =>{
        const location = locationRef.current.value 
        const distance = distanceRef.current.value 
        const guestNumber = guestNumberRef.current.value 

        if(location ==="" || distance === "" || guestNumber ===""){
            return alert('All fields are required')
        }

    }
    return (
        <Col lg='12'>
            <div className='search__bar'>
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where do you wish to stay?" ref={locationRef}/>
                        </div>
                    </FormGroup>
                    
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <FaRoad/>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder="Distance Km" ref={distanceRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group ">
                        <span>
                            <FaBook/>
                        </span>
                        <div>
                            <h6>Guest Number</h6>
                            <input type="number" placeholder="0" ref={guestNumberRef} />
                        </div>
                    </FormGroup>
                     <span className='search__icon' type='submit' onClick={searchHandler}>
                    <span className='search'><FaSearch/></span>
                    </span>
                   
                </Form>
            </div>
        </Col>
    )
} 

export default SearchBar