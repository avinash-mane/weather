document.addEventListener('keypress', function(e){
    if(e.which===13){
        makeAjaxCall();
    }
})


function makeAjaxCall() {
    let xhr = new XMLHttpRequest();
    var city = document.querySelector('#city').value;
    console.log(city);
    const requestType = "GET";
    const requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric"  + "&APPID=c812a81a294c94c2aa4ee117c49061d0";
    xhr.open(requestType, requestURL, true);

    //bind the response handler
    xhr.onload = function() {
        
        var data = JSON.parse(xhr.responseText);

        document.querySelector('#country').innerHTML= "country:  " + data.sys.country  ;
        document.querySelector('#description').innerHTML= "condition: " +  data.weather[0].description  ;
        document.querySelector('#block').innerHTML= "Temp: " + data.main.temp;
        if(data.weather[0].description=="rain"||data.weather[0].description=="light rain")
        {
            document.getElementById("x").src="rain.gif"
            document.getElementById("y").src="rain.gif" 
        }
        
        
        else if(data.main.temp>=25)
        {
            // var img = document.createElement("img");
 
            // img.src = "rain.gif";
            // var src = document.getElementById("img");
 
            // src.appendChild(img);
            document.getElementById("x").src="summer.gif"
            document.getElementById("y").src="summer.gif"
        }
        else
        {
            document.getElementById("x").src="winter.gif"
            document.getElementById("y").src="winter.gif"  
        }
        
        
        console.log(data.weather[0]);
    }
    

    // send the request to server
    xhr.send();
}