import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, hashHistory} from 'react-router';

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';


const routes = <Route component = {App}>
    <Route path="/results" component={Results} />
    <Route path ="/" component = {Voting}/>
</Route>;

// ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render(
   <Router history = {hashHistory}>{routes}</Router>,
    document.getElementById('root')

)


// registerServiceWorker();