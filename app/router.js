import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('committee', {path: '/committees/:committee_id'});
  this.route('subcommittee', {path: '/committees/:committee_id/subcommittees/:subcommittee_id'});
  this.route('bills');
  this.route('bill', {path: '/bills/:bill_id'});
  this.route('legislators', {path: '/legislators/:legislator_id'});
});

export default Router;
