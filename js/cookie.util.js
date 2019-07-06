/* simple functions for manipulating key value cookies */
function getCookie(name)
{
    var cookie = document.cookie.split(';').filter(function(item) {
        return item.trim().indexOf(name + '=') == 0
    });
    if (cookie.length) {
        return cookie[0].trim().split(name + '=')[1];
    }
    return false;
}
function setCookie(name, value)
{
    document.cookie = name + '=' + value;
}
