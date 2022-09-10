import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Context } from "..";
import {Badge, Card, Col,} from "react-bootstrap"

const BrandBar = observer(({badge}) => {
    const {device} = useContext(Context)
    return (
        <Col className="d-flex">
            {device.brands.map(brand=>
                <Card
                style={{cursor:'pointer'}}
                key={brand.id}
                className="p-3 d-flex justify-content-between"
                onClick={()=> device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger': 'light'}
                >
                    {brand.name}
                <Badge bg="success" pill>
                {badge}
               </Badge>
                </Card>
                
                )}
        </Col>
    )

});

export default BrandBar