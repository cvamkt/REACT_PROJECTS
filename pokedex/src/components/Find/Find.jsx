// import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './Find.css'



function Search({updateSearchTerm}) {
    // const [searchTerm, setSearchTerm] = useState('');
    const debounceCallback = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <div className="search-wrapper">
            <input
                id="pokemon-name-search"
                type="text"
                placeholder="pokemon name...."
                onChange={debounceCallback}
            />
             {/* {searchTerm && <span className="search-icon">🔍</span>} */}
        </div>
    );
}

export default Search;