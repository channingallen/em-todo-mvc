import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('task').rejectBy('completed');
  },

  setupController(controller, model) {
    controller.set('tasks', model);
  }
});
