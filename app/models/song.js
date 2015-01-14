//models/song.js
import DS from 'ember-data';
import Ember from 'ember';

var computed = Ember.computed;

export default DS.Model.extend({
    track : DS.attr('number'),
    name : DS.attr(),
    duration : DS.attr('number'),
    url : DS.attr(),
    album : DS.belongsTo('album'),

    artwork : computed.alias('album.artwork'),
    artist : computed.alias('album.artist')
});
