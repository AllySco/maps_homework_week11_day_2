var initialise = function() {
  var coords = {lat: 57.13375, lng: -2.1100};
  var zoom = 10;
  var container = document.querySelector( "#main-map" );
  var mainMap = new MapWrapper( container, coords, zoom);

  var text = "Hello, I'm an info window"

  mainMap.addMarker( coords );

  mainMap.addClickEvent();

  mainMap.addInfoWindow( coords, text );

  var centreOnChicago = function() {
  var chicago = { lat: 41.877, lng: -87.630 };
      mainMap.googleMap.setCenter( chicago )
      mainMap.addMarker( chicago )
    }

  var chicagoButton = document.querySelector( "#chicago-button" );

  chicagoButton.addEventListener( 'click', centreOnChicago );

}

  window.addEventListener( "load", initialise );
