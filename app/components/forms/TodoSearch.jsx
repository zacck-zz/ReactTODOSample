var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {

    },
    render: function() {
      var {dispatch, showCompleted, searchText} = this.props;
       return(
               <div className="container__header">
                <div>
                  <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={this.handleSearch}/>
                </div>
                <div>
                  <label>
                    <input type="checkbox" ref="showCompleted" checked="showCompleted" onChange={this.handleSearch}/>
                    Show Completed Todos
                  </label>
                </div>
               </div>
             );
    }
});

module.exports = TodoSearch;
