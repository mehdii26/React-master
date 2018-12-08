import axios from "axios";

// like a copy of the axios object
const instance = axios.create({
    baseURL: "https://example1.com"
});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN FROM INSTANCE";

export default instance