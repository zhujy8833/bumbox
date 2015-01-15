import Ember from 'ember';

export default Ember.Component.extend({
    tagName : 'span',
    classNames : ['audio-control'],

    actions : {
        play : function() {
            this.sendAction('play');
        },
        pause : function() {
            this.sendAction('pause');
        }
    }
});
