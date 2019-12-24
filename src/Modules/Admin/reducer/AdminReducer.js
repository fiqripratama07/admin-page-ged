const initialState = {
    listUser: [],
    loading: true,
    addUser: {
        userName: "",
        password: "",
        email: "",
        roles: [{
            id: ""
        }]
    }
}

function AdminReducer(state = initialState, action) {
    const {type, users, userName, password, email, roleId} = action;
    console.log("STATE BEFORE", state.addUser);
    switch (type) {
        case 'LIST_USER_SUCCESS':
            return {...state, listUser: users}
        case 'HANDLE_USERNAME':
            return {
                ...state, addUser: {
                    ...state.addUser,
                    userName: userName
                }
            }
        case 'HANDLE_PASSWORD':
            return {
                ...state, addUser: {
                    ...state.addUser,
                    password: password
                }
            }
        case 'HANDLE_EMAIL':
            return {
                ...state, addUser: {
                    ...state.addUser,
                    email: email
                }
            }
        case 'HANDLE_ROLES':
            return {
                ...state, addUser: {
                    ...state.addUser,
                    roles: state.addUser.roles.map((role)=>{
                        return({
                            ...role,
                            id:roleId
                        })
                    })
                }
            }
        default:
            return state;
    }
}

export default AdminReducer;
