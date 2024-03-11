import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'


import VideoCard from './VideoCard'
import { deleteVideo, getAllVideo } from '../services/allAPI'
import { all } from 'axios'





//state lifting is used as a prope upladVideoServerResponse 

function View({uploadVideoServerResponse}) {
const [allVideos,setAllVideos]=useState([])

//deleting a video
const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideos=async()=>
  {
    const {data}=await getAllVideo()
    console.log(data)
    setAllVideos(data);
  }
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
    

    //state lifting-ontime delete or view without refreshing 
  },[uploadVideoServerResponse,deleteVideoStatus])
  return (
    <>
    <Row>

    {
      allVideos.length>0?
      allVideos.map((video)=>(
        <Col sm={12} md={6} lg={4} xl={3} >
    <VideoCard displayData={video} setDeleteVideoStatus={
      setDeleteVideoStatus}/>
    </Col>
      )):<p className='fw-bolder text-danger fs-5'>Nothing to Display</p>
    }
    


    

   

    </Row>
    </>
  )
}

export default View