import commonApi1 from "./commonApis";
import {BASE_URL} from "./base_url";
import commonApis from "./commonApis";

export const uploadVideo=async(data)=>{
    return await commonApis("POST",`${BASE_URL}/allVideos`,data)
}
export const getVideos=async()=>{
    return await commonApis("GET",`${BASE_URL}/allVideos`,"")
}
export const deleteVideo=async(id)=>{
    return await commonApis("DELETE",`${BASE_URL}/allVideos/${id}`,{})
}
export const addCategory= async(data)=>{
    return await commonApis("POST",`${BASE_URL}/category`,data)
}
export const getAllCategory=async()=>{
    return await commonApis("GET",`${BASE_URL}/category`,"")
}
export const deleteCategory=async(id)=>{
    return await commonApis("DELETE",`${BASE_URL}/category/${id}`,{})
}
export const addHistory=async(data)=>{
    return await commonApis("POST",`${BASE_URL}/history`,data)
}
export const getHistory=async()=>{
    return await commonApis("GET",`${BASE_URL}/history`,"")
}
export const deleteHistory=async(id)=>{
    return await commonApis("DELETE",`${BASE_URL}/history/${id}`,{})
}
export const getSpecificVideo=async(id)=>{
    return await commonApis("GET",`${BASE_URL}/allVideos/${id}`,"")
}
export const updatecategory=async(data,id)=>{
    return await commonApis("PUT",`${BASE_URL}/category/${id}`,data)
}