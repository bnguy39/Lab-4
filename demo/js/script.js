var map = L.map('map').setView([30, -90], 4); // setting geographical coordinates to create map object


var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', //add tile layer to map
	{
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map)

// adding Web Map Services to map
var Flashfloods = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
			    layers: '0',
			    format: 'image/png',
			    transparent: true,
			    attribution: "NOAA"
			}).addTo(map);

var Tornadoes = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
		    layers: '2',
		    format: 'image/png',
		    transparent: true,
		    attribution: "NOAA"
		}).addTo(map);

var HazardousAirQuality = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer/WMSServer", {
		    layers: '42',
		    format: 'image/png',
		    transparent: true,
		    attribution: "NOAA"
		}).addTo(map);

// add layer control to map
var baseLayers = { // basemap to switch between
    "Streets": streets,

};

var overlays = { //overlays to switch variables on and off
    "Flashfloods": Flashfloods,
    "Tornadoes": Tornadoes,
		"HazardousAirQuality": HazardousAirQuality
};

L.control.layers(baseLayers, overlays).addTo(map);
