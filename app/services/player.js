import Ember from 'ember';

var run = Ember.run;

export default Ember.Service.extend({
    isPlaying : false,
    audioElement : null,
    song : null,

    setUpAudioElement : function(){
        var ele = document.createElement('audio');
        ele.addEventListener('play', run.bind(this, 'didStartPlaying'));
        ele.addEventListener('pause', run.bind(this, 'didPause'));
        this.set('audioElement', ele);
    }.on('init'),

    didStartPlaying : function() {
        this.set('isPlaying', true);
    },

    didPause : function() {
        this.set('isPlaying', false);
    },

    play : function(song) {
        this.set('song', song);
        this.set('audioElement.src', song.get('url'));
        this.get('audioElement').play();
    },

    pause : function() {
        this.get('audioElement').pause();
    },

    willDestroy : function() {
        this.get('audioElement').pause();
        this.set('audioElement.src', '');
    }
});
