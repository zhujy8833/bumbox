import Ember from 'ember';

var formatDuration = function(seconds) {
    var min, sec;
    if(!seconds) {
        min = "0";
        sec = "00"
    } else {
        min = Math.floor(seconds / 60);
        sec = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60;
    }
    return [min, sec].join(":");
};

export default Ember.Handlebars.makeBoundHelper(formatDuration);