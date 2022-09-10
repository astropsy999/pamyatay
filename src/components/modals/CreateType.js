import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

const  CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addType = () => {

    createType({name: value}).then(data=> setValue(''))
    onHide()

  }
    return (
        <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Додати нову Категорію
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <Form.Control
            value={value}
            onChange={e=> setValue(e.target.value)}
            placeholder="Введіть назву Категорії"
            >

            </Form.Control>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'outline-danger'} onClick={onHide}>Закрити</Button>
          <Button variant={'outline-success'} onClick={addType}>Додати</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateType;