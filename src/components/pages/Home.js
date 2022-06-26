
import React from 'react';
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import Example from "../Example";

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Center',
                alignItems: 'Center',
                height: '100vh'
            }}             >
            <RegistrationForm/>
            <LoginForm/>
            <Example/>

        </div>

    );
};
export default Home;

