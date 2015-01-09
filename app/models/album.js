//models/album.js
import DS from 'ember-data';

export default DS.Model.extend({
    artwork : DS.attr(),
    name : DS.attr(),
    artist : DS.attr(),
    isExplicit : DS.attr('boolean', {defaultValue : false}),
    songs : DS.hasMany('song'),

    songCount : function(){
        return this.get('songs.length')
    }.property('songs.length'),

    totalDuration : function() {
        return this.get('songs').reduce(function(prevValue, song) {
            return prevValue + song.get('duration');
        }, 0);
    }.property('songs.@each.duration')
});
