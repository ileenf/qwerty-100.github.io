var view;
var map;
var initialLocation;
var london;

function init() {
  initialLocation = ol.proj.fromLonLat([41.043316, 28.862457])
  london = ol.proj.fromLonLat([-0.12755, 51.507222])
  southafrica = ol.proj.fromLonLat([-30.312099, 23.010606])

  view = new ol.View({
  center: initialLocation,
  zoom: 6
});

  map = new ol.Map({
       target: 'map',
       layers: [
         new ol.layer.Tile({
           source: new ol.source.OSM()
         })
       ],
       loadTilesWhileAnimating: true,
       view: view
     });
}

function panHome() {
  view.animate({
    center: london,
    duration: 2000
  })
}

function flySouthAfrica() {
  view.animate({
    center: southafrica,
    duration: 2000
  })
}

window.onload = init;
