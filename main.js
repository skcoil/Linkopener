// This special eslint comment declares that the code below relies on
// a named function in the global scope.

/* global getUsefulContents */
function start() {
    document.getElementById('theButton').addEventListener('click', function(e) {
    var subdomain = document.getElementById("subdomain").value;
    if (subdomain.lastIndexOf('.') !== subdomain.length - 1) {
        subdomain += '.';
    }
        
    var res = 'http://' + subdomain + '/';
    window.open(res);
        
    e.preventDefault();
    return false;
});
}

document.addEventListener('DOMContentLoaded', start);
