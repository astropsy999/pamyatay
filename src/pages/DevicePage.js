import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import '../styles/main.css'
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
    // const device =  {id: 1, name: "Гулій Володимир Макарович", price: 1000, rating: 5, img: 'http://', video:'/link-to-video'}
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container>
            <Row style={{
                height:'30vh', 
                background: `url(${process.env.REACT_APP_API_URL + device.img}) no-repeat center center` }} className="p-4 m-2 block__border">
                <div><h2>{device.name}</h2></div>
                {/* <Image srv={process.env.REACT_APP_API_URL + device.img}/> */}
                Шапка-світлина(якщо життєопис, чи галерея). Відео, якщо діафіль чи стрічка
            </Row>
            <Row style={{
                height:'50vh',
               }} className="p-4 m-2 block__border">
                Контент(Текст, якщо життєопис / Галерея / Таймкоди, якщо стрічка )
            </Row>
            <Row className="p-2 m-2 block__border align-items-center" style={{
                height:'10vh',
               }}>
                <Col>
                <h1>Властивості:</h1>
                {device.info.map((info, index) => 
                <Row key={info.id}>{info.title}:{info.description}</Row>
                )}
                </Col>
                <Col className="mx-auto">
                <Button variant="outline-success">Замовити подібне</Button>
                </Col>
                <Col><Button variant="outline-info">Дивитись ще зразки</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default DevicePage;