import { LOAD_USERS } from '../actions/actionTypes';

const initialState = {
    users: {},
    pages: {}
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case LOAD_USERS:
            let _users = {};
            for (let user of payload) {
                _users = {
                    ..._users,
                    [user.id]: user
                }
            }

            let p = 1;
            let _page = {};
            let ids = [];
            for (let i = 0; i < payload.length; i++) {
                if (i % 5 === 0 && i !== 0) {
                    _page = {
                        ..._page,
                        [p]: ids
                    };
                    ids = [];
                    p++;
                }
                ids = [...ids, payload[i].id];
            }
            _page = {
                ..._page,
                [p]: ids
            };

            return Object.assign({}, state, {
                users: {...payload, ..._users},
                pages: _page
            });
        default:
            return state;
    }
};
