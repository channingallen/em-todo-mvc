import DS from 'ember-data';

/*export default DS.RESTAdapter.extend({
});*/

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
