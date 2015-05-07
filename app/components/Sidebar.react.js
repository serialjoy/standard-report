var React = require('react');
var SidebarActionCreators = require('../actions/SidebarActionCreators');

var Sidebar = React.createClass({

    getInitialState: function() {
        return {}
    }
    , render: function () {
        var noDisplay = {
            display: 'none'
        }
        return (
            <div className="page-sidebar" data-pages="sidebar">
                <div id="appMenu" className="sidebar-overlay-slide from-top">
                </div>
                {/* BEGIN SIDEBAR HEADER */}
                <div className="sidebar-header">
                    <img src="assets/img/logo_white.png" alt="logo" className="brand" data-src="assets/img/logo_white.png" data-src-retina="assets/img/logo_white_2x.png" width="156" height="44" />
                </div>
                {/* END SIDEBAR HEADER */}
                {/* BEGIN SIDEBAR MENU */}
                <div className="sidebar-menu">
                    <ul className="menu-items">
                        <li className="m-t-30">
                            <a href="#" className="detailed" onClick={this.switchView.bind(this, 'incarcadate')}>
                                <span className="title" >Incarca Date</span>
                                <span className="icon-thumbnail ">
                                    <i className="pg-grid"></i>
                                </span>
                            </a>


                        </li>
                        <li className="">
                            <a href="#" onClick={this.switchView.bind(this, 'analize')}>
                                <span className="title" >Analize</span>
                                <span className="icon-thumbnail ">
                                    <i className="pg-charts"></i>
                                </span>
                            </a>
                        </li>

                    </ul>
                    <div className="clearfix"></div>
                </div>
                {/* END SIDEBAR MENU */}
            </div>
        )
    }
    , switchView: function(name){
        SidebarActionCreators.switchView(name);
    }
});

module.exports = Sidebar;
