import _ from 'lodash'
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    CREATE_STREAM
} from '../actions/types.js'

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            // don't need the .id because in the action creator, the payload is the ID
            return _.omit(state, action.payload)
        case FETCH_STREAMS:
        //mapKeys is a lodash method where the first arg is the input, 
        // and the second is what key from object within payload array will create new objects
            return {...state, ..._.mapKeys(action.payload, 'id')}
        default:
            return state;
    }
}