import React, { useState, useEffect } from 'react'
import { deleteCategory, getAllCategory, getSpecificVideo, updatecategory } from '../Services1/allApis'
import { toast } from 'react-toastify'
import VedioCard from './VedioCard'

function CategoryList(status) {
  const [allCategory, setAllCategory] = useState([])
  const [deleteCatStatus, setDeleteCatStatus] = useState([])

  useEffect(() => {
    getCategory()
  }, [status, deleteCatStatus])

  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteCategory(id)
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      setDeleteCatStatus(res)
      toast.success("Category Deleteed!!")
    }
    else {
      toast.error("Category Deletion failed!")
    }
  }

  const getCategory = async () => {
    const res = await getAllCategory()
    // console.log(res.data);
    setAllCategory(res.data)
  }

  const handleDrop = async (e, id) => {
    // console.log("Category id:" + id);
    const vid = e.dataTransfer.getData("videoId")
    // console.log("dropped video id:" + vid);
    let category = allCategory.find(item => item.id == id)
    // console.log(category);
    const res = await getSpecificVideo(vid)
    // console.log(res.data)
    category.video.push(res.data)
    console.log(category);
    const rescat = await updatecategory(category, id)
    if (rescat.status >= 200 && rescat.status < 300) {
      toast.success(`${res.data.caption} is added to ${category.name}`)
    }
    else {
      toast.error("video adding to category failed!!")
    }

  }

  const handleDragOver = (e) => {
    e.preventDefault()
    console.log("Dragging Over Category");


  }

  return (
    <>
      <div className='border border-3 border-light mt-3 p-3'>
        {
          allCategory ?
            allCategory.map(item => (
              <div className='bg-primary mb-3 p-3 rounded shadow' onDragOver={e => { handleDragOver(e) }} droppable='true' onDrop={e => { handleDrop(e, item?.id) }}>
                <div>
                  <span>{item.name}</span>
                  <i className='fa-solid fa-trash float-end' onClick={() => { handleDelete(item.id) }} style={{ color: '#ff0000' }}></i>
                </div>
                <div>
                  {
                    item?.video.map(v=>(
                      <VedioCard video={v} cat={true}/>
                    ))
                  }
                </div>
              </div>

            ))
            :
            <h1>No Category</h1>
        }

      </div>
    </>
  )
}

export default CategoryList