import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import AllDevicesBtn from "../components/AllDevicesBtn";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";

const Shop = observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        
        fetchTypes().then(data=> device.setTypes(data))
        fetchBrands().then(data=> device.setBrands(data))
        fetchDevices(null, null, 1, 1).then(data=> {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })

    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 1).then(data=> {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })

    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                <AllDevicesBtn badge={'14'}/>
                <TypeBar className='m-5' badge={'14'}/>
                </Col>
                <Col md={9}>
                    <BrandBar badge={'14'}/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;