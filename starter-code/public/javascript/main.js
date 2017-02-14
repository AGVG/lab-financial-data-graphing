var array = [];
var dates = [];
var index = [];

var responses = $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json",
    method: "GET",
    success: function (response) {
      console.log(response);
      array = JSON.parse(response);
      index = Object.values(array.bpi);
      dates = Object.keys(array.bpi);
      var ctx = $("#myChart");
      var myChart = new Chart(ctx, {
          type: 'line',
          data : {
              //x-axis
              labels: dates,
              datasets: [
                  {
                      label: "My First dataset",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      //y-axis
                      data: index,
                      spanGaps: false,
                  }
              ]
          }
      });
    },
    error: function (err) {
      console.log(err);
    },
});



////////////////////////////////////////////////////////////////////////////////
//FORM
$('#date-form').on('input', function(event){
  event.preventDefault();

  var startDate = $('#start-date').val();
  var endDate = $('#end-date').val();
  var currency = $('#currency').val();

console.log(currency);
console.log(startDate);
console.log(endDate);


  $.ajax({
    url: `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`,
    method:"GET",
    success: function (response) {
      console.log(response);
      array = JSON.parse(response);
      index = Object.values(array.bpi);
      dates = Object.keys(array.bpi);
      var ctx = $("#myChart");
      var myChart = new Chart(ctx, {
          type: 'line',
          data : {
              //x-axis
              labels: dates,
              datasets: [
                  {
                      label: "My First dataset",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      //y-axis
                      data: index,
                      spanGaps: false,
                  }
              ]
          }
      });
    },
    error: function (err){
      console.log(err);
    }
  });
});
