import axios from 'axios';

const blogApiClient = axios.create({
    baseURL: 'http://localhost:8081/api/blogs' // Replace with your API's URL
});

export default blogApiClient;