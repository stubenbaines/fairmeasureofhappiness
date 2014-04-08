module.exports = function(data) {
    var i;
        html = '';
    for (i in data) {
        html += '<p>' + i + ': ' + data[i] + '</p>';
    }
    return html;
}

