import UserData from '../data';

const innitialState = {
    data: UserData,
    showUsers: 5,
};

function newState(state, newData) {
    return {
        ...state,
        data: newData,
        showUsers: 5 > newData.length ? newData.length : 5
    };
}

function reducer(state = innitialState, action) {
    switch (action.type) {
    case 'MORE':
        return {
            ...state,
            showUsers: (state.showUsers + 5 > state.data.length) ?
                state.data.length : state.showUsers + 5
        };
    case 'FILTER':
        const filtredData = innitialState.data.filter((user) =>
            user.name.toLowerCase().search(action.filterValue.toLowerCase()) !== -1);
        return newState(state, filtredData);
    case 'REMOVE':
        innitialState.data.splice(innitialState.data.findIndex((user) => user.id === action.id), 1);
        return newState(state, innitialState.data);
    default:
        return state;
    }
}

export default reducer;
