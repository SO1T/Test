import axios from 'axios';
import { LOAD_USERS } from './actionTypes';
import table from '../table';

export const loadUsers = () => async dispatch => {
    const res = await axios.get('http://dev.frevend.com/json/users.json');// data is empty, it works with https://jsonplaceholder.typicode.com/todos
        dispatch({
            type: LOAD_USERS,
            payload: table
        });
    return res.data;
};

