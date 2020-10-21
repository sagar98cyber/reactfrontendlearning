import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import MediaCard from '../stations/card'

function shops() {
    return (
        <Container className="products">
            <Row className = "prodnme">
                Product Name
            </Row>
            <Row className="division">
                <Col>
                    <Row>                            
                        
                        <Row className="description "> 
                                  {/*  <Row className="d ">
                                        <Link to="/shops" style={{textDecoration:"none"}}>
                                        <div className="white">SHOP NAME</div>
    </Link></Row>*/}
                                    <Row className="d">Deciption</Row>
                                    <Row style={{width:'100%'}}>
                                        Nostrud reprehenderit dolor et do. Commodo proident occaecat cillum sit laborum nisi aliqua ea. Ad exercitation aliqua quis laboris consequat adipisicing laborum reprehenderit commodo labore.
                                    </Row>
                                    <Row className="d ">
                                    <div style={{height:'50px'}}></div>
                                        Products
                                    </Row>
                                    <Row>
                                        <div style={{height:'50px'}}></div>
                                        <MediaCard/>
                                        <MediaCard/>
                                        
                                    </Row>                                    
                                </Row>


                       
                    </Row>    
                </Col>
                </Row>
                </Container>
    )
}

export default shops
