import React from 'react';
/* import $ from 'jquery'; */
import 'waypoints/lib/noframework.waypoints.min.js';
/* import Waypoint from 'waypoints'; */


const Stats = () => {
    /* useEffect(() => {
        let stats = $(".stat-count");
        new Waypoint({
            element: document.getElementById('stats'),
            handler: function(direction) {
                if (direction === "down") {       		
                    stats.each(function () {
                        let $this = $(this);
        
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });
        
                } 
        
                // trigger once only
                this.destroy();      	
            },
            offset: "90%"
        });
    }, []); */

    return (
        <section id="stats" className="count-up" data-section="stats">
            <div className="row">
                <div className="col-twelve">
                    <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                        <div className="bgrid stat">
                            <div className="icon-part">
                                <i className="icon-pencil-ruler" />
                            </div>
                            <h3 className="stat-count">
                                5
                            </h3>
                            <h5 className="stat-title">
                                Projects Completed
                            </h5>

                        </div> {/* /stat */}					
                        
                        <div className="bgrid stat">
                            <div className="icon-part">
                                <i className="icon-users" />
                            </div>
                            <h3 className="stat-count">
                                5
                            </h3>
                            <h5 className="stat-title">
                                Happy Clients
                            </h5>
                        </div> {/* /stat */}
                        
                        <div className="bgrid stat">
                            <div className="icon-part">
                                <i className="icon-badge" />
                            </div>
                            <h3 className="stat-count">
                                6
                            </h3>
                            <h5 className="stat-title">
                                Starts Received
                            </h5>
                        </div> {/* /stat */}	

                        <div className="bgrid stat">
                            <div className="icon-part">
                                <i className="icon-light-bulb" />
                            </div>
                            <h3 className="stat-count">
                                90
                            </h3>
                            <h5 className="stat-title">
                                Crazy Ideas
                            </h5>
                        </div> {/* /stat */}

                        <div className="bgrid stat">
                            <div className="icon-part">
                                <i className="icon-cup" />
                            </div>
                            <h3 className="stat-count">
                                1500
                            </h3>
                            <h5 className="stat-title">
                                Coffee Cups
                            </h5>
                        </div> {/* /stat */}

                        <div className="bgrid stat">
                            <div className="icon-part">
                                <i className="icon-clock" />
                            </div>
                            <h3 className="stat-count">
                                7200
                            </h3>
                            <h5 className="stat-title">
                                Hours
                            </h5>
                        </div> {/* /stat */}
                    </div> {/* /stats-list */}
                </div> {/* /twelve */}
            </div> {/* /row */}
        </section>

    );
}

export default Stats;