//it can override the default configuration
//global console log out dekhaudaina + kun part maa kun use garni vanira flexiblity dinxa
//ani hamle get ko lagi chai yo use garyeko ra post ko lagi default use garyeko in this project
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',

});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM Instance of axios';
//instance.interceptors.request
export default instance;