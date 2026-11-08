'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./navbar.module.css";

function navbar() {
    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container fluid>
                <Navbar.Brand href="/" className={styles.brand}>Little Oven</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className={styles.toggle} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className={`me-auto my-2 my-lg-0 ${styles.menu}`}
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Discover" id="navbarScrollingDropDown" className={styles.dropdown}>
                            <NavDropdown.Item href="/product">Products</NavDropdown.Item>
                            <NavDropdown.Item href="/location">Location</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/promo">Promos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Type Here"
                            className={`me-2 ${styles.searchInput}`}
                            aria-label="Search"
                        />
                        <Button className={styles.searchButton}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;