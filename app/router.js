import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('expenses', function() {
    this.route('new');
  });
  this.resource('expense', { path: '/expense/:id' });
  this.route('expenses/new');
});

export default Router;
