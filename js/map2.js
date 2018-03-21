var map;
require(["esri/map", "esri/layers/FeatureLayer", "esri/InfoTemplate", "dojo/on", "dojo/domReady!"],
function(Map, FeatureLayer, InfoTemplate, on){
	map = new Map("map",{
		basemap:"streets",
		center:[-93.125,45.000],
		zoom:12,
		minZoom:11,
		maxZoom:16,
		sliderStyle:"large",
		logo:false
		});	
	
	var template = new InfoTemplate({title:"Park Facility"});
		template.setContent(getTextContent);
	
	function getTextContent(graphic){
		//var mail = graphic.attributes.Email;
		var name = graphic.attributes.LocationName.replace(/ /g, "%20");
		var name1 = graphic.attributes.LocationName;
		var fac = graphic.attributes.FeatureName.replace(/ /g, "%20");
		var fac1 = graphic.attributes.FeatureName;
		var body = "&body=Hello%2C%0A%0AI%20would%20like%20to%20report%20an%20issue%20at%20the%20following%20park%20facility.";
		var URL = graphic.attributes.URL1;
		
		return name1+"<br>"+fac1+"<br><a href="+ URL +" target='_blank'>More Information</a><br><a href=mailto:"+/*mail*/"test"+"?subject=GORamsey%20Issue%20Report" + body
		+ "%0A%0ALocation%3A%20" + name +"%0AFacility%3A%20" + fac + "%0AIssue:%0A%0AThank%20you%2C" + ">Report Issue</a>";};
		
	var facilities = new FeatureLayer(
		"http://services.arcgis.com/Qmnh5K1IrqlBQ9WP/arcgis/rest/services/RecFeature/FeatureServer/0", {
		mode:FeatureLayer.MODE_ONDEMAND,
		outFields:["*"],
		infoTemplate:template
		});
	map.addLayer(facilities);	
	});