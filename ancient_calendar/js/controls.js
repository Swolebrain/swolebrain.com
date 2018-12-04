function loadControls(){
	/*
		INNER WHEEL
	
	*/
	//HOURS TEXT FIELD
	var hrs = document.getElementById("hours");
	hrs.oninput = function(evt){
		var parsed = parseInt(hrs.value);
		if (!isNaN(parsed) && parsed != ""){
			calendar.innerAngle = parsed*Math.PI/12;
			calendar.restore();
			calendar.render();
		}
		else if (hrs.value == "" || hrs.value == "0"){
			calendar.innerAngle = 0;
			calendar.restore();
		}
	}
	//MINUTES TEXT FIELD
	var mins = document.getElementById("minutes");
	mins.oninput = function(evt){
		var parsed = parseInt(mins.value);
		if (!isNaN(parsed) && parsed != ""){
			if (parsed >= 60){
				var parsedHrs = parseInt(hrs.value);
				if (typeof parsedHrs == "number" && hrs.value != ""){
					hrs.value = parsedHrs + Math.floor(parsed / 60);
					parsed = parsed % 60;
				}
				else{
					hrs.value = Math.floor(parsed / 60);
					parsed = parsed % 60;
				}
			}
			calendar.innerAngle2 = parsed*Math.PI/(12*60);
			mins.value = parsed;
			calendar.restore();
		}
		else if (mins.value == "" || mins.value == "0"){
			calendar.innerAngle2 = 0;
			calendar.restore();
		}
		calendar.render();
	}
	/*
	
	MIDDLE WHEEL
	
	*/
	//MONTHS TEXT FIELD
	var month = document.getElementById("month");
	month.oninput = function(evt){
		var parsedMonth = parseInt(month.value)-1;
		if (!isNaN(parsedMonth) && parsedMonth != ""){
			calendar.midAngle = parsedMonth*Math.PI/6;
			calendar.restore();
		}
		else if (month.value == "" || month.value == "1" || month.value == "0"){
			calendar.midAngle = 0;
			calendar.restore();
		}
		calendar.render();
	}
	//DAYS TEXT FIELD
	var days = document.getElementById("day");
	days.oninput = function(evt){
		var parsedDays = parseInt(days.value)-1;
		if (!isNaN(parsedDays) && parsedDays != ""){
			if (parsedDays >= 30){
				var parsedMonths = parseInt(month.value);
				if (typeof parsedMonths == "number" && month.value != ""){
					month.value = parsedMonths + Math.floor(parsedDays / 30)+1;
					parsedDays = parsedDays % 30;
				}
				else{
					month.value = Math.floor(parsedDays / 30)+1;
					parsedDays = parsedDays % 30;
				}
			}
			
			calendar.midAngle2 = parsedDays*Math.PI/(6*30);
			days.value = parsedDays+1;
			month.oninput();
			calendar.restore();
		}
		else if (days.value == "" || days.value == "0" || days.value == "1"){
			month.oninput();
			calendar.midAngle2 = 0;
			calendar.restore();
		}
		calendar.render();
	}
	
	/*
	
	OUTER WHEEL month->age     days->zodiac
	
	*/
	//AGE TEXT FIELD
	var age = document.getElementById("age");
	age.oninput = function(evt){
		var parsedAge = parseInt(age.value)-1;
		if (!isNaN(parsedAge) && parsedAge != ""){
			calendar.outerAngle = parsedAge*Math.PI/6;
			calendar.restore();
		}
		else if (age.value == "" || age.value == "0" || age.value == "0"){
			calendar.outerAngle = 0;
			calendar.restore();
		}
		calendar.render();
	}
	//ZODIAC TEXT FIELD
	var zodiac = document.getElementById("zodiac");
	zodiac.oninput = function(evt){
		var parsedZodiac = parseInt(zodiac.value);
		if (!isNaN(parsedZodiac) && parsedZodiac != ""){
			if (parsedZodiac >= 2160){
				var parsedAge = parseInt(age.value);
				if (!isNaN(parsedAge) && age.value != ""){
					age.value = parsedAge + Math.floor(parsedZodiac / 2160);
					calendar.outerAngle = age.value*Math.PI/6;
					parsedZodiac = parsedZodiac % 2160;
				}
				else{
					age.value = Math.floor(parsedZodiac / 2160);
					calendar.outerAngle = age.value*Math.PI/6;
					parsedZodiac = parsedZodiac % 2160;
				}
			}
			
			zodiac.value = parsedZodiac;
			calendar.outerAngle2 = parsedZodiac*Math.PI/(180*72);
			calendar.restore();
		}
		else if (zodiac.value == "" || zodiac.value == "0"){
			calendar.outerAngle2 = 0;
			calendar.restore();
		}
		calendar.render();
	}
	
	/*
		ARROW BUTTONS:
		hoursUp, hoursDown
		minutesUp, minutesDown
		monthUp, monthDown
		dayUp, dayDown
		ageUp, ageDown
		zodiacUp, zodiacDown
	*/
	var hoursUp = document.getElementById("hoursUp");
	hoursUp.onclick = function(){
		var txtField = hours;
		var modValue = 24;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			txtField.value = (parsed+1)%modValue;
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = 1;
			txtField.oninput();
		}
	}
	var hoursDown = document.getElementById("hoursDown");
	hoursDown.onclick = function(){
		var txtField = hours;
		var modValue = 24;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			if (parsed - 1 > -1)
				txtField.value = (parsed-1)%modValue;
			else 
				txtField.value = (modValue+parsed-1);
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = modValue-1;
			txtField.oninput();
		}
	}
	var minutesUp = document.getElementById("minutesUp");
	minutesUp.onclick = function(){
		var txtField = minutes;
		var modValue = 60;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			txtField.value = (parsed+1);
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = 1;
			txtField.oninput();
		}
	}
	var minutesDown = document.getElementById("minutesDown");
	minutesDown.onclick = function(){
		var txtField = minutes;
		var modValue = 60;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			if (parsed - 1 > -1)
				txtField.value = (parsed-1);
			else {
				txtField.value = (modValue+parsed-1);
				var field = hours;
				var parsedField = parseInt(field.value);
				if (!isNaN(parsedField))
					field.value = parsedField -1;
			}
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = modValue-1;
			txtField.oninput();
		}
	}
	var monthUp = document.getElementById("monthUp");
	monthUp.onclick = function(){
		var txtField = month;
		var modValue = 12;
		var parsed = parseInt(txtField.value)%modValue;
		if (!isNaN(parsed)){
			txtField.value = (parsed+1)
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = 1;
			txtField.oninput();
		}
	}
	var monthDown = document.getElementById("monthDown");
	monthDown.onclick = function(){
		var txtField = month;
		var modValue = 12;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			if (parsed - 1 > -1)
				txtField.value = (parsed-1);
			else 
				txtField.value = (modValue+parsed-1);
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = modValue-1;
			txtField.oninput();
		}
	}
	var dayUp = document.getElementById("dayUp");
	dayUp.onclick = function(){
		var txtField = days;
		var modValue = 30;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			txtField.value = (parsed+1);
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = 1;
			txtField.oninput();
		}
	}
	var dayDown = document.getElementById("dayDown");
	dayDown.onclick = function(){
		var txtField = days;
		var modValue = 30;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			if (parsed - 1 > -1)
				txtField.value = (parsed-1);
			else {
				txtField.value = (modValue+parsed-1);
				var field = month;
				var parsedField = parseInt(field.value);
				if (!isNaN(parsedField))
					field.value = parsedField -1;
			}
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = modValue-1;
			txtField.oninput();
		}
	}
	var ageUp = document.getElementById("ageUp");
	ageUp.onclick = function(){
		var txtField = age;
		var modValue = 12;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			txtField.value = (parsed+1)%modValue;
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = 1;
			txtField.oninput();
		}
	}
	var ageDown = document.getElementById("ageDown");
	ageDown.onclick = function(){
		var txtField = age;
		var modValue = 12;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			if (parsed - 1 > -1)
				txtField.value = (parsed-1);
			else 
				txtField.value = (modValue+parsed-1);
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = modValue-1;
			txtField.oninput();
		}
	}
	var zodiacUp = document.getElementById("zodiacUp");
	zodiacUp.onclick = function(){
		var txtField = zodiac;
		var modValue = 2160;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			txtField.value = (parsed+1);
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = 1;
			txtField.oninput();
		}
	}
	var zodiacDown = document.getElementById("zodiacDown");
	zodiacDown.onclick = function(){
		var txtField = zodiac;
		var modValue = 2160;
		var parsed = parseInt(txtField.value);
		if (!isNaN(parsed)){
			if (parsed - 1 > -1)
				txtField.value = (parsed-1);
			else {
				txtField.value = (modValue+parsed-1);
				var field = age;
				var parsedField = parseInt(field.value);
				if (!isNaN(parsedField))
					field.value = parsedField -1;
			}
			txtField.oninput();
		}
		else if (txtField.value == "" ){
			txtField.value = modValue-1;
			txtField.oninput();
		}
	}
	
	/*
		DATE CONVERSION
	*/
	var btn = document.getElementById("button");
	btn.onclick = function(){
		month.value = "";
		days.value = "";
		age.value = "";
		zodiac.value = "";
		//dec 21, year -148 was start of picses
		//dec 21, year 4172 will be start of new age of capricorn
		//dec 21, year -21748 was the start of previous age of capricorn
		//at the end of every day subtract 20.9693minutes to zero out the day
		//20.9693minutes out of a total of 1440 mins/day
		var gregyr = parseInt(document.getElementById("greg-year").value);
		var gregmonth = parseInt(document.getElementById("greg-month").value);
		var gregday = parseInt(document.getElementById("greg-day").value);
		var greekyear = gregyr + 21748;
		while (greekyear < 0)
			greekyear = 25920+greekyear;
		var greekmonth = gregmonth;
		var greekday = gregday-355;
		var daymonthstoadd;
		if (gregmonth == 1) daymonthstoadd = 0;
		else if (gregmonth == 2) daymonthstoadd = 31;
		else if (gregmonth == 3) daymonthstoadd = 31+28;
		else if (gregmonth == 4) daymonthstoadd = 31+28+31;
		else if (gregmonth == 5) daymonthstoadd = 31+28+31+30;
		else if (gregmonth == 6) daymonthstoadd = 31+28+31+30+31;
		else if (gregmonth == 7) daymonthstoadd = 31+28+31+30+31+30;
		else if (gregmonth == 8) daymonthstoadd = 31+28+31+30+31+30+31;
		else if (gregmonth == 9) daymonthstoadd = 31+28+31+30+31+30+62;
		else if (gregmonth == 10) daymonthstoadd = 31+28+31+30+31+30+62+30;
		else if (gregmonth == 11) daymonthstoadd = 31+28+31+30+31+30+62+30+31;
		else if (gregmonth == 12) daymonthstoadd = 31+28+31+30+31+30+62+30+31+30;
		var totaldays = (greekday + daymonthstoadd +greekyear*365.25);
		var totalyears = totaldays/365.25;
		var dayz = totaldays % 365.25;
		zodiac.value = totalyears;
		days.value = dayz;
		zodiac.oninput();
		days.oninput();
	};
}