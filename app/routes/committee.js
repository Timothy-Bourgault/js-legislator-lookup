import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var committeeURL = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&committee_id=' + params.committee_id;
    var subcommitteeURL = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&parent_committee_id=' + params.committee_id;
    var membersURL = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&committee_id=' + params.committee_id + '&fields=members';

    var parentcommittee = Ember.$.getJSON(committeeURL).then(function(responseJSON) {
      console.log(responseJSON.results[0]);
      return responseJSON.results[0];
    });
    var subcommittees = Ember.$.getJSON(subcommitteeURL).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
    var committeemembers = Ember.$.getJSON(membersURL).then(function(responseJSON) {
      console.log(responseJSON.results[0].members);
      return responseJSON.results[0].members;
    });

    return Ember.RSVP.hash({
      parentcommittee: parentcommittee,
      subcommittees: subcommittees,
      committeemembers: committeemembers
    });
  }
});
