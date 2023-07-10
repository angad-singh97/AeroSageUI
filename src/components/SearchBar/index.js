import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";
import './searchbar.css';
import AsyncSelect from 'react-select/async';
import airportApiClient from "../../clients/axiosClient/airportApiClient";
import routeApiClient from "../../clients/axiosClient/routeApiClient";
import RouteSummary from "../RouteResults/RouteSummary";
import RouteResults2 from "../RouteResults";
import Select from "react-select";
import {Link} from "react-router-dom";


const customStyles = {
    menu: (provided, state) => ({
        ...provided, color: 'blue' // change to your desired color
    })
};

const SearchBar = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [avblSrcAirports, setAvblSrcAirports] = useState({})
    const [avblDestAirports, setAvblDestAirports] = useState({})
    const [srcAirport, setSrcAirport] = useState({})
    const [destAirport, setDestAirport] = useState({})
    const [resultData, setResultData] = useState(null)
    const [selectedStopsValue, setSelectedStopsValue] = useState(null);
    const [routeResults, setRouteResults] = useState(null);


    const [loading, setLoading] = useState(false);
    const LoadingOverlay = () => {
        return (
            <div className="loading-overlay">
                <div className="loading-circle"></div>
            </div>
        );
    };

    const StopsDropdown = () => {

        const handleDropdownChange = (selectedOption) => {
            // setSelectedStopsValue(selectedOption);
            setSelectedStopsValue(selectedOption || { value: 0, label: 'Non-Stop' });
        };

        return (
            <div style={{ width: '10vw', marginRight: '2vw' }}>
                <Select
                    options={[
                        { value: 0, label: 'Non-Stop' },
                        { value: 1, label: '1' },
                        { value: 2, label: '2' },
                        { value: 3, label: '3' },
                    ]}
                    value={selectedStopsValue}
                    onChange={handleDropdownChange}
                    styles={customStyles}
                />
            </div>
        );


    };



    const loadOptions = async (inputValue, callback, selectType) => {
        if (inputValue.length < 3) {
            callback([]);
            return;
        }
        try {
            console.log(`Calling API endpoint: ${airportApiClient.defaults.baseURL}/search/${inputValue}`);
            const response = await airportApiClient.get(`/search/${inputValue}`);
            const airports = response.data.map((airport) => ({
                value: airport.airportID, label: `${airport.name} (${airport.iata})`
            }));
            if (selectType === 'src') {
                setAvblSrcAirports(response.data);
            } else if (selectType === 'dest') {
                setAvblDestAirports(response.data);
            }
            callback(airports);
        } catch (error) {
            console.error(error);
            callback([]);
        }
    };


    function onSrcChange(val) {
        if (val) {
            setSource(val ? val.value : '')
            let currSrcAirport = avblSrcAirports.find((airport) => airport.airportID === val.value);
            console.log("Curr Src Airport Selected : " + currSrcAirport);
            setSrcAirport(currSrcAirport ? currSrcAirport : {})
        }
    }

    function onDestChange(val) {
        if (val) {
            setDestination(val ? val.value : '')
            let currDestAirport = avblDestAirports.find((airport) => airport.airportID === val.value);
            console.log("Curr Dest Airport Selected : " + currDestAirport);
            setDestAirport(currDestAirport ? currDestAirport : {})
        }
    }


    useEffect(() => {
        if (resultData) {
            setRouteResults(<RouteResults2 data={resultData} />);
        } else {
            setRouteResults(null);
        }
   /*     if (resultData) {
            const searchResults = document.getElementById('search-results');

            const routeResults = (
                <div>
                    <RouteResults2 data={resultData} />
                </div>
            );

            createRoot(searchResults).render(routeResults);
        }*/
    }, [resultData]);


    const handleSearch = async () => {

        setLoading(true);

        // Perform your backend request here
        // Once the request completes, set loading to false

        // Perform search based on source and destination values
        console.log("Source = " + source)
        console.log("Destination = " + destination)
        console.log("Source Airport = " + srcAirport)
        console.log("Destination Airport = " + destAirport)

        let data = {};


        try {
            console.log(`Calling API endpoint: ${routeApiClient.defaults.baseURL}/search/${source}/${destination}/${selectedStopsValue.value}`);
            const response = await routeApiClient.get(`/search/${source}/${destination}/${selectedStopsValue.value}`);
            data = response.data;
            setResultData(response.data);
        } catch (error) {
            console.error(error);
        }

        //the data const ahead should instead be loaded via the API Call mentioned above...

        //the api call should make use of the useState we talked about earlier, to set up the src and dest airport objects for later use

        setTimeout(() => {
            setLoading(false);
        }, 2000);


    };

    return (
        <>
            <div className="form">
                <div style={{width: '30vw', marginRight: '2vw'}}>
                    <AsyncSelect
                        placeholder="Source"
                        cacheOptions
                        isClearable
                        loadOptions={(inputValue, callback) => {
                            loadOptions(inputValue, callback, 'src')
                        }}
                        defaultOptions
                        styles={customStyles}
                        onChange={onSrcChange}
                    />
                </div>
                <div style={{width: '30vw', marginRight: '2vw'}}>
                    <AsyncSelect
                        placeholder="Destination"
                        cacheOptions
                        isClearable
                        loadOptions={(inputValue, callback) => {
                            loadOptions(inputValue, callback, 'dest')
                        }}
                        defaultOptions
                        styles={customStyles}
                        onChange={onDestChange}
                    />
                </div>

                <StopsDropdown/>

                {loading && <LoadingOverlay/>}
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="results" id="search-results">
                <p><i>Flight Search Results Show Here</i></p>
                {routeResults}
            </div>
            {/*<Link to="/airports/1">Airport 1</Link>*/}
        </>
    );
};


export default SearchBar;