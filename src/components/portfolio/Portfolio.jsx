import React from 'react';

import PortfolioItem from './PortfolioItem';
import ModalPopus from './ModalPopus';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>
                    <p className="lead">
                        Below you will find some of my personal projects that you can 
                        also find on github.
                    </p>
                </div>   		
            </div> {/* /section-intro*/} 

            <div className="row portfolio-content">
                <div className="col-twelve">
                    {/* portfolio-wrapper */}
                    <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                        <PortfolioItem />

                        {/* modal popups - begin */}
                        <ModalPopus />
                    </div> {/* /portfolio-wrapper */} 
                </div>  {/* /twelve */}   
            </div> {/* /portfolio-content */} 
        </section>
    );
}

export default Portfolio;