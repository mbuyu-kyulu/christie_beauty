
import React, { useState } from "react";
import { Card, Button ,Container,Col,Row} from 'react-bootstrap';



const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Cart() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/christe.jpg"
    },

    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/b.jpg"
    },
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/c.jpg"
    },
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/d.jpg"
    },
       {
      name: "Human Hair",
      cost: "$34",
      image: "/images/e.jpg"
    },
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/f.jpg"
    },
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/m.jpg"
    },
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/n.jpg"
    },
    {
      name: "Human Hair",
      cost: "$34",
      image: "/images/o.jpg"
    }
  ]);

  const addToCart = (product) => {

    setCart([...cart, {...product}]);
  };

  const removeFromCart = (productToRemove) =>{
    setCart(cart.filter((product) => product !== productToRemove
    ))
  }

  const clearTheCart = (clearTheCart) =>{
    console.log("hello here");
    setCart([]);
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () => (
    <>
    <h1>Product</h1>
   <div className="cart-item">
   <Container>
      <Row>
        <Col>
  
      <div className="products">
        {products.map((product, idx) => (

          <Card style={{ width: '18rem' }} key={idx}>
            <Card.Img variant="top" src={product.image} alt={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>Card Title</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={() => addToCart(product)}>add to cart</Button>
            </Card.Body>
          </Card>

        ))}
      </div>
        </Col>
        <Col>
     {cart.length > 0 && ( <button onClick={()=> clearTheCart(cart)}>Clear the Cart</button>)}
      <div className="products">
        {cart.map((product, idx) => (

          <Card style={{ width: '18rem' }} key={idx}>
            <Card.Img variant="top" src={product.image} alt={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>Card Title</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={() => removeFromCart(product)}>Remove(-)</Button>
            </Card.Body>
          </Card>


        ))}
      </div></Col>
      </Row>
    </Container>
    
   </div>
    </>
  );

  const renderCart = () => (
    <>
     <h1>Cart</h1>
   <div className="cartItem">
   <Container>
       <Row>
         <Col>
     {cart.length > 0 && ( <button onClick={()=> clearTheCart(cart)}>Clear the Cart</button>)}
      <div className="products">
        {cart.map((product, idx) => (

          <Card style={{ width: '18rem' }} key={idx}>
            <Card.Img variant="top" src={product.image} alt={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>Card Title</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={() => removeFromCart(product)}>-</Button>
            </Card.Body>
          </Card>


        ))}
      </div>
      </Col>
      <Col>
     {cart.length > 0 && ( <button onClick={()=> clearTheCart(cart)}>Clear the Cart</button>)}
      <div className="products">
        {cart.map((product, idx) => (

          <Card style={{ width: '18rem' }} key={idx}>
            <Card.Img variant="top" src={product.image} alt={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>Card Title</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={() => removeFromCart(product)}>-</Button>
            </Card.Body>
          </Card>


        ))}
      </div></Col>
       </Row>
     </Container>

   </div>
      
    </>
  )




  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
      </header>
      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>view products</button>
      </header>

      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}

    </div>
  );
}

export default Cart;