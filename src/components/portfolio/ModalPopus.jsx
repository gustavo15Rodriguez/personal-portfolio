import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ModalPopus = () => {
    return (
        <Fragment>
            <div id="modal-01" className="popup-modal slider mfp-hide">	
                <div className="media">
                    <img src="/assets/images/portfolio/pharmacy.jpg" alt="Pharmacy" />
                </div>   

                <div className="description-box">
                    <h4 id="modal-01Label">Pharmacy</h4>		      
                    <p>
                        Medicine management system for hospitals developed with django.
                    </p>
                    <div className="categories">Django Implementation</div>			               
                </div>

                <div className="link-box">
                    <a 
                        href="https://github.com/gustavo15Rodriguez/Farmacia-with-Django" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Details
                    </a>
                    <Link to="#" className="popup-modal-dismiss">Close</Link>
                </div>		      
            </div> {/* /modal-01 */}

            <div id="modal-02" className="popup-modal slider mfp-hide">	
                <div className="media">
                    <img src="/assets/images/portfolio/the_order.jpg" alt="The Order" />
                </div>    

                <div className="description-box">
                    <h4>The Order</h4>		      
                    <p>
                        Management system for fast food stands developed in Django 
                        with Docker.
                    </p>
                    <div className="categories">Django Implementation</div>			               
                </div>

                <div className="link-box">
                    <a 
                        href="https://github.com/gustavo15Rodriguez/the_order" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Details
                    </a>
                    <Link to="#" className="popup-modal-dismiss">Close</Link>
                </div>		      
            </div> {/* /modal-02 */}

            <div id="modal-03" className="popup-modal slider mfp-hide">	
                <div className="media">
                    <img src="/assets/images/portfolio/soft_clients.jpg" alt="Soft Clients" />
                </div>     

                <div className="description-box">
                    <h4>Soft Clients</h4>		      
                    <p>
                        CRM for managing clients belonging to insurance development 
                        companies.
                    </p>
                    <div className="categories">ReactJs Implementation</div>			               
                </div>
                
                <div className="link-box">
                    <a 
                        href="https://github.com/gustavo15Rodriguez/soft_clients" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Details
                    </a>
                    <Link to="#" className="popup-modal-dismiss">Close</Link>
                </div>		      
            </div> {/* /modal-03 */}

            <div id="modal-04" className="popup-modal slider mfp-hide">	
                <div className="media">
                    <img src="/assets/images/portfolio/gitchangelog.jpg" alt="Gitchangelog" />
                </div>    

                <div className="description-box">
                    <h4>Gitchangelog</h4>		      
                    <p>
                        Console application based on the "git log" command (from git) 
                        with custom components and commands adaptable to customer needs.
                    </p>
                    <div className="categories">Pthon Console Implementation</div>			               
                </div>

                <div className="link-box">
                    <a 
                        href="https://github.com/gustavo15Rodriguez/gitchangelog" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Details
                    </a>
                    <Link to="#" className="popup-modal-dismiss">Close</Link>
                </div>		      
            </div> {/* /modal-04 */}

            <div id="modal-05" className="popup-modal slider mfp-hide">	
                <div className="media">
                    <img src="/assets/images/portfolio/military_service.jpg" alt="Military Service" />
                </div>   

                <div className="description-box">
                    <h4>Military Service</h4>		      
                    <p>
                        Software for the administration of military personnel developed 
                        with django.
                    </p>
                    <div className="categories">Django Implementation</div>			               
                </div>

                <div className="link-box">
                    <a 
                        href="https://github.com/gustavo15Rodriguez/servicio-militar" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Details
                    </a>
                    <Link to="#" className="popup-modal-dismiss">Close</Link>
                </div>		      
            </div> {/* /modal-05 */}

            <div id="modal-06" className="popup-modal slider mfp-hide">	
                <div className="media">
                    <img src="/assets/images/portfolio/high_school.jpg" alt="High School" />
                </div>      

                <div className="description-box">
                    <h4>High School</h4>		      
                    <p>
                        Software for the administration of student systems 
                        developed with django.
                    </p>
                    <div className="categories">Django Implementation</div>			               
                </div>

                <div className="link-box">
                    <a 
                        href="https://github.com/gustavo15Rodriguez/colegio" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Details
                    </a>
                    <Link to="#" className="popup-modal-dismiss">Close</Link>
                </div>		      
            </div> {/* /modal-06 */}
        </Fragment>
    );
}

export default ModalPopus;