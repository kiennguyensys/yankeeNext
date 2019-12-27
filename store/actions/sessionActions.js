export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const CHECK_AUTH = 'CHECK_AUTH'

export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const checkAuth = () => {
    return {
        type: CHECK_AUTH
    }
}

