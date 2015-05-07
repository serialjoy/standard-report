var React = require('react');
var Widget1UserFace = require('./widgets/widget1-userface.react');
var Widget2BestOffer = require('./widgets/widget2-best-offer.react');
var Widget3Offer = require('./widgets/widget3-offer.react');
var Widget4PointsGraph = require('./widgets/widget4-points-graph.react');
var Widget5Reward = require('./widgets/widget5-reward.react');
var Widget6BestBeacon = require('./widgets/widget6-best-beacon.react');
var Widget7Beacon = require('./widgets/widget7-beacon.react');
var Widget8WeeklyLikes = require('./widgets/widget8-weekly-likes.react');
var Widget9WeeklyShares = require('./widgets/widget9-weekly-shares.react');
var Widget10WeeklyViews = require('./widgets/widget10-weekly-views.react');
var Widget11PeopleList = require('./widgets/widget11-people-list.react');
var Widget12WalkinsGraph = require('./widgets/widget12-walkins-graph.react');
var Widget13ContextualInfo = require('./widgets/widget13-contextual-info.react');
var Widget14CurrentVisitors = require('./widgets/widget14-current-visitors.react');
var Widget15TimeSpent = require('./widgets/widget15-time-spent.react');


var Dashboard = React.createClass({
    getInitialState: function() {
        return {

        }
    }
    , render: function() {
        return (
                      <div className="content">
                      {/* START PAGE CONTENT */}
                        {/* START CONTAINER FLUID */}
                        <div className="container-fluid padding-25 sm-padding-10">
                            {/* START ROW */}
                            <div className="row">
                                <div className="col-md-6 col-xlg-5">
                                    <div className="row">
                                        <div className="col-md-12 m-b-10">
                                            <Widget1UserFace />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 m-b-10">
                                            <Widget4PointsGraph />
                                        </div>
                                        <div className="col-sm-6 m-b-10">
                                            <Widget5Reward />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xlg-4">
                                    <div className="row">
                                        <div className="col-sm-6 m-b-10">
                                            <Widget2BestOffer />
                                        </div>
                                        <div className="col-sm-6 m-b-10">
                                            <Widget3Offer />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 m-b-10">
                                            <Widget6BestBeacon />
                                        </div>
                                        <div className="col-sm-6 m-b-10">
                                            <Widget7Beacon />
                                        </div>
                                    </div>
                                </div>
                                {/* Filler */}
                                <div className="visible-xlg col-xlg-3">
                                    <Widget11PeopleList />
                                </div>
                            </div>
                            {/* END ROW */}
                            <div className="row">
                                <div className="col-md-4 col-lg-3 col-xlg-2 ">
                                    <div className="row">
                                        <Widget8WeeklyLikes />
                                    </div>
                                    <div className="row">
                                        <Widget9WeeklyShares />
                                    </div>
                                    <div className="row">
                                        <Widget10WeeklyViews />
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-5 col-xlg-6 m-b-10">
                                    <div className="row">
                                        <Widget12WalkinsGraph />
                                    </div>
                                </div>
                                <Widget11PeopleList small="yes" />
                                <Widget15TimeSpent />
                            </div>
                            <div className="row">
                                <Widget13ContextualInfo />
                                <Widget14CurrentVisitors />
                            </div>
                            <div className="row">
                                <Widget15TimeSpent small="yes" />
                            </div>
                        </div>
                        {/* END CONTAINER FLUID */}
                      {/* END PAGE CONTENT */}
                      </div>
        )
    }
});

module.exports = Dashboard;
