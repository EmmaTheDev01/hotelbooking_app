import React from 'react'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import './side-search.css'
const SIdeSearch = () => {
    return (
        <div className='side-search'> 
            <div className='search-form-side'>
                <Form className="search-info-form">
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Destination"
                            id="city"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="number"
                            placeholder="Guests Number"
                            id="guestNumber"
                            required
                        />
                    </FormGroup>
                    <Button type='submit' className='btn primary__btn'>Find</Button>
                </Form>

            </div>

            <div className='search-bottom'>
                <ListGroup>
                    <ListGroupItem>
                        <span><input type='checkbox' id='' /> City Center</span>
                        <span><input type='checkbox' id='' /> 4+ Rating</span>
                        <span><input type='checkbox' id='' /> City Center</span>
                        <span><input type='checkbox' id='' /> City Center</span>
                    </ListGroupItem>
                    <h5>Accomodation type</h5>
                    <ListGroupItem>
                        <span><input type='checkbox' id='' /> Appartment</span>
                        <span><input type='checkbox' id='' /> Hotel</span>
                        <span><input type='checkbox' id='' /> Villa</span>
                        <span><input type='checkbox' id='' /> Other Accomodation</span>
                    </ListGroupItem>
                    <h5>Price per night</h5>
                    <ListGroupItem>
                        <span><input type='checkbox' id='' /> Under $50</span>
                        <span><input type='checkbox' id='' /> $50 - $100</span>
                        <span><input type='checkbox' id='' /> $100 - $500</span>
                        <span><input type='checkbox' id='' /> $500 - $1000</span>
                        <span><input type='checkbox' id='' /> $1000+</span>
                    </ListGroupItem>
                    <ListGroup />
                    <h5>Popular Searches</h5>
                    <ListGroupItem>
                        <span><input type='checkbox' id='' /> Parking</span>
                        <span><input type='checkbox' id='' /> Restaurant</span>
                        <span><input type='checkbox' id='' /> Breakfast</span>
                        <span><input type='checkbox' id='' /> Free Cancelation</span>
                        <span><input type='checkbox' id='' /> Fitness Center</span>
                    </ListGroupItem>
                    <ListGroup />
                    <h5>Price per night</h5>
                    <ListGroupItem>
                        <span><input type='checkbox' id='' /> Under $50</span>
                        <span><input type='checkbox' id='' /> $50 - $100</span>
                        <span><input type='checkbox' id='' /> $100 - $500</span>
                        <span><input type='checkbox' id='' /> $500 - $1000</span>
                        <span><input type='checkbox' id='' /> $1000+</span>
                    </ListGroupItem>
                    <ListGroup />
                </ListGroup>
            </div>
        </div>
    )
}

export default SIdeSearch