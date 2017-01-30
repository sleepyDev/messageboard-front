const initialState = {
    topics: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case "FETCH_TOPICS_PENDING": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_TOPICS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "FETCH_TOPICS_FULFILLED": {
            return {...state, fetching: false, fetched: true, topics: action.payload.data
            }
            break;
        }
    }
    return state;
}
