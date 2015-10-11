import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,

  tagName: 'span',

  _setEditingToFalse() {
    this.set('editing', false);
  },

  actions: {
    handleInputEnter(inputValue) {
      this.attrs.rename(inputValue);
      this._setEditingToFalse();
    },

    startEditing() {
      this.set('editing', true);
    },

    stopEditing() {
      this._setEditingToFalse();
    }
  }
});
