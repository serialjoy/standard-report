var React = require('react');

var InputForm = React.createClass({
    getInitialState: function() {
        return {

        }
    }
    , componentDidMount :function (){
        var dropzoneContainer = $(this.refs.dropzoneContainer.getDOMNode());
        var dropzone = $('<form />');
        dropzone.prop('action', '/file-upload');
        dropzone.prop('class', 'dropzone no-margin');
        //dropzone.html('<div className="fallback"><input name="file" type="file" multiple /></div>');
        dropzoneContainer.append(dropzone);
        dropzone.dropzone({
            url: "/file/post"
        });
    }
    , componentWillUnmount: function(){
        Dropzone.instances[0].destroy();
    }
    , render: function() {
        return (
                  <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">
                                Incarca fisier
                            </div>
                            <div className="tools">
                                <a className="collapse" href="javascript:;"></a>
                                <a className="config" data-toggle="modal" href="#grid-config"></a>
                                <a className="reload" href="javascript:;"></a>
                                <a className="remove" href="javascript:;"></a>
                            </div>
                        </div>
                        <div ref="dropzoneContainer" className="panel-body no-scroll no-padding">
                        </div>
                    </div>

                </div>
        )
    }
});

module.exports = InputForm;
