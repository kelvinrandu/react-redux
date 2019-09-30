import React from 'react';
import axios from 'axios';

export default class Task extends React.Component{
    state = {
        tasks: [],
    };
    componentDidMount() {
        axios.get().then(res => {
            console.log(res);
            this.setState({ tasks: res.data});
        }); 

    }
    render() {
        return  <ul>{this.state.tasks.map(task => <li>{task.totalTasks} </li>)}</ul>

          
   

}
}