import { FETCH_ALL_USERS, LOG_IN, LOG_OUT } from "../actions/types"

const initialState = { _id: "", name: "", email: "", rol: "", allUsers: [] }

const user = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case FETCH_ALL_USERS:
            newState.allUsers = action.payload
            break

        case LOG_IN:
            const { _id, name, email, rol } = action.payload
            newState = { ...newState, _id, name, email, rol }
            break

        case LOG_OUT:
            newState = { ...newState, _id: "", name: "", email: "", rol: "" }
            break
    }

    return { ...newState }
}

export default user
