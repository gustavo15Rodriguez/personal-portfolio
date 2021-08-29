import React from 'react';

const SocialMedia = (props) => {
    let { socialClass } =  props; 

    return (
        <ul className={ socialClass }>        
            <li>
                <a href="https://www.facebook.com/Gustavo.andik15/" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/rgustavo_15?s=08" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/rgustavo_15/" target="_blank" rel="noreferrer">
                    <i className="fa fa-instagram" />
                </a>
            </li>
        </ul> 
    );
}

export default SocialMedia;
