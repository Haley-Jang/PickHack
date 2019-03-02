
function work () {
    var thing = document.getElementById("penis");
    var search = document.getElementById("searchbox").value;
const http = new XMLHttpRequest();
const url = "https://api.nal.usda.gov/ndb/search/?format=json&q="+search+"&max=10&offset=0&api_key=0VFfh2njUUNOAIkGcRzmgUOkbLDUKcRtP8t1ZSjY";
http.open("GET", url);
http.send();
var jsonResponse;
http.onreadystatechange=(e)=>{
    thing.innerHTML = http.responseText;
    jsonResponse = JSON.parse(http.responseText);
    thing.innerHTML = jsonResponse.list.item[0].name;
}

  }
  function writeUserData(userId, name, email) {
    var database = firebase.database();
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    });
  }