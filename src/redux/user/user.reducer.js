const INITIALIZE_USER = {
    currentUser: null
}

const userReducer = (state = INITIALIZE_USER, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER': 
            return({
                ...state,
                currentUser: action.payload
            })
        
        default: 
            return state;
    }
}

export default userReducer;