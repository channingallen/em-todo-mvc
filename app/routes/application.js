import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.store.createRecord('task', { id: 1, name: 'eat' });
    this.store.createRecord('task', { id: 2, name: 'sleep' });
    this.store.createRecord('task', { id: 3, name: 'fuck', completed: true });
    this.store.createRecord('task', { id: 4, name: 'code' });
  },

  model() {
    return this.store.filter('task', function () {
      return true;
    });
  },

  setupController(controller, model) {
    controller.set('tasks', model);
  }
});
