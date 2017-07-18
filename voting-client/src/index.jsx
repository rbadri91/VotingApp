import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';


const socket = io(`${location.protocol}//${location.hostname}:8090`);

socket.on('state', state =>
  store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);



const routes = <Route component = {App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path ="/" component = {VotingContainer}/>
</Route>;

// ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
            <Router history = {hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('root')
)


// registerServiceWorker();