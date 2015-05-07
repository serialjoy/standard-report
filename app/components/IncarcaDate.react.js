var React = require('react');
var InputForm = require('./incarcadate/inputform.react');


var IncarcaDate = React.createClass({
    getInitialState: function() {
        return {
            files: [
                {name:'name1', type: 'XLS', date: '20 Dec 2014'},
                {name:'namun nume foarte foarte lung e2', type: 'CSV', date: '15 Feb 2015'}
            ]

        }
    }
    , addFile: function(){
        var files_array = this.state.files;
        var today = Date().toString().split(" ");
        Dropzone.instances[0].files.forEach(function(file){
            files_array.push({
                name: file.name,
                type: file.type,
                date: today[2]+" "+today[1]+" "+today[3]
            })
        });
        this.setState({files:files_array});
        return false;
    }
    , render: function() {
        var current_files = [];
        this.state.files.forEach(function(item){
            current_files.push(
                <tr key={item.name}>
                  <td className="font-montserrat all-caps fs-12 col-lg-6">{item.name}</td>
                  <td className="text-left b-r b-dashed b-grey col-lg-3">
                    <span className="hint-text small">{item.type}</span>
                  </td>
                  <td className="col-lg-3">
                    <span className="font-montserrat fs-18">{item.date}</span>
                  </td>
                </tr>
            )
        })
        return (
<div className="content">
    <div className="container-fluid padding-25 sm-padding-10">
        <div className="col-sm-5">
            <div className="panel panel-transparent">
                <div className="panel-heading">
                    <div className="panel-title">Hello, bine ai venit pe Standard Report!
                    </div>
                </div>
                <div className="panel-body">
                    <h3>Incarca datele organizatiei tale</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br />
                    <div>
                        <div className="profile-img-wrapper m-t-5 inline">
                            <img width="35" height="35" src="assets/img/profiles/avatar_small.jpg" alt="" data-src="assets/img/profiles/avatar_small.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" />
                        </div>
                        <div className="inline m-l-10">
                            <p className="small hint-text">Lucian Stroe
                                <br /> CEO Standard Report
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-7">
            <div className="panel panel-transparent">
                <div className="panel-body">
                    <InputForm />
                    <br />
                    <form id="form-project" role="form" autoComplete="off">
                        Informatii de baza
                        <div className="form-group-attached">

                            <div className="row clearfix">
                                <div className="col-sm-6">
                                    <div className="form-group form-group-default required">
                                        <label>Nume coordonator</label>
                                        <input type="text" className="form-control" name="firstName" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group form-group-default required">
                                        <label>Prenume coordonator</label>
                                        <input type="text" className="form-control" name="lastName" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group form-group-default clearfix">
                                <label>Notes</label>
                                <textarea  type="text" className="form-control input-notes" name="projectName"  />
                            </div>
                        </div>

                        <br />
                        <div className="pull-left">
                            <div className="checkbox check-success  ">
                                <input type="checkbox" defaultChecked={true} value="1" id="checkbox-agree" />
                                <label htmlFor="checkbox-agree">Sunt de acord cu Termenii si Conditiile</label>
                            </div>
                        </div>
                        <br />
                        <button className="btn btn-success" onClick={this.addFile}>Trimite</button>
                    </form>
                </div>
            </div>
            <div className="panel panel-transparent">
                <div className="panel-body">
                    <table className="table table-condensed table-hover">
                            <thead>
                            <tr>
                                <th>Nume Fisier</th>
                                <th>Tip</th>
                                <th>Data</th>
                            </tr>
                            </thead>
                          <tbody>
                            {current_files}
                          </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
});

module.exports = IncarcaDate;
