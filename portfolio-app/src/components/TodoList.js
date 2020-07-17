import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchTodos } from "../actions/todoActions";


export const TodoList = (props) => {
    useEffect(() => {
        props.fetchTodos();
    }, []);
    
    return (
        <div>
            {props.todos && props.todos.map(() => <Todo {...todos}/>)}
        </div>
    );
};

const mapStateToProps = ({ todoReducer }) => ({
    todos: todoReducer.todos
})

export default connect(mapStateToProps, { fetchTodos })(TodoList);