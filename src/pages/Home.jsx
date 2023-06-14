import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Posts } from '../components/Posts.jsx'

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col md='12'>
          <Posts/>
        </Col>
      </Row>
    </Container>
  )
}
