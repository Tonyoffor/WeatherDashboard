// These are all the varibales
var apiKey = 'ae15a36edcdc75c39fec6b795ef5ca98';
var currentHumidity;
var futureHumidity;
var cityname;
var futureWindspeed;
var currentWindspeed;
var currentDate;
var currentConditon;
var lat;
var lon;
var search_btn = document.getElementById("search_btn");
 document.getElementById("display").innerHTML =" ";

// below is the function that is first activated to grab data from the website when the user searches
function getApi(){

//we couldn't find the lat and lon so needed to use a different api call
  //var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + apiKey;
 // var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
  //console.log('https://api.openweathermap.org/data/2.5/weather?q=undefined&units=imperial&appid=ae15a36edcdc75c39fec6b795ef5ca98') 
  var searchbar = document.getElementById('searchbar').value;
  var requestUrl="https://api.openweathermap.org/data/2.5/weather?q="+ searchbar +"&appid=" +apiKey;
  
  // below is the fetch comand that creates and displays the current and future P tags 
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) { 
       var currentConditon = document.createElement('p');
       var futureConditon = document.createElement('p');
       currentConditon.innerHTML = "current conditions ";
       futureConditon.innerHTML = "future conditions ";
       document.getElementById("display").innerHTML =" ";
       document.getElementById("display").appendChild(currentConditon);
       document.getElementById("display").appendChild(futureConditon);
       currentConditon.onclick = displayCurrentData;
       cityname = data.name;
       var historyCity= document.createElement("p");
       historyCity.innerHTML=cityname;

       historyCity.addEventListener("click", function(){
        Historycal(this);
       });
       document.getElementById("History").appendChild(historyCity);
       currentHumidity = data.main.humidity;
       currentWindspeed = data.wind.speed;
    })
  
    // the fetch below is used to call the forcast data from opeanweather
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=" +apiKey)
                .then(function (response)  {
                    return response.json()
              })
                .then(function (data) { 
                  console.log(data)
                  cityname = data.name;
                 
                })
    var futureConditon = document.createElement('p');
    var currentConditon = document.createElement('p');
    futureConditon.innerHTML = "future conditons ";
    futureConditon.onclick = displayfutureData;
    document.getElementById("display").appendChild(currentConditon);
    document.getElementById("display").appendChild(futureConditon);
  };

  //this function shows the current data infromation
function displayCurrentData(){
  currentDate = new Date();
  document.getElementById("display").innerHTML+= "<br>"+ cityname + "<br>" + currentHumidity+ "<br>" + currentWindspeed +"<br>" + currentDate;
};




//This function is called when a user want to see the weather conditons from their history 
function Historycal(ptag){
  
  document.getElementById("display").innerHTML =" ";
  var currentConditonBtn = document.createElement('button');
  currentConditonBtn.innerHTML = "current conditions ";
  currentConditonBtn.onclick = displayCurrentData;
  
  var requestUrl="https://api.openweathermap.org/data/2.5/weather?q="+ ptag.innerHTML +"&appid=" +apiKey;
  console.log(ptag.innerHTML);
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  }).then(function (data) { 
    cityname = data.name;
    currentHumidity = data.main.humidity;
    currentWindspeed = data.wind.speed;
   
    var futureConditonBtn = document.createElement('button');
    futureConditonBtn.innerHTML = "future conditons ";
    futureConditonBtn.onclick = displayfutureData(cityname);
    document.getElementById("display").appendChild(currentConditonBtn);
       document.getElementById("display").appendChild(futureConditonBtn);
    
 })};

function displayfutureData(cityname){
  fetchCoords(cityname);
  currentDate = new Date();
  document.getElementById("display").innerHTML+= "<br>"+ cityname + "<br>" + futureHumidity+ "<br>" + futureWindspeed +"<br>" + currentDate;

};
 
function fetchCoords() {

  var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityname +"&limit=5&appid=" +apiKey;
  fetch()
  .then()
  .then(
    fetchWeather(location)
  )
}

function fetchWeather(location) {

  var lat  = location;
  var lon  = location;
  var city = location.name;
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=" +apiKey;
}

    //currentDate = new Date();
//    console.log(data)

  //  console.log(data.name)
        //console.log(data.main.temp)
//         console.log(data.main.humidity)
//         console.log(data.wind.speed)
//         console.log( new Date());
      
//         var cityname = document.createElement('p');
//         var currentweather = document.createElement('li');
//         var link = document.createElement('p');

//         //THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// //h

//         for (var i = 0; i < data.length; i++)
//         var cityname = document.createElement('li');
//         var tableData = document.createElement('li');
//         var link = document.createElement('p');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         cityname.appendChild(tableData);
//         tableBody.appendChild(cityname);
//       }
   


    search_btn.addEventListener('click', getApi);
    