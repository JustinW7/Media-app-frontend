import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'

function WatchHistory() {
  
   const[history,setHistory]=useState([])
  const handleHistory= async()=>{
    //make api call 

    const {data}=await getAllHistory()
    setHistory(data);
   
  }
  // console.log(history);
useEffect(()=>{
  handleHistory()
},[])


  return (
    <>
<div className="container mt-5 d-flex justify-content-between">
  <h3>Watch-History</h3>
  <Link to={"/home"} style={{textDecoration:"none",fontSize:"20px",color:"blueviolet"}}><i class="fa-solid fa-circle-arrow-left fa-fade" ></i> Back To Home</Link>
</div>

<table className=' mt-5 mb-5 container'>
  <thead style={{color:"yellow"}}>
   <tr>
   <th>#</th>
    <th>Name</th>
    <th>URL</th>
    <th>TimeStamp</th>
   </tr>
  </thead>
  <tbody className='mt-5'>
    {
      history?history?.map((item,index)=>(
        <tr>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
        <td>{item?.timeStamp}</td>
        </tr>
      )):<p className='fw-bolder text-danger fs-5'>Nothing To Display !!</p>
    }
   
  </tbody>
</table>
    </>
  )
}

export default WatchHistory