import * as React from 'react';
import ProfilePicture from './../images/jag.jpg';

export const Home: React.FunctionComponent = () => {
    return (
        <div className="Home-component">
            <img src={ProfilePicture} className="border border-5 border-white rounded-circle mx-auto d-block" alt="Profile" />
            <h1 className="home-text text-white text-center">Full-stack developer, Pilot, Problem solver</h1>
        </div>
    );
}
