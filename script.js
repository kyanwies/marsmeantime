function startTime() {
	var today = new Date(); //maakt datum aan
	var h = today.getHours(); //haalt uren op
 	var m = today.getMinutes(); //haalt minuten op
	var s = today.getSeconds(); //haalt seconden op
	m = checkTime(m); //zorgt voor refresh van minuten
	s = checkTime(s); //zorgt voor refresh van seconden
	document.getElementById('clock').innerHTML =
  	h + ":" + m + ":" + s; //maakt zichtbare klok aan
  	var t = setTimeout(startTime, 500); //zorgt voor lopende klok
  	
  	if (h>=0 && h<6) { //tussen 0 en 6
  		document.getElementById("welkom").innerHTML = "Good night!"; //welkomstbericht is good night
  		document.getElementById("icon").src='night.svg'; //afbeelding is een maan
  		document.getElementById("text").innerHTML = "Go get some rest and try to think of all the things you'll accomplish tomorrow!"; //bericht is voor 's nachts
  	} else if (h==5 && m==59 && s==58) { // als het 5:59:58 is
			TweenMax.to("img", 3, {ease:Expo.easeOut, bottom:200, opacity:0, scale:0}); //verstopt img
			TweenMax.to("h2", 1, {ease:Expo.easeOut, left:200, opacity:0, delay:0.3}); //verstopt h2
			TweenMax.to("h3", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.5}); //verstopt h3
			TweenMax.to("p", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.6}); //verstopt p
			TweenMax.to("#clock", 1, {ease:Expo.easeOut, opacity:0, scale:0, delay:1});	//verstopt klok
	} else if (h==6 && m==0 && s==0) { //als het 6:00:00 is
		location.reload();	//refresh de pagina
	} else if (h>=6 && h<12) { //tussen 6 en 12
  		document.getElementById("welkom").innerHTML = "Good morning!"; //welkomstbericht is good morning
  		document.getElementById("icon").src='morning.svg'; //afbeelding is een koffiekopje
  		document.getElementById("text").innerHTML = "Start your day with a cup of coffee and go to work with a big smile!"; //bericht is voor 's ochtends
  	} else if (h==11 && m==59 && s==58) { // als het 11:59:58 is
			TweenMax.to("img", 3, {ease:Expo.easeOut, bottom:200, opacity:0, scale:0}); //verstopt img
			TweenMax.to("h2", 1, {ease:Expo.easeOut, left:200, opacity:0, delay:0.3}); //verstopt h2
			TweenMax.to("h3", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.5}); //verstopt h3
			TweenMax.to("p", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.6}); //verstopt p
			TweenMax.to("#clock", 1, {ease:Expo.easeOut, opacity:0, scale:0, delay:1});	//verstopt klok
	} else if (h==12 && m==0 && s==0) { //als het 12:00:00 is
		location.reload();	//refresh de pagina  		
  	} else if (h>=12 && h<18) { //tussen 12 en 18
  		document.getElementById("welkom").innerHTML = "Good afternoon!"; //welkomstbericht is good afternoon
  		document.getElementById("icon").src='afternoon.svg'; //afbeelding is een zon
  		document.getElementById("text").innerHTML = "You are looking stunning today!"; //bericht is voor 's middags
  	} else if (h==17 && m==59 && s==58) { // als het 17:59:58 is
			TweenMax.to("img", 3, {ease:Expo.easeOut, bottom:200, opacity:0, scale:0}); //verstopt img
			TweenMax.to("h2", 1, {ease:Expo.easeOut, left:200, opacity:0, delay:0.3}); //verstopt h2
			TweenMax.to("h3", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.5}); //verstopt h3
			TweenMax.to("p", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.6}); //verstopt p
			TweenMax.to("#clock", 1, {ease:Expo.easeOut, opacity:0, scale:0, delay:1});	//verstopt klok
	} else if (h==18 && m==0 && s==0) { //als het 18:00:00 is
		location.reload();	//refresh de pagina
	} else if (h==23 && m==59 && s==58) { // als het 23:59:58 is
			TweenMax.to("img", 3, {ease:Expo.easeOut, bottom:200, opacity:0, scale:0}); //verstopt img
			TweenMax.to("h2", 1, {ease:Expo.easeOut, left:200, opacity:0, delay:0.3}); //verstopt h2
			TweenMax.to("h3", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.5}); //verstopt h3
			TweenMax.to("p", 1, {ease:Expo.easeOut, right:200, opacity:0, delay:0.6}); //verstopt p
			TweenMax.to("#clock", 1, {ease:Expo.easeOut, opacity:0, scale:0, delay:1});	//verstopt klok
	} else if (h==0 && m==0 && s==0) { //als het 00:00:00 is
		location.reload();	//refresh de pagina
  	} else { //tussen 18 en 0
  		document.getElementById("welkom").innerHTML = "Good evening!"; //welkomstbericht is good evening
  		document.getElementById("icon").src='evening.svg'; //afbeelding is een ondergaande zon
  		document.getElementById("text").innerHTML = "Time to eat! Dinner tip: McMars burgers are on sale."; //bericht is voor 's avonds
  	}

  	var months = ["january","february","march","april","may","june","july","august","september","october","november","december"]; //geeft maanden een naam
	document.getElementById("month").innerHTML = months[today.getMonth()]; //vult de maand in
	document.getElementById("day").innerHTML = today.getDate(); //vult de dag in
	document.getElementById("year").innerHTML = today.getFullYear(); //vult het jaar in
}

function checkTime(i) {
  	if (i < 10) {i = "0" + i};
  	return i; //als de tijd kleiner is dan 10 komt er een 0 voor te staan
}