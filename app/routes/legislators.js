import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators?apikey=' + key + '&bioguide_id=' + params.legislator_id + '&all_legislators=true';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results[0];
    });
  }
});
