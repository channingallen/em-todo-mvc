import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['add-task-row__input-container'],

  tagName: 'span',

  actions: {
    submitNewTask(inputValue) {
      this.attrs.enter(inputValue);
      this.set('inputValue', '');
    }
  }
});
