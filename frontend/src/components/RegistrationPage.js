import React from 'react'
import { Col, Row, Container, Image, Form, Button } from 'react-bootstrap'
import backgroundImage from '../images/registration.png'

const RegistrationPage = () => {
  const backgroundImageStyle = {
    width: '100%',
    height: '946px',
  }

  const leftColStyle = {
    padding: '0px',
  }

  const rightColStyle = {
    padding: '20%',
  }

  const formStyle = {
    width: '90%',
    height: '90%',
    marginTop: '30px',
  }

  return (
    <Container fluid>
      <Row className='align-items-center d-flex flex-wrap-reverse'>
        {/* =================LEFT COLUMN================ */}
        <Col style={leftColStyle} md={6}>
          <Image style={backgroundImageStyle} src={backgroundImage}></Image>
        </Col>

        {/* =================RIGHT COLUMN================ */}

        <Col md={6}>
          <Row style={rightColStyle}>
            <h1>Registration</h1>
            <Form style={formStyle} id='registration'>
              {/* ============= FIRST NAME ============= */}
              <Form.Group as={Row} controlId='firstName'>
                <Form.Label column md={4}>
                  First Name
                </Form.Label>
                <Col md={8}>
                  <Form.Control type='text' placeholder='First Name' />
                </Col>
              </Form.Group>

              {/* ============= LAST NAME ============= */}
              <Form.Group as={Row} controlId='lastName'>
                <Form.Label column md={4}>
                  Last Name
                </Form.Label>
                <Col md={8}>
                  <Form.Control type='text' placeholder='Last Name' />
                </Col>
              </Form.Group>

              {/* ============= EMAIL ============= */}
              <Form.Group as={Row} controlId='email'>
                <Form.Label column md={4}>
                  Email
                </Form.Label>
                <Col md={8}>
                  <Form.Control type='email' placeholder='Email' />
                </Col>
              </Form.Group>

              {/* ============= PASSWORD ============= */}
              <Form.Group as={Row} controlId='password'>
                <Form.Label column md={4}>
                  Password
                </Form.Label>
                <Col md={8}>
                  <Form.Control type='password' placeholder='Password' />
                </Col>
              </Form.Group>

              {/* ============= CONFIRM PASSWORD ============= */}
              <Form.Group as={Row} controlId='confirmPassword'>
                <Form.Label column md={4}>
                  Confirm Password
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                  />
                </Col>
              </Form.Group>

              {/* =============SUBMIT============= */}
              <Form.Group as={Row}>
                <Col md={{ span: 10, offset: 4 }}>
                  <Button type='submit'>Register</Button>
                </Col>
              </Form.Group>

              {/* ===============LINK================ */}
              {/* modify with Link component later */}
              <div>Already have an account?</div>
              <div>
                <a href='/'>Back to Login</a>
              </div>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationPage
