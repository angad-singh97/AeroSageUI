import React, {useState} from 'react';


const SearchBar = () => {
    return (//define JSX here
        <div>
            <form action="something">
                <input type="text" placeholder="Start.." name="search"/>
                    <input type="text" placeholder="End.." name="search"/>
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
            </form>
        </div>
        );
};

export default SearchBar;