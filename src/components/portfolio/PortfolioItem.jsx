import React, { Fragment, useEffect } from 'react';
import $ from 'jquery';
import "magnific-popup";

const PortfolioItem = () => {
    useEffect(() => {
        $('.item-wrap a').magnificPopup({
            type:'inline',
            fixedContentPos: false,
            removalDelay: 300,
            showCloseBtn: false,
            mainClass: 'mfp-fade'
    
        });
    
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    }, []);

    return (
        <Fragment>
            <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src="/assets/images/portfolio/pharmacy.jpg" alt="Pharmacy" />
                    <a href="#modal-01" className="overlay">	                  	           
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">Pharmacy</h3>	     					    
                                <span className="folio-types">
                                    Django Implementation
                                </span>
                            </div>	                      	
                        </div>                    
                    </a>
                </div>	               
            </div> {/* /folio-item */}

            <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src="/assets/images/portfolio/the_order.jpg" alt="The Order" />
                    <a href="#modal-02" className="overlay">              		                  
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">The Order</h3>	     					    
                                <span className="folio-types">
                                    Django Implementation
                                </span>		     		
                            </div> 	                      	
                        </div>                    
                    </a>
                </div>
            </div> {/* /folio-item */}

            <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src="/assets/images/portfolio/soft_clients.jpg" alt="Soft Clients" />
                    <a href="#modal-03" className="overlay">             		                  
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">Soft Clients</h3>	     					    
                                <span className="folio-types">
                                    ReactJs Implementation
                                </span>		     		
                            </div> 	                      	
                        </div>                    
                    </a>
                </div>
            </div> {/* /folio-item */}

            <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src="/assets/images/portfolio/gitchangelog.jpg" alt="Gitchangelog" />
                    <a href="#modal-04" className="overlay">                  	                 
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">Gitchangelog</h3>	     					    
                                <span className="folio-types">
                                    Pyhton Console Implementation
                                </span>		     		
                            </div>  	                      	
                        </div>                    
                    </a>
                </div>
            </div> {/* /folio-item */}     

            <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src="/assets/images/portfolio/military_service.jpg" alt="Military Service" />
                    <a href="#modal-05" className="overlay">             		                  
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">Military service</h3>	     					    
                                <span className="folio-types">
                                    Django Implementation
                                </span>		     		
                            </div> 	                      	
                        </div>                    
                    </a>
                </div>
            </div> {/* /folio-item */}

            <div className="bgrid folio-item">
                <div className="item-wrap">
                    <img src="/assets/images/portfolio/high_school.jpg" alt="High School" />
                    <a href="#modal-06" className="overlay">
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">High School</h3>	     					    
                                <span className="folio-types">
                                    Django Implementation
                                </span>		     		
                            </div>	                      	
                        </div>                    
                    </a>
                </div>
            </div>
        </Fragment>
    );
}

export default PortfolioItem;