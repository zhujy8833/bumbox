//models/song.js
import DS from 'ember-data';

export default DS.Model.extend({
    track : DS.attr('number'),
    name : DS.attr(),
    duration : DS.attr('number'),
    url : DS.attr(),
    album : DS.belongsTo('album')
});