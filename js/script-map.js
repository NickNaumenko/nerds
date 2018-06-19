function initMap() {
	var point = {lat: 59.938816, lng: 30.323057};
	var center = {lat: 59.9397, lng: 30.3205};
	var map = new google.maps.Map(document.getElementById("my-map"), {
		zoom: 16,
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

