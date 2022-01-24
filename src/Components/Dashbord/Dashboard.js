
import React from "react";
import { Card, Container, Row, Col, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { bindActionCreators } from "redux";
import { fectProducts, createProduct, deleteProduct, editProduct, fetchProducts, updateProducts } from "../../actions/products";
import Pashboard from './Pashboard';
import Navbar from "../Dashbord/Navbar";
// import Profile from "./Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isForm: false,
            isUpdate: false,
            productDetails: {}
        }
    }

    async componentDidMount() {
        await this.props.getProducts()
    }
    changeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    removeProduct = (id) => {
        console.log("is working", id)
        this.props.deleteProducts(id)
    }
    editProduct = (id) => {
        console.log("is working")
        this.setState({ isForm: true, isUpdate: true })
        this.props.updateProducts(id)
    }
    addProduct = () => {
        console.log("is working")
        this.setState({ isForm: true })
    }
    handleSubmit = () => {
        this.props.createProduct(this.state)
    }
    render() {

        const { products, productDetail } = this.props
        console.log(this.props)
        return (
            <>
        <Container>
            <Row>
                <Col>
                    <div className="sb-nav-fixed">
                        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                            <Link className="navbar-brand ps-3" to="/components/admin/dashboard">CHRISTIE BEAUTY</Link>
                            <Link className="navbar-brand ps-3" to="/components/admin/dashboard">DISPONIBLE</Link>
                            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>

                            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                                </div>
                            </form>

                            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                                <li class="nav-item dropdown">
                                    <Link to="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-user fa-fw"></i>
                                    </Link>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#!">Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        </Container>


                <button onClick={this.addProduct}>Add product</button>
                {this.state.isForm &&
                    <AvForm onValidSubmit={this.handleSubmit} ref={c => (this.form = c)}>
                        {/* With AvField */}
                        <input type="text" name="field" label="field" required onChange={this.changeHandler} />
                        <input type="text" name="field" label="Description" required onChange={this.changeHandler} />
                        <input type="text" name="field" label="price" required onChange={this.changeHandler} />

                        {!this.state.isUpdate && <Button type="submit">Submit</Button>}
                        {this.state.isUpdate && <Button type="submit">Submit</Button>}

                    </AvForm>}
                    <Navbar />
                <Container>
                    <Row>
                        {products && products.map((product) => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/images/1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>

                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Cras justo odio</ListGroupItem>
                                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="#">Card Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card></Col>
                            )
                        })}
                    </Row>

                </Container>

                <Container>
                    <Row>
                        <Col>
                            <Router>
                              <div className="sidebarmenu">
                              <div className="sb-sidenav">
                            
                                    <nav className="sb-sidenav accordion " id="sidenavAccordion">
                                        <div className="sb-sidenav-menu">
                                            <div className="nav">
                                                <div className="sb-sidenav-menu-heading" style={{ display: "grid" }}>Welcome</div>
                    
                                                <a className="nav-link" href="/Dashboard/pashboard">
                                                    <div className="white"><i className=""></i>
                                                        <h4 style={{ display: "grid" }}> Dashboard</h4>
                                                    </div>

                                                </a>


                                                <Link className="nav-link" to="/Dashboard/profile">
                                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                                    Profile
                                                </Link>
                                                <div className="sb-sidenav-menu-heading" style={{ display: "grid" }}>Interface</div>
                                                <a className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                                    Layouts
                                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                                </a>
                                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                                    <nav className="sb-sidenav-menu-nested nav">
                                                        <Link className="nav-link" to="layout-static.html"></Link>
                                                        <Link className="nav-link" to="layout-sidenav-light.html"></Link>
                                                    </nav>
                                                </div>
                                                <a className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                                    Pages
                                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                                </a>
                                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                            Authentication
                                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                                        </Link>
                                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">

                                                        </div>


                                                    </nav>
                                                </div>
                                                <div className="sb-sidenav-menu-heading" style={{ display: "grid" }}>Addons</div>
                                                <Link className="nav-link" href="charts.html">
                                                    <div className="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                                    Charts
                                                </Link>
                                                <Link className="nav-link" href="tables.html">
                                                    <div className="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                                    Tables
                                                </Link>
                                            </div>
                                        </div>
                                       

                                    </nav>
                                </div>
                              </div>
                                <Switch>

                                    <Route path="/pashboard">
                                        <Pashboard />
                                    </Route>
                                    <Route path="/profile">
                                        {/* <Profile /> */}
                                    </Route>
                                    <Route path="/layout">
                                        {/* <Layout/> */}
                                    </Route>

                                </Switch>
                            </Router>
                        </Col>
                    </Row>
                </Container>

            </>)
    }
}
const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getProducts: fetchProducts,
    createProduct: createProduct,
    deleteProducts: deleteProduct,
    updateProducts: editProduct,
    updateProducts: updateProducts

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)