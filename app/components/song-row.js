
import Ember from 'ember';

export default Ember.Component.extend({
    isPlaying : false,
    tagName : "tr",
    actions : {
        pause : function() {
            this.set('isPlaying', false);
        },

        play : function() {
            this.set('isPlaying', true);
        }
    }
});
