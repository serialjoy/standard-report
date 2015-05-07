var React = require('react');
var IncarcaDate = require ('./IncarcaDate.react');
var Analytics = require ('./Analytics.react');
var Sidebar = require ('./Sidebar.react');
var AdminDispatcher = require('../dispatchers/AdminDispatcher');
var AdminConstants = require('../constants/AdminConstants');


var StandardReportApp = React.createClass({
    getInitialState: function() {
        return {
          current_page: 'analize',
          pages: {
            incarcadate: (<IncarcaDate />),
            analize: (<Analytics />)
          }
        }
    }
    , switchPage: function(page){
        this.setState({current_page: page});
    }
    , componentDidMount: function() {
        var _this = this;
        AdminDispatcher.register(function(payload) {
            var action = payload.action;
            switch(action) {
              case AdminConstants.ActionTypes.SWITCH_VIEW:
                  _this.switchPage(payload.view_name);
                break;
            }

            return true; // No errors. Needed by promise in Dispatcher.
        });
    }

    , render: function() {
        var current_page = this.state.pages[this.state.current_page];
        return (
            <div className="app">
                  {/* BEGIN SIDEBAR */}
                  <Sidebar />
                  {/* END SIDEBAR */}

                  {/* START PAGE-CONTAINER */}
                  <div className="page-container">
                    {/* START PAGE HEADER WRAPPER */}
                    {/* START HEADER */}
                    <div className="header ">
                      {/* START MOBILE CONTROLS */}
                      {/* LEFT SIDE */}
                      <div className="pull-left full-height visible-sm visible-xs">
                        {/* START ACTION BAR */}
                        <div className="sm-action-bar">
                          <a href="#" className="btn-link toggle-sidebar" data-toggle="sidebar">
                            <span className="icon-set menu-hambuger"></span>
                          </a>
                        </div>
                        {/* END ACTION BAR */}
                      </div>
                      {/* RIGHT SIDE */}
                      <div className="pull-right full-height visible-sm visible-xs">
                        {/* START ACTION BAR */}
                        <div className="sm-action-bar">
                          <a href="#" className="btn-link" data-toggle="quickview" data-toggle-element="#quickview">
                            <span className="icon-set menu-hambuger-plus"></span>
                          </a>
                        </div>
                        {/* END ACTION BAR */}
                      </div>
                      {/* END MOBILE CONTROLS */}
                      <div className=" pull-left sm-table">
                        <div className="header-inner">
                          <div className="brand inline">
                            <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="156" height="44" />
                          </div>
                        </div>
                      </div>
                      <div className=" pull-right">
                        <div className="header-inner">
                          <a href="#" className="btn-link icon-set menu-hambuger-plus m-l-20 sm-no-margin hidden-sm hidden-xs" data-toggle="quickview" data-toggle-element="#quickview"></a>
                        </div>
                      </div>
                      <div className=" pull-right">
                        {/* START User Info*/}
                        <div className="visible-lg visible-md m-t-10">
                          <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
                            <span className="semi-bold">User</span> <span className="text-master">Anonim</span>
                          </div>
                          <div className="dropdown pull-right">
                            <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="thumbnail-wrapper d32 circular inline m-t-5">
                          </span>
                            </button>
                            <ul className="dropdown-menu profile-dropdown" role="menu">
                              <li><a href="#"><i className="pg-settings_small"></i> Settings</a>
                              </li>
                              <li><a href="#"><i className="pg-outdent"></i> Feedback</a>
                              </li>
                              <li><a href="#"><i className="pg-signals"></i> Help</a>
                              </li>
                              <li className="bg-master-lighter">
                                <a href="#" className="clearfix">
                                  <span className="pull-left">Logout</span>
                                  <span className="pull-right"><i className="pg-power"></i></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* END User Info*/}
                      </div>
                    </div>
                    {/* END HEADER */}
                    {/* END PAGE HEADER WRAPPER */}
                    {/* START PAGE CONTENT WRAPPER */}
                    <div className="page-content-wrapper">
                      {current_page}
                      {/* START FOOTER */}
                      <div className="container-fluid container-fixed-lg footer">
                        <div className="copyright sm-text-center">
                          <p className="small no-margin pull-left sm-pull-reset">
                            <span className="hint-text">Copyright © 2015</span>
                            <span className="font-montserrat">Standard Report</span>.
                            <span className="hint-text">All rights reserved.</span>
                            <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a>
                                      </span>
                          </p>
                          <p className="small no-margin pull-right sm-pull-reset">
                            <a href="#">Hand-crafted</a>
                            <span className="hint-text">&amp; Made with Love ®</span>
                          </p>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                      {/* END FOOTER */}
                    </div>
                    {/* END PAGE CONTENT WRAPPER */}
                  </div>
                  {/* END PAGE CONTAINER */}
            </div>
        )
    }
});

module.exports = StandardReportApp;
