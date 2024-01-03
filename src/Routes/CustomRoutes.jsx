import {Route,Routes} from 'react-router-dom';
import Gallery from '../components/Gallery/Gallery';
import ImageDetails from '../components/ImageDetails/ImageDetails';

function CustomRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Gallery/>}/>
            <Route path="/image/:id" element={<ImageDetails/>}/>
        </Routes>
    )

}
export default CustomRoutes;