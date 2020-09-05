import * as React from 'react';
import ProfilePicture from './../images/jag.jpg';

export const Home: React.FunctionComponent = () => {
    return (
        <div className="Home-component">
            <h1 className="home-text text-white text-center">Full-stack developer</h1>
            <h1 className="home-text text-white text-center">Consultant</h1>
            <h1 className="home-text text-white text-center">Pilot</h1>
            <br />
            <div className="margin-15">
                <img src={ProfilePicture} className="border border-5 border-white rounded-circle mx-auto d-block img-fluid" alt="Profile" />
            </div>
        </div>
    );
}
