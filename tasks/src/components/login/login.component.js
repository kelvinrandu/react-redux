import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login } from '../../actions';
import { history } from '../../helpers';
import { connect } from 'react-redux';
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



class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',
            identifier: '',
            errors: '',
            showPassword: false,
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({ errors: {},isLoading: true });
        this.props.login(this.state).then(
            (res) => this.context.router.push(),
            (err) => this.setState({ errors: err.data.errors, isLoading: false})
        );
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount() {
        if(localStorage.getItem('auth')){
            history.push('/home');
        }
    }

    render() {
        const { classes } = this.props;
        const { errors, identifier, password, isLoading } = this.state;
        return (
            <div className="login-margin">
 <Paper className={classes.paper}>
                           <div>
                              <form onSubmit = {this.onSubmit}> 
                               <TextField
                                label="phone"
                                value={identifier}
                                error={errors.identifier}
                                className={classes.textField}
                                onChange = {this.onChange}
                               />
                               <br/><br/>
                               <TextField
                                label="Password"
                                autoComplete="current-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                className={classes.textField}
                                value={identifier}
                                onChange={this.onChange}
                              />
                              <br/><br/>
                              <Button variant="contained" color="primary" className={classes.button} disabled= {isLoading} onClick={(event)=>{this.login()}}>Login</Button>
                              </form> 
                          </div>
                      </Paper>
           </div>
       );
   }
}
LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
       loggingIn
    };
}
const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(LoginForm)));
export { connectedLoginPage as Login };