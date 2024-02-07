import {useEffect, useState} from "react";
import {getGiFs} from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGiFs(category).then(newGifs => {
            setImages(newGifs);
            setIsLoading(false);
        });
    },[]);

    return{
        images,
        isLoading
    }
}