var MapWrapper = function(container, coords, zoom) {

  this.googleMap = new google.maps.Map( container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {

  addMarker: function( coords ) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  },

  addClickEvent: function() {
    this.googleMap.addListener( "click", function( event ) {
      console.log( "map has been clicked" );
      console.log( event.latLng.lat() );
      console.log( event.latLng.lng() );
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.addMarker( coords )
    }.bind( this ));
  },

  addInfoWindow: function(coords, text) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var infowindow = new google.maps.InfoWindow({
      content: text,
      maxWidth: 200
    });
    marker.addListener( 'click', function() {
      infowindow.open( this.googleMap, marker );
    });
  }

}
