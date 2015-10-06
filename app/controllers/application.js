import Ember from 'ember';

export default Ember.Controller.extend({
  completedTasksExist: Ember.computed('tasks.@each.completed', function () {
    return this.get('tasks').filterBy('completed').get('length') > 0;
  }),

  actions: {
    handleInputEnter(inputValue) {
      // find the number of tasks
      this.store.createRecord('task', { name: inputValue });
    },

    removeCompletedTasks() {
      this.store.peekAll('task').forEach(function (task) {
        if (task.get('completed')) {
          task.deleteRecord();
        }
      });
    },

    toggleCompleteAll() {
      let someTasksActive = false;
      this.store.peekAll('task').forEach(function (task) {
        if (!task.get('completed')) {
          someTasksActive = true;
        }
      });
      if (someTasksActive === true) {
        this.store.peekAll('task').forEach(function (task) {
          task.set('completed', true);
        });
      } else {
        this.store.peekAll('task').forEach(function (task) {
          task.set('completed', false);
        });
      }
    }
  }
});
