import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeTask(task) {
      task.deleteRecord();
    }
  }
});
