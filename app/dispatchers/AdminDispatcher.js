var AdminConstants = require('../constants/AdminConstants');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AdminDispatcher = assign(new Dispatcher(), {
    handleSidebarAction: function(payload) {
        var payload = {
            source: AdminConstants.PayloadSources.SIDEBAR_ACTION,
            action: payload.type,
            view_name: payload.view_name
        };
        this.dispatch(payload);
    }

});

module.exports = AdminDispatcher;
