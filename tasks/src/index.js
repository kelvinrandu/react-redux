import React from 'react';
import ReactDOM from 'react-dom';
import BoxCon from './container/box-container.js';
import './index.css';




class App extends React.Component{
    render(){
        return(
            <BoxCon> </BoxCon>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


