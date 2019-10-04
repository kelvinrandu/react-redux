import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import  { Task } from '../tasks/';
const styles = theme => ({
     root: {
        flexGrow: 1,
     }
});

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: undefined,
            redirect: false
            
        };
    
    }

    componentDidMount() {
        // const accessToken = getAccessToken();
        // if(!accessToken){
        //     this.props.history.push('/')
        // }
        // this.props.getTasks();
    }
     render() {
         const { classes } = this.props;
         return (
             <div className={classes.root}>
                <h1>Home</h1>
             </div>
         );
     }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return state;
}

const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
     pure: false
})(withStyles(styles)(Home)));
export { connectedHomePage as Home };
