var React = require('react');

var Widget8WeeklyLikes = React.createClass({
    getInitialState: function() {
        return {
            data:
                [{
                    key: 'Weekly likes',
                    values:[
                        [100, 0],
                        [150, 8],
                        [200, 20],
                        [250, 22],
                        [300, 30],
                        [350, 26],
                        [400, 10]
                    ]
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
                    .color(['#000'])
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: -13,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)
                    .interactive(false);

                d3.select('.widget-8-chart svg')
                    .datum(_this.state.data)
                    .call(chart);



                nv.utils.windowResize(chart.update);

                nv.utils.windowResize(function() {
                    setTimeout(function() {
                        $('.widget-8-chart .nvd3 circle.nv-point').attr("r", "3").css({
                            'stroke-width': '2px',
                            ' stroke-opacity': 0.4
                        });
                    }, 500);
                });

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-8-chart .nvd3 circle.nv-point').attr("r", "3").css({
                        'stroke-width': '2px',
                        ' stroke-opacity': 0.4
                    });
                }, 500);
            });
    }
    , render: function() {
        var total = this.state.data[0].values.map(function(item){
            return item[1];
        }).reduce(function(a, b){return a + b;})
        return (
                <div className="">
                    {/* START WIDGET */}
                    <div className="widget-8 panel no-border bg-success no-margin widget-loader-bar">
                        <div className="container-xs-height full-height">
                            <div className="row-xs-height">
                                <div className="col-xs-height col-top">
                                    <div className="panel-heading top-left top-right">
                                        <div className="panel-title text-black hint-text">
                                            <span className="font-montserrat fs-11 all-caps">Bugete Rulate <i className="fa fa-chevron-right"></i>
                                            </span>
                                        </div>
                                        <div className="panel-controls">
                                            <ul>
                                                <li>
                                                    <a data-toggle="refresh" className="portlet-refresh text-black" href="#"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-xs-height ">
                                <div className="col-xs-height col-top relative">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="p-l-20">
                                                <h3 className="no-margin p-b-5 text-white">{total}</h3>
                                                <p className="small hint-text m-t-5">
                                                <span className="label  font-montserrat m-r-5">60%</span>Crestere
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                        </div>
                                    </div>
                                    <div className='widget-8-chart line-chart' data-line-color="black" data-points="true" data-point-color="primary" data-stroke-width="2">
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

module.exports = Widget8WeeklyLikes;
