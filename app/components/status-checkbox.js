import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['task__status-checkbox'],

  tagName: 'div',

  actions: {
    toggleStatus() {
      this.attrs.toggle(!this.attrs.checked);
    }
  }
});
