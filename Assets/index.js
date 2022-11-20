var apiKey = 'ae15a36edcdc75c39fec6b795ef5ca98';
var currentHumidity;
var futureHumidity;
var cityname;
var futureWindspeed;
var currentWindspeed;
var currentDate;
var search_btn = document.getElementById("search_btn");
 document.getElementById("display").innerHTML =" ";



function getApi(){

//we couldn't find the lat and lon so needed to use a different api call
  //var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + apiKey;
 // var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
  //console.log('https://api.openweathermap.org/data/2.5/weather?q=undefined&units=imperial&appid=ae15a36edcdc75c39fec6b795ef5ca98') 
  var searchbar = document.getElementById('searchbar').value;
  var requestUrl="https://api.openweathermap.org/data/2.5/weather?q="+ searchbar +"&appid=" +apiKey;
  var futureConditonUrl= "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname +"&appid=" +apiKey;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) { 
       var currentConditonBtn = document.createElement('button');
       currentConditonBtn.innerHTML = "current conditions ";
       document.getElementById("display").innerHTML =" ";
       currentConditonBtn.onclick = displayCurrentData;
       cityname = data.name;
       var historyCity= document.createElement("p");
       historyCity.innerHTML=cityname;

       historyCity.addEventListener("click", function(){
        Historycal(this);
       });
       document.getElementById("History").appendChild(historyCity);
       currentHumidity = data.main.humidity;
       currentWindspeed = data.wind.speed;
      
       var futureConditonBtn = document.createElement('button');
       futureConditonBtn.innerHTML = "future conditons ";
       futureConditonBtn.onclick = displayfutureData;
       document.getElementById("display").appendChild(currentConditonBtn);
       document.getElementById("display").appendChild(futureConditonBtn);
    })};

function displayCurrentData(){
  currentDate = new Date();
  document.getElementById("display").innerHTML+= "<br>"+ cityname + "<br>" + currentHumidity+ "<br>" + currentWindspeed +"<br>" + currentDate;
};


//api.openweathermap.org/data/2.5/forecast?q= cityname &appid= apiKey

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
    futureConditonBtn.onclick = displayfutureData;
    document.getElementById("display").appendChild(currentConditonBtn);
       document.getElementById("display").appendChild(futureConditonBtn);
    
 })};

function displayfutureData(){
  currentDate = new Date();
  document.getElementById("display").innerHTML+= "<br>"+ cityname + "<br>" + futureHumidity+ "<br>" + futureWindspeed +"<br>" + currentDate;
};
 

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
    