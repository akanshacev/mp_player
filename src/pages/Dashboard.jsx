import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvedio from '../components/Addvedio'
import Vedios from '../components/Vedios'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'


function Dashboard() {
  const[addStatus,setAddStatus]=useState({})

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <Link to={'/his'}>Watch History</Link>
        <Row className='p-5'>
          <Col sm='1' md='1'>
            <Addvedio setAddStatus={setAddStatus}/>
          </Col>
          <Col sm='4' md='8'>
            <Vedios addStatus={addStatus}/>
          </Col>
          <Col sm='2' md='3'>
            <Categories/>
          </Col>
        </Row>
        <ToastContainer/>
      </div>
    </>
  )
}

export default Dashboard