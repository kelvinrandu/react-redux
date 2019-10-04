import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  { GetAccessToken } from '../../helpers/auth-header';
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
        const accessToken = GetAccessToken();
        if(accessToken){
            // this.props.history.push('/')
            console.log('access token present ..');
        }else{
            // this.props.getTasks();
            this.props.history.push('/')
            console.log(' access token absent ..');

        }

   
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
