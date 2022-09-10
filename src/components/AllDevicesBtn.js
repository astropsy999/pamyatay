import React from 'react';
import { Badge, Button } from 'react-bootstrap';

const AllDevicesBtn = ({badge})=> {
    return (
        <div>
    <Button 
    variant="success" 
    size="lg" 
    className='w-100 mb-4 mr-3 d-flex justify-content-between justify-content-center'
    
    >
      <span>ВСІ РОБОТИ</span>
      <Badge bg="warning" pill>
     {badge}
    </Badge>
    </Button>
    
        </div>
    );
}

export default AllDevicesBtn;