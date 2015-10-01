import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,

  actions: {
    handleInputEnter(inputValue) {
      this.attrs.rename(inputValue);
      this.set('editing', false);
    },
    
    startEditing() {
      this.set('editing', true);
    },

    stopEditing() {
      this.set('editing', false);
    }
  }
});
