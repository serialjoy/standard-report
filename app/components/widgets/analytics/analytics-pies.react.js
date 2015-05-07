var React = require('react');

var AnalyticsPies = React.createClass({
    getInitialState: function() {
        return {

        }
    }
    , render: function() {
        return (
                            <div className="panel panel-transparent">
                                <div className="panel-heading ">
                                    <div className="panel-title">Pies
                                    </div>
                                    <div className="panel-controls">
                                        <ul>
                                            <li><a href="#" className="portlet-collapse" data-toggle="collapse"><i className="pg-arrow_maximize"></i></a>
                                            </li>
                                            <li><a href="#" className="portlet-refresh" data-toggle="refresh"><i className="pg-refresh_new"></i></a>
                                            </li>
                                            <li><a href="#" className="portlet-close" data-toggle="close"><i className="pg-close"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-4 no-padding">
                                        <div className="p-r-30">
                                            <h3>Talk less, show more</h3>
                                            <br />
                                            <p>This project is an attempt to build re-usable charts and chart components for d3.js without taking away the power that d3.js gives you. This is a very young collection of components, with the goal of keeping these components very customizeable, staying away from your standard cookie cutter solutions.</p>
                                            <br />
                                            <div className="inline">
                                                <p className="small hint-text">NVD3: Re-usable charts for d3.js
                                                <br /> <a href="http://nvd3.org/examples/index.html">View the official documentation</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        {/* Nav tabs */}
                                        <ul id="tabs-nvd3" className="nav nav-tabs nav-tabs-linetriangle">
                                            <li className="active">
                                                <a data-toggle="tab" href="#tab-nvd3-line"><span>Walk-ins</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-area"><span>Time Spent</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line2"><span>Reward Total</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line2"><span>Likes</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line2"><span>Shares</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line2"><span>Offer Clicks</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line2"><span>Map Clicks</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line2"><span>Store Clicks</span></a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline">
                                                <li><a href="#" className="font-montserrat text-master">1D</a>
                                                </li>
                                                <li className="active"><a href="#" className="font-montserrat  bg-master-light text-master">5D</a>
                                                </li>
                                                <li><a href="#" className="font-montserrat text-master">1M</a>
                                                </li>
                                                <li><a href="#" className="font-montserrat text-master">1Y</a>
                                                </li>
                                            </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content no-padding">
                                            <div className="tab-pane active" id="tab-nvd3-line">
                                                <div id="nvd3-line" className="line-chart m-t-30 text-center" data-x-grid="false">
                                                    <svg></svg>
                                                </div>
                                            </div>
                                            <div className="tab-pane " id="tab-nvd3-area">
                                                <div id="nvd3-area" className="line-chart m-t-30 text-center" data-x-grid="false">
                                                    <svg></svg>
                                                </div>
                                            </div>
                                            <div className="tab-pane " id="tab-nvd3-line2">
                                                <div id="nvd3-line2" className="line-chart" data-line-color="master" data-area-color="master" data-point-color="white" data-x-grid="false" data-points="true" data-stroke-width="1">
                                                    <svg></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        )
    }
});

module.exports = AnalyticsPies;
