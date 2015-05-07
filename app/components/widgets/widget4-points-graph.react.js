var React = require('react');

var Widget4PointsGraph = React.createClass({
    getInitialState: function() {
        return {
            points: [{
                        "key": "Points",
                        "values": [
                            [1, 100],
                            [2, 80],
                            [3, 130],
                            [4, 100],
                            [5, 151],
                            [6, 160],
                            [7, 120],
                            [8, 140],
                            [9, 122]
                        ],
                        "area": true
                    }]
        }
    }
    , componentDidMount: function () {
        var _this = this;
        nv.addGraph(function() {
            var chart = nv.models.lineChart()
                .x(function(d) {
                    return d[0]
                })
                .y(function(d) {
                    return d[1]
                })
                .color([
                    $.Pages.getColor('success')
                ])
                .forceY([0, 200])
                .useInteractiveGuideline(true)

            .margin({
                    top: 60,
                    right: -10,
                    bottom: -10,
                    left: -10
                })
                .showLegend(false);


            d3.select('.widget-4-chart svg')
                .datum(_this.state.points)
                .transition().duration(500)
                .call(chart);


            nv.utils.windowResize(function() {

                chart.update();

            });

            $('.widget-4-chart').data('chart', chart);

            return chart;
        }, function() {

        });
    }
    , render: function() {
        var total = this.state.points[0].values.map(
            function(item) { return item[1] }).reduce(
            function(a,b) { return a + b; });

        return (
                <div className="ar-2-1">
                    {/* START WIDGET */}
                    <div className="widget-4 panel no-border  no-margin widget-loader-bar">
                        <div className="container-sm-height full-height">
                            <div className="row-sm-height">
                                <div className="col-sm-height col-top">
                                    <div className="panel-heading ">
                                        <div className="panel-controls">
                                            <ul>
                                                <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-sm-height">
                                <div className="col-sm-height col-top">
                                    <div className="p-l-20 p-r-20">
                                        <h5 className="no-margin p-b-5 pull-left hint-text">Impact Social</h5>
                                        <p className="pull-right no-margin bold hint-text">{total}</p>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-sm-height">
                                <div className="col-sm-height col-bottom ">
                                    <div className="widget-4-chart line-chart " data-line-color="success" data-area-color="success-light" data-y-grid="false" data-points="false" data-stroke-width="2">
                                        <svg></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END WIDGET */}
                </div>
            )
    }
});

module.exports = Widget4PointsGraph;
