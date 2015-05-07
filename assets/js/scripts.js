
var switchMap =

function(dataset) {
    if (!dataset) dataset = "d2000";
    // map center
    var myLatlng = new google.maps.LatLng(46.043444, 24.573860);
    // map options,
    var myOptions = {
        zoom: 7,
        center: myLatlng
    };
    // standard map
    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    // heatmap layer
    heatmap = new HeatmapOverlay(map,
        {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.7,
            "maxOpacity": 1,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count',
            gradient: {
                // enter n keys between 0 and 1 here
                // for gradient color customization
                '.5': 'red',
                '.8': 'green',
                '.95': 'blue'
              }
        }
    );
    var testData =
    {
    d2000: {
        max: 100,
            data
    :
        [
            			{lat: 46.0667, lng: 23.5833, count: 0},
            {lat: 46.1833, lng: 21.3167, count: 0},
            {lat: 44.85, lng: 24.8667, count: 20},
            {lat: 46.5667, lng: 26.9, count: 0},
            {lat: 47.0667, lng: 21.9333, count: 0 },
            {lat: 47.1333, lng: 24.4833, count: 0},
            {lat: 47.75, lng: 26.6667, count: 9},
            {lat: 45.2667, lng: 27.9833, count: 0},
            {lat: 45.6333, lng: 25.5833, count: 10},
            {lat: 44.4333, lng: 26.1, count: 20},
            {lat: 45.15, lng: 26.8333, count: 5},
            {lat: 44.2, lng: 27.3333, count: 0},
            {lat: 45.3008, lng: 21.8892, count: 0},
            {lat: 46.7667, lng: 23.6, count: 0},
            {lat: 44.1833, lng: 28.65, count: 0},
            {lat: 45.8633, lng: 25.79, count: 0},
            {lat: 44.9333, lng: 25.45, count: 7},
            {lat: 44.3167, lng: 23.8, count: 0},
            {lat: 45.45, lng: 28.05, count: 0},
            {lat: 43.8833, lng: 25.9667, count: 0},
            {lat: 44.9583, lng: 23.5064, count: 0},
            {lat: 46.35, lng: 25.8, count: 0},
            {lat: 45.8833, lng: 22.9, count: 0},
            {lat: 44.5667, lng: 27.3667, count: 0},
            {lat: 47.1667, lng: 27.6, count: 0},
            {lat: 44.5614, lng: 25.9489, count: 3},
            {lat: 47.6472, lng: 23.5694, count: 0},
            {lat: 44.6333, lng: 22.6417, count: 0},
            {lat: 46.5417, lng: 24.56, count: 0},
            {lat: 46.93, lng: 26.3708, count: 0},
            {lat: 44.4333, lng: 24.3667, count: 0},
            {lat: 44.95, lng: 26.0167, count: 8},
            {lat: 47.2, lng: 23.05, count: 0},
            {lat: 47.79, lng: 22.875, count: 0},
            {lat: 45.8, lng: 24.15, count: 0},
            {lat: 47.6333, lng: 26.25, count: 0},
            {lat: 43.9833, lng: 25.3333, count: 0},
            {lat: 45.7494, lng: 21.2272, count: 0},
            {lat: 45.1667, lng: 28.8, count: 0},
            {lat: 45.1047, lng: 24.3753, count: 0},
            {lat: 46.6333, lng: 27.7333, count: 0},
            {lat: 45.7, lng: 27.1833, count: 0},


        ]
    },
        d2003: {
        max: 100,
            data
    :
        [
            			{lat: 46.0667, lng: 23.5833, count: 0},
            {lat: 46.1833, lng: 21.3167, count: 0},
            {lat: 44.85, lng: 24.8667, count: 20},
            {lat: 46.5667, lng: 26.9, count: 0},
            {lat: 47.0667, lng: 21.9333, count: 0 },
            {lat: 47.1333, lng: 24.4833, count: 0},
            {lat: 47.75, lng: 26.6667, count: 9},
            {lat: 45.2667, lng: 27.9833, count: 0},
            {lat: 45.6333, lng: 25.5833, count: 10},
            {lat: 44.4333, lng: 26.1, count: 20},
            {lat: 45.15, lng: 26.8333, count: 5},
            {lat: 44.2, lng: 27.3333, count: 0},
            {lat: 45.3008, lng: 21.8892, count: 6},
            {lat: 46.7667, lng: 23.6, count: 0},
            {lat: 44.1833, lng: 28.65, count: 6},
            {lat: 45.8633, lng: 25.79, count: 0},
            {lat: 44.9333, lng: 25.45, count: 7},
            {lat: 44.3167, lng: 23.8, count: 0},
            {lat: 45.45, lng: 28.05, count: 0},
            {lat: 43.8833, lng: 25.9667, count: 0},
            {lat: 44.9583, lng: 23.5064, count: 0},
            {lat: 46.35, lng: 25.8, count: 0},
            {lat: 45.8833, lng: 22.9, count: 4},
            {lat: 44.5667, lng: 27.3667, count: 0},
            {lat: 47.1667, lng: 27.6, count: 10},
            {lat: 44.5614, lng: 25.9489, count: 3},
            {lat: 47.6472, lng: 23.5694, count: 0},
            {lat: 44.6333, lng: 22.6417, count: 0},
            {lat: 46.5417, lng: 24.56, count: 11},
            {lat: 46.93, lng: 26.3708, count: 8},
            {lat: 44.4333, lng: 24.3667, count: 0},
            {lat: 44.95, lng: 26.0167, count: 8},
            {lat: 47.2, lng: 23.05, count: 0},
            {lat: 47.79, lng: 22.875, count: 0},
            {lat: 45.8, lng: 24.15, count: 0},
            {lat: 47.6333, lng: 26.25, count: 10},
            {lat: 43.9833, lng: 25.3333, count: 0},
            {lat: 45.7494, lng: 21.2272, count: 0},
            {lat: 45.1667, lng: 28.8, count: 0},
            {lat: 45.1047, lng: 24.3753, count: 0},
            {lat: 46.6333, lng: 27.7333, count: 0},
            {lat: 45.7, lng: 27.1833, count: 9},


        ]
    }
        ,
        d2006: {
        max: 100,
            data
    :
        [
            						{lat: 46.0667, lng: 23.5833, count: 6},
            {lat: 46.1833, lng: 21.3167, count: 12},
            {lat: 44.85, lng: 24.8667, count: 20},
            {lat: 46.5667, lng: 26.9, count: 6},
            {lat: 47.0667, lng: 21.9333, count: 15},
            {lat: 47.1333, lng: 24.4833, count: 8},
            {lat: 47.75, lng: 26.6667, count: 9},
            {lat: 45.2667, lng: 27.9833, count: 0},
            {lat: 45.6333, lng: 25.5833, count: 10},
            {lat: 44.4333, lng: 26.1, count: 30},
            {lat: 45.15, lng: 26.8333, count: 5},
            {lat: 44.2, lng: 27.3333, count: 9},
            {lat: 45.3008, lng: 21.8892, count: 6},
            {lat: 46.7667, lng: 23.6, count: 13},
            {lat: 44.1833, lng: 28.65, count: 6},
            {lat: 45.8633, lng: 25.79, count: 2},
            {lat: 44.9333, lng: 25.45, count: 7},
            {lat: 44.3167, lng: 23.8, count: 4},
            {lat: 45.45, lng: 28.05, count: 0},
            {lat: 43.8833, lng: 25.9667, count: 9},
            {lat: 44.9583, lng: 23.5064, count: 4},
            {lat: 46.35, lng: 25.8, count: 2},
            {lat: 45.8833, lng: 22.9, count: 4},
            {lat: 44.5667, lng: 27.3667, count: 4},
            {lat: 47.1667, lng: 27.6, count: 10},
            {lat: 44.5614, lng: 25.9489, count: 3},
            {lat: 47.6472, lng: 23.5694, count: 2},
            {lat: 44.6333, lng: 22.6417, count: 2},
            {lat: 46.5417, lng: 24.56, count: 11},
            {lat: 46.93, lng: 26.3708, count: 8},
            {lat: 44.4333, lng: 24.3667, count: 2},
            {lat: 44.95, lng: 26.0167, count: 8},
            {lat: 47.2, lng: 23.05, count: 2},
            {lat: 47.79, lng: 22.875, count: 2},
            {lat: 45.8, lng: 24.15, count: 2},
            {lat: 47.6333, lng: 26.25, count: 10},
            {lat: 43.9833, lng: 25.3333, count: 4},
            {lat: 45.7494, lng: 21.2272, count: 5},
            {lat: 45.1667, lng: 28.8, count: 4},
            {lat: 45.1047, lng: 24.3753, count: 8},
            {lat: 46.6333, lng: 27.7333, count: 9},
            {lat: 45.7, lng: 27.1833, count: 9},
        ]
    },
        d2009: {
        max: 100,
            data
    :
        [
            									{lat: 46.0667, lng: 23.5833, count: 16},
            {lat: 46.1833, lng: 21.3167, count: 22},
            {lat: 44.85, lng: 24.8667, count: 30},
            {lat: 46.5667, lng: 26.9, count: 16},
            {lat: 47.0667, lng: 21.9333, count: 25},
            {lat: 47.1333, lng: 24.4833, count: 18},
            {lat: 47.75, lng: 26.6667, count: 19},
            {lat: 45.2667, lng: 27.9833, count: 0},
            {lat: 45.6333, lng: 25.5833, count: 20},
            {lat: 44.4333, lng: 26.1, count: 40},
            {lat: 45.15, lng: 26.8333, count: 15},
            {lat: 44.2, lng: 27.3333, count: 9},
            {lat: 45.3008, lng: 21.8892, count: 6},
            {lat: 46.7667, lng: 23.6, count: 23},
            {lat: 44.1833, lng: 28.65, count: 46},
            {lat: 45.8633, lng: 25.79, count: 22},
            {lat: 44.9333, lng: 25.45, count: 57},
            {lat: 44.3167, lng: 23.8, count: 34},
            {lat: 45.45, lng: 28.05, count: 0},
            {lat: 43.8833, lng: 25.9667, count: 29},
            {lat: 44.9583, lng: 23.5064, count: 14},
            {lat: 46.35, lng: 25.8, count: 22},
            {lat: 45.8833, lng: 22.9, count: 14},
            {lat: 44.5667, lng: 27.3667, count: 34},
            {lat: 47.1667, lng: 27.6, count: 20},
            {lat: 44.5614, lng: 25.9489, count: 23},
            {lat: 47.6472, lng: 23.5694, count: 12},
            {lat: 44.6333, lng: 22.6417, count: 12},
            {lat: 46.5417, lng: 24.56, count: 21},
            {lat: 46.93, lng: 26.3708, count: 18},
            {lat: 44.4333, lng: 24.3667, count: 12},
            {lat: 44.95, lng: 26.0167, count: 18},
            {lat: 47.2, lng: 23.05, count: 12},
            {lat: 47.79, lng: 22.875, count:22},
            {lat: 45.8, lng: 24.15, count: 12},
            {lat: 47.6333, lng: 26.25, count: 20},
            {lat: 43.9833, lng: 25.3333, count: 24},
            {lat: 45.7494, lng: 21.2272, count: 25},
            {lat: 45.1667, lng: 28.8, count: 5},
            {lat: 45.1047, lng: 24.3753, count: 28},
            {lat: 46.6333, lng: 27.7333, count: 29},
            {lat: 45.7, lng: 27.1833, count: 29},


        ]
    },
        d2012: {
        max: 100,
            data
    :
        [
            												{lat: 46.0667, lng: 23.5833, count: 26},
            {lat: 46.1833, lng: 21.3167, count: 32},
            {lat: 44.85, lng: 24.8667, count: 20},
            {lat: 46.5667, lng: 26.9, count: 36},
            {lat: 47.0667, lng: 21.9333, count: 25},
            {lat: 47.1333, lng: 24.4833, count: 28},
            {lat: 47.75, lng: 26.6667, count: 39},
            {lat: 45.2667, lng: 27.9833, count: 32},
            {lat: 45.6333, lng: 25.5833, count: 6},
            {lat: 44.4333, lng: 26.1, count: 40},
            {lat: 45.15, lng: 26.8333, count: 25},
            {lat: 44.2, lng: 27.3333, count: 39},
            {lat: 45.3008, lng: 21.8892, count: 26},
            {lat: 46.7667, lng: 23.6, count: 33},
            {lat: 44.1833, lng: 28.65, count: 46},
            {lat: 45.8633, lng: 25.79, count: 22},
            {lat: 44.9333, lng: 25.45, count: 57},
            {lat: 44.3167, lng: 23.8, count: 34},
            {lat: 45.45, lng: 28.05, count: 0},
            {lat: 43.8833, lng: 25.9667, count: 29},
            {lat: 44.9583, lng: 23.5064, count: 34},
            {lat: 46.35, lng: 25.8, count: 32},
            {lat: 45.8833, lng: 22.9, count: 24},
            {lat: 44.5667, lng: 27.3667, count: 34},
            {lat: 47.1667, lng: 27.6, count: 30},
            {lat: 44.5614, lng: 25.9489, count: 33},
            {lat: 47.6472, lng: 23.5694, count: 22},
            {lat: 44.6333, lng: 22.6417, count: 22},
            {lat: 46.5417, lng: 24.56, count: 21},
            {lat: 46.93, lng: 26.3708, count: 38},
            {lat: 44.4333, lng: 24.3667, count: 22},
            {lat: 44.95, lng: 26.0167, count: 38},
            {lat: 47.2, lng: 23.05, count: 22},
            {lat: 47.79, lng: 22.875, count:22},
            {lat: 45.8, lng: 24.15, count: 32},
            {lat: 47.6333, lng: 26.25, count: 30},
            {lat: 43.9833, lng: 25.3333, count: 34},
            {lat: 45.7494, lng: 21.2272, count: 25},
            {lat: 45.1667, lng: 28.8, count: 6},
            {lat: 45.1047, lng: 24.3753, count: 28},
            {lat: 46.6333, lng: 27.7333, count: 29},
            {lat: 45.7, lng: 27.1833, count: 29},
        ]
    },
        d2014: {
        max: 100,
            data
    :
        [   {lat: 46.0667, lng: 23.5833, count: 26},
            {lat: 46.1833, lng: 21.3167, count: 32},
            {lat: 44.85, lng: 24.8667, count: 20},
            {lat: 46.5667, lng: 26.9, count: 36},
            {lat: 47.0667, lng: 21.9333, count: 25},
            {lat: 47.1333, lng: 24.4833, count: 28},
            {lat: 47.75, lng: 26.6667, count: 39},
            {lat: 45.2667, lng: 27.9833, count: 7},
            {lat: 45.6333, lng: 25.5833, count: 30},
            {lat: 44.4333, lng: 26.1, count: 40},
            {lat: 45.15, lng: 26.8333, count: 25},
            {lat: 44.2, lng: 27.3333, count: 39},
            {lat: 45.3008, lng: 21.8892, count: 26},
            {lat: 46.7667, lng: 23.6, count: 33},
            {lat: 44.1833, lng: 28.65, count: 46},
            {lat: 45.8633, lng: 25.79, count: 22},
            {lat: 44.9333, lng: 25.45, count: 57},
            {lat: 44.3167, lng: 23.8, count: 34},
            {lat: 45.45, lng: 28.05, count: 4},
            {lat: 43.8833, lng: 25.9667, count: 29},
            {lat: 44.9583, lng: 23.5064, count: 34},
            {lat: 46.35, lng: 25.8, count: 32},
            {lat: 45.8833, lng: 22.9, count: 24},
            {lat: 44.5667, lng: 27.3667, count: 34},
            {lat: 47.1667, lng: 27.6, count: 30},
            {lat: 44.5614, lng: 25.9489, count: 33},
            {lat: 47.6472, lng: 23.5694, count: 22},
            {lat: 44.6333, lng: 22.6417, count: 22},
            {lat: 46.5417, lng: 24.56, count: 21},
            {lat: 46.93, lng: 26.3708, count: 38},
            {lat: 44.4333, lng: 24.3667, count: 22},
            {lat: 44.95, lng: 26.0167, count: 38},
            {lat: 47.2, lng: 23.05, count: 22},
            {lat: 47.79, lng: 22.875, count:22},
            {lat: 45.8, lng: 24.15, count: 32},
            {lat: 47.6333, lng: 26.25, count: 30},
            {lat: 43.9833, lng: 25.3333, count: 34},
            {lat: 45.7494, lng: 21.2272, count: 25},
            {lat: 45.1667, lng: 28.8, count: 7},
            {lat: 45.1047, lng: 24.3753, count: 28},
            {lat: 46.6333, lng: 27.7333, count: 29},
            {lat: 45.7, lng: 27.1833, count: 29},
        ]
    }


};

    heatmap.setData(testData[dataset]);
};


