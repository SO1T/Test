import axios from 'axios';
import { LOAD_USERS, REQUEST_USER_PAGE, RECEIVE_USER_PAGE } from './actionTypes';

export const loadUsers = () => async dispatch => {
    // fetch('http://dev.frevend.com/json/users.json').then(res => console.log(res));
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: LOAD_USERS,
            payload: res.data
        });
    return res.data;
};
