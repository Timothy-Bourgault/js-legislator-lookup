import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&bill_id=' + params.bill_id;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results[0]);
      return responseJSON.results[0];
    });
  }
});
