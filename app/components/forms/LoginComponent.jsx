var React = require('react');

var LoginComponent = React.createClass({
    render: function() {
       return(
               <div>
                 <h1 className="page-title">Todo App</h1>
                 <div className="row">
                   <div className="columns small-centered small-10 medium-6 large-4">
                     <div className="callout callout-auth">
                       <h3>Login</h3>
                       <p> Login with Github account below.</p>
                       <button className="button"> Login With Github</button>
                     </div>
                   </div>
                 </div>

               </div>
             );
    }
});
module.exports =  LoginComponent;
