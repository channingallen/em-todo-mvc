import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    window.$E = this;

    this.store.createRecord('todo', {
      title: 'Learn Ember.js',
      isCompleted: true
    });

    this.store.createRecord('todo', {
      title: '...',
      isCompleted: true
    });

    this.store.createRecord('todo', {
      title: 'Profit!',
      isCompleted: true
    });
  }
});
