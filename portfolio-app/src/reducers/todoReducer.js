import { 
    FETCH_TODOS_START, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_FAILURE 
} from "../actions/todoActions";

const initialState = {
    todos: [],
    todo: "",
    isLoading: false
}

export default(state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false
                todos: action.payload
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false
                todos: action.payload
            };
        default:
            return state;
    }
};