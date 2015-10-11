import Ember from 'ember';

export default Ember.Controller.extend({
  completedTasksExist: Ember.computed('tasks.@each.completed', function () {
    return this.get('tasks').filterBy('completed').get('length') > 0;
  }),

  numActiveTasks: Ember.computed('tasks.@each.completed', function () {
    return this.get('tasks').rejectBy('completed').get('length');
  }),

  numTasks: Ember.computed('tasks.@each.id', function () {
    return this.get('tasks').get('length');
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
