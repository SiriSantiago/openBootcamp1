import React, { useState } from 'react';

const LoginForm = () => {


    const initialCredentials = [
        {
            user:'',
            password: ''
        }
    ];

    const [Credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;



