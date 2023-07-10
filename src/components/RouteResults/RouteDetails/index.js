import React, {useState} from "react";
import './routeDetails.css';
import {Link} from "react-router-dom";


export default function RouteDetails({stopData}) {
    return (
                  <div className="accordion">
                {
                    stopData.map((item, i) => (
                        <div className="item">
                            <div className="airlineDetails">
                                <h2>✈  {item.airlineName}</h2>
                            </div>
                            <div className="leg-details">
                                <Link to={"/airports/"+item.firstAirportCode}>{item.firstAirportName}</Link>
                                <p>→</p>
                                <Link to={"/airports/"+item.secondAirportCode}>{item.secondAirportName}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
}