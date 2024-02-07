import {useState} from "react";

export const AddCategory = ({handleCategory}) => {

    const [search, setSearch] = useState('')
    const handleSearch = (x) => {
        setSearch(x);
    }
    const onSubmit = (e) => {
      e.preventDefault();
      if (search.trim().length <= 1) return;
      handleCategory(search.trim().toLowerCase())
      setSearch('');
    }

    return(<>
        <form onSubmit={onSubmit}>
            <input name='search' type='text' value={search} id='search'
                   onChange={(e) => {
                       handleSearch(e.target.value)
                   }}
                   placeholder='Buscar gif'/>
        </form>
    </>)
}