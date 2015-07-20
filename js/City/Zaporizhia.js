function getWeatherData(lang, cityID, fnOK, fnError) {
    navigator.geolocation.getCurrentPosition(locSuccess);

    function locSuccess(position) {
        // Check cache
        var cache = localStorage.weatherCache && JSON.parse(localStorage.weatherCache);
        var currDate = new Date();
        // If the cache is newer than 30 minutes, use the cache
        if(cache && cache.timestamp && cache.timestamp > currDate.getTime() - 30*60*1){
            fnOK.call(this, cache.data);
        } else {
            $.getJSON(
                    'http://api.openweathermap.org/data/2.5/forecast/daily?id=' + cityID + '&lang=' + lang + '&callback=?'+ '&units=metric',
                function (response) {
                    // Store the cache
                    localStorage.weatherCache = JSON.stringify({
                        timestamp: (new Date()).getTime(),	// getTime() returns milliseconds
                        data: response
                    });
                    // Call the function again
                    locSuccess(position);
                }
            );
        }
    }
}	

  

$(function() {
   
	
	
   getWeatherData('uk', '687700', fnOK, fnErr);   
    
    function fnOK(data) {
  
		
		var offset = (new Date()).getTimezoneOffset()*60*1000;
       //Today
        var localTime00 = new Date(data.list[0].dt*1000 - offset);
		var localTime00Human = moment(localTime00).format('dddd');
        var localTime00HumanLanguage = moment(localTime00).format("MMMM Do");
		var tempr00 = new Date (data.list[0].temp.day);
		var tempr00Round = Math.round(tempr00);
		var icon00 =(data.list[0].weather[0].icon); 
		var icon00Markup = '<img src="../images/Icons/'+ icon00 +'.png">'
		
		//tommorow
		var localTime01 = new Date(data.list[1].dt*1000 - offset);
		var localTime01Human = moment(localTime01).format('dddd');
        var localTime01HumanLanguage = moment(localTime01).format("MMMM Do");
		var tempr01 = new Date (data.list[1].temp.day);
		var tempr01Round = Math.round(tempr01);
		var icon01 =(data.list[1].weather[0].icon); 
		var icon01Markup = '<img src="../images/Icons/'+ icon01 +'.png">'
		
		var localTime02 = new Date(data.list[2].dt*1000 - offset);
		var localTime02Human = moment(localTime02).format('dddd');
        var localTime02HumanLanguage = moment(localTime02).format("MMMM Do");
		var tempr02 = new Date (data.list[2].temp.day);
		var tempr02Round = Math.round(tempr02);
		var icon02 =(data.list[2].weather[0].icon); 
		var icon02Markup = '<img src="../images/Icons/'+ icon02 +'.png">'
		
		var localTime03 = new Date(data.list[3].dt*1000 - offset);
		var localTime03Human = moment(localTime03).format('dddd');
        var localTime03HumanLanguage = moment(localTime03).format("MMMM Do");
		var tempr03 = new Date (data.list[3].temp.day);
		var tempr03Round = Math.round(tempr03);
		var icon03 =(data.list[3].weather[0].icon); 
		var icon03Markup = '<img src="../images/Icons/'+ icon03 +'.png">'
		
		var localTime04 = new Date(data.list[4].dt*1000 - offset);
		var localTime04Human = moment(localTime04).format('dddd');
        var localTime04HumanLanguage = moment(localTime04).format("MMMM Do");
		var tempr04 = new Date (data.list[4].temp.day);
		var tempr04Round = Math.round(tempr04);
		var icon04 =(data.list[4].weather[0].icon); 
		var icon04Markup = '<img src="../images/Icons/'+ icon04 +'.png">'
		
		var localTime05 = new Date(data.list[5].dt*1000 - offset);
		var localTime05Human = moment(localTime05).format('dddd');
        var localTime05HumanLanguage = moment(localTime05).format("MMMM Do");
		var tempr05 = new Date (data.list[5].temp.day);
		var tempr05Round = Math.round(tempr05);
		var icon05 =(data.list[5].weather[0].icon); 
		var icon05Markup = '<img src="../images/Icons/'+ icon05 +'.png">'
		
		var localTime06 = new Date(data.list[6].dt*1000 - offset);
		var localTime06Human = moment(localTime06).format('dddd');
        var localTime06HumanLanguage = moment(localTime06).format("MMMM Do");
		var tempr06 = new Date (data.list[6].temp.day);
		var tempr06Round = Math.round(tempr06);
		var icon06 =(data.list[6].weather[0].icon); 
		var icon06Markup = '<img src="../images/Icons/'+ icon06 +'.png">'


		
        console.dir(data);

	$('#1-1').html(localTime00Human);
	$('.2-1').html(tempr00Round);
	$('#3-1').html(icon00Markup); 
    $('#4-1').html(localTime00HumanLanguage);
	$('#5-1').html(data.list[0].weather[0].description);
	
	$('#1-2').html(localTime01Human);
	$('.2-2').html(tempr01Round);
	$('#3-2').html(icon01Markup);  
    $('#4-2').html(localTime01HumanLanguage);
	$('#5-2').html(data.list[1].weather[0].description);
	
	$('#1-3').html(localTime02Human);
	$('.2-3').html(tempr02Round);
	$('#3-3').html(icon02Markup);  
	$('#4-3').html(localTime02HumanLanguage);
	$('#5-3').html(data.list[2].weather[0].description);
	
	$('#1-4').html(localTime03Human);
	$('.2-4').html(tempr03Round);
	$('#3-4').html(icon03Markup); 
    $('#4-4').html(localTime03HumanLanguage);
	$('#5-4').html(data.list[3].weather[0].description);
	
	$('#1-5').html(localTime04Human);
	$('.2-5').html(tempr04Round);
	$('#3-5').html(icon04Markup);  
    $('#4-5').html(localTime04HumanLanguage);
	$('#5-5').html(data.list[4].weather[0].description);
	
	$('#1-6').html(localTime05Human);
	$('.2-6').html(tempr05Round);
	$('#3-6').html(icon05Markup);  
    $('#4-6').html(localTime05HumanLanguage);
	$('#5-6').html(data.list[5].weather[0].description);
	
	$('#1-7').html(localTime06Human);
	$('.2-7').html(tempr06Round);
	$('#3-7').html(icon06Markup); 
    $('#4-7').html(localTime06HumanLanguage);
	$('#5-7').html(data.list[6].weather[0].description);
	

}

	
    function fnErr(msg) {
      console.error(msg);   
    }
});
