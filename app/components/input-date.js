import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'date',
  value: null,
  date: function(key, date) {
    var value;

    if (date) {
      this.set('value', date.toISOString().substring(0, 10));
    } else {
      value = this.get('value');
      if (value) {
        date = new Date(value);
      } else {
        date = null;
      }
    }
    return date;

  }.property('value')

});
