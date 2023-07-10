import './routeSummary.css';
import RouteDetails from "../RouteDetails";
import {useEffect, useState} from "react";
import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';


const RouteSummary = ({stops, stopData, sourceAirportName, sourceAirportCode, destinationAirportName, destinationAirportCode, airlines, totalTime}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDetails = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setExpanded(false); // Reset the expanded state when the component mounts or when any dependencies change
    }, []);

    return (
        <>
        <div className="route-summary">
            <div className="route-summary-header">
                <h3>{stops >= 2? stops-1+' Stop(s) ': 'NS '}</h3>
                    <Link to={"/airports/"+sourceAirportCode}>{sourceAirportName}</Link>
                    →
                    <Link to={"/airports/"+destinationAirportCode}> {destinationAirportName} </Link>
            </div>
            <div className="route-summary-content">
                <p className="airlinesPara">{'✈ '+airlines.join(', ')}</p>
                <p>🕐 {totalTime}</p>
                <button className="moreDetailsButton" onClick={toggleDetails}>
                    {expanded ? '▲' : '▼'}
                </button>
            </div>
            {expanded && <RouteDetails stopData={stopData.routeStopList}/>}
        </div>
        </>
    );
};

export default RouteSummary;