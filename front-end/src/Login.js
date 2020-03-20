import React, { Component } from 'react';
import { setId } from './actionCreators';
import { connect } from 'react-redux';

class Login extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

     handleSubmit = async (event) => {
        const { history, dispatch } = this.props;

        event.preventDefault();

        const response = await fetch('http://localhost:8090/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });

        const json = await response.json();

        dispatch(setId(json.id));

        history.push({
            pathname: '/'
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        return (
            <div className="form-group">
                <form onSubmit={ this.handleSubmit }>
                    <div className='input-label'>
                        <label>Username</label>
                        <input
                            className="form-control"
                            name='username'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Password</label>
                        <input
                            className="form-control" 
                            name='password'
                            type='password'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary submit-button"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

// export default Login;
function mapStateToProps(state) {
    return {
        id: state.id
    };
}

// export default connect(mapStateToProps, { setId })(Login);
export default connect(mapStateToProps)(Login);
