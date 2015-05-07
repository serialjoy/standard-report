var React = require('react');

var Widget2BestOffer = React.createClass({
    getInitialState: function() {
        return {
            offer:
                {
                    likes: 34,
                    shares: 3,
                    views: 183,
                    location_views: 50,
                    date: 'Mon 27, Dec',
                    title: 'Colectia toamna-iarna',
                    description: 'Influente punk si artizanale in noua colectie',
                    image_url: '/assets/img/dashboard/4.jpg'
                }
        }
    }
    , componentDidMount: function () {
    }
    , render: function() {
        var offer = this.state.offer;

        var styles = {
                'background-image': 'url("'+offer.image_url+'")',
                'background-repeat': 'no-repeat',
                'background-size': '498px 498px'
            };
        return (
                <div className="ar-1-1">
                    {/* START WIDGET */}
                    <div className="widget-2 panel no-border bg-primary widget widget-loader-circle-lg no-margin" style={styles}>
                        <div className="panel-heading">
                            <div className="panel-controls">
                                <ul>
                                    <li><a href="#" className="portlet-refresh" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh-lg-white"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="pull-bottom bottom-left bottom-right padding-25">
                                <span className="label font-montserrat fs-11"> Best Offer</span>
                                <br />
                                <h3 className="text-white">{offer.title}</h3>
                                <p className="text-white hint-text hidden-md">{offer.description}</p>
                                <ul className="list-inline ">
                                      <li>
                                        <a href="#" className="no-decoration"><i className="fa fa-share"></i>
                                            {offer.shares}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="widget-3-fav no-decoration"><i className="pg-like"></i>
                                        {offer.likes}
                                        </a>
                                      </li>
                                    <li>
                                        <a href="#" className="no-decoration"><i className="pg-map"></i>
                                        {offer.location_views}
                                        </a>
                                      </li>
                                    <li>
                                        <a href="#" className="no-decoration"><i className="fa fa-eye"></i>
                                        {offer.views}
                                        </a>
                                      </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END WIDGET */}
                </div>
            )
    }
});

module.exports = Widget2BestOffer;
