import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  // model: function(params) {
  //   var key = config.myApiKey;
  //   var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&history.active=true&order=last_action_at&per_page=50';
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     console.log(params.chamber);
  //     return responseJSON.results;
  //   });
  // },
  actions: {
   changeChamber(option) {
     this.sendAction('changeChamber', option);
   }
 }
});
