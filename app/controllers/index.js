import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    renameTask(task, newName) {
      task.set('name', newName);
    },

    removeTask(task) {
      task.deleteRecord();
    },

    toggleTaskStatus(task, statusAfterToggle) {
      task.set('completed', statusAfterToggle);
    }
  }
});
