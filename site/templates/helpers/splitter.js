module.exports = function(data) {
    var items = data.split(','),
        html = '',
        i;
    for (i=0; i<items.length; i+=1) {
        html += '<div class="tech">' + items[i] + '</div>';
    }
    return html;
}
