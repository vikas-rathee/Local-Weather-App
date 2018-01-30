function load(){
  $(".loader").fadeOut(2500);
}

$(document).ready(function(){

  setTimeout(load,500); //hide loader

if(navigator.geolocation)
 navigator.geolocation.getCurrentPosition(position);
function position(data){
  var Lat = data.coords.latitude;
  var Lon = data.coords.longitude;
    $.getJSON(" https://fcc-weather-api.glitch.me/api/current?lat=" + Lat + "&lon=" + Lon , function(response){// user weather data using coord


      $("#city-name").text(response.name);
      var temp = response.main.temp;
      $("#temp").html("Temp: " + temp + "<sup>o</sup>C"); //temp

      let image = document.createElement("IMG"); //image
      image.src = response.weather[0].icon;
      $("#icon").html(image);

      $("#humidity").text("Humidity: " + response.main.humidity);//humidity

      $("#lon").text("Longitude: " + response.coord.lon);// longitude

      $("#lat").text("Latitude: " + response.coord.lat); // latitude

      setTimeout(myFun,3000); //for background to appear


      function myFun(){
        //Changing background image

        if(temp < 15)
        {
          $("body").css("background-image", "url(https://lh6.ggpht.com/enztaio6EQZG3Hhhup5Kd437l_dytYJkDSBiv7wrmLA7PKQOwODP02IB-dMUAHuJUQ=h900)");
          $("body").css("color", "#ffff52");
        }else{
            $("body").css("background-image", "url(http://www.dailyroxette.com/wp-content/uploads/2015/08/332629-safe_image.jpg)");
            $("body").css("color", "#ff5252");
         }

        $(".content").fadeIn(1000);
      }




      //Changing Temperture units
      var unit = 'C';
      $(".unit-change").click(function(){
        if(unit == 'C')
        {
           temp = (temp * 1.8) +32;
          unit = 'F';
        }else {
           temp = (temp - 32) * 0.556;
          unit = 'C';
        }
        $("#temp").html("Temp: " + temp.toFixed(2) + "<sup>o</sup>" + unit);
      });
    });
}
});
