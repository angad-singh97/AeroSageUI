import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api/airports' // Replace with your API's URL
});

export default apiClient;