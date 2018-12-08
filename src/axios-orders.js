import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-85e1b.firebaseio.com/" // my database that i made

});

export default instance;