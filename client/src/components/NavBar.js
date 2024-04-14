import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
       return (
        <Navbar expand="lg" className="bg-dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href = {SHOP_ROUTE}>EleButikk</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Brand</Nav.Link>
                        <NavDropdown title="Product" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Product</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another brand
                            </NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>

                    </Nav>
                    <Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Nav>


                    <Nav>
                        {user.isAuth ?

                      <Nav.Link variant = {"outline-light"}>
                          <Button
                              variant={"outline-light"}
                              onClick={() => user.setIsAuth(false)}
                              onClick={() => history(ADMIN_ROUTE)}

                          >
                              Admin
                          </Button>
                          <Button
                              variant={"outline-light"}
                              className="m-lg-2"
                              onClick={() => history(LOGIN_ROUTE)}

                          >
                              Logout
                          </Button>
                      </Nav.Link>
                            :
                       <Nav.Link>
                           <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Login</Button>

                       </Nav.Link>}

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;