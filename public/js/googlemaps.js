function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};
  var ucsd_cicc = {lat : 32.885028, lng: -117.241355};
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map: map,
      title: 'UCSD'
  });

  var marker_cicc = new google.maps.Marker({
        position: ucsd_cicc,
        map: map,
        title: 'CICC'
  });
}