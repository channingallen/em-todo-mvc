import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('task').filterBy('completed');
  },

  setupController(controller, model) {
    controller.set('tasks', model);
  }
});
