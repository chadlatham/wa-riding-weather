// IFFE to protect global scope
var mapGlobal;
(function() {
  'use strict';
// App level variables *********************************************************
  var map; // The Google Map
  var forecastDays = 4; // The maximum number of days of forecase for the API
  var markers = []; // An array of markers placed on map
  var trackedMarkers = []; // An array of the markers being tracked
  // Array of ridingArea objects - Used to generate markers
  var ridingAreas = [
    { lat: '46.517576',
    lng: '-121.017341',
    label: 'Ahtanum State Forest',
    agency: 'DNR',
    sublabel: '' },
    { lat: '46.831979',
    lng: '-119.892786',
    label: 'Beverly Sand Dunes',
    agency: 'DNR',
    sublabel: '' },
    { lat: '45.714794',
    lng: '-121.466455',
    label: 'Bingen',
    agency: 'City',
    sublabel: '' },
    { lat: '46.232072',
    lng: '-123.278488',
    label: 'Bradley Trail',
    agency: 'DNR',
    sublabel: '' },
    { lat: '46.586231',
    lng: '-122.589161',
    label: 'Burnt Ridge MX Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '46.952835',
    lng: '-123.160375',
    label: 'Capitol State Forest',
    agency: 'DNR',
    sublabel: '' },
    { lat: '46.894185',
    lng: '-123.082644',
    label: 'Bordeaux Entrance',
    agency: '',
    sublabel: '' },
    { lat: '46.926455',
    lng: '-123.304200',
    label: 'C-Line Entrance',
    agency: '',
    sublabel: '' },
    { lat: '46.868691',
    lng: '-123.263966',
    label: 'Cedar Creek Entrance',
    agency: '',
    sublabel: '' },
    { lat: '47.057841',
    lng: '-123.195900',
    label: 'County Line Entrance',
    agency: '',
    sublabel: '' },
    { lat: '46.949605',
    lng: '-123.057525',
    label: 'Delphi Entrance',
    agency: '',
    sublabel: '' },
    { lat: '46.954035',
    lng: '-123.285150',
    label: 'Porter Creek Entrance',
    agency: '',
    sublabel: '' },
    { lat: '47.034025',
    lng: '-123.096825',
    label: 'Rock Candy Entrance',
    agency: '',
    sublabel: '' },
    { lat: '46.926588',
    lng: '-123.056355',
    label: 'Waddell Creek Entrance',
    agency: '',
    sublabel: '' },
    { lat: '47.421740',
    lng: '-120.314951',
    label: 'Chelan',
    agency: 'County',
    sublabel: '' },
    { lat: '48.276250',
    lng: '-117.715515',
    label: 'Chewelah',
    agency: 'City',
    sublabel: '' },
    { lat: '45.748286',
    lng: '-122.669313',
    label: 'Clark County Arenacross',
    agency: 'Private',
    sublabel: '' },
    { lat: '48.546548',
    lng: '-117.905848',
    label: 'Colville',
    agency: 'City',
    sublabel: '' },
    { lat: '48.601258',
    lng: '-117.905200',
    label: 'Colville National Forest',
    agency: 'USFS',
    sublabel: '' },
    { lat: '48.371600',
    lng: '-117.369000',
    label: 'Batey Bould Motorcycle Trails',
    agency: '',
    sublabel: '(trail #s 306, 306.1, 307 thru 312)' },
    { lat: '48.610700',
    lng: '-117.551655',
    label: 'LPO (Little Pend Oreille) Motorized Trail System',
    agency: '',
    sublabel: '(trail #s 140, 142 thru 146, 148, 148.1 and 151)' },
    { lat: '48.676847',
    lng: '-118.385058',
    label: 'Mack/King Mtn Trail (trail #98)',
    agency: '',
    sublabel: '' },
    { lat: '48.674788',
    lng: '-118.336806',
    label: '   East Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.681181',
    lng: '-118.442853',
    label: '   West Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.248416',
    lng: '-117.432036',
    label: 'Middle Fork Calispel ATV Trails',
    agency: '',
    sublabel: '(trail #s 313 thru 315)' },
    { lat: '48.956230',
    lng: '-118.291461',
    label: 'Owl Mountain Trail (trail #102)',
    agency: '',
    sublabel: '' },
    { lat: '48.934858',
    lng: '-118.293027',
    label: '   South Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.543713',
    lng: '-118.275225',
    label: 'South Huckleberry Mountain Trail (trail #12110)',
    agency: '',
    sublabel: '' },
    { lat: '48.529983',
    lng: '-118.309716',
    label: '   North Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.746711',
    lng: '-118.224855',
    label: 'Thompson Ridge Trail (trail #107)',
    agency: '',
    sublabel: '' },
    { lat: '48.699591',
    lng: '-118.390677',
    label: 'Twin Sisters Trail (trail #109)',
    agency: '',
    sublabel: '' },
    { lat: '48.713167',
    lng: '-118.339950',
    label: '   East Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.515977',
    lng: '-118.274375',
    label: 'Unnamed Trail (trail #12060)',
    agency: '',
    sublabel: '' },
    { lat: '48.714086',
    lng: '-118.444011',
    label: 'US Mountain Trail (trail #12600)',
    agency: '',
    sublabel: '' },
    { lat: '48.557181',
    lng: '-119.750099',
    label: 'Conconully',
    agency: 'Town',
    sublabel: '' },
    { lat: '47.645605',
    lng: '-120.071425',
    label: 'Douglas',
    agency: 'County',
    sublabel: '' },
    { lat: '47.410313',
    lng: '-120.251655',
    label: 'East Wenatchee',
    agency: 'City',
    sublabel: '' },
    { lat: '45.736983',
    lng: '-120.849155',
    label: 'Eddieville Sports Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '46.786208',
    lng: '-122.077502',
    label: 'Elbe Hills OHV Trail System',
    agency: 'DNR',
    sublabel: '' },
    { lat: '47.299750',
    lng: '-119.542038',
    label: 'Ephrata Raceway Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '47.866941',
    lng: '-121.981000',
    label: 'Evergreen Speedway',
    agency: 'Private',
    sublabel: '' },
    { lat: '48.544713',
    lng: '-117.572908',
    label: 'Flodelle Creek',
    agency: 'DNR',
    sublabel: '' },
    { lat: '46.473985',
    lng: '-117.520116',
    label: 'Garfield',
    agency: 'County',
    sublabel: '' },
    { lat: '45.657938',
    lng: '-122.564213',
    label: 'Gifford-Pinchot National Forest',
    agency: 'USFS',
    sublabel: '' },
    { lat: '46.534100',
    lng: '-121.933891',
    label: 'Cowlitz Valley Vicinity',
    agency: '',
    sublabel: '' },
    { lat: '46.000158',
    lng: '-121.544480',
    label: 'Mt. Adams Vicinity',
    agency: '',
    sublabel: '' },
    { lat: '47.580783',
    lng: '-122.788438',
    label: 'Green Mountain State Forest',
    agency: 'DNR',
    sublabel: '' },
    { lat: '47.556919',
    lng: '-122.827305',
    label: 'Gold Creek Entrance',
    agency: '',
    sublabel: '' },
    { lat: '47.600791',
    lng: '-122.788347',
    label: 'Wildcat Entrance',
    agency: '',
    sublabel: '' },
    { lat: '48.793505',
    lng: '-122.442605',
    label: 'Hannegan Speedway',
    agency: 'Private',
    sublabel: '' },
    { lat: '46.352222',
    lng: '-119.356388',
    label: 'Horn Rapids MX Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '47.714919',
    lng: '-116.802447',
    label: 'Idaho Panhandle National Forests',
    agency: 'USFS',
    sublabel: '' },
    { lat: '48.574730',
    lng: '-116.957802',
    label: 'Kaniksu National Forest:',
    agency: '',
    sublabel: 'Priest Lake Ranger District Office' },
    { lat: '47.921416',
    lng: '-117.042265',
    label: 'Inland Empire Paper (IEP) Company',
    agency: 'Private',
    sublabel: '' },
    { lat: '48.740938',
    lng: '-117.417884',
    label: 'Ione',
    agency: 'Town',
    sublabel: '' },
    { lat: '46.314200',
    lng: '-118.951850',
    label: 'Juniper Dunes',
    agency: 'BLM',
    sublabel: '' },
    { lat: '48.610832',
    lng: '-118.056452',
    label: 'Kettle Falls',
    agency: 'City',
    sublabel: '' },
    { lat: '46.992325',
    lng: '-120.548463',
    label: 'Kittitas',
    agency: 'County',
    sublabel: '' },
    { lat: '47.421330',
    lng: '-118.741940',
    label: 'Lakeview Ranch',
    agency: 'BLM',
    sublabel: '' },
    { lat: '47.636990',
    lng: '-117.060591',
    label: 'Liberty Lake Regional Park',
    agency: 'County',
    sublabel: '' },
    { lat: '47.637594',
    lng: '-117.053936',
    label: 'Liberty Lake ORV Park',
    agency: '',
    sublabel: '' },
    { lat: '48.604130',
    lng: '-117.550847',
    label: 'Little Pend Oreille and Vicinity Trail System',
    agency: 'DNR',
    sublabel: '' },
    { lat: '47.061713',
    lng: '-119.321405',
    label: 'Moses Lake Sand Dunes',
    agency: 'County',
    sublabel: '(Grant County ORV Park)' },
    { lat: '47.978172',
    lng: '-122.207175',
    label: 'Mt. Baker-Snoqualmie National Forest',
    agency: 'USFS',
    sublabel: '' },
    { lat: '47.105128',
    lng: '-121.593547',
    label: 'Mather Memorial Parkway (SR 410)',
    agency: '',
    sublabel: '' },
    { lat: '46.940983',
    lng: '-121.940636',
    label: '   Evans Creek Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '47.093654',
    lng: '-121.404657',
    label: '   Naches Trail (trail #1175)',
    agency: '',
    sublabel: '   West trailhead' },
    { lat: '48.907155',
    lng: '-121.809847',
    label: 'Mt. Baker Highway (SR 542)',
    agency: 'USFS',
    sublabel: '' },
    { lat: '48.118108',
    lng: '-123.431680',
    label: 'Northern Olympic Peninsula',
    agency: 'DNR',
    sublabel: '' },
    { lat: '48.048755',
    lng: '-123.480280',
    label: 'Foothills Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.134058',
    lng: '-123.906255',
    label: 'Sadie Creek Trailhead',
    agency: '',
    sublabel: '' },
    { lat: '48.916126',
    lng: '-117.781630',
    label: 'Northport',
    agency: 'Town',
    sublabel: '' },
    { lat: '48.331536',
    lng: '-119.603630',
    label: 'Okanogan',
    agency: 'City',
    sublabel: '' },
    { lat: '48.394466',
    lng: '-119.559955',
    label: 'Okanogan',
    agency: 'County',
    sublabel: '' },
    { lat: '47.469177',
    lng: '-120.337388',
    label: 'Okanogan-Wenatchee National Forest',
    agency: 'USFS',
    sublabel: '' },
    { lat: '47.195336',
    lng: '-120.920266',
    label: 'Cle Elum RD ORV Trails - East',
    agency: '',
    sublabel: '' },
    { lat: '47.195336',
    lng: '-120.970266',
    label: 'Cle Elum RD ORV Trails - West',
    agency: '',
    sublabel: '' },
    { lat: '47.315747',
    lng: '-120.390194',
    label: 'Devils Gulch and Mission Ridge area',
    agency: '',
    sublabel: '' },
    { lat: '47.816744',
    lng: '-120.715316',
    label: 'Lower Chiwawa - Mad River - Entiat - Chelan area',
    agency: '',
    sublabel: '' },
    { lat: '48.346522',
    lng: '-120.077736',
    label: 'Methow Valley and Tonasket Ranger District Travel Plan Maps',
    agency: '',
    sublabel: '' },
    { lat: '47.089133',
    lng: '-121.281483',
    label: '   Naches (trail #684)',
    agency: '',
    sublabel: '   East trailhead' },
    { lat: '47.031411',
    lng: '-122.942791',
    label: 'Olympic National Forest',
    agency: 'USFS',
    sublabel: '' },
    { lat: '48.939311',
    lng: '-119.435155',
    label: 'Oroville',
    agency: 'City',
    sublabel: '' },
    { lat: '47.322327',
    lng: '-122.150761',
    label: 'Pacific Raceways',
    agency: 'Private',
    sublabel: '' },
    { lat: '48.054983',
    lng: '-119.899675',
    label: 'Pateros',
    agency: 'City',
    sublabel: '' },
    { lat: '48.180055',
    lng: '-117.043283',
    label: 'Pend Oreille',
    agency: 'County',
    sublabel: '' },
    { lat: '46.474755',
    lng: '-117.622911',
    label: 'Pomeroy',
    agency: 'City',
    sublabel: '' },
    { lat: '46.206147',
    lng: '-119.768311',
    label: 'Prosser',
    agency: 'City',
    sublabel: '' },
    { lat: '46.682402',
    lng: '-123.730552',
    label: 'Raymond',
    agency: 'City',
    sublabel: '' },
    { lat: '47.829925',
    lng: '-121.603291',
    label: 'Reiter Foothills Forest',
    agency: 'DNR',
    sublabel: '' },
    { lat: '48.647692',
    lng: '-118.738050',
    label: 'Republic',
    agency: 'City',
    sublabel: '' },
    { lat: '48.502477',
    lng: '-119.506011',
    label: 'Riverside',
    agency: 'City',
    sublabel: '' },
    { lat: '46.357166',
    lng: '-122.697850',
    label: 'Riverdale Raceway',
    agency: 'Private',
    sublabel: '' },
    { lat: '47.739600',
    lng: '-117.548000',
    label: 'Riverside State Park - 7 Mile ORV Area',
    agency: 'WSPR',
    sublabel: '' },
    { lat: '47.750425',
    lng: '-117.545100',
    label: 'Main Entrance Road',
    agency: '',
    sublabel: '' },
    { lat: '47.739850',
    lng: '-117.543556',
    label: 'Parking lot',
    agency: '',
    sublabel: '' },
    { lat: '47.737550',
    lng: '-117.554716',
    label: 'Mud bog',
    agency: '',
    sublabel: '' },
    { lat: '47.733222',
    lng: '-117.551625',
    label: 'Rock Garden',
    agency: '',
    sublabel: '' },
    { lat: '46.774108',
    lng: '-119.884597',
    label: 'Saddle Mountains',
    agency: 'BLM',
    sublabel: '' },
    { lat: '46.663255',
    lng: '-123.800263',
    label: 'South Bend',
    agency: 'City',
    sublabel: '' },
    { lat: '47.657258',
    lng: '-117.582566',
    label: 'Spokane County ORV Park',
    agency: 'County',
    sublabel: '' },
    { lat: '48.499438',
    lng: '-117.962322',
    label: 'Stevens',
    agency: 'County',
    sublabel: '' },
    { lat: '47.057755',
    lng: '-123.195525',
    label: 'Straddleline ORV Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '47.861738',
    lng: '-121.815255',
    label: 'Sultan',
    agency: 'City',
    sublabel: '' },
    { lat: '47.470927',
    lng: '-122.912747',
    label: 'Tahuya State Forest',
    agency: 'DNR',
    sublabel: '' },
    { lat: '47.514477',
    lng: '-122.882308',
    label: 'North Entrance',
    agency: '',
    sublabel: '' },
    { lat: '47.438625',
    lng: '-122.900280',
    label: 'South Entrance',
    agency: '',
    sublabel: '' },
    { lat: '45.813794',
    lng: '-122.244222',
    label: 'Tarbell, Bells Mountain, Silver Star',
    agency: 'DNR',
    sublabel: '' },
    { lat: '46.914033',
    lng: '-119.824152',
    label: 'Toes Motocross Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '48.704555',
    lng: '-119.439788',
    label: 'Tonasket',
    agency: 'Town',
    sublabel: '' },
    { lat: '45.642575',
    lng: '-118.685725',
    label: 'Umatilla National Forest',
    agency: 'USFS',
    sublabel: '' },
    { lat: '46.481430',
    lng: '-117.720908',
    label: 'Pomeroy Ranger District',
    agency: '',
    sublabel: '' },
    { lat: '46.059361',
    lng: '-118.363658',
    label: 'Walla Walla Ranger District',
    agency: '',
    sublabel: '' },
    { lat: '48.375911',
    lng: '-122.169977',
    label: 'Walker Valley ORV Trail System',
    agency: 'DNR',
    sublabel: '' },
    { lat: '46.682023',
    lng: '-123.663116',
    label: 'Ward Creek Motocross',
    agency: 'Private',
    sublabel: '' },
    { lat: '45.628213',
    lng: '-122.260005',
    label: 'Washougal MX Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '48.473991',
    lng: '-122.605175',
    label: 'Whistle Lake',
    agency: 'Anacortes Community Forest Lands',
    sublabel: '' },
    { lat: '45.940136',
    lng: '-122.662506',
    label: 'Woodland M/X Park',
    agency: 'Private',
    sublabel: '' },
    { lat: '45.666654',
    lng: '-122.311094',
    label: 'Yacolt Burn State Forest',
    agency: 'DNR',
    sublabel: 'Jones Creek ORV Trailhead' },
    { lat: '45.666654',
    lng: '-122.311094',
    label: 'Jones Creek ORV Trailhead',
    agency: '',
    sublabel: '' }
  ];

// Function declarations *******************************************************
  // Map functions ~~~~~~~~~~~~~~~~~~~~~~~~
  var initWaOrvMap = function () {
    // Create the mapOptions to be loaded at map creation
    var mapOptions = {
      zoomControl: true,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      // scrollwheel: false,
      // draggable: false,
    };
    // Create the map and pass it the map default map options
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // Establish event listener for changing the boundaries - zoom when changed
    google.maps.event.addListenerOnce(map, 'bounds_changed', setMapZoom);
    // Establish event listener for window resize to zoom appropriately
    monitorWindowResize();
    // Zoom and pan the map to the boundaries of Washington State
    fitMapToBounds();
    // Used for debugging to get access to the map in the global scope.
    mapGlobal = map;
  };

  var monitorWindowResize = function () {
    // Variable is a closure for the eventlisteners below
    var resizeTimeout;

    function resizeThrottler() {
      // Only allow 1 actualResizeHandler call every 500 milliseconds
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
        }, 500);
      }
    }

    function actualResizeHandler() {
      console.log('resize map: ' + window.innerWidth);
      fitMapToBounds();
      setMapZoom();
    }

    // Establish the event handler
    window.addEventListener("resize", resizeThrottler, false);
  }

  var fitMapToBounds = function() {
    map.fitBounds({north: 49, south: 45.6, west: -124, east: -116.5});
  }

  var setMapZoom = function() {
    switch (true) {
      case window.innerWidth <= 660:
        map.setZoom(6)
        break;
      case window.innerWidth <= 900:
        map.setZoom(7)
        break;
      default:
        map.setZoom(7)
        break;
    }
  };

  var loadGMAPI = function() {
    // jQuery AJAX call to load a script.
    // This process allows the API to be loaded asynchronously without referring
    // to a global callback required for HTML5 ASYNC and DEFER as suggested by
    // Google's API documentation.
    $.getScript( 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAU8UpdSij3QATPIpBPamsTL27thSCSfyo')
    .done(function( script, textStatus ) {
      if (textStatus === 'success') {
        // Initialize the map upon successful loading of script
        initWaOrvMap();
        // Create the openweathermap icon based overlay
        loadOWMIcons();
        // Create the tile based cloud and percipitiation overlay
        // loadCloudAndPrecipOverlay();
        // Create the riding area markers and attach to map
        createMarkers();
        // Render the trackingList
        renderTrackingList();
        console.log(map);
      }
    })
    .fail(function( jqxhr, settings, exception ) {
      console.log('Triggered ajaxError handler.');
    });
  };

  // ***************************************************************************
  // ***** From the openweathermap example for Google Maps JavaScript API ******
  // ***************************************************************************
  var loadOWMIcons = function() {
    // Declare variables for working with openweathermap data
    var infowindow = new google.maps.InfoWindow();
    var geoJSON;
    var request;
    var gettingData = false;
    var openWeatherMapKey = "4241da6fa29994783519776c66246929"

    // Stop extra requests being sent
    var checkIfDataRequested = function() {
      while (gettingData === true) {
        request.abort();
        gettingData = false;
      }
      getCoords();
    };

    // Get the coordinates from the Map bounds
    var getCoords = function() {
      var bounds = map.getBounds();
      var NE = bounds.getNorthEast();
      var SW = bounds.getSouthWest();
      getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
    };

    // Make the weather request
    var getWeather = function(northLat, eastLng, southLat, westLng) {
      gettingData = true;
      var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox="
                          + westLng + "," + northLat + "," //left top
                          + eastLng + "," + southLat + "," //right bottom
                          + map.getZoom()
                          + "&cluster=yes&format=json"
                          + "&APPID=" + openWeatherMapKey
                          + "&units=imperial";

      request = new XMLHttpRequest();
      request.onload = proccessResults;
      request.open("get", requestString, true);
      request.send();
    };

    // Take the JSON results and proccess them
    var proccessResults = function() {
      // console.log(this);
      var results = JSON.parse(this.responseText);
      if (results.list.length > 0) {
          resetData();
          for (var i = 0; i < results.list.length; i++) {
            geoJSON.features.push(jsonToGeoJson(results.list[i]));
          }
          drawIcons(geoJSON);
      }
    };

    // For each result that comes back, convert the data to geoJSON
    var jsonToGeoJson = function (weatherItem) {
      var feature = {
        type: "Feature",
        properties: {
          city: weatherItem.name,
          weather: weatherItem.weather[0].main,
          temperature: weatherItem.main.temp,
          min: weatherItem.main.temp_min,
          max: weatherItem.main.temp_max,
          humidity: weatherItem.main.humidity,
          pressure: weatherItem.main.pressure,
          windSpeed: weatherItem.wind.speed,
          windDegrees: weatherItem.wind.deg,
          windGust: weatherItem.wind.gust,
          icon: "http://openweathermap.org/img/w/"
                + weatherItem.weather[0].icon  + ".png",
          coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
        },
        geometry: {
          type: "Point",
          coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
        }
      };
      // Set the custom marker icon
      map.data.setStyle(function(feature) {
        return {
          icon: {
            url: feature.getProperty('icon'),
            anchor: new google.maps.Point(25, 25)
          }
        };
      });
      // returns object
      return feature;
    };

    // Add the markers to the map
    var drawIcons = function (weather) {
       map.data.addGeoJson(geoJSON);
       // Set the flag to finished
       gettingData = false;
    };

    // Clear data layer and geoJSON
    var resetData = function () {
      geoJSON = {
        type: "FeatureCollection",
        features: []
      };
      map.data.forEach(function(feature) {
        map.data.remove(feature);
      });
    };

    // Add interaction listeners to make weather requests
    google.maps.event.addListener(map, 'idle', checkIfDataRequested);
    // Sets up and populates the info window with details
    map.data.addListener('click', function(event) {
      infowindow.setContent(
       "<img src=" + event.feature.getProperty("icon") + ">"
       + "<br /><strong>" + event.feature.getProperty("city") + "</strong>"
       + "<br />" + event.feature.getProperty("temperature") + "&deg;F"
       + "<br />" + event.feature.getProperty("weather")
       );
      infowindow.setOptions({
          position:{
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          },
          pixelOffset: {
            width: 0,
            height: -15
          }
        });
      infowindow.open(map);
    });
  };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // ***************************************************************************
  // ***** Create the cloud layer **********************************************
  // ***************************************************************************
  var loadCloudAndPrecipOverlay = function() {
    // Define a custom mapType
    var myMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return "http://maps.owm.io:8091/56ce0fcd4376d3010038aaa8/" +
            zoom + "/" + coord.x + "/" + coord.y + "?hash=5";
      },
      tileSize: new google.maps.Size(256, 256),
      maxZoom: 9,
      minZoom: 0,
      name: 'mymaptype'
    });
    // Insert the mapType Overlay into the Google Map
    map.overlayMapTypes.insertAt(0, myMapType);
  };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  var renderTrackingList = function() {
    var $trackingList = $('#tracking-list');

    // Clear all items from the list
    $trackingList.empty();
    // Generate Header
    $trackingList.append('<li class="collection-header brown grey-text text-lighten-4"><h4>Monitored Areas</h4></li>');
    // Loop through the trackedMarkers array and generate an li for each
    for (var marker of trackedMarkers) {
      // Build HTML for list item
      var $li = $(`<li class="collection-item avatar dismissable"></li>`);
      $li.append(`<img src="assets/images/wheelie.jpeg" alt="motorcycle" class="circle">`);
      $li.append(`<span class="title">${marker.title}</span>`);
      $li.append(`<p>Temperarture<br>Cloudy</p>`);
      $li.append(`<a href="#" class="secondary-content"><i class="material-icons brown-text text-darken-2">cancel</i></a>`);
      // Append the new <li> to the trackingList <ul>
      $trackingList.append($li);
    }
  };

  var addTrackedMarker = function(event) {
    // Guard clause to check for item already in list
    if (trackedMarkers.includes(this)) { return; }
    // Add the marker to the trackedMarkers array
    trackedMarkers.push(this);
    // Render the tracking list
    renderTrackingList();
  };

  var createMarkers = function() {
    // Loop through riding areas, create markers, and store in array
    for (var area of ridingAreas) {
      var lat = parseFloat(area.lat);
      var lng = parseFloat(area.lng);
      var marker = new google.maps.Marker({
        position: {lat: lat,lng: lng},
        map: map,
        title: area.label,
        // icon: 'assets/images/wheelie.jpeg',
        // animation: google.maps.Animation.BOUNCE
        // marker.addListener('click', callBack);
        // var infowindow = new google.maps.InfoWindow({
        //   content: secretMessage
        // });
      });
      marker.addListener('click', addTrackedMarker);
      markers.push(marker);
    }
  };

  var removeTrackedMarker = function(event) {
    // Get the title from the item in the list
    var title = $(this).prev().prev().text();
    var index;
    // Loop trackedMarkers and record index of marker with the same title
    for (var marker of trackedMarkers) {
      if (marker.title === title) {
        index = trackedMarkers.indexOf(marker);
      }
    }
    // Remove marker from the trackedMarkers array
    trackedMarkers.splice(index,1);
    // Render the tracking-list
    renderTrackingList();
  };

  var validateDatePicker = function(event) {
    // Date chosen needs to be between today and 4 days from now.
    var $target = $(event.target);
    var chosenDate = new Date($target.val());
    var currentDate = new Date();
    var maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+forecastDays);
    var maxMS = 60*60*24*1000*forecastDays
    var chosenDifMS = maxDate.getTime() - chosenDate.getTime();
    if (chosenDifMS > maxMS || chosenDifMS < 0) {
      console.log('invalid input');
    }
  };

  var formatDatePicker = function() {
    $('.picker__weekday-display').addClass('brown lighten-2');
    $('.picker__date-display').addClass('brown');
    $('.picker__day--selected').addClass('brown white-text');
    $('.picker__close, .picker__today').addClass('brown-text');
    $('button.picker__close:focus, button.picker__clear:focus, button.picker__today:focus').addClass('brown lighten-2 brown-text');
    $('.picker__day.picker__day--today').addClass('brown-text');
    // $('.picker__nav--prev:hover, .picker__nav--next:hover').css('background', '#a1887f');
  };

  var initDatePicker = function() {
    var $datePicker = $('#date');
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    $datePicker.pickadate({
      onSet: function (context) {
        formatDatePicker();
        if (context.hasOwnProperty('select')) {
          this.close();
        }
      },
      onOpen: function () {
        formatDatePicker();
      },
      min: date,
      max: 4,
      format: 'mmmm d, yyyy',
      // selectMonths: true, // Creates a dropdown to control month
      // selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    // Use the picker object directly.
    var picker = $datePicker.pickadate('picker');
    // Using JavaScript Date objects.
    picker.set('select', new Date(year, month, day))
    // Establish event listener for change event
    $datePicker.on('change',validateDatePicker);
  }

// Immediate execution *********************************************************
  // Pull the Google Maps API objects into the scope of the IFFE.
  loadGMAPI();
  // Create event listener for removing items from the tracking-list
  $('#tracking-list').on('click', 'a', removeTrackedMarker);
  // Initialize the Materialize date picker
  initDatePicker();

// End IFFE
})();
