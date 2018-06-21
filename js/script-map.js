function initMap() {
	var point = {lat: 59.93873, lng: 30.32310};
	var center = {lat: 59.93911, lng: 30.32149};
	var map = new google.maps.Map(document.getElementById("my-map"), {
		zoom: 17,
		center: center
	});
	var image = {
		url: "img/map-marker.png",
		size: new google.maps.Size(231, 190),
		anchor: new google.maps.Point(50, 190)
	} 
	var marker = new google.maps.Marker({
		position: point,
		map: map,
		icon: image
	});
}

