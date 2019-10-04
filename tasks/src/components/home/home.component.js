import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  { GetAccessToken } from '../../helpers/auth-header';
import { userActions } from '../../actions';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []

            
        };
    
    }

    componentDidMount() {
        const accessToken = GetAccessToken();
        if(accessToken){
            const listtasks = userActions.getTasks().then((value) => { 
                this.setState({ tasks: value });
                 });;

         
        }else{
            
            this.props.history.push('/')

        }

   
    }
     render() {
         const { classes } = this.props;
         console.log(this.state.tasks);
         return (
             <div className>
                <h1>Home</h1>
                <ul>
       
      </ul>
             </div>
         );
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
    login: userActions.login,
   
};
const connectedLoginPage = connect(mapState, actionCreators)(Home);
export { connectedLoginPage as Home };