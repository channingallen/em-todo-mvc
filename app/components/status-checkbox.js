import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  actions: {
    toggleStatus() {
      this.attrs.toggle(!this.attrs.checked);
    }
  }
});
