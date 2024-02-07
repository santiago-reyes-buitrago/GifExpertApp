import {useState} from "react";
import {AddCategory,GifGrid} from "./componets";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (valor) => {
        if (categories.includes(valor)) return;
        setCategories([valor,...categories])
    }
    
    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input de busqueda */}
            <AddCategory
                // handleCategory={setCategories}
                handleCategory={onAddCategory}
            />
            {/* Listado de gifs */}
            {
                categories.map(category =>
                    (<GifGrid
                        key={category}
                        category={category} />)
                )
            }
        </>
    );
}