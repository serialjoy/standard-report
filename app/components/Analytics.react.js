var React = require('react');
var AnalyticsGraphs = require('./widgets/analytics/analytics-graphs.react');
var Widget8WeeklyLikes = require('./widgets/widget8-weekly-likes.react');
var Widget9WeeklyShares = require('./widgets/widget9-weekly-shares.react');
var Widget10WeeklyViews = require('./widgets/widget10-weekly-views.react');
var Widget4PointsGraph = require('./widgets/widget4-points-graph.react');

var heatmap1 = null;
var heatmap2 = null;

var Analytics = React.createClass({
    getInitialState: function() {
        return {

        }
    }
    , componentDidMount: function(){
        // map center
        var myLatlng = new google.maps.LatLng(46.043444, 24.573860);
        // map options,
        var myOptions = {
            zoom: 7,
            center: myLatlng
        };
        // standard map
        var      map1 = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        var map2 = new google.maps.Map(document.getElementById("map-canvas2"), myOptions);
        heatmap1 = new HeatmapOverlay(map1,
        {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.7,
            "maxOpacity": 1,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count',
            gradient: {
                // enter n keys between 0 and 1 here
                // for gradient color customization
                '.5': 'red',
                '.8': 'green',
                '.95': 'blue'
              }
        });
        heatmap2 = new HeatmapOverlay(map2,
        {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.5,
            "maxOpacity": 1,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": false,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count',
            gradient: {
                // enter n keys between 0 and 1 here
                // for gradient color customization
                '.5': 'red',
                '.8': 'green',
                '.95': 'blue'
              }
        }
    );
        heatmap1.setData(testData1["d2000"]);
        heatmap2.setData(testData2["d2000"]);
    }
    , handleHeat:function (event, data){
        heatmap1.setData(testData1[data]);
        heatmap2.setData(testData2[data]);
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
                                    <div className="col-md-8 no-padding">
                                        <div className="p-r-30">
                                            <h3>Heatmap Beneficiari </h3>
                                            <br />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            </div>
                            {/* END ROW */}
                            <div className="map-container container-fluid">
                                        {/* Nav tabs */}
                                        <div className="row">
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
                                        </div>
                                        <div className="row">
                                            {/* Tab panes */}
                                            <div className="col-md-6">
                                                <div id="map-canvas" className="map-div"></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div id="map-canvas2" className="map-div"></div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        {/* END CONTAINER FLUID */}
                      {/* END PAGE CONTENT */}
                      </div>
        )
    }
});

module.exports = Analytics;
