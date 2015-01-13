
import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
    tagName : "tr",

    classNameBindings: ['isCurrentSong:is-current-song'],

    player : inject.service(),

    song : null,

    isCurrentSong : function() {
        return this.get('player.song') === this.get('song');
    }.property('player.song', 'song'),

    isPlaying : function() {
        return this.get('isCurrentSong') && this.get('player.isPlaying');
    }.property('isCurrentSong', 'player.isPlaying'),

    actions : {
        pause : function() {
            this.get('player').pause();
        },

        play : function() {
            this.get('player').play(this.get('song'));
        }
    }
});
