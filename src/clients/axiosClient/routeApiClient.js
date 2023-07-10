import axios from 'axios';

const routeApiClient = axios.create({
    baseURL: 'http://localhost:8081/api/routes' // Replace with your API's URL
});

export default routeApiClient;