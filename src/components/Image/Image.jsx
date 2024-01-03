import { Link } from 'react-router-dom';
import './Image.css'
function Image({image,title,id})
{
    return(
        <div className='image-wrapp'>
        <Link to ={`/image/${id}`}>
         <img className="image" src={image} alt="" />
         </Link>
        </div>
    )
}
export default Image;