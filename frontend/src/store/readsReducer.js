import csrfFetch from "./csrf"

const SET_READ = 'reads/setRead';
const SET_READS = 'reads/setReads';


const setRead = (read) => {
    return {
        type: SET_READ,
        payload: read
    };
};

export const setReads = (reads) => {
    return {
        type: SET_READS,
        payload: reads
    };
};

export const fetchReads = () => async dispatch => {
    const res = await fetch('/api/reads');

    const data = await res.json();

    dispatch(setReads(data.reads));

    return res;
}

export const createRead = ({ bookId, userId, status }) => async dispatch => {

    const res = await csrfFetch('/api/reads', {
        method: 'POST',
        body: JSON.stringify({ bookId, userId, status })
    });

    const data = await res.json();

    dispatch(setRead(data));

    return res;
}

export const updateRead = (readId, status) => async dispatch => {
    const res = await csrfFetch(`/api/reads/${readId}`, { 
        method: 'PATCH', 
        body: JSON.stringify({ status: status })
    });
    
    const data = await res.json();
    
    console.log(data);

    dispatch(setRead(data));

    return res;
}

const readsReducer = (state = {}, action) => {
    let nextState = { ...state };

    switch(action.type) {
        case SET_READ:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case SET_READS:
            return {...nextState, ...action.payload}
        default:
            return state;
    }
}

export default readsReducer;