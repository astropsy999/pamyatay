import React, { useContext } from "react";
import { Context } from "..";
import {Container, Nav, NavDropdown, Navbar, Form, FormControl, Button} from "react-bootstrap"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite"
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const{user} = useContext(Context)
    let navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

    return (
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href={SHOP_ROUTE}>Пам'ятай.Pro</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Головна</Nav.Link>
        <Nav.Link href="#action2">Плани</Nav.Link>
        <NavDropdown title="Продукти" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Життєопис</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Фотоальбом</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Слайдшоу</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Відеоролик</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action7">
            Більше...
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Посилання
        </Nav.Link>
        {user.isAuth ?
        <Nav>
        <Button
        className="me-2"
        variant={"outline-info"}
        onClick={()=> navigate(ADMIN_ROUTE)}>Адмінка</Button>
        <Button 
        variant={"outline-success"}
        onClick={() => logOut()}
        >Вийти</Button>
        </Nav>
        :
        <Nav>
        <Button
        className="me-2"
        variant={"outline-success"}
        onClick={()=> navigate(ADMIN_ROUTE)}
        >Увійти
        </Button>
        <Button
        variant={"outline-info"} 
        onClick={()=> navigate(LOGIN_ROUTE)}
        >Авторизація
        </Button>
        </Nav>
    }
      </Nav>
      
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Пошук..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Пошук</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
});

export default NavBar;