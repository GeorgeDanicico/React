import React from 'react'
import { 
  Form, Button, Container, Row, 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB } from '@fortawesome/free-solid-svg-icons';
import './style.css'

export const Login = () => {
  return (
    <Container className="my-4">

      <Container className="logo-container">
        <FontAwesomeIcon className="icon" icon={faB} />
        <p>budget <span className="text">.io</span></p>
      </Container>

      <Form className="form-container">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Container>
          <Row className="mb-3">
            <Button>Login</Button>
          </Row>
          <Row className="mb-3">
            <Button>Register</Button>
          </Row>
        </Container>
      </Form>
    </Container>
  )
}

export default Login;