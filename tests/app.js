var clusterer = require("../index");
var markers   = [];
markers[0] = {};
	markers[0]["id"] = 'marker_1';
	markers[0]["lat"] = 59.441193;
	markers[0]["lng"] = 24.729494;

markers[1] = {};
	markers[1]["id"] = 'marker_2';
	markers[1]["lat"] = 59.432365;
	markers[1]["lng"] = 24.742992;

markers[2] = {};
	markers[2]["id"] = 'marker_3';
	markers[2]["lat"] = 59.431602;
	markers[2]["lng"] = 24.757563;

markers[3] = {};
	markers[3]["id"] = 'marker_4';
	markers[3]["lat"] = 59.437843;
	markers[3]["lng"] = 24.765759;

markers[4] = {};
	markers[4]["id"] = 'marker_5';
	markers[4]["lat"] = 59.439644;
	markers[4]["lng"] = 24.779041;

markers[5] = {};
	markers[5]["id"] = 'marker_6';
	markers[5]["lat"] = 59.434776;
	markers[5]["lng"] = 24.756681;
		
	
clustered = clusterer.cluster(markers, 20, 11); 

console.log(clustered);