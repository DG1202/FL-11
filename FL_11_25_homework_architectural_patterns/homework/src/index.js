import configureStore from './store';
import App from './components/app';
import Header from './components/header';


const store = configureStore();

const root = document.getElementById('root');
const header = new Header();
root.appendChild(header.renderHeader());
const body = document.createElement('div');
root.appendChild(body);

function main() {
    const app = new App(store.getState(), body);
    return app.renderApp();
}

document.addEventListener('DOMContentLoaded', main);
document.getElementById('root').addEventListener('click', dispatchClickActions);
document.getElementById('root').addEventListener('keyup', dispatchInputActions);

function dispatchClickActions(e) {
    if (e.target.className === 'btn-remove') {
        store.dispatch({
            type: 'REMOVE',
            id: e.target.dataset.id
        });
        store.dispatch({
            type: 'FILTER',
            filterValue: document.getElementsByClassName('filter')[0].value
        });
    }
    if (e.target.className === 'load-more__btn') {
        store.dispatch({
            type: 'MORE'
        });
    }
}

function dispatchInputActions(e) {
    console.log('work');
    if (e.target.className === 'filter') {
        store.dispatch({
            type: 'FILTER',
            filterValue: document.getElementsByClassName('filter')[0].value
        });
    }
}

store.subscribe(main);
// ** Here you can pass store down to your components
// ** and initialize them, like in example below

// ** import {createStore} from 'redux';
// ** import myTestReducer from './reducers/my_test_reducer.js';
// ** import MyTestComponent from './components/my_test_component';

// ** const store = createStore(myTestReducer);

// ** const testComponent = new MyTestComponent(store);

// ** testComponent.init()
