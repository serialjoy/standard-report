var React = require('react');

var Widget11PeopleList = React.createClass({
    getInitialState: function() {
        return {
            people: [
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},
                {name: 'Sabin Dima', walkins: 50, time:'5min', points: 100},

            ]
        }
    }
    , componentDidMount: function () {
    }
    , render: function() {

        var points_total = this.state.people.map(function(person){
            return person.points;
        }).reduce(function(a,b) {return a + b;})
        var _this = this;
        var people_list = this.state.people.map(function(person){
            var walkins = "";
            if (!_this.props.small)
                walkins = (
                    <td className="text-right">
                        <span className="hint-text small">{person.walkins}</span>
                    </td>
                )

            return (
                <tr>
                    <td className="font-montserrat all-caps fs-12">{person.name}</td>
                    {walkins}
                    <td className="text-right b-r b-dashed b-grey">
                        <span className="hint-text small">{person.time}</span>
                    </td>
                    <td>
                        <span className="font-montserrat fs-18">{person.points}</span>
                    </td>
                </tr>
            );
        });
        var container_class = "ar-2-3";
        var widget_class = "widget-11 panel no-border  no-margin widget-loader-bar";
        var table_class = "widget-11-table auto-overflow";
        if (this.props.small) {
            widget_class = "widget-11-2 panel no-border panel-condensed no-margin widget-loader-bar";
            table_class = "auto-overflow widget-11-2-table";
            container_class = "col-md-6 col-lg-4 hidden-xlg m-b-10";
        }
        return (
            <div className={container_class}>
                {/* START WIDGET */}
                <div className={widget_class}>
                    <div className="panel-heading ">
                        <div className="panel-title">Realtime Walk-ins
                        </div>
                        <div className="panel-controls">
                            <ul>
                                <li><a data-toggle="refresh" className="portlet-refresh text-black" href="#"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="padding-25">
                        <div className="pull-left">
                            <h2 className="text-success no-margin">Daily Points</h2>
                        </div>
                        <h3 className="pull-right semi-bold">{points_total} </h3>
                        <div className="clearfix"></div>
                    </div>
                    <div className={table_class}>
                        <table className="table table-condensed table-hover">
                            <tbody>
                            {people_list}
                            </tbody>
                        </table>
                    </div>
                    <div className="padding-25">
                        <p className="small no-margin">
                        <a href="#"><i className="fa fs-16 fa-arrow-circle-o-down text-success m-r-10"></i></a>
                        <span className="hint-text ">Manage your points</span>
                        </p>
                    </div>
                </div>
                {/* END WIDGET */}
            </div>
        )

    }
});

module.exports = Widget11PeopleList;
