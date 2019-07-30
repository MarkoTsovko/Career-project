function initMap() {
	var element = document.getElementById('contacts__map'),
	options = {
		zoom: 17,
		center: {lat: 57.172381, lng: 65.538130}
	},
	myMap = new google.maps.Map(element, options);
}
