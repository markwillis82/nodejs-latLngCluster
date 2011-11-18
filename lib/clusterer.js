
// setup some math functions
var PI = Math.PI;
var round = Math.round;
var log = Math.log;
var sin = Math.sin;
var sqrt = Math.sqrt;
var pow = Math.pow;


var OFFSET = 268435456;
var RADIUS = 85445659.4471; /* $offset / pi() */


function lngToX(lng) {
    return round(OFFSET + RADIUS * lng * PI / 180);        
}

function latToY(lat) {
    return round(OFFSET - RADIUS * 
                log((1 + sin(lat * PI / 180)) / 
                (1 - sin(lat * PI / 180))) / 2);
}

function pixelDistance(lat1, lng1, lat2, lng2, zoom) {
    x1 = lngToX(lng1);
    y1 = latToY(lat1);

    x2 = lngToX(lng2);
    y2 = latToY(lat2);
        
    return sqrt(pow((x1-x2),2) + pow((y1-y2),2)) >> (21 - zoom);
}


exports.cluster = function(markerSet, distance, zoom) {
   clustered = [];

   /* Loop until all markers have been compared. */
   var markersLeft = markerSet.length-1;
   while (markersLeft) {
    	markersLeft -= 1;
        marker  = markerSet.pop();
		//if(marker === undefined) continue;
		
        var cluster = [];
        /* Compare against all markers which are left. */
		for(var key in markerSet) {
			var target = markerSet[key];
		    
            pixels = pixelDistance(marker.lat, marker.lng,
                                    target.lat, target.lng,
                                    zoom);
            /* If two markers are closer than given distance remove */
            /* target marker from array and add it to cluster.      */
            if (distance > pixels) {
                markerSet.splice(key,1);
                cluster.push(target);
            }
        }
        /* If a marker has been added to cluster, add also the one  */
        /* we were comparing to and remove the original from array. */
        if (cluster.length > 0) {
            cluster.push(marker);
            clustered.push(cluster);
        } else {
            clustered.push(marker);
        }
    
    }
    return clustered;
};




