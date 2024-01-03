import { useEffect, useState } from "react";
import axios from 'axios'
import Image from "../Image/Image";
import './GalleryList.css'
function GalleryList()
{

    const [galleryurl,setgallery_url]=useState('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
    const [imagelist,setimage]=useState([])
    const [isloading,setisloding]=useState(true);

    async function downloadimages()
    {
        setisloding(true);
        const response= await axios.get(galleryurl);
        // console.log(response.data);
        const Photos=response.data.photos;
        const res=Photos.map((photo)=>
        {
            return{
                id:photo.id,
                description:photo.description,
                title:photo.title,
                image:photo.url

            }
        })
        setimage(res);
        setisloding(false);
    }
    useEffect(()=>
    {
        downloadimages();

    },[galleryurl]);
    return(
        <>
        {(isloading)?'data is beong loaded': <div className="image-wrapper">
         {imagelist.map((i)=><Image key={i.id} image={i.image} title={i.title} id={i.id}/>)}
         </div>}
        </>
    )

}

export default GalleryList;