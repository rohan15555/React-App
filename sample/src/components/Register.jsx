import React, { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let data = JSON.parse(localStorage.getItem("register")) || [];

    const handleSubmit = (event) => {
        event.preventDefault();
        data.push({ "email": email, "password": password });
        localStorage.setItem('register', JSON.stringify(data));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder='Enter Email' 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder='Enter password ' 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
