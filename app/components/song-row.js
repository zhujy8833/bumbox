
import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
    isPlaying : false,
    tagName : "tr",

    player : inject.service(),
    actions : {
        pause : function() {
            this.get('player').pause(this.get('song'));
            this.set('isPlaying', false);
        },

        play : function() {
            this.get('player').play(this.get('song'));
            this.set('isPlaying', true);
        }
    }
});
