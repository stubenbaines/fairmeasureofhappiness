// Uses band.js library for web audio. 
$(function() {

    var tune = new BandJS();
    tune.setTimeSignature(2, 4);
    tune.setTempo(90);

    var lead = tune.createInstrument('sine', 'oscillators'),
        voice2 = tune.createInstrument('sine', 'oscillators'),
        voice3 = tune.createInstrument('sine', 'oscillators');
    lead.note('eighth', 'D4')
        .note('eighth', 'E4')
        .note('quarter', 'B5');
    lead.finish();

    voice2.rest('quarter');
    voice2.note('quarter', 'D5');
    voice2.finish();
    voice3.rest('quarter');
    voice3.note('quarter', 'E5');
    voice3.finish();

    tune.end();

    function play() {
        tune.play();
    }

    $('.footer-logo a').on('click', function() {
        play();
        return false;
    });
});



