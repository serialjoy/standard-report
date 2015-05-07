var React = require('react');
var AnalyticsGraphs = require('./widgets/analytics/analytics-graphs.react');
var Widget8WeeklyLikes = require('./widgets/widget8-weekly-likes.react');
var Widget9WeeklyShares = require('./widgets/widget9-weekly-shares.react');
var Widget10WeeklyViews = require('./widgets/widget10-weekly-views.react');
var Widget4PointsGraph = require('./widgets/widget4-points-graph.react');

var Analytics = React.createClass({
    getInitialState: function() {
        return {

        }
    }
    , componentDidMount: function(){
        switchMap();switchMap2();
    }
    , handleHeat:function (event, data){
        window.switchMap(data);
    }
    , handleHeat2:function (event, data){
        window.switchMap2(data);
    }
    , render: function() {
        var b_style= {color: 'green'};
        return (
                      <div className="content">
                      {/* START PAGE CONTENT */}
                       {/* START CONTAINER FLUID */}
            <div className="container-fluid padding-25 sm-padding-10">
                            {/* START ROW */}
                            <div className="row">
            <h1>Raportul organizatiei</h1>
            <h3>Fundatia Tineri Pentru Tineri</h3><br /><br />
            <div className="panel panel-default hover-stroke">
                  <div className="panel-body no-padding">
                    <div className="container-sm-height">
                      <div className="row row-sm-height">
                        <div className="col-sm-9 col-sm-height padding-20 col-top">
                          <h3 className="no-margin font-arial">
                                            Standard Report Index
                                        </h3>
                          <p className="small hint-text">Detalii index</p>
                        </div>
                        <div className="col-sm-3 col-sm-height col-middle bg-master-lighter">
                          <h4 className="text-center text-primary no-margin">
                                            Educatie
                                        </h4>
                          <h2 className="text-center text-primary no-margin"><b style={b_style}>98</b></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <div className="panel panel-transparent">


                                <div className="panel-heading ">
                                    <div className="panel-title">Indici comparativi
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
        <div className="col-md-4 col-lg-3 col-xlg-2 ">
            <Widget4PointsGraph />
            </div>
            <div className="col-md-4 col-lg-3 col-xlg-2 ">
                                        <Widget8WeeklyLikes />
            </div>
            <div className="col-md-4 col-lg-3 col-xlg-2 ">
                                        <Widget9WeeklyShares />
            </div>
            <div className="col-md-4 col-lg-3 col-xlg-2 ">
                                        <Widget10WeeklyViews />
            </div>
                            </div>
            </div></div>
            </div>

                        <div className="container-fluid padding-25 sm-padding-10">
                            {/* START ROW */}
                            <div className="row">
            <div className="panel panel-transparent">
                                <div className="panel-heading ">
                                    <div className="panel-title">Analize comparative
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
                                            <h3>Heatmap Beneficiari </h3>
                                            <br />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <br />

            <p>1990 - 1995<br />
numar de avorturi pe 1000 locuitori	500.840 (-33%)</p>
<br />
<p>1995 - 2000<br />
numar de avorturi pe 1000 locuitori 1.837.571 (-48%)</p>
<br />
<p>2000 - 2005<br />numar de avorturi pe 1000 locuitori 1.176.175 (-33%)</p>
<br />
<p>2005 - 2010<br />numar de avorturi pe 1000 locuitori 694.957 (-35%)</p>
<br />
<p>2010-2013<br />numar de avorturi pe 1000 locuitori 380.087(-9%)</p>


                                        </div>
                                    </div>
                                    <div className="map-container col-md-8">
                                        {/* Nav tabs */}
                                        <ul id="tabs-nvd3" className="nav nav-tabs nav-tabs-linetriangle">

                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat.bind(null, window.event, 'd2000')}> <span>2000</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat.bind(null, window.event, 'd2003')}><span>2003</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat.bind(null, window.event, 'd2006')}><span>2006</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat.bind(null, window.event, 'd2009')}><span>2009</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat.bind(null, window.event, 'd2012')}><span>2012</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat.bind(null, window.event, 'd2014')}><span>2014</span></a>
                                            </li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div id="map-canvas"></div>
                                    </div>
                                </div>
                            </div>

                            </div>
                            {/* END ROW */}
                        </div>
                        <div className="container-fluid padding-25 sm-padding-10">
                            {/* START ROW */}
                            <div className="row">
            <div className="panel panel-transparent">
                                <div className="panel-heading ">
                                    <div className="panel-title">Charts
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



                                        </div>
                                    </div>
                                    <div className="map-container col-md-8">
                                        {/* Nav tabs */}
                                        <ul id="tabs-nvd3" className="nav nav-tabs nav-tabs-linetriangle">

                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat2.bind(null, window.event, 'd2000')} ><span>2000</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat2.bind(null, window.event, 'd2003')}><span>2003</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat2.bind(null, window.event, 'd2006')}><span>2006</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat2.bind(null, window.event, 'd2009')}><span>2009</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat2.bind(null, window.event, 'd2012')}><span>2012</span></a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="tab" href="#tab-nvd3-line" onClick={this.handleHeat2.bind(null, window.event, 'd2014')}><span>2014</span></a>
                                            </li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div id="map-canvas2"></div>
                                    </div>
                                </div>
                            </div>

                            </div>
                            {/* END ROW */}
                        </div>
                        {/* END CONTAINER FLUID */}
                      {/* END PAGE CONTENT */}
                      </div>
        )
    }
});

module.exports = Analytics;
