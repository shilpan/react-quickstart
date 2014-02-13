/**
 * @jsx React.DOM
 */

var React = require('react'),
    Router = require('react-router-component'),
    Pages = Router.Pages,
    Page = Router.Page

var MainPage = require('./pages/MainPage'),
     UserPage = require('./pages/UserPage'),
     SiteBoilerPlate = require('./views/SiteBoilerPlate');

var App = React.createClass({

  onClick: function(e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      this.refs.router.navigate(e.target.attributes.href.value);
    }
  },

  render: function() {
    return (
      <SiteBoilerPlate>
        <Pages ref="router" onClick={this.onClick} path={this.props.path}>
          <Page path="/" handler={MainPage} />
          <Page path="/users/:username" handler={UserPage} />
        </Pages>
      </SiteBoilerPlate>
    );
  }
});

module.exports = App;
