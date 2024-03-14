import React, { useState, useEffect } from 'react'
import VedioCard from './VedioCard'
import { getVideos } from '../Services1/allApis'

function Vedios({addStatus}) {

  const [allVideos, setAllVideos] = useState([])
  const [delStatus,setDeleteStatus] = useState([])

  useEffect(() => {
    getData()
  }, [addStatus,delStatus])

  const getData = async () => {
    const res = await getVideos()
    // console.log(res.data)
    setAllVideos(res.data)
    // console.log(allVideos)
  }
  return (
    <div className='bg-light row border border-3 border-dark p-5'>
      {
        allVideos ?
          allVideos.map(item => (
            <VedioCard video={item} setDeleteStatus={setDeleteStatus}/>
          ))
          :
          <h1>No Videos</h1>
      }

    </div>
  )
}

export default Vedios