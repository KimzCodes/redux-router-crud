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
import { useRouteError } from "react-router-dom";
import PostList from "../components/PostList";
import {Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function ErrorPAge() {
 const navigate = useNavigate()
 const error= useRouteError()
 console.error(error);
  return (
   <Container>
      {/* <Header /> */}
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
         <div id='error-page' className='mt-5 text-center' >
          <h1>Oops </h1>
          <p>Sorry, an unexpected error has occurred</p>
          <Button variant="link" onClick={()=>navigate("/",{ replace:true})}><i>{error.statusText || error.message} </i> <small>Back to Home</small> </Button>
          
         </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ErrorPAge