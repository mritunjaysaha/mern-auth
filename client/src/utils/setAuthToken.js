import axios from "axios";

export default function setAuthToken(token) {
    if (token) {
        // Apply authorization token to avery request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
}
