var React = require('react');

var Widget5Reward = React.createClass({
    getInitialState: function() {
        return {
            data: [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 2
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 3,
                    y: 1
                }, {
                    x: 4,
                    y: 5
                }, {
                    x: 5,
                    y: 2
                }, {
                    x: 6,
                    y: 0
                }]
        }
    }
    , componentDidMount: function () {
        var container = '.widget-5-chart';
        var inverted_data = this.state.data.map(function(item){
                return {x:item.x, y:10-item.y}});

        var graph = new Rickshaw.Graph({
            element: document.querySelector(container),
            renderer: 'bar',
            series: [{
                data: inverted_data,
                color: $.Pages.getColor('danger')
            }, {
                data: this.state.data,
                color: $.Pages.getColor('master-light')
            }]

        });

        var MonthBarsRenderer = Rickshaw.Class.create(Rickshaw.Graph.Renderer.Bar, {
            barWidth: function(series) {
                return 7;
            }
        });
        graph.setRenderer(MonthBarsRenderer);
        graph.render();
        $(window).resize(function() {
            graph.configure({
                width: $(container).width(),
                height: $(container).height()
            });

            graph.render()
        });

        $(container).data('chart', graph);
    }
    , render: function() {
        var total = this.state.data.map(
            function(item) { return item.y }).reduce(
            function(a,b) { return a + b; });
        var value = total * 30;
        return (
                <div className="ar-2-1">
                    {/* START WIDGET */}
                    <div className="widget-5 panel no-border  widget-loader-bar">
                        <div className="panel-heading pull-top top-right">
                            <div className="panel-controls">
                                <ul>
                                    <li><a data-toggle="refresh" className="portlet-refresh text-black" href="#"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container-xs-height full-height">
                            <div className="row row-xs-height">
                                <div className="col-xs-5 col-xs-height col-middle relative">
                                    <div className="padding-15 top-left bottom-left">
                                        <h5 className="hint-text no-margin p-l-10">Reward</h5>
                                        <p className=" bold font-montserrat p-l-10">{total}
                                        <br />USD ${value}</p>
                                    </div>
                                </div>
                                <div className="col-xs-7 col-xs-height col-bottom relative widget-5-chart-container">
                                    <div className="widget-5-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END WIDGET */}
                </div>
            )
    }
});

module.exports = Widget5Reward;
