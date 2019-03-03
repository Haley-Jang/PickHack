
function work() {
  var search = document.getElementById("searchbox").value;
  const http = new XMLHttpRequest();
  const url = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + search + "&max=4&offset=0&api_key=0VFfh2njUUNOAIkGcRzmgUOkbLDUKcRtP8t1ZSjY";
  http.open("GET", url);
  http.send();
  var jsonResponse;
  http.onreadystatechange = (e) => {
    jsonResponse = JSON.parse(http.responseText);
    var ndbnos = [" ", " ", " ", " "];
    for (var p = 0; p < 4; p++) {
      ndbnos[p] = jsonResponse.list.item[p].ndbno;
    }
    var table = document.getElementById("mytab1");
    for (var i = 1, row; row = table.rows[i]; i++) {
      //iterate through rows
      //rows would be accessed using the "row" variable assigned in the for loop
      var url1 = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbnos[i] + "&type=b&format=json&api_key=0VFfh2njUUNOAIkGcRzmgUOkbLDUKcRtP8t1ZSjY";
        var http1 = new XMLHttpRequest();
        console.log(ndbnos);
        http1.open("GET", url1);
        http1.send();
        var jsonResponse1;
        http1.onreadystatechange = (e) => {
          jsonResponse1 = JSON.parse(http1.responseText);
          console.log(jsonResponse1);
        }
      for (var j = 0, col; col = row.cells[j]; j++) {
        console.log(jsonResponse1.report.food.name);
      }
    }

  }
  function writeUserData(userId, name, email) {
    var database = firebase.database();
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    });
  }
}