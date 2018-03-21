var map
var map;
require(["esri/map", "esri/layers/FeatureLayer", "esri/dijit/PopupTemplate", "dojo/on", "dojo/domReady!"],
function(Map, FeatureLayer, PopupTemplate, on){
	map = new Map("map",{
		basemap:"streets",
		center:[-93.125,45.000],
		zoom:12,
		minZoom:11,
		maxZoom:16,
		sliderStyle:"large",
		logo:false
		});
		
	var template = new PopupTemplate({title:"Park Facility",
		description: "{LocationName}<br>{FeatureName}<br><a href=mailto:{Email}?subject=Issue%20Report"+
		"&body="+("{LocationName}".replace(" ","%20"))+">Report Issue</a>",
		});
		
	var facilities = new FeatureLayer(
		"http://services.arcgis.com/Qmnh5K1IrqlBQ9WP/arcgis/rest/services/RecFeature/FeatureServer/0", {
		mode:FeatureLayer.MODE_ONDEMAND,
		outFields:["*"],
		infoTemplate:template
		});
	map.addLayer(facilities);	
	});