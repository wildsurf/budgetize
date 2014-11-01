import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    amount: DS.attr('number'),
    // category: DS.hasMany('category'),
    date: DS.attr('date', {
        defaultValue: function() { return new Date(); }
    })
});
