import axios from 'axios'

export const FETCH_TODOS_START = "FETCH_TODOS_START"
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS"
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE"

// fetching todos
export const fetchTodos = () => dispatch => {
    dispatch({ type: FETCH_TODOS_START })

    axios
        .get("https://pokeapi.co/api/v2/pokemon/${name}") 
        .then((res) => {
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err.response.error);
            dispatch({ type: FETCH_TODOS_FAILURE })
        });
};


