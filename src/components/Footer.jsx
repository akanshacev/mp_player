import React from 'react' 
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-100 d-flex flex-column justify-content-center bg-light'>
        <div className='row p-5'>
          <div className='col'>
            <h4>Media Player</h4>
            <p style={{textAlign:'justify'}}>Graphic design is a profession, academic discipline and applied art 
            whose activity consists in projecting visual communications intended to transmit specific messages to social groups, 
            with specific objectives. 
            Graphic design is an interdisciplinary branch of design and of the fine arts.</p>
          </div>
          <div className='col'>
            <h4>Link</h4>
            <Link to={'/'} style={{color:'black'}}>Landing</Link><br />
            <Link to={'/dash'} style={{color:'black'}}>Dashboard</Link><br />
            <Link to={'/his'} style={{color:'black'}}>History</Link>
          </div>
          <div className='col'>
            <h4>Reference</h4>
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'black'}}>Bootstrap</a><br />
            <a href="https://react-bootstrap.github.io/" target='_blank' style={{color:'black'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank' style={{color:'black'}}>React</a>
          </div>
        </div>
        <div className='text-center'>
          <p> &copy; Media Player 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer