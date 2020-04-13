import {GET_ERRORS} from "../actions/types";

export default function (
    state = {
        msg: {},
        status: null
    }, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            };
        default:
            return state;
    }
};
