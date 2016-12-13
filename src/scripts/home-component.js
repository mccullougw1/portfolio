const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const HomeView = React.createClass({
   render: function(){
      return(
         <div className="content-container">
            <div className="header-container">
               <h1>William E. McCullough</h1>
               <h2>Front-End Engineer</h2>
            </div>

            <div className="icon-container">
               <button className="resume-button">
                  <i className="fa fa-clipboard icon" aria-hidden="true"></i>
               </button>
               <button className="github-button">
                  <i className="fa fa-github icon" aria-hidden="true"></i>
               </button>
               <button className="">
                  <i className="fa fa-envelope-open icon" aria-hidden="true"></i>
               </button>
            </div>

            <div className="about-me-container">
               <h1>This area is about me...</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="image-container parralax">
               <div className="work-better">
               </div>
            </div>

            <div className="projects-container">
               <h1>Projects here</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
         </div>
      )
   }
})


module.exports = HomeView
