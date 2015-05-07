var React = require('react');

var Widget13ContextualInfo = React.createClass({
    getInitialState: function() {

        var beacons = [
                {
                    likes: 34,
                    shares: 3,
                    views: 183,
                    location_views: 50,
                    date: 'Mon 27, Dec',
                    title: 'Beacon 1',
                    description: 'Shoes Department',
                    image_url: '/assets/img/dashboard/3.jpg'
                },
                {
                    likes: 3,
                    shares: 0,
                    views: 10,
                    location_views: 5,
                    date: 'Sun 1, Oct',
                    title: 'Beacon 2',
                    description: 'Accesories',
                    image_url: '/assets/img/dashboard/4.jpg'
                },
                {
                    likes: 7,
                    shares: 2,
                    views: 100,
                    location_views: 50,
                    date: 'Sun 1, Oct',
                    title: 'Beacon 3',
                    description: 'Checkout',
                    image_url: '/assets/img/dashboard/4.jpg'
                }
            ];

        var map_data = {};
        return {
            beacons: beacons,
            map_data:map_data
        }
    }
    , componentDidMount: function () {
        var _this = this;
        $('.widget-13-map').mapplic({
            source: 'app/data/beacon.js',
            height: 465,
            sidebar: false,
            minimap: false,
            locations: true,
            deeplinking: true,
            fullscreen: false,
            developer: false,
            maxscale: 3
        });

        // Disable scroll to zoom
        setTimeout(function() {
            location.hash = "#beacon1";
            $('.mapplic-layer').unbind('mousewheel DOMMouseScroll');
        }, 1000);


        $('.widget-13 a[data-toggle="tab"]').on('show.bs.tab', function(e) {
            var target = $(e.target).text().trim();
            var hash;
            if (target == '1') {
                hash = '#beacon1';
            } else if (target == '2') {
                hash = '#beacon2';
            } else if (target == '3') {
                hash = '#beacon3';
            }
            window.location.hash = hash;
        });

    }
    , render: function() {
        var tab_content = this.state.beacons.map(function(beacon, index){
            var tab_id = "tab" + (index+1);
            var tab_class = index == 0 ? 'tab-pane active' : 'tab-pane';
            return (
                <div className={tab_class} id={tab_id}>
                    <h3>{beacon.title}</h3>
                    <h5>{beacon.description}</h5>
                    <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                    <p className="all-caps font-montserrat  no-margin text-success ">{beacon.views}</p>
                    <br />
                    <p className="hint-text all-caps font-montserrat small no-margin ">Likes</p>
                    <p className="all-caps font-montserrat  no-margin text-success ">{beacon.likes}</p>
                    <br />
                    <p className="hint-text all-caps font-montserrat small no-margin ">Shares</p>
                    <p className="all-caps font-montserrat  no-margin text-warning ">{beacon.shares}</p>
                </div>
            )
        })

        return (
            <div className="col-md-8 m-b-10">
                {/* START WIDGET */}
                <div className="widget-13 panel no-border  no-margin widget-loader-circle">
                    <div className="panel-heading pull-up top-right ">
                        <div className="panel-controls">
                            <ul>
                                <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-sm-height no-overflow">
                        <div className="row row-sm-height">
                            <div className="col-sm-5 col-lg-4 col-xlg-3 col-sm-height col-top no-padding">
                                <div className="panel-heading ">
                                    <div className="panel-title">Contextual Info
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <ul className="nav nav-pills" role="tablist">
                                        <li className="active">
                                            <a href="#tab1" data-toggle="tab" role="tab" className="b-a b-grey text-master">
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab2" data-toggle="tab" role="tab" className="b-a b-grey text-master">
                                                2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab3" data-toggle="tab" role="tab" className="b-a b-grey text-master">
                                                3
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        {tab_content}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7 col-lg-8 col-xlg-9 col-sm-height col-top no-padding relative">
                                <div className="bg-success widget-13-map">
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

module.exports = Widget13ContextualInfo;
