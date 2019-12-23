const initialState = {
    listUser: [],
    loading: true,
    addUser: {
        userName: "",
        password: "",
        email: "",
        roles: [{
            id: null
        }]
    }
}

function AdminReducer(state = initialState, action) {
    const {type, users, userName, password} = action;
    console.log("STATE BEFORE", state);
    switch (type) {
        case 'LIST_USER_SUCCESS':
            return {...state, listUser: users}
        case 'HANDLE_USERNAME':
            return {
                ...state, addUser: {
                    ...state.order,
                    userName: userName
                }
            }
        case 'HANDLE_PASSWORD':
            return {
                ...state, addUser: {
                    ...state.order,
                    password: password
                }
            }
        default:
            return state;
    }
}

export default AdminReducer;
