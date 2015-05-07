var React = require('react');

var Widget1UserFace = React.createClass({
    getInitialState: function() {
        return {
            user: {
                name: 'John Doe the Third',
                store_likes: [{
                        id: 1,
                        name: 'Camasa Albastra'
                    },
                    {
                        id: 2,
                        name: 'Pantaloni'
                    },
                    {
                        id: 3,
                        name: 'Ceas'
                    }],
                average_time_spent: '7m 3s',
                average_walk_ins: 2,
                average_rewards_claimed: 8,
                profile_image: '/assets/img/dashboard/shopper.jpg'

            },
            store: {
                average_walk_ins: 7,
                average_time_spent: '3m',
                average_rewards_claimed: 5
            }

        }
    }
    , render: function() {

        var likeItems = this.state.user.store_likes.map(function(like, index) {
            return(
                    <a href={"/offers/"+like.id}> {like.name}, </a>
            )
        });

        return (
                <div className="ar-3-2 widget-1-wrapper">
                    {/* START WIDGET */}
                    <div className="widget-1 panel no-border bg-complete no-margin widget-loader-circle-lg">
                        <div className="panel-heading top-right ">
                            <div className="panel-controls">
                                <ul>
                                    <li><a data-toggle="refresh" className="portlet-refresh text-black" href="#"><i className="portlet-icon portlet-icon-refresh-lg-master"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="pull-top top-right ">
                                <img src={this.state.user.profile_image} />
                            </div>
                            <div className="pull-bottom bottom-left bottom-right ">
                                <span className="label font-montserrat fs-11">Right Now In Store</span>
                                <br />
                                <h2 className="text-white">{this.state.user.name}</h2>
                                <p className="text-white hint-text">Offers Liked: {likeItems}</p>
                                <div className="row stock-rates m-t-15">
                                    <div className="company col-xs-4">
                                        <div>
                                            <p className="font-montserrat text-success no-margin fs-16">
                                            <i className="fa fa-caret-up"></i> {this.state.user.average_walk_ins}
                                            <span className="font-arial text-white fs-12 hint-text m-l-5">(avg. {this.state.store.average_walk_ins})</span>
                                            </p>
                                            <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                                            Walk-ins
                                            </p>
                                        </div>
                                    </div>
                                    <div className="company col-xs-4">
                                        <div>
                                            <p className="font-montserrat text-danger no-margin fs-16">
                                            <i className="fa fa-caret-up"></i> {this.state.user.average_time_spent}
                                            <span className="font-arial text-white fs-12 hint-text m-l-5">(avg. {this.state.store.average_time_spent})</span>
                                            </p>
                                            <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                                            Time Spent Inside
                                            </p>
                                        </div>
                                    </div>
                                    <div className="company col-xs-4">
                                        <div className="pull-right">
                                            <p className="font-montserrat text-success no-margin fs-16">
                                            <i className="fa fa-caret-up"></i> {this.state.user.average_rewards_claimed}
                                            <span className="font-arial text-white fs-12 hint-text m-l-5">(avg. {this.state.store.average_rewards_claimed})</span>
                                            </p>
                                            <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                                            Rewards Claimed
                                            </p>
                                        </div>
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

module.exports = Widget1UserFace;
