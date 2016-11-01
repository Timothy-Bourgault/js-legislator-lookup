import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url;
    if(this.chamber){
      url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&history.active=true&chamber=' + this.chamber + '&order=last_action_at&per_page=25';
    }
    else {
      url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&history.active=true&order=last_action_at&per_page=25';
    }
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(url);
      return responseJSON.results;
    });
  },
  actions: {
   changeChamber(option) {
     this.set('chamber', option);
     this.refresh();
   }
 }
});
