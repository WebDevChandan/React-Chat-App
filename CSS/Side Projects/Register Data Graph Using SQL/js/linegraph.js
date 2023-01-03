$(document).ready(function(){
  $.ajax({
    url : "http://localhost/websites/CSS/Register%20Data%20Graph%20Using%20SQL/followersdata.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var id = [];
      var First_Name = [];

      for(var i in data) {
        id.push("id " + data[i].id);
        First_Name.push(data[i].First_Name);
      }

      var chartdata = {
        labels: id,
        datasets: [
          {
            label: "First_Name",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(59, 89, 152, 0.75)",
            borderColor: "rgba(59, 89, 152, 1)",
            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            data: First_Name
          }
        ]
      };

      var ctx = $("#mycanvas");

      var LineGraph = new Chart(ctx, {
        type: 'line',
        data: chartdata
      });
    },
    error : function(data) {

    }
  });
});