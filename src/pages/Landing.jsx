import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-item-center' style={{ height: '80vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2024</h1>
            <p>Explore media player for youtube vedios upload and management.</p>
            <div>
              <Link to={'/dash'} className='btn btn-success'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://www.pngall.com/wp-content/uploads/5/Media-Video-Player-PNG-Free-Download.png"
              className='img-fluid shadow' alt="img" />
          </div>
        </div>
      </div>
      <div className='mt-3 p-5'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-2 flex-row justify-content-between'>

          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/3635718/screenshots/7163576/media/2a7c89c5fe7a8316fa0cbadb71719940.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div class="card-body">
              <h5 className='card-title'> Upload Vedios</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:1358/1*8lcdOkw8uXu3k73Q1rwt6Q.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div class="card-body">
              <h5 className='card-title'> Watch Vedios</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://i.imgur.com/Hxr1SRB.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div class="card-body">
              <h5 className='card-title'>History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
      </div>
      <div className='row mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
        <div className='col'>
          <h2>Simple , Fast & Secure</h2>
          <p style={{ textAlign: "justify" }}>Media player 2024 is a platform for simple and faster youtube vedio uploading and management.
            Vedio watch history too where you get a simple vedio player interface with the app its self..
          </p>
        </div>
        <div className='col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1DAbU1PeMmM?si=yyjHdYChie1eg6EO"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </>

  )
}

export default Landing