import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  { GetAccessToken } from '../../helpers/auth-header';
import { userActions } from '../../actions';
import config from '../../config/config';
import axios from 'axios'
class Home extends Component {
state = {
    tasks: []
  }
  componentDidMount(){
    const accessToken = GetAccessToken();

    let apiEndpoint = '/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC';
    axios.get(config.baseUrl+apiEndpoint, { headers: { Authorization : `Bearer ${accessToken}`} })
      .then(res => {
        this.setState({
          tasks: res.data.tasks
        });
      })
  }
  render(){
    const { tasks } = this.state
    const taskList = tasks.length ? (
      tasks.map(task => {
        return (
          <div className="post card" key={task.task_id}>
            <div className="card-content">
   
              <p>{task.customer_first_name + '  ' + task.customer_last_name}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No tasks to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Tasks</h4>
          {taskList}
        </div>
      </div>
    )
  }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapState(state) {
    const { tasks } = state;
    return { tasks };
}

const actionCreators = {
    login: userActions.getTasks,
   
};
const connectedLoginPage = connect(mapState, actionCreators)(Home);
export { connectedLoginPage as Home };