import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import './ImageDetails.css'
function ImageDetails()
{
    const {id}=useParams();
    const [imagedet,setimagedet]=useState([]);
    const [isloading,setisloding]=useState(true);

    async function downloadimagedetails()
    {
        setisloding(true);

        const response= await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response.data.photo);
        const ph=response.data.photo;
        
        setimagedet(
            {
                description:ph.description,
                title:ph.title,
                image:ph.url

            }
        )
        setisloding(false);

    }
    useEffect(()=>
    {
        downloadimagedetails();

    },[])
    return(
        <div>
            {(isloading)?'data is beong loaded': <div className="wrap">
            <div className="image-title">TITLE:{imagedet.title}</div>
            <div className="image-title">DES:{imagedet.description}</div>
            <img className="image-photo" src={imagedet.image} alt="" />
            </div>}
        </div>
    )

}

export default ImageDetails