import React, { useEffect } from 'react';
import { loadUsers } from './actions';
import { connect } from 'react-redux';
import './App.css';
import Card from './components/list';

const App = (props) => {

    useEffect(() => {
            props.loadUsers();
    }, []);
  return (
    <div className="App">
        <div className="container">
            <h1>Users list</h1>
            <Card />
        </div>
    </div>
  );
};

export default connect(null, { loadUsers })(App);
