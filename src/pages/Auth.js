import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";


const Auth = observer (() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async() => {
        try {

            let data;
        if (isLogin) {
            data = await login(email, password)

        } else {
            data = await registration(email, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)

        } catch(e) {
            alert(e.response.data.message)
        }
        
    }

    return ( <Container 
        className = "d-flex justify-content-center align-items-center"
        style = {{height: window.innerHeight - 54}}>
        <Card 
        style = {{width: '40rem'}}
        className = "p-5">
        <h2 className = "m-auto">{ isLogin ? 'Авторизація' : 'Реєстрація' }</h2> 
        <Form className = "d-flex flex-column">
        <Form.Control className = "mt-2"
        placeholder = "Введіть e-mail"
        value = { email }
        onChange = { e => setEmail(e.target.value) } >
        </Form.Control>
        <Form.Control
        className = "mt-3"
        placeholder = "Введіть пароль"
        value = { password }
        type = "password"
        onChange = { e => setPassword(e.target.value) } >

        </Form.Control> 
        <Row 
        className = "d-flex justify-content-between mt-3" >
        <Col 
        className = "m-2"
        sm = { 8 } > {
            isLogin ?
            <div> Немає аккаунта ? <NavLink to = { REGISTRATION_ROUTE } > Зареєструйтесь! </NavLink></div >
            :
            <div> Є аккаунт ? <NavLink to = { LOGIN_ROUTE }> Увійти! </NavLink></div >
        } </Col> <Col> 
        <Button variant = "outline-success"
        onClick = { click } > { isLogin ? 'Увійти' : 'Реєстрація' } </Button></Col >
        </Row> </Form > </Card> </Container >
    );
})

export default Auth;