var switchMap2 =

function(dataset) {
    if (!dataset) dataset = "d2000";
    // map center
    var myLatlng = new google.maps.LatLng(46.043444, 24.573860);
    // map options,
    var myOptions = {
        zoom: 7,
        center: myLatlng
    };
    // standard map
    map = new google.maps.Map(document.getElementById("map-canvas2"), myOptions);
    // heatmap layer
    heatmap = new HeatmapOverlay(map,
        {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.5,
            "maxOpacity": 1,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count',
            gradient: {
                // enter n keys between 0 and 1 here
                // for gradient color customization
                '.5': 'red',
                '.8': 'red',
                '.95': 'red'
              }
        }
    );
    var testData =
    {
    d2000: {
        max: 100,
            data
    :
        [
            {lat: 46.0667, lng: 23.5833, count: 85},
            {lat: 46.1833, lng: 21.3167, count: 20},
            {lat: 44.85, lng: 24.8667, count: 6},
            {lat: 46.5667, lng: 26.9, count: 47},
            {lat: 47.0667, lng: 21.9333, count: 7},
            {lat: 47.1333, lng: 24.4833, count: 27},
            {lat: 47.75, lng: 26.6667, count: 9},
            {lat: 45.2667, lng: 27.9833, count: 44},
            {lat: 45.6333, lng: 25.5833, count: 23},
            {lat: 44.4333, lng: 26.1, count: 84},
            {lat: 45.15, lng: 26.8333, count: 71},
            {lat: 44.2, lng: 27.3333, count: 75},
            {lat: 45.3008, lng: 21.8892, count: 25},
            {lat: 46.7667, lng: 23.6, count: 34},
            {lat: 44.1833, lng: 28.65, count: 25},
            {lat: 45.8633, lng: 25.79, count: 62},
            {lat: 44.9333, lng: 25.45, count: 81},
            {lat: 44.3167, lng: 23.8, count: 58},
            {lat: 45.45, lng: 28.05, count: 86},
            {lat: 43.8833, lng: 25.9667, count: 5},
            {lat: 44.9583, lng: 23.5064, count: 27},
            {lat: 46.35, lng: 25.8, count: 4},
            {lat: 45.8833, lng: 22.9, count: 91},
            {lat: 44.5667, lng: 27.3667, count: 5},
            {lat: 47.1667, lng: 27.6, count: 59},
            {lat: 44.5614, lng: 25.9489, count: 34},
            {lat: 47.6472, lng: 23.5694, count: 53},
            {lat: 44.6333, lng: 22.6417, count: 45},
            {lat: 46.5417, lng: 24.56, count: 38},
            {lat: 46.93, lng: 26.3708, count: 66},
            {lat: 44.4333, lng: 24.3667, count: 18},
            {lat: 44.95, lng: 26.0167, count: 23},
            {lat: 47.2, lng: 23.05, count: 20},
            {lat: 47.79, lng: 22.875, count: 39},
            {lat: 45.8, lng: 24.15, count: 17},
            {lat: 47.6333, lng: 26.25, count: 68},
            {lat: 43.9833, lng: 25.3333, count: 16},
            {lat: 45.7494, lng: 21.2272, count: 21},
            {lat: 45.1667, lng: 28.8, count: 60},
            {lat: 45.1047, lng: 24.3753, count: 76},
            {lat: 46.6333, lng: 27.7333, count: 38},
            {lat: 45.7, lng: 27.1833, count: 81},
        ]
    },
        d2003: {
        max: 100,
            data
    :
        [
            {lat: 46.0667, lng: 23.5833, count: 8},
            {lat: 46.1833, lng: 21.3167, count: 2},
            {lat: 44.85, lng: 24.8667, count: 6},
            {lat: 46.5667, lng: 26.9, count: 47},
            {lat: 47.0667, lng: 21.9333, count: 74},
            {lat: 47.1333, lng: 24.4833, count: 27},
            {lat: 47.75, lng: 26.6667, count: 9},
            {lat: 45.2667, lng: 27.9833, count: 4},
            {lat: 45.6333, lng: 25.5833, count: 23},
            {lat: 44.4333, lng: 26.1, count: 4},
            {lat: 45.15, lng: 26.8333, count: 71},
            {lat: 44.2, lng: 27.3333, count: 75},
            {lat: 45.3008, lng: 21.8892, count: 25},
            {lat: 46.7667, lng: 23.6, count: 34},
            {lat: 44.1833, lng: 28.65, count: 25},
            {lat: 45.8633, lng: 25.79, count: 62},
            {lat: 44.9333, lng: 25.45, count: 81},
            {lat: 44.3167, lng: 23.8, count: 8},
            {lat: 45.45, lng: 28.05, count: 86},
            {lat: 43.8833, lng: 25.9667, count: 5},
            {lat: 44.9583, lng: 23.5064, count: 17},
            {lat: 46.35, lng: 25.8, count: 4},
            {lat: 45.8833, lng: 22.9, count: 91},
            {lat: 44.5667, lng: 27.3667, count: 5},
            {lat: 47.1667, lng: 27.6, count: 59},
            {lat: 44.5614, lng: 25.9489, count: 34},
            {lat: 47.6472, lng: 23.5694, count: 53},
            {lat: 44.6333, lng: 22.6417, count: 45},
            {lat: 46.5417, lng: 24.56, count: 38},
            {lat: 46.93, lng: 26.3708, count: 46},
            {lat: 44.4333, lng: 24.3667, count: 18},
            {lat: 44.95, lng: 26.0167, count: 23},
            {lat: 47.2, lng: 23.05, count: 20},
            {lat: 47.79, lng: 22.875, count: 39},
            {lat: 45.8, lng: 24.15, count: 17},
            {lat: 47.6333, lng: 26.25, count: 68},
            {lat: 43.9833, lng: 25.3333, count: 16},
            {lat: 45.7494, lng: 21.2272, count: 21},
            {lat: 45.1667, lng: 28.8, count: 60},
            {lat: 45.1047, lng: 24.3753, count: 76},
            {lat: 46.6333, lng: 27.7333, count: 38},
            {lat: 45.7, lng: 27.1833, count: 81},
        ]
    }

};

    heatmap.setData(testData[dataset]);
};


