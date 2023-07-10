import axios from 'axios';

const airportApiClient = axios.create({
    baseURL: 'http://localhost:8081/api/airports' // Replace with your API's URL
});

export default airportApiClient;