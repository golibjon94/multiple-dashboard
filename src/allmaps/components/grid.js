import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Grid() {
  return (
    <div>
      <Container>
        <Row >
          <Col style={{borderRadius:"4px",padding:"10px",border:"1px solid gray",margin:"0 4px"}}  xs={{ order: "last" }}>
              First, but last
              </Col>
          <Col
           style={{borderRadius:"4px",padding:"10px",border:"1px solid gray",margin:"0 4px"}} xs>
               Second, but unordered</Col>
          <Col 
          style={{borderRadius:"4px",padding:"10px",border:"1px solid gray",margin:"0 4px"}} xs={{ order: "first" }}>
              Third, but first</Col>
        </Row>
      </Container>
    </div>
  );
}
