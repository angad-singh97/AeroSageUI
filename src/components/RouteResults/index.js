import RouteSummary from "./RouteSummary";
import ReactPaginate from 'react-paginate';
import React, {useEffect, useState} from 'react';
import './routeresults.css';
import ReactDOM from 'react-dom';

function getTimeString(hrs) {
    const hoursDecimal = hrs;
    const hoursInteger = Math.floor(hoursDecimal);
    const minutesDecimal = (hoursDecimal - hoursInteger) * 60;
    const roundedMinutes = Math.round(minutesDecimal / 15) * 15;

    const hours = hoursInteger + Math.floor(roundedMinutes / 60);
    const minutes = roundedMinutes % 60;

    console.log(hours + " hours and " + minutes + " minutes");


    return (hours + " hours and " + minutes + " minutes");
}
export default function RouteResults2(props) {
    const {data} = props?props:[];
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = 3;

    useEffect(()=> {
        const endOffset = itemOffset + itemsPerPage;
        // (Array.isArray(data))?setCurrentItems(data.slice(itemOffset, endOffset)):undefined;
        setCurrentItems((Array.isArray(data)) ? data.slice(itemOffset, endOffset) : []);
        setPageCount(Math.ceil(data.length/itemsPerPage));
    },[itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
        <div id="container">
            {Array.isArray(currentItems) ? (
                currentItems.map((route, index) => {
                    const uniqueAirlineNames = Array.from(
                        new Array(route.stops.routeStopList.map((stop) => stop.airlineName))
                    );
                    return (
                        <RouteSummary
                            key={route.stops.routeStopListId}
                            stops={route.stops.routeStopList.length}
                            stopData={route.stops}
                            sourceAirportName={route.sourceAirportName}
                            sourceAirportCode={route.sourceAirportCode}
                            destinationAirportName={route.destinationAirportName}
                            destinationAirportCode={route.destinationAirportCode}
                            airlines={uniqueAirlineNames}
                            totalTime={getTimeString(route.timeTaken)}
                        />
                    );
                })
            ) : (
                console.log('❌ variable is undefined or null')
            )}
        </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"

            />
        </>
    );

}
/*const RouteResults = ({routesData}) => {
    const [items, setItems] = useState([]);


    function Results({routesData}) {
            setItems(routesData);
            return (
            <div id="container">
                {routesData?.map((route, index) => {
                    const uniqueAirlineNames = Array.from(
                        new Set(route.stops.map((stop) => stop.airlineName))
                    );
                    return (
                        <RouteSummary
                            key={index}
                            stops={route.stops.length}
                            sourceAirport={route.sourceAirportName}
                            destinationAirport={route.destinationAirportName}
                            airlines={uniqueAirlineNames}
                            totalTime={'8 HOURS'}
                        />
                    )
                })
                }
            </div>
        );
    }

    function PaginatedItems({itemsPerPage}) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.

        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);

        // Invoke when user click to request another page.


    }

    // Add a <div id="container"> to your HTML to see the component rendered.
    //     ReactDOM.render(
    //         <PaginatedItems itemsPerPage={4}/>,
    //         document.getElementById('container')
    //     );



};*/

// export default RouteResults;
