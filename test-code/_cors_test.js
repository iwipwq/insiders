let requestURL = 'data_url';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let transactions = request.response;
    console.log(transactions);
}