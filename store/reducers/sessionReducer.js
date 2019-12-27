import { LOGIN, LOGOUT, CHECK_AUTH } from '../actions/sessionActions.js'

export const sessionReducer = (state = {}, action) => {

    if(action.type === LOGIN){
        return {
            ...action.payload,
        }
    }

    if(action.type === LOGOUT){
        return {}
    }

    if(action.type === CHECK_AUTH){
        return state
    }

    else {
        return state
    }
}
