import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";




//upload video

export const uploadVideo = async(reqBody)=>{

    //make post http request "http://localhost:4000/videos" to get all videos from json-server and , return response to the add component

    return await commonAPI("POST", `${serverUrl}/videos`,reqBody)

}
//get all videos from json

export const getAllVideo = async()=>{
    //make GET request to "http://localhost:4000/videos" to get all videos from json-server return response to the view component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video

export const getAVideo = async(id)=>{
    //make GET request to "http://localhost:4000/videos" to get all videos from json-server return response to the card component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete video
export const deleteVideo =async(id)=>{
    //make delete request to "http://localhost:4000/videos" to get all videos from json-server return response to the video card component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}

//store watching video history to json server
export const addToHistory=async(videoDetails)=>{

 //make post request to "http://localhost:4000/history" to store all videos from json-server return response to the video card component

 return await commonAPI("POST",`${serverUrl}/history`,videoDetails);

}

//get watching video history to json server
export const getAllHistory=async()=>{

 //make get request to "http://localhost:4000/history" to get all videos from json-server return response to the watchhistory component

 return await commonAPI("GET",`${serverUrl}/history`,"");

}

export const addToCategory=async(reqBody)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}

export const getAllCategory=async()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

export const deleteCategory=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

