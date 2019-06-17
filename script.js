// Open Hours
var date, time, a, b, i;

a = 1000;
b = 1900;

date = new Date();

function replace() {

	time = date.getHours()*100 + date.getMinutes();
	
	if (a<=time && time<b && date.getDay!==0) {  
		for (i=0;i<2;i++){
			document.getElementsByClassName('close')[0].textContent = 'OPEN';
			document.getElementsByClassName('close')[0].classList.add('open');
			document.getElementsByClassName('close')[0].classList.remove('close');
		}
	}
	else {
		for (i=0;i<2;i++){
			document.getElementsByClassName('open')[0].textContent = 'CLOSED';
			document.getElementsByClassName('open')[0].classList.add('close');
			document.getElementsByClassName('open')[0].classList.remove('open');
		}
	}
}

replace();

// Google Maps
var map;
var prime = {lat: 40.712227, lng: -73.769407};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: prime,
    zoom: 18
  });
  
  map.setOptions({styles: styles['hide']});
  
  marker = new google.maps.Marker({
  	map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: prime
  });
  
  marker.addListener('click', toggleBounce);
}

  
  
var styles = {
  hide: [
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}]
    }
  ]
};