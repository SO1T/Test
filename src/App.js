import React, { useState, useEffect, Component } from 'react';
import { loadUsers } from './actions';
import { connect } from 'react-redux';
import store from './store';
import './App.css';
import Card from './components/list';

const App = (props) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
            setLoading(true);
            props.loadUsers();
            setLoading(false);
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


const mapStateToProps = state => ({
    users: state.users,
    pages: state.pages
});

export default connect(null, { loadUsers })(App);
