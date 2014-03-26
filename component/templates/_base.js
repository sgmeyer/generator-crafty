module.export = Crafty.c('<%= name %>', {

  _placeholder: "..",

  init: function() {
    // called when this component is added to an entity
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  <%= name %>: function(placeholder) {
    this.placeholder = placeholder;
  }

});
