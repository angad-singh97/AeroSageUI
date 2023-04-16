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


        const searchResults = document.getElementById('search-results');

        // Assuming the data from the backend is an array of objects with properties like "flightNumber", "sourceAirport", "destinationAirport", "departureTime", "arrivalTime", "duration", etc.
        const data = [  {    flightNumber: "BA123",    sourceAirport: "LHR",    destinationAirport: "JFK",    departureTime: "2022-04-01T07:00:00Z",    arrivalTime: "2022-04-01T12:00:00Z",    duration: 300  },  {    flightNumber: "AF456",    sourceAirport: "CDG",    destinationAirport: "LAX",    departureTime: "2022-04-01T08:00:00Z",    arrivalTime: "2022-04-01T15:00:00Z",    duration: 420  }];

        // Create the HTML table
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        const headers = ['Flight Number', 'Source Airport', 'Destination Airport', 'Departure Time', 'Arrival Time', 'Duration'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        data.forEach(flight => {
            const row = table.insertRow();
            const flightNumber = row.insertCell();
            flightNumber.textContent = flight.flightNumber;
            const sourceAirport = row.insertCell();
            sourceAirport.textContent = flight.sourceAirport;
            const destinationAirport = row.insertCell();
            destinationAirport.textContent = flight.destinationAirport;
            const departureTime = row.insertCell();
            departureTime.textContent = new Date(flight.departureTime).toLocaleString();
            const arrivalTime = row.insertCell();
            arrivalTime.textContent = new Date(flight.arrivalTime).toLocaleString();
            const duration = row.insertCell();
            duration.textContent = flight.duration;
        });

        // Add the table to the search results container
        searchResults.innerHTML = '';
        searchResults.appendChild(table);
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
            <div className="results" id="search-results">
                <p><i>Flight Search Results Show Here</i></p>
            </div>
        </div>
    );
};

export default SearchBar;