// A script that rotates through various hellos
var helloArray = ['Aloha','Bonjour','Ciao','Hallo','Hello','Hi','Hola','Jambo','Mambo','Salam','Salut','Shalom'];
var helloIs = getCookie('hello');
if (!helloIs) {
    helloIs = helloArray[Math.floor(Math.random()*helloArray.length)];
    setCookie('hello', helloIs);
}
document.getElementById('hello').textContent = helloIs;