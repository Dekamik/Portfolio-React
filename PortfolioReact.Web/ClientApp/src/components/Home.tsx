import * as React from 'react';
import ProfilePicture from './../images/jag.jpg';

export const Home: React.FunctionComponent = () => {
    return (
        <div className="Home-component">
            <h1 className="home-text text-white text-center">Full-stack developer</h1>
            <h1 className="home-text text-white text-center">Pilot</h1>
            <h1 className="home-text text-white text-center">Problem solver</h1>
            <br/>
            <img src={ProfilePicture} className="border border-5 border-white rounded-circle mx-auto d-block" alt="Profile" />
        </div>
    );
}
