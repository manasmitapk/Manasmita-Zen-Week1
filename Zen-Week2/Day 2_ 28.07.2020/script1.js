// Create a request variable and assign a new XMLH
var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/all';
// Open a new connection, using the GET request on the URL endpo
request.open('GET',url_string , true)
request.send();
request.onload = function() {
	// Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}