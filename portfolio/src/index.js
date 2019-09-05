import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

/*Ep. 33 Fetch under the hood: Promises.  Synchronize messages, and catch errors.*/
// new Promise((resolve, reject) => {
//     return reject(new Error('No bears'));

//     setTimeout(() => {
//         resolve('Bears, Beets, Battlestar Galactica'); yes
//     }, 2000);
// })
//     .then(quote => {
//         console.log(quote);
//     })
//     .catch(error => console.log('error', error));



