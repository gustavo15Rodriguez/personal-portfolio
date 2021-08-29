import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
    const handleToggle = (e) =>{
        let toggleButton = $('.menu-toggle');
        let nav = $('.main-navigation');

        // toggle button
        e.preventDefault();
        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
        
        // nav items
        nav.find('li a').on("click", function() {   

            // update the toggle button 		
            toggleButton.toggleClass('is-clicked'); 
            // fadeout the navigation panel
            nav.fadeOut();   		
            
        });
    }

    return (
        <header data-section="header">   	
            <div className="row">
                <div className="top-bar">
                    <Link 
                        className="menu-toggle" 
                        to="#" 
                        onClick={ (event) => handleToggle(event) }
                    >
                        <span>Menu</span>
                    </Link>
                    <div className="logo">
                        <Link to="/">HOME</Link>
                    </div>		      
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current"><a className="smoothscroll" href="#intro">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                            <li><a className="smoothscroll" href="#services">Services</a></li>					
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>			
                        </ul>
                    </nav>    		
                </div> {/* /top-bar */} 
            </div> {/* /row */} 		
        </header>
    ); 
};

export default Header;