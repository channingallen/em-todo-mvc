import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  actions: {
    submitNewTask(inputValue) {
      this.attrs.enter(inputValue);
      this.set('inputValue', '');
    }
  }
});
