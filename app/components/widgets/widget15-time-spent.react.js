var React = require('react');

var Widget15TimeSpent = React.createClass({
    getInitialState: function() {

        return {
        }
    }
    , componentDidMount: function () {
        var _this = this;

        if (this.props.small)
            var container = '.widget-15-chart2';
        else
            var container = '.widget-15-chart'

        var seriesData = [
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(40);
        for (var i = 0; i < 40; i++) {
            random.addData(seriesData);
        }

        var graph = new Rickshaw.Graph({
            renderer: 'bar',
            element: document.querySelector(container),
            height: 200,
            padding: {
                top: 0.5
            },
            series: [{
                data: seriesData[0],
                color: $.Pages.getColor('complete-light'),
                name: "Average time spent"
            }, {
                data: seriesData[1],
                color: $.Pages.getColor('master-lighter'),
                name: "Max time spent"

            }]

        });

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            formatter: function(series, x, y) {
                var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
                var content = swatch + '<br>' + series.name + ": " + parseInt(y) ;
                return content;
            }
        });

        graph.render();

        $(window).resize(function() {
            graph.configure({
                width: $(container).width(),
                height: 200
            });

            graph.render()
        });

        $(container).data('chart', graph);

    }
    , render: function() {
        if (this.props.small)
            return (
                <div className="col-lg-4 visible-lg hidden-xlg">
                    {/* START WIDGET */}
                    <div className="widget-15-2 panel no-margin no-border widget-loader-circle">
                        <div className="panel-heading top-right">
                            <div className="panel-controls">
                                <ul>
                                    <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="nav nav-tabs nav-tabs-simple">
                            <li className="active">
                                <a href="#widget-15-2-tab-1">
                                    Monthly Time Spent
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane no-padding active" id="widget-15-2-tab-1">
                                <div className="full-width">
                                    <div className="widget-15-chart2 rickshaw-chart full-height"></div>
                                </div>
                            </div>
                            <div className="tab-pane no-padding" id="widget-15-2-tab-2">
                            </div>
                            <div className="tab-pane" id="widget-15-2-tab-3">
                            </div>
                        </div>
                        <div className="p-t-10 p-l-20 p-r-20 p-b-30">
                            <div className="row">
                                <div className="col-md-9">
                                    <p className="fs-16 text-black">Apple’s Motivation - Innovation distinguishes between A leader and a follower.
                                    </p>
                                    <p className="small hint-text">VIA Apple Store (Consumer and Education Individuals)
                                    <br />(800) MY-APPLE (800-692-7753)
                                    </p>
                                </div>
                                <div className="col-md-3 text-right">
                                    <h5 className="font-montserrat bold text-success">Monthly</h5>
                                    <h5 className="font-montserrat bold text-danger">4 min 43s</h5>
                                    <h5 className="font-montserrat bold text-success">Today</h5>
                                    <h5 className="font-montserrat bold text-danger">8 min 10s</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END WIDGET */}
                </div>
            )
        else
            return (
                <div className="col-md-6 hidden-lg visible-md visible-xlg col-xlg-4 m-b-10">
                    {/* START WIDGET */}
                    <div className="widget-15 panel panel-condensed  no-margin no-border widget-loader-circle">
                        <div className="panel-heading">
                            <div className="panel-controls">
                                <ul>
                                    <li><a href="#" className="portlet-collapse" data-toggle="collapse"><i className="portlet-icon portlet-icon-collapse"></i></a>
                                    </li>
                                    <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body no-padding">
                            <ul className="nav nav-tabs nav-tabs-simple">
                                <li className="active">
                                    <a href="#widget-15-tab-1" className="p-t-5">
                                        Monthly Time Spent
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content p-l-20 p-r-20">
                                <div className="tab-pane no-padding active" id="widget-15-tab-1">
                                    <div className="full-width">
                                        <div className="full-width">
                                            <div className="widget-15-chart rickshaw-chart"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane no-padding" id="widget-15-tab-2">
                                </div>
                                <div className="tab-pane" id="widget-15-tab-3">
                                </div>
                            </div>
                            <div className="p-t-20 p-l-20 p-r-20 p-b-30">
                                <div className="row">
                                    <div className="col-md-9">
                                        <p className="fs-16 text-black">Apple’s Motivation - Innovation
                                        <br />distinguishes between A leader and a follower.
                                        </p>
                                        <p className="small hint-text">VIA Apple Store (Consumer and Education Individuals)
                                        <br />(800) MY-APPLE (800-692-7753)
                                        </p>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="font-montserrat bold text-success m-r-20 fs-16">Monthly</h5>
                                        <h5 className="font-montserrat bold text-danger m-r-20 fs-16">4 min 43s</h5>
                                        <h5 className="font-montserrat bold text-success m-r-20 fs-16">Today</h5>
                                        <h5 className="font-montserrat bold text-danger m-r-20 fs-16">8 min 10s</h5>
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

module.exports = Widget15TimeSpent;
