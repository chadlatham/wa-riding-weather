// eslint-disable-next-line max-statements
(function() { // IFFE to protect global scope
  'use strict';

// App level variables *********************************************************

  // The Google Map
  let map;

  // A single infowindow instance
  let infowindow;

  // The maximum number of days of forecase for the API
  const forecastDays = 4;

  // An array of markers placed on map
  const markers = [];

  // An array of objects with a marker and current weather being tracked
  const trackedMarkers = [];

  // The current weather query result
  let currentMarkerWeather;

  // An array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  // The simulated user settings object retrieved from database
  const userSettings = {
    firstName: 'Chad',
    lastName: 'Latham',
    phone: '000.000.0000',
    frequency: '12',
    userName: 'chadlatham',
    password: 'testing'
  };

  // The Open Weather Map API Key
  const OWMKey = '4241da6fa29994783519776c66246929';

  // Array of ridingArea objects - Used to generate markers
  const ridingAreas = [{
    lat: '46.517576',
    lng: '-121.017341',
    label: 'Ahtanum State Forest',
    agency: 'DNR',
    sublabel: ''
  }, {
    at: '46.831979',
    lng: '-119.892786',
    label: 'Beverly Sand Dunes',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '45.714794',
    lng: '-121.466455',
    label: 'Bingen',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '46.232072',
    lng: '-123.278488',
    label: 'Bradley Trail',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '46.586231',
    lng: '-122.589161',
    label: 'Burnt Ridge MX Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '46.952835',
    lng: '-123.160375',
    label: 'Capitol State Forest',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '46.894185',
    lng: '-123.082644',
    label: 'Bordeaux Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.926455',
    lng: '-123.304200',
    label: 'C-Line Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.868691',
    lng: '-123.263966',
    label: 'Cedar Creek Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.057841',
    lng: '-123.195900',
    label: 'County Line Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.949605',
    lng: '-123.057525',
    label: 'Delphi Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.954035',
    lng: '-123.285150',
    label: 'Porter Creek Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.034025',
    lng: '-123.096825',
    label: 'Rock Candy Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.926588',
    lng: '-123.056355',
    label: 'Waddell Creek Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.421740',
    lng: '-120.314951',
    label: 'Chelan',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '48.276250',
    lng: '-117.715515',
    label: 'Chewelah',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '45.748286',
    lng: '-122.669313',
    label: 'Clark County Arenacross',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '48.546548',
    lng: '-117.905848',
    label: 'Colville',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '48.601258',
    lng: '-117.905200',
    label: 'Colville National Forest',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '48.371600',
    lng: '-117.369000',
    label: 'Batey Bould Motorcycle Trails',
    agency: '',
    sublabel: '(trail #s 306, 306.1, 307 thru 312)'
  }, {
    lat: '48.610700',
    lng: '-117.551655',
    label: 'LPO (Little Pend Oreille) Motorized Trail System',
    agency: '',
    sublabel: '(trail #s 140, 142 thru 146, 148, 148.1 and 151)'
  }, {
    lat: '48.676847',
    lng: '-118.385058',
    label: 'Mack/King Mtn Trail (trail #98)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.674788',
    lng: '-118.336806',
    label: '   East Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.681181',
    lng: '-118.442853',
    label: '   West Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.248416',
    lng: '-117.432036',
    label: 'Middle Fork Calispel ATV Trails',
    agency: '',
    sublabel: '(trail #s 313 thru 315)'
  }, {
    lat: '48.956230',
    lng: '-118.291461',
    label: 'Owl Mountain Trail (trail #102)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.934858',
    lng: '-118.293027',
    label: '   South Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.543713',
    lng: '-118.275225',
    label: 'South Huckleberry Mountain Trail (trail #12110)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.529983',
    lng: '-118.309716',
    label: '   North Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.746711',
    lng: '-118.224855',
    label: 'Thompson Ridge Trail (trail #107)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.699591',
    lng: '-118.390677',
    label: 'Twin Sisters Trail (trail #109)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.713167',
    lng: '-118.339950',
    label: '   East Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.515977',
    lng: '-118.274375',
    label: 'Unnamed Trail (trail #12060)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.714086',
    lng: '-118.444011',
    label: 'US Mountain Trail (trail #12600)',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.557181',
    lng: '-119.750099',
    label: 'Conconully',
    agency: 'Town',
    sublabel: ''
  }, {
    lat: '47.645605',
    lng: '-120.071425',
    label: 'Douglas',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '47.410313',
    lng: '-120.251655',
    label: 'East Wenatchee',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '45.736983',
    lng: '-120.849155',
    label: 'Eddieville Sports Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '46.786208',
    lng: '-122.077502',
    label: 'Elbe Hills OHV Trail System',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '47.299750',
    lng: '-119.542038',
    label: 'Ephrata Raceway Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '47.866941',
    lng: '-121.981000',
    label: 'Evergreen Speedway',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '48.544713',
    lng: '-117.572908',
    label: 'Flodelle Creek',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '46.473985',
    lng: '-117.520116',
    label: 'Garfield',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '45.657938',
    lng: '-122.564213',
    label: 'Gifford-Pinchot National Forest',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '46.534100',
    lng: '-121.933891',
    label: 'Cowlitz Valley Vicinity',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.000158',
    lng: '-121.544480',
    label: 'Mt. Adams Vicinity',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.580783',
    lng: '-122.788438',
    label: 'Green Mountain State Forest',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '47.556919',
    lng: '-122.827305',
    label: 'Gold Creek Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.600791',
    lng: '-122.788347',
    label: 'Wildcat Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.793505',
    lng: '-122.442605',
    label: 'Hannegan Speedway',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '46.352222',
    lng: '-119.356388',
    label: 'Horn Rapids MX Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '47.714919',
    lng: '-116.802447',
    label: 'Idaho Panhandle National Forests',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '48.574730',
    lng: '-116.957802',
    label: 'Kaniksu National Forest:',
    agency: '',
    sublabel: 'Priest Lake Ranger District Office'
  }, {
    lat: '47.921416',
    lng: '-117.042265',
    label: 'Inland Empire Paper (IEP) Company',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '48.740938',
    lng: '-117.417884',
    label: 'Ione',
    agency: 'Town',
    sublabel: ''
  }, {
    lat: '46.314200',
    lng: '-118.951850',
    label: 'Juniper Dunes',
    agency: 'BLM',
    sublabel: ''
  }, {
    lat: '48.610832',
    lng: '-118.056452',
    label: 'Kettle Falls',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '46.992325',
    lng: '-120.548463',
    label: 'Kittitas',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '47.421330',
    lng: '-118.741940',
    label: 'Lakeview Ranch',
    agency: 'BLM',
    sublabel: ''
  }, {
    lat: '47.636990',
    lng: '-117.060591',
    label: 'Liberty Lake Regional Park',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '47.637594',
    lng: '-117.053936',
    label: 'Liberty Lake ORV Park',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.604130',
    lng: '-117.550847',
    label: 'Little Pend Oreille and Vicinity Trail System',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '47.061713',
    lng: '-119.321405',
    label: 'Moses Lake Sand Dunes',
    agency: 'County',
    sublabel: '(Grant County ORV Park)'
  }, {
    lat: '47.978172',
    lng: '-122.207175',
    label: 'Mt. Baker-Snoqualmie National Forest',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '47.105128',
    lng: '-121.593547',
    label: 'Mather Memorial Parkway (SR 410)',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.940983',
    lng: '-121.940636',
    label: '   Evans Creek Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.093654',
    lng: '-121.404657',
    label: '   Naches Trail (trail #1175)',
    agency: '',
    sublabel: '   West trailhead'
  }, {
    lat: '48.907155',
    lng: '-121.809847',
    label: 'Mt. Baker Highway (SR 542)',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '48.118108',
    lng: '-123.431680',
    label: 'Northern Olympic Peninsula',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '48.048755',
    lng: '-123.480280',
    label: 'Foothills Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.134058',
    lng: '-123.906255',
    label: 'Sadie Creek Trailhead',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.916126',
    lng: '-117.781630',
    label: 'Northport',
    agency: 'Town',
    sublabel: ''
  }, {
    lat: '48.331536',
    lng: '-119.603630',
    label: 'Okanogan',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '48.394466',
    lng: '-119.559955',
    label: 'Okanogan',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '47.469177',
    lng: '-120.337388',
    label: 'Okanogan-Wenatchee National Forest',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '47.195336',
    lng: '-120.920266',
    label: 'Cle Elum RD ORV Trails - East',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.195336',
    lng: '-120.970266',
    label: 'Cle Elum RD ORV Trails - West',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.315747',
    lng: '-120.390194',
    label: 'Devils Gulch and Mission Ridge area',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.816744',
    lng: '-120.715316',
    label: 'Lower Chiwawa - Mad River - Entiat - Chelan area',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.346522',
    lng: '-120.077736',
    label: 'Methow Valley and Tonasket Ranger District Travel Plan Maps',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.089133',
    lng: '-121.281483',
    label: '   Naches (trail #684)',
    agency: '',
    sublabel: '   East trailhead'
  }, {
    lat: '47.031411',
    lng: '-122.942791',
    label: 'Olympic National Forest',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '48.939311',
    lng: '-119.435155',
    label: 'Oroville',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '47.322327',
    lng: '-122.150761',
    label: 'Pacific Raceways',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '48.054983',
    lng: '-119.899675',
    label: 'Pateros',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '48.180055',
    lng: '-117.043283',
    label: 'Pend Oreille',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '46.474755',
    lng: '-117.622911',
    label: 'Pomeroy',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '46.206147',
    lng: '-119.768311',
    label: 'Prosser',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '46.682402',
    lng: '-123.730552',
    label: 'Raymond',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '47.829925',
    lng: '-121.603291',
    label: 'Reiter Foothills Forest',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '48.647692',
    lng: '-118.738050',
    label: 'Republic',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '48.502477',
    lng: '-119.506011',
    label: 'Riverside',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '46.357166',
    lng: '-122.697850',
    label: 'Riverdale Raceway',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '47.739600',
    lng: '-117.548000',
    label: 'Riverside State Park - 7 Mile ORV Area',
    agency: 'WSPR',
    sublabel: ''
  }, {
    lat: '47.750425',
    lng: '-117.545100',
    label: 'Main Entrance Road',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.739850',
    lng: '-117.543556',
    label: 'Parking lot',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.737550',
    lng: '-117.554716',
    label: 'Mud bog',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.733222',
    lng: '-117.551625',
    label: 'Rock Garden',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.774108',
    lng: '-119.884597',
    label: 'Saddle Mountains',
    agency: 'BLM',
    sublabel: ''
  }, {
    lat: '46.663255',
    lng: '-123.800263',
    label: 'South Bend',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '47.657258',
    lng: '-117.582566',
    label: 'Spokane County ORV Park',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '48.499438',
    lng: '-117.962322',
    label: 'Stevens',
    agency: 'County',
    sublabel: ''
  }, {
    lat: '47.057755',
    lng: '-123.195525',
    label: 'Straddleline ORV Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '47.861738',
    lng: '-121.815255',
    label: 'Sultan',
    agency: 'City',
    sublabel: ''
  }, {
    lat: '47.470927',
    lng: '-122.912747',
    label: 'Tahuya State Forest',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '47.514477',
    lng: '-122.882308',
    label: 'North Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '47.438625',
    lng: '-122.900280',
    label: 'South Entrance',
    agency: '',
    sublabel: ''
  }, {
    lat: '45.813794',
    lng: '-122.244222',
    label: 'Tarbell, Bells Mountain, Silver Star',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '46.914033',
    lng: '-119.824152',
    label: 'Toes Motocross Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '48.704555',
    lng: '-119.439788',
    label: 'Tonasket',
    agency: 'Town',
    sublabel: ''
  }, {
    lat: '45.642575',
    lng: '-118.685725',
    label: 'Umatilla National Forest',
    agency: 'USFS',
    sublabel: ''
  }, {
    lat: '46.481430',
    lng: '-117.720908',
    label: 'Pomeroy Ranger District',
    agency: '',
    sublabel: ''
  }, {
    lat: '46.059361',
    lng: '-118.363658',
    label: 'Walla Walla Ranger District',
    agency: '',
    sublabel: ''
  }, {
    lat: '48.375911',
    lng: '-122.169977',
    label: 'Walker Valley ORV Trail System',
    agency: 'DNR',
    sublabel: ''
  }, {
    lat: '46.682023',
    lng: '-123.663116',
    label: 'Ward Creek Motocross',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '45.628213',
    lng: '-122.260005',
    label: 'Washougal MX Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '48.473991',
    lng: '-122.605175',
    label: 'Whistle Lake',
    agency: 'Anacortes Community Forest Lands',
    sublabel: ''
  }, {
    lat: '45.940136',
    lng: '-122.662506',
    label: 'Woodland M/X Park',
    agency: 'Private',
    sublabel: ''
  }, {
    lat: '45.666654',
    lng: '-122.311094',
    label: 'Yacolt Burn State Forest',
    agency: 'DNR',
    sublabel: 'Jones Creek ORV Trailhead'
  }, {
    lat: '45.666654',
    lng: '-122.311094',
    label: 'Jones Creek ORV Trailhead',
    agency: '',
    sublabel: ''
  }];

// Function declarations *******************************************************
  // Map functions ~~~~~~~~~~~~~~~~~~~~~~~~
  const setMapZoom = function() {
    switch (true) {
      case window.innerWidth <= 660:
        map.setZoom(6);
        break;
      case window.innerWidth <= 900:
        map.setZoom(7);
        break;
      default:
        map.setZoom(7);
        break;
    }
  };

  const resizeScrollArrow = function() {
    $('.arrow-spacer').height($('#map-container').height());
    $('.arrow-vert-body').height($('#map-container').height() * 0.9);
  };

  const fitMapToBounds = function() {
    map.fitBounds({
      north: 49,
      south: 45.6,
      west: -124,
      east: -116.5
    });
  };

  const monitorWindowResize = function() {
    // Variable is a closure for the eventlisteners below
    let resizeTimeout;

    const actualResizeHandler = function() {
      resizeScrollArrow();
      fitMapToBounds();
      setMapZoom();
    };

    const resizeThrottler = function() {
      // Only allow 1 actualResizeHandler call every 500 milliseconds
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          actualResizeHandler();
        }, 500);
      }
    };

    // Establish the event handler
    window.addEventListener('resize', resizeThrottler, false);
  };

  const initWaOrvMap = function() {
    // Create the mapOptions to be loaded at map creation
    const mapOptions = {
      zoomControl: true,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    // Create the map and pass it the map default map options
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Establish event listener for changing the boundaries - zoom when changed
    google.maps.event.addListenerOnce(map, 'bounds_changed', setMapZoom);

    // Establish event listener for window resize to zoom appropriately
    monitorWindowResize();

    // Zoom and pan the map to the boundaries of Washington State
    fitMapToBounds();

    // Resize the scroll arrows
    resizeScrollArrow();

    // Initialize the info window object
    infowindow = new google.maps.InfoWindow();
  };

  // ***************************************************************************
  // ***** From the openweathermap example for Google Maps JavaScript API ******
  // ***** Rewritten to use jQuery and practice better form (not perfect) ******
  // ***************************************************************************
  const loadOWMIcons = function() {
    // Declare variables for working with openweathermap data
    let geoJSON;
    let request;
    let gettingData = false;

    // Clear data layer and geoJSON
    const resetData = function() {
      geoJSON = {
        type: 'FeatureCollection',
        features: []
      };
      map.data.forEach((feature) => {
        map.data.remove(feature);
      });
    };

    // For each result that comes back, convert the data to geoJSON
    const jsonToGeoJson = function(weatherItem) {
      let iconUrl = 'http://openweathermap.org/img/w/';

      iconUrl += `${weatherItem.weather[0].icon}.png`;
      const feature = {
        type: 'Feature',
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
          icon: iconUrl,
          coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
        },
        geometry: {
          type: 'Point',
          coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
        }
      };

      // Set the custom marker icon
      map.data.setStyle((feat) => {
        const result = {
          icon: {
            url: feat.getProperty('icon'),
            anchor: new google.maps.Point(25, 25)
          }
        };

        return result;
      });

      // returns object
      return feature;
    };

    // Add the markers to the map
    const drawIcons = function() {
      map.data.addGeoJson(geoJSON);

      // Set the flag to finished
      gettingData = false;
    };

    // Take the JSON results and proccess them
    const processResults = function(results) {
      if (results.list.length > 0) {
        resetData();
        for (const forecast of results.list) {
          geoJSON.features.push(jsonToGeoJson(forecast));
        }
        drawIcons();
      }
    };

    // Make the weather request
    const getWeather = function(box) {
      gettingData = true;
      let query = 'http://api.openweathermap.org/data/2.5/box/city?bbox=';

      query += `${box.west},${box.north},${box.east},${box.south},`;
      query += `${map.getZoom()}&cluster=yes&format=json&APPID=${OWMKey}`;
      query += '&units=imperial';
      const owmError = 'Cannot communicate with OpenWeatherMap';

      request = $.getJSON(query);

      request.done(processResults)
      .fail(() => {
        Materialize.toast(owmError, 3000, 'rounded');
      });
    };

    // Get the coordinates from the Map bounds
    const getCoords = function() {
      const bounds = map.getBounds();

      const perimeter = {
        north: bounds.getNorthEast().lat(),
        east: bounds.getNorthEast().lng(),
        south: bounds.getSouthWest().lat(),
        west: bounds.getSouthWest().lng()
      };

      getWeather(perimeter);
    };

    // Stop extra requests being sent
    const checkIfDataRequested = function() {
      while (gettingData) {
        request.abort();
        gettingData = false;
      }
      getCoords();
    };

    // Add interaction listeners to make weather requests
    google.maps.event.addListener(map, 'idle', checkIfDataRequested);

    // Sets up and populates the info window with details
    map.data.addListener('click', (event) => {
      let content = `<img src=${event.feature.getProperty('icon')}>`;

      content += `<br/><strong>${event.feature.getProperty('city')}</strong>`;
      content += `<br/>${event.feature.getProperty('temperature')}&deg;F`;
      content += `<br/>${event.feature.getProperty('weather')}`;
      infowindow.setContent(content);
      const options = {
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        },
        pixelOffset: {
          width: 0,
          height: -15
        }
      };

      infowindow.setOptions(options);

      // Establish map event listener for removing an open infowindow
      google.maps.event.addListenerOnce(map, 'click', () => {
        infowindow.close(map);
      });
      infowindow.open(map);
    });
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // ***************************************************************************
  // ***** Create the cloud layer * CURRENTLY DISABLED * UNDESIRED EFFECTS *****
  // ***************************************************************************
  // eslint-disable-next-line
  const loadCloudAndPrecipOverlay = function() {
    // Define a custom mapType
    const myMapType = new google.maps.ImageMapType({
      getTileUrl: (coord, zoom) => {
        let tileUrl = 'http://maps.owm.io:8091/56ce0fcd4376d3010038aaa8/';

        tileUrl += `${zoom}/${coord.x}/${coord.y}?hash=5`;

        return tileUrl;
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
  const getMIWContent = function() {
    const weather = currentMarkerWeather.weather;
    const marker = currentMarkerWeather.marker;
    const icon = weather.weather[0].icon;
    let content = `<img src="http://openweathermap.org/img/w/${icon}.png">`;

    content += `<p class="iw-title"><strong>${marker.title}</strong></p>`;
    content += '<p><i class="mdi mdi-thermometer" aria-hidden="true"></i>';
    content += `${weather.main.temp}&deg;F <i class="mdi mdi-weather-windy"`;
    content += `aria-hidden="true"></i> ${Math.round(weather.wind.speed)}`;
    content += 'mph</p><a id="iwbutton" class="waves-effect waves-light btn ';
    content += 'light-blue accent-4 z-depth-2">Monitor</a>';

    return content;
  };

  const generate$li = function(obj) {
    // Build HTML for li tag
    let html = '<li class="collection-item avatar ';

    html += 'brown lighten-3 dismissable"></li>';
    const $li = $(html);

    // Build HTML img tag
    html = '<img src="http://openweathermap.org/img/w/';
    html += `${obj.weather.weather[0].icon}.png" class="circle">`;

    // Append img and p tag
    $li.append(`${html}<p class="title">${obj.marker.title}</p>`);

    // Build HTML and append p tag
    html = '<p><i class="mdi mdi-thermometer" aria-hidden="true"></i> ';
    html += `${obj.weather.main.temp}&deg;F <i class="mdi `;
    html += 'mdi-weather-windy" aria-hidden="true"></i> ';
    html += `${Math.round(obj.weather.wind.speed)} mph</p>`;
    $li.append(html);

    // Build HTML and append a tag
    html = '<a href="#" class="secondary-content"><i class="material-icons ';
    html += 'brown-text text-darken-2">cancel</i></a>';
    $li.append(html);

    return $li;
  };

  const renderTrackingList = function() {
    const $trackingList = $('#tracking-list');

    // Clear all items from the list
    $trackingList.empty();

    // Generate Header
    let html = '<li class="collection-header center brown grey-text ';

    html += `text-lighten-4"><h5>Monitored Areas: ${trackedMarkers.length}`;
    html += '</h5></li>';
    $trackingList.append(html);

    // Loop through the trackedMarkers array and generate an li for each
    for (const obj of trackedMarkers) {
      // Append the new <li> to the trackingList <ul>
      $trackingList.append(generate$li(obj));
    }
  };

  const addTrackedMarker = function() {
    // Guard clause to check for item already in list
    if (trackedMarkers.length > 0) {
      for (const obj of trackedMarkers) {
        if (obj === currentMarkerWeather) {
          return;
        }
      }
    }
    currentMarkerWeather.marker.setAnimation(google.maps.Animation.BOUNCE);

    // Add the marker to the trackedMarkers array
    trackedMarkers.push(currentMarkerWeather);

    // Close the info window
    infowindow.close(map);

    // Render the tracking list
    renderTrackingList();
  };

  const openMarkerInfoWindow = function(event) {
    // This is a reference to the marker object that event does not contain
    // Google Maps event handling creates an event object that does not have a
    // reference to the actual object clicked, rather it provides a latLng
    // object instead.

    // Alias for this to allow callback for $xhrForecast to access reference.
    const context = this; // eslint-disable-line
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();
    const time = 'weather';
    const time2 = 'forecast';
    const url = 'http://api.openweathermap.org/data/2.5/';
    const units = 'imperial';
    let query = `${url}${time}?APPID=${OWMKey}`;

    query += `&lat=${latitude}&lon=${longitude}&units=${units}`;
    let query2 = `${url}${time2}?APPID=${OWMKey}`;

    query2 += `&lat=${latitude}&lon=${longitude}&units=${units}`;

    const $xhr = $.getJSON(query);

    $xhr.done((data) => {
      const $xhrForecast = $.getJSON(query2);

      $xhrForecast.done((data2) => {
        // App scope assignment
        currentMarkerWeather = {
          marker: context,
          weather: data,
          forecast: data2
        };
        infowindow.setContent(getMIWContent());
        infowindow.setOptions({
          position: {
            lat: latitude,
            lng: longitude
          },
          pixelOffset: {
            width: 0,
            height: -15
          }
        });

        // Establish map event listener for removing an open infowindow on click
        google.maps.event.addListenerOnce(map, 'click', () => {
          infowindow.close(map);
        });
        infowindow.open(map);

        // Establish listener for button on info window - add to monitor list
        $('#iwbutton').click(addTrackedMarker);
      })
      .fail(() => {
        Materialize.toast('Get forecast failed', 3000, 'rounded');
      });
    })
    .fail(() => {
      Materialize.toast('Get current weather failed', 3000, 'rounded');
    });
  };

  const createMarkers = function() {
    const gMap = map;

    // Loop through riding areas, create markers, and store in array
    for (const area of ridingAreas) {
      const latCoord = parseFloat(area.lat);
      const lngCoord = parseFloat(area.lng);
      const marker = new google.maps.Marker({
        position: {
          lat: latCoord,
          lng: lngCoord
        },
        map: gMap,
        title: area.label
      });

      marker.addListener('click', openMarkerInfoWindow);
      markers.push(marker);
    }
  };

  const loadMap = function() {
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
  };

  const removeTrackedMarker = function(event) {
    // Get the title from the item in the list
    const title = $(event.target).parent().prev().prev().text();

    // Loop trackedMarkers and record index of marker with the same title
    for (let index = 0; index < trackedMarkers.length; index++) {
      if (trackedMarkers[index].marker.title === title) {
        // Remove the tracked marker bounce animation
        trackedMarkers[index].marker.setAnimation(null);

        // Remove marker from the trackedMarkers array
        trackedMarkers.splice(index, 1);
        break;
      }
    }

    // Render the tracking-list
    renderTrackingList();
  };

  const calculateDaysAway = function($target) {
    const result = [];
    const chosenDate = new Date($target.val());
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const compDate = new Date(currentYear, currentMonth, currentDay);
    const msPerDay = 60 * 60 * 24 * 1000;
    const forecastBeginsMS = chosenDate.getTime() - forecastDays * msPerDay;
    const forecastBeginsDate = new Date();

    forecastBeginsDate.setTime(forecastBeginsMS);
    result.push((chosenDate.getTime() - compDate.getTime()) / msPerDay);
    result.push(forecastBeginsDate);

    return result;
  };

  const validateDatePicker = function(event) {
    // Date chosen needs to be between today and 4 days from now.
    const $target = $(event.target);

    if ($target.val() === '') {
      $target.addClass('invalid').removeClass('valid');
      Materialize.toast('Must choose a date', 2000, 'rounded');

      return;
    }
    $target.addClass('valid').removeClass('invalid');
    const calcDays = calculateDaysAway($target);

    if (calcDays[0] > forecastDays) {
      let msg = 'Earliest forecasts available: ';

      msg += `${months[calcDays[1].getMonth()]} ${calcDays[1].getDate()}, `;
      msg += `${calcDays[1].getFullYear()}`;
      Materialize.toast(msg, 3000, 'rounded');
    }
  };

  const formatDatePicker = function() {
    let classText = 'button.picker__close:focus, button.picker__clear:focus,';

    classText += 'button.picker__today:focus';
    $('.picker__weekday-display').addClass('brown lighten-2');
    $('.picker__date-display').addClass('brown');
    $('.picker__day--selected').addClass('brown white-text');
    $('.picker__close, .picker__today').addClass('brown-text');
    $(classText).addClass('brown lighten-2 brown-text');
    $('.picker__day.picker__day--today').addClass('brown-text');
  };

  const initDatePicker = function() {
    const $datePicker = $('#date');
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const setDatePicker = function(event) {
      formatDatePicker();
      if (event.hasOwnProperty('select')) {
        // Event in this case is a date object while 'this' is the only
        // reference to the datepicker object which is required to call close.
        // External library from Materialize causing this behavior.
        this.close(); // eslint-disable-line
      }
    };

    $datePicker.pickadate({
      onSet: setDatePicker,
      onOpen: formatDatePicker,
      min: date,
      format: 'mmmm d, yyyy'
    });

    // Use the picker object directly.
    const picker = $datePicker.pickadate('picker');

    // Using JavaScript Date objects.
    picker.set('select', new Date(year, month, day));

    // Establish event listener for change event
    $datePicker.on('change', validateDatePicker);
  };

  const setValidity = function($input, validityState) {
    if (validityState) {
      $input.addClass('valid').removeClass('invalid');
    }
    else {
      $input.addClass('invalid').removeClass('valid');
    }
  };

  const validateFirstName = function() {
    if ($('#firstName').val() !== '') {
      setValidity($('#firstName'), true);

      return true;
    }
    setValidity($('#firstName'), false);

    return false;
  };

  const validateLastName = function() {
    if ($('#lastName').val() !== '') {
      setValidity($('#lastName'), true);

      return true;
    }
    setValidity($('#lastName'), false);

    return false;
  };

  const validateUserName = function() {
    if ($('#userName').val() !== '') {
      setValidity($('#userName'), true);

      return true;
    }
    setValidity($('#userName'), false);

    return false;
  };

  const validatePassword = function() {
    if ($('#password').val() !== '') {
      setValidity($('#password'), true);

      return true;
    }
    setValidity($('#password'), false);

    return false;
  };

  const validatePhone = function() {
    const phone = $('#phone').val();
    const test = phone.match(/(\d{3})[).\-\s]*(\d{3})[.\-\s]*(\d{4})/g);

    if (test !== null) {
      setValidity($('#phone'), true);

      return true;
    }
    setValidity($('#phone'), false);

    return false;
  };

  const cancelModalSubmit = function() {
    window.timeOut(() => {
      $('#user-settings').openModal();
    }, 1000);
  };

  const validateUSWithEvent = function(event) {
    switch (event.target.id) {
      case 'firstName':
        validateFirstName();
        break;
      case 'lastName':
        validateLastName();
        break;
      case 'userName':
        validateUserName();
        break;
      case 'password':
        validatePassword();
        break;
      case 'phone':
        validatePhone();
        break;
      default:
    }
  };

  const toastMe = function(msg) {
    Materialize.toast(msg, 3000, 'rounded');

    return false;
  };

  // Function to validate each user setting or a single setting based on event
  const validateUserSettings = function(event) {
    // Guard clause to hand off event base calls to another function
    if (event) {
      validateUSWithEvent(event);

      return;
    }
    if (!validateFirstName()) {
      return toastMe('Must provide a first name');
    }
    if (!validateLastName()) {
      return toastMe('Must provide a last name');
    }
    if (!validateUserName()) {
      return toastMe('Must provide a user name');
    }
    if (!validatePassword()) {
      return toastMe('Must provide a password');
    }
    if (!validatePhone()) {
      return toastMe('Need US phone number XXX.XXX.XXXX');
    }

    return true;
  };

  const initUserSettings = function() {
    Materialize.updateTextFields();
    $('#firstName').val(userSettings.firstName);
    $('#lastName').val(userSettings.lastName);
    $('#userName').val(userSettings.userName);
    $('#password').val(userSettings.password);
    $('#phone').val(userSettings.phone);
    $('input.select-dropdown').val(userSettings.frequency);
    validateUserSettings();

    // Required by Materialize when dynamically updating inputs
    Materialize.updateTextFields();
  };

  const updateUserSettings = function() {
    userSettings.firstName = $('#firstName').val();
    userSettings.lastName = $('#lastName').val();
    userSettings.userName = $('#userName').val();
    userSettings.password = $('#password').val();
    userSettings.phone = $('#phone').val();
    userSettings.frequency = $('#frequency').val();
    Materialize.toast('Settings updated', 3000, 'rounded');
  };

  const submitModal = function() {
    if (validateUserSettings()) {
      updateUserSettings();
    }
    else {
      cancelModalSubmit();
    }
  };

  const genModalContent = function() {
    const $modalContent = $('#sms-submit .modal-content');

    $modalContent.empty();
    $modalContent.append('<h4>Please verify settings</h4>');
    let html = '<p><i class="mdi mdi-cellphone-android" aria-hidden="true">';

    html += `</i>Phone: ${userSettings.phone}</p>`;
    html += '<p><i class="mdi mdi-timer" aria-hidden="true"></i>';
    html += `Frequency: ${userSettings.frequency} hrs</p>`;
    $modalContent.append(html);
  };

  const buildForecastText = function() {
    let forecast = 'waridingweather.com\n';
    const lineBreak = '-----------------------\n';

    forecast += `Weather for ${trackedMarkers.length} ORV parks:\n${lineBreak}`;

    // Loop the tracked object markers, current, and forecast data
    for (const obj of trackedMarkers) {
      forecast += `${obj.marker.title}\n`;

      // Loop the forecast dataPoints
      for (const dataPoint of obj.forecast.list) {
        const dateTime = dataPoint.dt_txt.split(' ');
        const date = dateTime[0].substr(dateTime[0].length - 2);
        const time = dateTime[1].substr(0, 2);
        const desc = dataPoint.weather[0].description;
        const temp = `${Math.round(dataPoint.main.temp)}F`;
        const wind = `${Math.round(dataPoint.wind.speed)}W`;

        forecast += `${date} ${time} ${temp} ${wind} ${desc}\n`;
      }
      forecast += lineBreak;
    }

    return forecast;
  };

  const sendSMS = function(smsText) {
    const url = 'http://textbelt.com/text';
    const phone = userSettings.phone;
    const msg = `Forecast sent to: ${userSettings.phone}`;

    $.post(url, {
      number: phone,
      message: smsText
    });
    Materialize.toast(msg, 3000, 'rounded');
  };

  const smsVerified = function() {
    // format and send SMS message
    const smsText = buildForecastText();

    sendSMS(smsText);
  };

  const smsSubmit = function() {
    if (!trackedMarkers.length) {
      $('#sms-submit').closeModal();
      Materialize.toast('Add an item to be monitored', 3000, 'rounded');
    }
    genModalContent();
  };

// Immediate execution *********************************************************
  // Load the Google map and supporting configuration.
  loadMap();

  // ************** Initialize Materialize functionality
  // Init date picker
  initDatePicker();

  // Init select inputs
  $('select').material_select();

  // Init settings bottom modal
  // Object below contains a linting error: in_duration not in camelCase.
  // The object is from the Materialize library, and it's key's cannot change.
  $('.modal-trigger.settings').leanModal({
    dismissible: true,
    opacity: 0.5,
    in_duration: 300, // eslint-disable-line
    out_duration: 200, // eslint-disable-line
    ready: initUserSettings,
    complete: resizeScrollArrow
  });

  // Init the confirm send SMS modal
  // Object below contains a linting error: in_duration not in camelCase.
  // The object is from the Materialize library, and it's key's cannot change.
  $('#sms').leanModal({
    dismissible: true,
    opacity: 0.5,
    in_duration: 300, // eslint-disable-line
    out_duration: 200, // eslint-disable-line
    ready: null,
    complete: resizeScrollArrow
  });

  // *************** Establish event listeners
  // Create event listener for removing items from the tracking-list
  $('#tracking-list').on('click', 'a', removeTrackedMarker);

  // Attach event listener delegate to monitor input element validation
  $('#user-settings').on('keyup', 'input', validateUserSettings);

  // Attach event listener for submit button on modal form
  $('#user-settings .modal-action').on('click', submitModal);

  // Create event listener for send SMS button
  $('#sms').on('click', smsSubmit);

  // Create event listener for sms modal receive button
  $('#sms-verify').on('click', smsVerified);
})(); // End IFFE
