// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if(this.console){
        console.log( Array.prototype.slice.call(arguments) );
    }
};

require.config({
    'paths': {
        'jquery': 'vendor/jquery-2.1.4.min',
        'vendors': 'vendor/vendor'/*,
        'templates': '../templates'*/
    }
});

require(['app'], function(App){

    'use strict';
    App.init();

});