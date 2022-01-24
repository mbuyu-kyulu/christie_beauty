import React from 'react';
import { Carousel, Card, Col, Row, Container, ListGroup, ListGroupItem } from 'react-bootstrap';



const Home = () => {
    return (<>
<div className='bgImg'>
<Carousel className="carousel-images">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/christe.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/christie.jpeg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                  
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
<h1>WELCOME TO CHRISTIE BEAUTY</h1>
        <br></br>
      <div className='marco'>
      <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/1.jpg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem></ListGroupItem>
                       
                    </ListGroup>
                    <Card.Body>
                        
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/e.jpg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      
                    </ListGroup>
                    <Card.Body>
                      
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/f.jpg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                       
                    </ListGroup>
                    <Card.Body>
                       
                    </Card.Body>
                </Card></Col>
            </Row>
            <br></br>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/c.jpg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      
                    </ListGroup>
                    <Card.Body>
                      
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/d.jpg" />
                   
                </Card></Col>

                <Col><Card style={{ width: '18rem' }}>
                   
                </Card></Col>
                
            </Row>   

             <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/f.jpg" />
                   
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/g.jpg" />
                   
                </Card></Col>

                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/m.jpg" />
                  
                </Card></Col>
            </Row> 

             <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/o.jpg" />
                  
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/christe.jpg" />
                  
                </Card></Col>

                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/3.jpg" />
                 
                </Card></Col>
            </Row> 

             <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/o.jpg" />
                  
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/n.jpg" />
                  
                </Card></Col>

                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/g.jpg" />
                  
                </Card></Col>
            </Row> 

             <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/d.jpg" />
                   
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/c.jpg" />
                   
                       
                    
                </Card></Col>

                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/3.jpg" />
                    
                      
                </Card></Col>
            </Row> 

          
        </Container>

      </div>
  
</div>
       
    </>

    )

}

export default Home;