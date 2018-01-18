/** Reducers specify how the application's state changes in response to actions sent to the store. */

const initialState = {
    id: null,
    name: null,
    email: null,
    token: null,
    loggedIn: false
}

// if state is undefined, start with initial state
const app = (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGGED_IN': {
            console.log('USER_LOGGED_IN reducer')
            let newState = Object.assign({}, state, {
                id: action.id,
                name: action.name,
                email: action.email,
                token: action.token,
                loggedIn: action.loggedIn
            })
            console.log('New state after USER_LOGGED_IN reducer:', newState)
            return newState
        }
        case 'USER_LOGGED_OUT':
            return initialState
        default: // must return state as-is if no action.types match
            return state
    } // end of switch
}

export default app
