import React from 'react';

const ProfileDescription = () => {
    return (
        <div className="col-six tab-full">
            <h3>Profile</h3>
            <p>
                I am a person who loves what he does. I am responsible with my tasks. 
                I love programming. I love learning more every day. I am friendly and I 
                like to work in a team. I really like to learn from others.
            </p>
            <ul className="info-list">
                <li>
                    <strong>Fullname:</strong>
                    <span>Gustavo Adolfo Rodriguez Andica</span>
                </li>
                <li>
                    <strong>Birth Date:</strong>
                    <span>October 15, 2000</span>
                </li>
                <li>
                    <strong>Job:</strong>
                    <span>Development Analyst</span>
                </li>
                <li>
                    <strong>GitHub Page:</strong>
                    <span>https://github.com/gustavo15Rodriguez</span>
                </li>
                <li>
                    <strong>Email:</strong>
                    <span>garodriguez263@gmail.com</span>
                </li>
            </ul> {/* /info-list */}
        </div>
    );
}

export default ProfileDescription;