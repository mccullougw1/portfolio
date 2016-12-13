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

            <div className="image-wrapper">
               <div className="image-container parralax">
                  <div className="work-better">
                  </div>
               </div>
            </div>


            <div className="about-me-container">
               <h1>This area is about me...</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>



            <div className="projects-container">
               <h1>My Projects</h1>
               <div className="row">

                  <div className="project-1 project col s12 m4">
                     <h3>WHOSPLAYIN</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <div className="row">
                        <div className="button-wrapper col s12 m6">
                           <button className="btn btn-default">Github</button>
                        </div>
                        <div className="button-wrapper col s12 m6">
                           <button className="btn btn-default"><h6>Live Site</h6></button>
                        </div>
                     </div>
                  </div>

                  <div className="project-2 project col s12 m4">
                     <h3>Project 2</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <div className="row">
                        <div className="button-wrapper col s12 m6">
                           <button className="btn btn-default">Github</button>
                        </div>
                        <div className="button-wrapper col s12 m6">
                           <button className="btn btn-default"><h6>Live Site</h6></button>
                        </div>
                     </div>
                  </div>

                  <div className="project-3 project col s12 m4">
                     <h3>Project 3</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <div className="row">
                        <div className="button-wrapper col s12 m6">
                           <button className="btn btn-default">Github</button>
                        </div>
                        <div className="button-wrapper col s12 m6">
                           <button className="btn btn-default"><h6>Live Site</h6></button>
                        </div>
                     </div>
                  </div>

               </div>
            </div>


            <div className="footer row">
               <div className="col s12 m4">
                  <button className="btn btn-default ">Contact me</button>
               </div>
               <div className="col s12 m4">
                  <button className="btn btn-default ">Contact me</button>
               </div>
               <div className="col s12 m4">
                  <button className="btn btn-default ">Contact me</button>
               </div>
            </div>

         </div>
      )
   }
})


module.exports = HomeView
