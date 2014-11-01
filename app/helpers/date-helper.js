import Ember from 'ember';

export function dateHelper(date) {

    return date.toISOString().substring(0, 10);

};

export default Ember.Handlebars.makeBoundHelper(dateHelper);
