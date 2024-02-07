import {GifGridItem} from "./GifGridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
export const GifGrid = ({category}) => {


    const {images,isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {isLoading && <h2>Cargando...</h2>}
                {!isLoading && images.map( (image) => (
                    <GifGridItem key={image.id} {...image}/>
                ))}
            </div>
        </>
    )

}