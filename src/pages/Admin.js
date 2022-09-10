import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
// import { Context } from "..";
import TypeBar from "../components/TypeBar";
import BrandList from "../components/BrandList";

const Admin = () => {
    // const {device} = useContext(Context)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    return (
    <Container className="d-flex flex-column">
        <Row>
        <Col>
         <Button
         variant={'success'}
         className='mt-2 w-100'
         onClick={()=>setDeviceVisible(true)}
         > Додати роботу
         </Button>
         </Col>
        <Col>
        <Button
        variant={'outline-primary'}
        className='mt-2 w-100'
        onClick={()=>setTypeVisible(true)}
        > Додати категорію
        </Button>
        <TypeBar  badge={'X'}/>
        </Col>
        <Col>
         <Button
         variant={'outline-danger'}
         className='mt-2 w-100'
         onClick={()=> setBrandVisible(true)}
         > Додати тип
         </Button>
         <BrandList badge={'X'}/>
         </Col>
         </Row>
         <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
         <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
         <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
    </Container>
    );
}

export default Admin;