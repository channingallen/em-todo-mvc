import Ember from 'ember';

export default Ember.Controller.extend({
  completedTasksExist: Ember.computed('tasks.@each.completed', function () {
    return this.get('tasks').filterBy('completed').get('length') > 0;
  }),

  actions: {
    completeAllTasks() {
      this.store.peekAll('task').forEach(function (task) {
        task.set('completed', true);
      });
    },

    removeCompletedTasks() {
      this.store.peekAll('task').forEach(function (task) {
        if (task.get('completed')) {
          task.deleteRecord();
        }
      });
    }
  }
});
