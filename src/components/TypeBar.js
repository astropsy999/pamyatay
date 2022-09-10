import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Context } from "..";
import {ListGroup, Badge} from "react-bootstrap"

const TypeBar = observer(({badge}) => {
    const {device} = useContext(Context)
    // console.log(device)
    const checkClickedItem = () => {
     
      return console.log('device.selectedType.id: ', device.selectedType.id);
    }
    return (
        <ListGroup as="ul">
            {device.types.map(type => 
                <ListGroup.Item
                style={{cursor:'pointer'}}
                active={type.id === 0 || type.id === device.selectedType.id}
                onClick={()=> {device.setSelectedType(type)}}
                key={type.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{type.name}</div>
     
    </div>
    
    <Badge 
    bg="primary" pill
    onClick={checkClickedItem()}
    >
     {badge}
    </Badge>
  </ListGroup.Item>
   )}
  
</ListGroup>
    )

});

export default TypeBar