/**
 * Backbone Collection iterator v0.1
 * https://github.com/jgoulah/backbone-collection-iterator
 */

_.extend(Backbone.Collection.prototype, {
    // return next model or the beginning if at the end
    next: function(model) {
        return this.at((this.indexOf(model) + 1));
    },

    // return the previous model or the end if at the beginning 
    prev: function(model) {
        return this.at((this.indexOf(model) - 1));
    }
});
