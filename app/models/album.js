//models/album.js
import DS from 'ember-data';

export default DS.Model.extend({
    artwork : DS.attr(),
    name : DS.attr(),
    artist : DS.attr(),
    isExplicit : DS.attr('boolean', {defaultValue : false}),
    songs : DS.hasMany('song')
});
