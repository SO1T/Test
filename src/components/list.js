import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';

const Card = ({ users, pages }) => {

    const [page, setPage] = useState(1);

    let pagination = Object.keys(pages).map(key => key);
    let pag = Object.keys(pages).map(key => pages[key])[page - 1];
    if (pag) pag = pag.map(p => users[p]);
    console.log(pag)
    return (
        <div className="container">
            <div className="box">
                {
                    pag ? pag.map(card =>
                        <div key={card.id} className="card">
                            <h5>{card.id}</h5>
                            <div className="desc"><i>{card.title}</i></div>
                        </div>
                    ) : ''
                }
            </div>
            <span>Current page: {page}</span>
            <div className="pagination">
                <ul>
                    {
                        pagination.map(p => <li key={p} onClick={setPage.bind(null, p)}>{p}</li>)
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

export default connect(mapStateToProps,null)(Card);
