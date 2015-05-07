var StandardReportApp = require('./components/StandardReportApp.react');
var React = require('react');

window.React = React;

React.render(
        <StandardReportApp />,
        document.getElementById('standardreport-app')
    );
