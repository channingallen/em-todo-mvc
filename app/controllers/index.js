import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeTask(task) {
      task.deleteRecord();
    },

    toggleTaskStatus(task) {
      var initialTaskStatus = task.get('completed');
      task.set('completed', !initialTaskStatus);
    }
  }
});
