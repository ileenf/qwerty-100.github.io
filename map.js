
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css">
    <style>
      .map {
        height: 400px;
        width: 100%;
      }
    </style>
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
    <script src="weathermap.js"></script>

    <title>Weather Map</title>

  </head>
  <body>

    <p>
      <button onclick="panHome()">Pan back to London</button>
      <button onclick="bounceSouthAfrica()">Bounce to South Africa</button>

    </p>
    <div id="map" class="map"></div>

  </body>


</html>
