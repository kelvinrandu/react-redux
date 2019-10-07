import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import   { Login }   from './components/login/login.component';
import { Home } from './components/home/';
import { history } from './helpers';
import { PrivateRoute } from './components';

class App extends Component {
    render() {
       return (
           <div className="App">
               <Router history={history}>
                 <div>
                     <Switch>
                        <PrivateRoute exact path='/home' component={Home} /> <PrivateRoute exact path='/home' component={Home} />
                        <Route exact path='/' component={Login} />
                     </Switch>
                 </div>
               </Router>
           </div>
        );
     }
}
export default App;