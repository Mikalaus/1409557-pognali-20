function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: { lat: 59.9365, lng: 30.322028 }
  });

  const marker = new google.maps.Marker({
    position: { lat: 59.9365, lng: 30.322028 },
    map: map,
    icon: '../img/map-marker.svg'
  });
}
