import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var subcommitteeURL = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&committee_id=' + params.subcommittee_id;
    var membersURL = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&committee_id=' + params.subcommittee_id + '&fields=members';

    var subcommittee = Ember.$.getJSON(subcommitteeURL).then(function(responseJSON) {
      console.log(responseJSON.results[0]);
      return responseJSON.results[0];
    });
    var committeemembers = Ember.$.getJSON(membersURL).then(function(responseJSON) {
      console.log(responseJSON.results[0].members);
      return responseJSON.results[0].members;
    });

    return Ember.RSVP.hash({
      subcommittee: subcommittee,
      committeemembers: committeemembers
    });
  }
});
