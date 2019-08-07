import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

const Card = ({ users, pages }) => {

    const [page, setPage] = useState(1);

    let pag = Object.keys(pages).map(key => [key, pages[key]]);

    return (
        <div className="container">
            <div className="box">
                {
                    pag[page - 1] ? pag[page - 1][1].map(p => users[p]).map(card =>
                        <div key={card.id} className="card">
                            <h5>{card.name} {card.surname}</h5>
                            <div className="desc"><i>{card.desc}</i></div>
                        </div>
                    ) : ''
                }
            </div>
            <span>Current page: {page}</span>
            <div className="pagination">
                <ul>
                    {
                        pag.map(p => <li key={p[0]} onClick={setPage.bind(null, p[0])}>{p[0]}</li>)
                    }
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    users: state.users,
    pages: state.pages
});

Card.propTypes = {
    users: PropTypes.object,
    pages: PropTypes.object
};

export default connect(mapStateToProps,null)(Card);
