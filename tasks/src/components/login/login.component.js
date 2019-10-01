import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { history } from '../../helpers';

import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
       display: 'flex',
       flexWrap: 'wrap'
    },
    container: {
       display: 'flex',
       flexWrap: 'wrap',
    },
    margin: {
       margin: theme.spacing.unit,
    },
    withoutLabel: {
       marginTop: theme.spacing.unit * 3,
    },
    textField: {
       marginLeft: theme.spacing.unit,
       marginRight: theme.spacing.unit,
       width: 200,
    },
    paper: {
       padding: theme.spacing.unit * 2,
       textAlign: 'center',
       color: theme.palette.text.secondary,
    },
    button: {
       margin: theme.spacing.unit,
    },
    input: {
       display: 'none',
    },
});

class Login extends Component {
     constructor(props){
         super(props);
         this.state = {
             username: '',
             password: '',
             showPassword: false,
         }
     }
     componentDidMount() {
         if(localStorage.getItem('auth')){
             history.push('/home');
         }
     }
     handleChange = prop => event => {
         this.setState({ [prop]: event.target.value });
     };

     render() {
         const { classes } = this.props;
         return (
             <div className="login-margin">
  
                       <Paper className={classes.paper}>
                           <div>
                               <TextField
                                label="Username"
                                value={this.state.username}
                                className={classes.textField}
                                onChange = {this.handleChange('username')}
                               />
                               <br/><br/>
                               <TextField
                                label="Password"
                                autoComplete="current-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                className={classes.textField}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                              />
                              <br/><br/>
                              <Button variant="contained" color="primary" className={classes.button} onClick={(event)=>{this.login()}}>Login</Button>
                          </div>
                      </Paper>
               
                 <Grid item xs={3}>
                 </Grid>
   
            </div>
        );
    }
}
Login.propTypes = {
     classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
     const { loggingIn } = state.authentication;
     return {
        loggingIn
     };
}
const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
     pure: false
})(withStyles(styles)(Login)));
export { connectedLoginPage as Login };