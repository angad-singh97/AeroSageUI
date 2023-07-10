import {Link, useParams} from "react-router-dom";
import './airportDetails.css';
import airportApiClient from "../../clients/axiosClient/airportApiClient";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faCity, faPlane, faFlag, faGlobe, faRulerVertical, faCode, faHourglass } from '@fortawesome/free-solid-svg-icons';
import FeedbackForm from "../FeedbackForm";


export default function AirportDetails () {
    const [airportObj, setAirportObj] = useState(null);
    const [airportName, setAirportName] = useState(null);
    const {id} = useParams();
    async function fetchAirportFromBackend (inputValue) {
        try {
            console.log(`Calling API endpoint: ${airportApiClient.defaults.baseURL}/search/${inputValue.id}`);
            const response = await  airportApiClient.get(`/search/${inputValue.id}`);
            setAirportObj(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        fetchAirportFromBackend({id});
    },[]);

    useEffect(()=>{
        if (airportObj) {
            setAirportName(airportObj.name)
        } else {
            setAirportName("UNKNOWN")
        }
    },[airportObj]);

    const AirportHeader = ({ id, airportName }) => (
        <div className="airport-details-header">
            <h1>
                <Link className="nav-bar" to={`/airports/${id}`}><FontAwesomeIcon icon={faPlane}/> {airportName}</Link>
            </h1>
        </div>
    );

    const AirportContent = ({ airport }) => (
        <div className="airport-details-content">
            <p><FontAwesomeIcon icon={faPlane} /> Airport ID: {airport.airportID}</p>
            <p><FontAwesomeIcon icon={faCode} /> IATA: {airport.iata}</p>
            <p><FontAwesomeIcon icon={faCode} /> ICAO: {airport.icao}</p>
            <p><FontAwesomeIcon icon={faCity} /> {airport.city}, {airport.country}</p>
            <p><FontAwesomeIcon icon={faGlobe} /> {airport.latitude}, {airport.longitude}</p>
            <p><FontAwesomeIcon icon={faRulerVertical} /> Altitude: {airport.altitude}</p>
            <p><FontAwesomeIcon icon={faClock} /> Timezone: {airport.timezone}</p>
            <p><FontAwesomeIcon icon={faHourglass} /> DST: {airport.dst}</p>
        </div>
    );

    const AirportDetailsContainer = ({ airport }) => {
        if (!airport) {
            return <div></div>; // Render an empty div if airport is null
        }

        return (
            <>
            <div className="airport-details-container">
                <AirportHeader id={airport.airportID} airportName={airport.name} />
                <AirportContent airport={airport} />
            </div>
            <div className="airport-reviews-container">
                <h2>{} {airport.name} is rated */5.</h2>
                <FeedbackForm/>
            </div>
            </>
        );
    };
    const MainComponent = () => {

        /*       {
                   "id": "642c4e302c8dae9ad3c1cbbc",
                   "airportID": "3017",
                   "name": "Pune Airport",
                   "iata": "PNQ",
                   "icao": "VAPO",
                   "city": "Pune",
                   "country": "India",
                   "latitude": "18.58209991455078",
                   "longitude": "73.9197006225586",
                   "altitude": "1942",
                   "timezone": "5.5",
                   "dst": "N"
               }*/

        return (
            <AirportDetailsContainer airport={airportObj}/>
        );
    }

    return (<MainComponent/>);
}

