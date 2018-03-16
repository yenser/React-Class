import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d951b.firebaseio.com/'
});

export default instance;