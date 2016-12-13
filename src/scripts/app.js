const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const HomeView = require('./home-component.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    "*path": "showHomePage"
  },

  showHomePage: function(){
    ReactDOM.render(<HomeView/>, document.querySelector("#app-container"));
},

  initialize: function(){
    Backbone.history.start();
  }
})

new AppRouter()
