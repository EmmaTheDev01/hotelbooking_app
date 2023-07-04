import React, { useState } from "react";
import "../styles/login.css";
import userIcon from "../assets/images/user.png";
import loginImage from "../assets/images/login1.jpg";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login  d-flex justify-content-between">
              <div className="login-img">
                <img src={loginImage} alt="login-icon" />
              </div>

              <div className="login-form">
                <div className="user">
                  <img src={userIcon} alt="login-icon" />
                </div>
                <div className="user">{/* Image on a login page */}</div>
                <h2>Login</h2>
                <Form>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth-btn" type="submit">
                    Login
                  </Button>
                  <p>
                    Don't have an account? <Link to="/register">Create one</Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
