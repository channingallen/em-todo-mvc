import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  inputViewName: 'whatever',

  actions: {
    submitNewTask(inputValue) {
      this.attrs.enter(inputValue);

      const inputViewName = this.get('inputViewName');
      const inputComponent = this.get(inputViewName);
      inputComponent.set('value', null);
    }
  }
});
