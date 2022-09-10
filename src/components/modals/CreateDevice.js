import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        
      fetchTypes().then(data=> device.setTypes(data))
      fetchBrands().then(data=> device.setBrands(data))

  }, [])

    const addInfo = ()=> {
      setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number)=> {
      setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
    }

    const selectFile = e => {
      setFile(e.target.files[0]);
    }

    const addDevice = () => {
     
      let formData = new FormData()
      formData.append('name', name)
      formData.append('price', price.toString())
      formData.append('img', file)
      formData.append('brandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))
      createDevice(formData).then(data=> onHide())

    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Додати нову Роботу
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <div 
            className='d-flex justify-content-between'
            >
            <Dropdown className='mt-2 mb-2'>
                <Dropdown.Toggle>{device.selectedType.name || "Оберіть Категорію"}</Dropdown.Toggle>
                <Dropdown.Menu>{device.types.map(type => 
                    <Dropdown.Item
                    onClick={()=> device.setSelectedType(type)} 
                    key={type.id}>{type.name}
                    </Dropdown.Item>
                    )}</Dropdown.Menu>
            </Dropdown>
            <Dropdown 
            className='mt-2 mb-2 ml-2'
            >
                <Dropdown.Toggle>{device.selectedBrand.name || "Оберіть Тип"}</Dropdown.Toggle>
                <Dropdown.Menu>{device.brands.map(brand => 
                    <Dropdown.Item
                    onClick={()=> device.setSelectedBrand(brand)} 
                    key={brand.id}>{brand.name}
                    </Dropdown.Item>
                    )}</Dropdown.Menu>
            </Dropdown>
            </div>
            <Form.Control
            type={name}
            onChange={e=> setName(e.target.value)}
            className="mt-2"
            placeholder="Введіть назву роботи"
            ></Form.Control>
            <Form.Control
            type={price}
            onChange={e=> setPrice(e.target.value)}
            className="mt-2"
            placeholder="Введіть вартість роботи"
            ></Form.Control>
            <Form.Control
            className="mt-2"
            type="file"
            onChange={selectFile}
            ></Form.Control>
          
            <Button 
            variant={"warning"} 
            className="mt-2"
            onClick={addInfo}
            >Додати нову властивість
            </Button>
            {info.map(i => 
              <Row className="mt-2 justify-content-between" key={i.number}>
                <Col md={4}>
                  <Form.Control
                  value={i.title}
                  onChange={e => changeInfo('title', e.target.value, i.number)}
                  placeholder='Введіть назву властивості'>

                  </Form.Control>
                </Col>
                <Col md={5}>
                <Form.Control
                value={i.description}
                onChange={e => changeInfo('description', e.target.value, i.number)}
                  placeholder='Введіть опис властивості'>
                </Form.Control>
                </Col>
                <Col md={3}>
                <Button 
                onClick={()=> removeInfo(i.number)}
                variant='outline-danger'
                >Видалити</Button>
                </Col>
                
              </Row>
            )}
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'outline-danger'} onClick={onHide}>Закрити</Button>
          <Button variant={'outline-success'} onClick={addDevice}>Додати</Button>
        </Modal.Footer>
      </Modal>
    );
});

export default CreateDevice;