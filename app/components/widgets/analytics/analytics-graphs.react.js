var React = require('react');

var AnalyticsGraphs = React.createClass({
    getInitialState: function() {
        var data = {
                walkins: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 20], [1416909176000, 20], [1416995576000, 30], [1417081976000, 20], [1417168376000, 10], [1417254776000, 30], [1417341176000, 15]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 5], [1416822776000, 10], [1416909176000, 35], [1416995576000, 40], [1417081976000, 10], [1417168376000, 20], [1417254776000, 15], [1417341176000, 10]
                    ]
                }],
                time_spent: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 5], [1416909176000, 11], [1416995576000, 45], [1417081976000, 11], [1417168376000, 25], [1417254776000, 30], [1417341176000, 5]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                }],
                total_rewards: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 10], [1416822776000, 20], [1416909176000, 20], [1416995576000, 30], [1417081976000, 20], [1417168376000, 10], [1417254776000, 30], [1417341176000, 15]
                    ]
                }],
                likes: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 5], [1416909176000, 11], [1416995576000, 45], [1417081976000, 11], [1417168376000, 25], [1417254776000, 30], [1417341176000, 5]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                }],
                shares: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 5], [1416909176000, 11], [1416995576000, 45], [1417081976000, 11], [1417168376000, 25], [1417254776000, 30], [1417341176000, 5]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                }],
                offer_clicks: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 5], [1416909176000, 11], [1416995576000, 45], [1417081976000, 11], [1417168376000, 25], [1417254776000, 30], [1417341176000, 5]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                }],
                map_clicks: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 5], [1416909176000, 11], [1416995576000, 45], [1417081976000, 11], [1417168376000, 25], [1417254776000, 30], [1417341176000, 5]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                }],
                store_clicks: [{
                    "key": "Women",
                    "values": [
                        [1416736376000, 10], [1416822776000, 5], [1416909176000, 11], [1416995576000, 45], [1417081976000, 11], [1417168376000, 25], [1417254776000, 30], [1417341176000, 5]
                    ]
                },
                {
                    "key": "Men",
                    "values": [
                        [1416736376000, 20], [1416822776000, 23], [1416909176000, 14], [1416995576000, 43], [1417081976000, 25], [1417168376000, 5], [1417254776000, 30], [1417341176000, 35]
                    ]
                }]

            };
        [data.walkins, data.time_spent, data.total_rewards, data.likes,
            data.shares, data.offer_clicks, data.map_clicks].map(function(graph){
            graph.push({
                key: "Total",
                values: graph[0].values.map(function (item, index) {
                    return [item[0], graph[1].values[index][1] + item[1]]
            })
        });
        });

        return {
            current_chart: 'walkins',
            data: data
        }
    }
    , componentDidMount: function(){
        this.componentDidUpdate();
    }
    , componentDidUpdate: function () {
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
                    $.Pages.getColor('success'),
                    $.Pages.getColor('danger'),
                    $.Pages.getColor('primary'), //south america

                    $.Pages.getColor('complete'), //europe

                ])
                .useInteractiveGuideline(true);

            chart.xAxis
                .tickFormat(function(d) {
                    return d3.time.format('%x')(new Date(d))
                });

            chart.yAxis.tickFormat(d3.format(',.2f'));

            d3.select('#nvd3-line svg')
                .datum(_this.state.data[_this.state.current_chart])
                .transition().duration(500)
                .call(chart);

            nv.utils.windowResize(chart.update);

            $('#nvd3-line').data('chart', chart);
            return chart;
        });
    }
    , render: function() {
        var _this = this;
        var graphs = [
            {id:"walkins", name:"Walk-ins"},
            {id:"time_spent", name:"Time Spent"},
            {id:"total_rewards", name:"Total Rewards"},
            {id:"likes", name:"Likes"},
            {id:"shares", name:"Shares"},
            {id:"offer_clicks", name:"Offer Clicks"},
            {id:"map_clicks", name:"Map Clicks"}
        ].map(function(graph, index){
            var is_active = "";
            if (index == 0)
                is_active = "active";
            var boundClick = _this.handleClick.bind(_this, graph.id);
            return (
                <li className={is_active}>
                    <a data-toggle="tab" href="#tab-nvd3-line" onClick={boundClick}><span>{graph.name}</span></a>
                </li>
            )
        });

        return (
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
                                            {graphs}
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content no-padding">
                                            <div className="tab-pane active" id="tab-nvd3-line">
                                                <div id="nvd3-line" className="line-chart m-t-30 text-center" data-x-grid="false">
                                                    <svg></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        )
    }
    , handleClick: function(page){
        this.setState({current_chart: page});
    }
});

module.exports = AnalyticsGraphs;
