



import React, { useState } from "react";
import { Card, Button ,Container,Col,Row} from 'react-bootstrap';



const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Cart() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: "wavy 14 inches ",
      cost: "$80",
      image: "/images/christe.jpg"
    },
    {
      name: "wavy 14 inches ",
      cost: "$80",
      image: "/images/christe.jpg"
    },

    {
      name: "Lace frontal +3boules ",
      cost: "$150",
      size:"18pouces",
      image: "/images/b.jpg"
    },
    {
      name: "Brown 4bundles wavy ",
      cost: "$125",
      size:"18 pouces",
      image: "/images/c.jpg"
    },
    {
      name: "4bundles wavy ",
      cost: "$100",
      size:"18pouces",
      image: "/images/d.jpg"
    },
       {
      name: "Human Hair",
      cost: "$34",
      image: "/images/e.jpg"
    },
    {
      name: "5 bundles wavy  ",
      cost: "$150",
      size:"22 pouces",
      image: "/images/f.jpg"
    },
    {
      name: "Lace frontal ",
      cost: "$80",
      size:"",
      image: "/images/m.jpg"
    },
    {
      name: "closure 3boules and 3inches",
      cost: "$125",
      size:"12pouces",
      image: "/images/n.jpg"
    },
    {
      name: "3closures  wavy browncolour",
      size:"12pouces",
      cost: "$140",
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
              <Card.Title>{product.size}</Card.Title>
              <Card.Title>Human hair</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
               
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
              <Card.Title>{product.size}</Card.Title>
              <Card.Title>Human hair</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
              Transfer avec Mpsa <br></br> ou ecrire 
              au <br></br>vendeur :+243 826 792 699 .
                commandez et
                <br></br> 
                faites-vous livrer
              </Card.Text>
              <Button onClick={() => removeFromCart(product)}>Remove(-)</Button>
              <br></br>
              <br></br>
             <a href="https://wa.me/917619537850 "  target="_blank"> <button>Ecrire au vendeur</button></a> 
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
              <Card.Title>{product.size}</Card.Title>
              <Card.Title>Human hair</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
              Transfer avec Mpsa <br></br> ou ecrire 
              au <br></br>vendeur :+243 826 792 699 .
                commandez et
                <br></br> 
                faites-vous livrer
              </Card.Text>
              <Button onClick={() => removeFromCart(product)}>Remove</Button>
              <br></br>
             <a href="https://wa.me/917619537850 "  target="_blank"> <button>Ecrire au vendeur</button></a> 
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
              <Card.Title>{product.size}</Card.Title>
              <Card.Title>Human hair</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
              Transfer avec Mpsa <br></br> ou ecrire 
              au <br></br>vendeur :+243 826 792 699 .
                commandez et
                <br></br> 
                faites-vous livrer
              </Card.Text>
              <Button onClick={() => removeFromCart(product)}>Remove</Button>
              <br></br>
             <a href="https://wa.me/917619537850 "  target="_blank"> <button>Ecrire au vendeur</button></a> 
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
