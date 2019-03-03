
function work() {
  var search = document.getElementById("searchbox").value;
  const http = new XMLHttpRequest();
  const url = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + search + "&max=5&offset=0&api_key=0VFfh2njUUNOAIkGcRzmgUOkbLDUKcRtP8t1ZSjY";
  http.open("GET", url);
  http.send();
  var jsonResponse;
  http.onreadystatechange = (e) => {
    jsonResponse = JSON.parse(http.responseText);
    var ndbnos = [" ", " ", " ", " "];
    for (var p = 0; p < 5; p++) {
      ndbnos[p] = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + jsonResponse.list.item[p].ndbno + "&type=b&format=json&api_key=0VFfh2njUUNOAIkGcRzmgUOkbLDUKcRtP8t1ZSjY";
    }
    var table = document.getElementById("mytab1");

    var http1;
    var jsonResponse1;
    http1 = new XMLHttpRequest();
    http1.open("GET", ndbnos[0]);
    http1.send();
    http1.onreadystatechange = (e) => {
      jsonResponse1 = JSON.parse(http1.responseText);
      table.rows[1].cells[0].innerHTML = jsonResponse1.report.food.name.toLowerCase().split("upc")[0];
      table.rows[1].cells[1].innerHTML = jsonResponse1.report.food.nutrients[0].value;
      table.rows[1].cells[4].innerHTML = jsonResponse1.report.food.nutrients[1].value;
      table.rows[1].cells[2].innerHTML = jsonResponse1.report.food.nutrients[4].value;
      table.rows[1].cells[3].innerHTML = jsonResponse1.report.food.nutrients[3].value;

      var http2;
      var jsonResponse2;
      http2 = new XMLHttpRequest();
      http2.open("GET", ndbnos[1]);
      http2.send();
      http2.onreadystatechange = (e) => {
        jsonResponse2 = JSON.parse(http2.responseText);
        table.rows[2].cells[0].innerHTML = jsonResponse2.report.food.name.toLowerCase().split("upc")[0];
        table.rows[2].cells[1].innerHTML = jsonResponse2.report.food.nutrients[0].value;
        table.rows[2].cells[4].innerHTML = jsonResponse2.report.food.nutrients[1].value;
        table.rows[2].cells[2].innerHTML = jsonResponse2.report.food.nutrients[4].value;
        table.rows[2].cells[3].innerHTML = jsonResponse2.report.food.nutrients[3].value;

        var http3;
        var jsonResponse3;
        http3 = new XMLHttpRequest();
        http3.open("GET", ndbnos[2]);
        http3.send();
        http3.onreadystatechange = (e) => {
          jsonResponse3 = JSON.parse(http3.responseText);
          table.rows[3].cells[0].innerHTML = jsonResponse3.report.food.name.toLowerCase().split("upc")[0];
          table.rows[3].cells[1].innerHTML = jsonResponse3.report.food.nutrients[0].value;
          table.rows[3].cells[4].innerHTML = jsonResponse3.report.food.nutrients[1].value;
          table.rows[3].cells[2].innerHTML = jsonResponse3.report.food.nutrients[4].value;
          table.rows[3].cells[3].innerHTML = jsonResponse3.report.food.nutrients[3].value;

          var http4;
          var jsonResponse4;
          http4 = new XMLHttpRequest();
          http4.open("GET", ndbnos[3]);
          http4.send();
          http4.onreadystatechange = (e) => {
            jsonResponse4 = JSON.parse(http4.responseText);
            table.rows[4].cells[0].innerHTML = jsonResponse4.report.food.name.toLowerCase().split("upc")[0];
            table.rows[4].cells[1].innerHTML = jsonResponse4.report.food.nutrients[0].value;
            table.rows[4].cells[4].innerHTML = jsonResponse4.report.food.nutrients[1].value;
            table.rows[4].cells[2].innerHTML = jsonResponse4.report.food.nutrients[4].value;
            table.rows[4].cells[3].innerHTML = jsonResponse4.report.food.nutrients[3].value;
  
            var http5;
            var jsonResponse5;
            http5 = new XMLHttpRequest();
            http5.open("GET", ndbnos[4]);
            http5.send();
            http5.onreadystatechange = (e) => {
              jsonResponse5 = JSON.parse(http5.responseText);
              table.rows[5].cells[0].innerHTML = jsonResponse5.report.food.name.toLowerCase().split("upc")[0];
              table.rows[5].cells[1].innerHTML = jsonResponse5.report.food.nutrients[0].value;
              table.rows[5].cells[4].innerHTML = jsonResponse5.report.food.nutrients[1].value;
              table.rows[5].cells[2].innerHTML = jsonResponse5.report.food.nutrients[4].value;
              table.rows[5].cells[3].innerHTML = jsonResponse5.report.food.nutrients[3].value;
    
    
            }
          }
        }

      }
    }


  }
}