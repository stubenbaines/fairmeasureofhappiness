// Uses band.js library for web audio. 
var site = (function() {
    var tune,
        lead,
        voice2,
        voice3,
       
        setupTune = function() {
            tune = new BandJS();
            tune.setTimeSignature(2, 4);
            tune.setTempo(90);

            lead = tune.createInstrument('sine', 'oscillators');
            voice2 = tune.createInstrument('sine', 'oscillators');
            voice3 = tune.createInstrument('sine', 'oscillators');

            lead.note('eighth', 'D4')
                .note('eighth', 'E4')
                .note('quarter', 'B5')
                .finish();

            voice2.rest('quarter')
                .note('quarter', 'D5')
                .finish();

            voice3.rest('quarter')
                .note('quarter', 'E5')
                .finish();

            tune.setTicker(function() {});
            tune.end();
        },

        play = function() {
            tune.play();
        },
 
        init = function() {
            setupTune();
            $('.footer-logo a').on('click', function() {
                play();
                return false;
            });
        };
    return {
        initAudio : init
    };
})();

$(function() {
    // set up click/tap panels
    $('.grid-item').on('click touchstart', function(e){
        if ($(e.target).attr('href')) {
            return true;
        } else {
            $(this).toggleClass('flip');
            return false;
        }
    });
  
    var navMenu = $('nav ul'),
        menuToggle = $('.nav-menu');
     $(menuToggle).on('click touchstart', function(e) {
        e.preventDefault();
        navMenu.slideToggle(function(){
            if(navMenu.is(':hidden')) {
                navMenu.removeAttr('style');
            }
        });
    });
});



