import React, {useEffect, useState} from 'react';
import './searchbar.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import apiClient from "../../clients/axiosClient";


const options = [];

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        color: 'blue' // change to your desired color
    })
};

const loadOptions = async (inputValue, callback) => {
    if (inputValue.length < 3) {
        callback([]);
        return;
    }
    try {
        console.log(`Calling API endpoint: ${apiClient.defaults.baseURL}/search/${inputValue}`);
        const response = await apiClient.get(`/search/${inputValue}`);
        const airports = response.data.map((airport) => ({
            value: airport.id,
            label: `${airport.name} (${airport.iata})`
        }));
        callback(airports);
    } catch (error) {
        console.error(error);
        callback([]);
    }
};


const SearchBar = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    //
    // useEffect(() => {
    //     dummyMethod('PNQ');
    // }, []);

    const handleSearch = async () => {
        // Perform search based on source and destination values
        console.log("Source = " + source)
        console.log("Destination = " + destination)
    };

    return (
        <div className="container">
            <div className="form">
                <div style={{ width: '30vw', marginRight: '2vw'}}>
                    <AsyncSelect
                        placeholder="Source"
                        cacheOptions
                        isClearable
                        loadOptions={loadOptions}
                        defaultOptions
                        styles={customStyles}
                        onChange={(option) => setSource(option ? option.label : '')}
                    />
                </div>
                <div style={{ width: '30vw', marginRight: '2vw' }}>
                    <AsyncSelect
                        placeholder="Destination"
                        cacheOptions
                        isClearable
                        loadOptions={loadOptions}
                        defaultOptions
                        styles={customStyles}
                        onChange={(option) => setDestination(option ? option.label : '')}
                    />
                </div>

            <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;