import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleTaskStatus(task) {
      var initialTaskStatus = task.get('completed');
      task.set('completed', !initialTaskStatus);
    }
  }
});
