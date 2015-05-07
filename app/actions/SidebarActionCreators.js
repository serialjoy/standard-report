var AdminConstants = require('../constants/AdminConstants');
var AdminDispatcher = require('../dispatchers/AdminDispatcher');

var ActionTypes = AdminConstants.ActionTypes;

module.exports = {

  switchView: function(view_name) {
    AdminDispatcher.handleSidebarAction({
      type: ActionTypes.SWITCH_VIEW,
      view_name: view_name
    });
  }

};
