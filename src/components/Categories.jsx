import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../Services1/allApis'
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';


function Categories() {
  const [category, setCategory] = useState({
    name: '', video: []
  })
  const [addStatus,setAddStatus]=useState({})
  const [show, setShow] = useState(false);

  const getCategory = (val) => {
    if (val) {
      setCategory({ ...category, name: val })
    }
  }

  const handleAdd = async () => {
    console.log(category);
    if (category.name) {
      const res = await addCategory(category)
      if (res.status >= 200 && res.status < 300) {
        toast.success("Category Added Successfully!!")
        handleClose()
        setAddStatus(res.data)
      }
      else {
        toast.error("Category Adding Failed!!")
      }
    }
    else {
      toast.info("Enter Valid Data!!")
    }
  }

  const handleClose = () => {
    setShow(false);
    setCategory({
      name: '', video: []
    })
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <Button variant='primary' className='btn' onClick={handleShow}>Add Category</Button>
      </div>
      
      <CategoryList status={addStatus}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Category</Form.Label>
              <Form.Control type="text" onChange={(e) => { getCategory(e.target.value) }} placeholder="Enter Category" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Categories