import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            password: '',
            submitted: false
         
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { phone, password } = this.state;
        if (phone && password) {
            this.props.login(phone, password);
            this.props.history.push("/home");
          
          
        }

    }

    render() {
        
        const { phone, password, submitted } = this.state;



        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !phone ? ' has-error' : '')}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" name="phone" value={phone} onChange={this.handleChange} />
                        {submitted && !phone &&
                            <div className="help-block">Phone is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
      
                       
                    </div>
                </form>
            </div>
        );
    }
}


const actionCreators = {
    login: userActions.login,
   
};

const connectedLoginPage = connect(null, actionCreators)(Login);
export { connectedLoginPage as Login };