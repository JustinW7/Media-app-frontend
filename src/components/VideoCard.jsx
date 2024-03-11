import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { addToHistory, deleteVideo } from '../services/allAPI';

function Videocard({ displayData,setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);

  //make a api call to http://localhost:4000/history

  const {caption,embedLink}=displayData
  let today=new Date()
  // console.log(today);
// to make the date only time and Day 
  let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

  let videoDetails={
    caption,embedLink,timeStamp
  }
await addToHistory(videoDetails)
  }

//delete a video

const removeVideo=async(id)=>{
  //make api call
  const response =await deleteVideo(id)
  setDeleteVideoStatus(true)
}


  return (
    <>
      <Card style={{ width: '13rem' }} className='p-2'>
        <Card.Img onClick={handleShow} variant="top" src={displayData?.url} width={'50px'} />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-between'>
            <h6>{displayData?.caption}</h6>
          </Card.Title>
          <Card.Text></Card.Text>
          <Button  onClick={()=>removeVideo(displayData?.id)}className='btn' variant='light'>
            <i className='fa-solid fa-trash text-danger'></i>
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="450"
            height="315"
            src={`${displayData?.embedLink}?autoplay=1`}
            title={displayData?.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}></Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Videocard;
