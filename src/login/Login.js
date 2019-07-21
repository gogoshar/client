import React from 'react';
import './Login.css'

function Login() {

        return (
            <div className='login'>
                <form>
                    <input type='text'/><br/>
                    <input type='password'/><br/>
                    <button>Login</button>
                </form>
            </div>
        );

}

export default Login;