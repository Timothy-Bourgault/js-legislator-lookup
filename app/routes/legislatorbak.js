import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators?apikey=' + key + '&bioguide_id=' + legislator_id + '&all_legislators=true';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
