import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
const Device = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className="m-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: '15rem', cursor: 'pointer'}} border={"light"} className="p-3">
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className="d-flex" style={{width: 150}}>
            <div>
                
            </div>
            <div>
                {device.name}
            </div>
        </div>

            </Card>
        </Col>
    )

}
export default Device;