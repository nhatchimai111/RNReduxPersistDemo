const initialState = {
    isLogged: false,
    info: null,
}

export default function userState(state = initialState, action) {

    switch (action.type) {
        case 'user/LOGIN':
            return {
                isLogged: true,
                info: action.userInfo
            }
        default:
            return state;
    }
}
