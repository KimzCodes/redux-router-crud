import React from 'react'
import {
 Container,
 Row,
 Col,
 Table,
 Button,
 ButtonGroup,
} from "react-bootstrap";
import Header from "../components/Header";
import PostList from "../components/PostList";
import {Outlet} from 'react-router-dom'
function RootLayout() {
  return (
   <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
         <Outlet/>
        </Col>
      </Row>
    </Container>
  )
}

export default RootLayout