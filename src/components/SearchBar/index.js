import React, {useState} from 'react';
import './searchbar.css';


const SearchBar = () => {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');

    const handleSwap = () => {
        const temp = source;
        setSource(destination);
        setDestination(temp);
    };

    const handleSearch = () => {
        // Perform search based on source and destination values
    };

    return (
        <div className="container">
            <div className="form">
                <label>Source:</label>
                <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
                <label>Destination:</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
                <button onClick={handleSwap}>Swap</button>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;