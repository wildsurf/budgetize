import Ember from 'ember';

export default Ember.Controller.extend({

    total: function() {

        var total = 0;

        this.get('model').forEach(function(expense) {
            total += parseInt(expense.get('amount'),10);
        });

        return total;

    }.property('model.@each'),

    actions: {

        deleteExpense: function(expense) {

            this.store.find('expense', expense.get('id')).then(function (expense) {
                expense.destroyRecord(); // => DELETE to /posts/2
            });

        }

    }

});
