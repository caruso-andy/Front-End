import React from 'react';
import { TextField, Button } from '@material-ui/core';

import './Login.css'

const Login = props => {

const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        props.setCredentials({
            ...props.credentials,
            [name]: value 
        })
    }
    
    return (
        <form className='form'>
                <TextField 
                id='outlined-basic' 
                label='USERNAME' 
                variant='outlined'
                name='username'
                value={props.credentials.username}
                onChange={onInputChange}/>
                
                <TextField 
                id='outlined-basic' 
                label='PASSWORD' 
                variant='outlined'
                name='password'
                value={props.credentials.password}
                onChange={onInputChange}/>

                <Button onClick={props.login} variant='contained' color='primary'>
                    Login
                </Button>
        </form>
    )

}

export default Login