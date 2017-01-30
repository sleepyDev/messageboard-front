import axios from "axios";

export function fetchTopics() {
    return {
        type: "FETCH_TOPICS",
        payload: axios.get("http://localhost:4399/topics")
    }
}
