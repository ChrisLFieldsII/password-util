/** Action creators. Functions that return action objects. */

export const userLoggedIn = (user, token) => ({
    type: 'USER_LOGGED_IN',
    id: user.id,
    name: user.name,
    email: user.email,
    token,
    loggedIn: true
})

export const userLoggedOut = () => ({
    type: 'USER_LOGGED_OUT',
    id: null,
    name: null,
    email: null,
    token: null,
    loggedIn: false
})
