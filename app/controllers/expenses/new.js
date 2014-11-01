import Ember from 'ember';

export default Ember.Controller.extend({

    init: function() {

        //this.set('model.date', new Date());

    },

    actions: {

        save: function() {

            var expense = this.store.createRecord('expense', this.get('model'));

            var self = this;

            var onSuccess = function() {
              self.transitionToRoute('expenses');
            };

            var onFail = function() {
              // deal with the failure here
            };

            expense.save().then(onSuccess, onFail);

        }

    }

});
