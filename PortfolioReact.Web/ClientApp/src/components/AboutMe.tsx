import * as React from 'react';
import moment from 'moment';

export const AboutMe: React.FunctionComponent = () => {
    return (
        <>
            <h2>Who am I?</h2>
            <p>
                I am a full-stack .NET developer who, while I'm not necessarily "passionate" about software development, I am driven, I have my goals and I get the job done.
                I have {moment("20140602", "YYYYMMDD").fromNow(true)} experience with professional software development, touching the advertisement industry, banking, VR-gaming and government agencies.
                Before that I was active in a lot of student activities. Today however I'm deeply involved in piloting glider aircraft. 
                I spend my summers on Vängsö Airfield, where I teach ground operations, materials handling and airport safety to aspiring glider pilots. During winter I schedule people for maintenance on a specific aircraft.
            </p>
            <h2>.NET + React development</h2>
            <p>

            </p>
            <h2></h2>
            <p>

            </p>
        </>
    );
}