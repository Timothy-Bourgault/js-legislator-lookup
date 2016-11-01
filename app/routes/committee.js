import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&committee_id=' + params.committee_id;
    var url2 = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&parent_committee_id=' + params.committee_id;

    var parentcommittee = Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
    var subcommittees = Ember.$.getJSON(url2).then(function(responseJSON) {
      return responseJSON.results;
    });
    return Ember.RSVP.hash({
      parentcommittee: parentcommittee,
      subcommittees: subcommittees
    });
  }
});
