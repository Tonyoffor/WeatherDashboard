var apiKey = 'ae15a36edcdc75c39fec6b795ef5ca98';
var searchbar = document.getElementById('searchbar');
var cityName;
var search_btn = document.getElementById("search_btn")




function getApi(){

  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + apiKey;
  //var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
   

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++)
        var cityname = document.createElement('li');
        var tableData = document.createElement('li');
        var link = document.createElement('p');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        cityname.appendChild(tableData);
        tableBody.appendChild(cityname);
      }
    )};


    search_btn.addEventListener('click', getApi);
