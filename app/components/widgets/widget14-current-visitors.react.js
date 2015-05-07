var React = require('react');

var Widget14CurrentVisitors = React.createClass({
    getInitialState: function() {

        return {
        }
    }
    , componentDidMount: function () {
        var _this = this;
        var container = '.widget-14-chart';

            var seriesData = [
                [],
                [],
                []
            ];
            var random = new Rickshaw.Fixtures.RandomData(50);
            for (var i = 0; i < 50; i++) {
                random.addData(seriesData);
            }
            var graph = new Rickshaw.Graph({
                element: document.querySelector(container),
                renderer: 'area',
                padding: {
                    top: 0.5,
                    bottom: 1
                },
                series: [{
                    data: seriesData[0],
                    color: $.Pages.getColor('success-light', .5),
                    name: 'Men'
                }, {
                    data: seriesData[1],
                    color: $.Pages.getColor('master-light'),
                    name: 'Women'
                }]
            });


            var y_axis = new Rickshaw.Graph.Axis.Y({
                graph: graph,
                orientation: 'right',
                tickFormat: function(y) {
                    return y / 10;
                },
                element: document.querySelector('.widget-14-chart_y_axis'),
            });

            var legend = new Rickshaw.Graph.Legend({
                graph: graph,
                element: document.querySelector('.widget-14-chart-legend')

            });

            var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
                graph: graph,
                legend: legend
            });


            var hoverDetail = new Rickshaw.Graph.HoverDetail({
                graph: graph
            });
            setInterval(function() {
                random.removeData(seriesData);
                random.addData(seriesData);
                graph.update();
            }, 1000);

            d3.selectAll('.widget-14-chart_y_axis .tick.major line').attr('x2', '7');
            d3.selectAll('.widget-14-chart_y_axis .tick.major text').attr('x', '12');
            $(window).resize(function() {
                graph.configure({
                    width: $(container).width()
                });

                graph.render()
            });

            $(container).data('chart', graph);

    }
    , render: function() {
        return (
            <div className="col-md-4 m-b-10">
                {/* START WIDGET */}
                <div className="widget-14 panel no-border  no-margin widget-loader-circle">
                    <div className="container-xs-height full-height">
                        <div className="row-xs-height">
                            <div className="col-xs-height">
                                <div className="panel-heading">
                                    <div className="panel-title">Live Visitors
                                    </div>
                                    <div className="panel-controls">
                                        <ul>
                                            <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-xs-height">
                            <div className="col-xs-height">
                                <div className="p-l-20 p-r-20">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12">
                                            <h4 className="bold no-margin">43</h4>
                                            <p className="small no-margin">All</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <h5 className=" no-margin p-t-5">23</h5>
                                            <p className="small no-margin">Men</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <h5 className=" no-margin p-t-5">20</h5>
                                            <p className="small no-margin">Women</p>
                                        </div>
                                        <div className="col-lg-3 visible-xlg">
                                            <div className="widget-14-chart-legend bg-transparent text-black no-padding pull-right"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-xs-height">
                            <div className="col-xs-height relative bg-master-lightest">
                                <div className="widget-14-chart_y_axis"></div>
                                <div className="widget-14-chart rickshaw-chart top-left top-right bottom-left bottom-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END WIDGET */}
            </div>
        )
    }
});

module.exports = Widget14CurrentVisitors;
