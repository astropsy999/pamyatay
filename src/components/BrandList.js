import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { Context } from '..';

const  BrandList = observer(({badge}) => {
    const {device} = useContext(Context)
    
    return (
        <ListGroup as="ul">
            {device.brands.map(brand => 
                <ListGroup.Item
                style={{cursor:'pointer'}}
                active={brand.id === 0 || brand.id === device.selectedBrand.id}
                onClick={()=> device.setSelectedBrand(brand)}
                key={brand.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{brand.name}</div>
     
    </div>
    
    <Badge bg="primary" pill>
      {badge}
    </Badge>
  </ListGroup.Item>
   )}
  
  </ListGroup>
    )
});

export default BrandList;