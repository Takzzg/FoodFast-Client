const initialState = {
    _id: "62a238659a6c967d5bf0fc5f",
    name: "Lauranagela",
    email: "keag@gmail.com",
    password: "26553942",
    rol: "ADMIN_ROLE"
}

const user = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break
    }

    return { ...newState }
}

export default user
