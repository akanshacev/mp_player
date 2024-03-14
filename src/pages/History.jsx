import React, { useEffect, useState } from 'react'
import { deleteHistory, getHistory } from '../Services1/allApis'
import { toast,ToastContainer } from 'react-toastify'

function History() {
  const [history, setHistory] = useState([])



  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getHistory()
    console.log(res.data);
    setHistory(res.data)
  }

  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteHistory(id)
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
        // setDeleteStatus(res)
        toast.success("History Deleteed SuccessFully!!")
    }
    else {
        toast.error("History Deletion failed!")
    }
}
  return (

    <>
      <div className='p-5 '>
        <h1>Watch History</h1>
        <table className='table table-bordered mt-3'>
          <thead>
            <tr>
              <th className='text-light'>Id</th>
              <th className='text-light'>Caption</th>
              <th className='text-light'>Date & Time</th>
              <th className='text-light'>URL</th>
              <th></th>
            </tr>
          </thead>
          {
            history ?
              history.map(item => (
                <tbody>
                  <tr>
                    <td className='text-light'>{item.id}</td>
                    <td className='text-light'>{item.caption}</td>
                    <td className='text-light'>{item.datetime}</td>
                    <td className='text-light'>{item.url}</td>
                    <td><i class="fa-solid fa-trash text-light" onClick={()=>{handleDelete(item.id)}}></i></td>
                  </tr>
                </tbody>
              ))
            :
            <p>No Watched videos</p>
            }
        </table>
      </div>
      <ToastContainer/>
    </>
  )
}

export default History