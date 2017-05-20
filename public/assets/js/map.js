            function initialize() {
             
			var styledMapType = new google.maps.StyledMapType(
                [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
],
{name: 'Styled Map'});

                var map;
                var bounds = new google.maps.LatLngBounds();
                var mapOptions = {
                    mapTypeId: 'roadmap'
                };

                //Display a map on the page -->
                map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                	map.setTilt(45);
                	mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
                };

                map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

                // Multiple Markers -->
                var markers = [
                    ['$6.00', 33.991242, -118.468332, 4],
                    ['Coogee Beach', 33.990782, -118.466526, 5],
                    ['Cronulla Beach', 33.990661, -118.466054, 3],
                    ['Manly Beach', 33.990642, -118.465193, 2],
                    ['Maroubra Beach', 33.990336, -118.464789, 1],
                    ['Venice Beach', 33.990392, -118.468940, 6],
                    ['Midvale Ave, Westwood $5.00 All Day Parking, Compact Cars Only!', 34.062024, -118.438840, 4],
                    ['Levering Ave, Westwood $3.50 an hour *Compact Only*', 34.061811, -118.443689, 3],
                    ['Veteran Ave, Westwood $10 / 10:00am-8:00pm / *Compact Only*', 34.063173, -118.450352],
                    ['Kelton Ave, Westwood $5.00 for 4 hours - All Day - *Oversized Vehicle Capacity*', 34.064301, -118.447745, 4],
                    ['Strathmore Dr, Westwood $7.00 Available 8:00am-5:00pm / *Compact Only*', 34.063173, -118.450212],
                    ['Roebing Ave, Westwood $15.00 All Day / *Mid Size Capacity*', 34.063777, -118.447745],
                    ['Glenrock Ave, Westwood $10 10:00am-6:00pm - *Compact Only*', 34.065910, -118.446983],
                    ['Landfair Ave, Westwood $8.00 1:00pm-8:00pm - *Mid Size*', 34.064515, -118.442874]
                ];

                //Info Window Content -->
                var infoWindowContent = [
                    ['<div class="info_content">' +
                        '<h3 class="fee" href="modal">$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                      ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ],
                    ['<div class="info_content">' +
                        '<h3>$6.00</h3>' +
                        '</div>'
                    ]
                ];

                // Display multiple markers on a map -->
                var infoWindow = new google.maps.InfoWindow(),
                    marker, i;

                // Loop through our array of markers & place each one on the map   -->
                for (i = 0; i < markers.length; i++) {
                    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                    bounds.extend(position);
                    marker = new google.maps.Marker({
                        position: position,
                        map: map,
                        title: markers[i][0]
                    });

                  //Allow each marker to have an info window     -->
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        
                        return function() {
                            infoWindow.setContent(markers[i][0]);
                            infoWindow.open(map, marker);
                        }
                    })(marker, i));
                   // Automatically center the map fitting all markers on the screen -->
                    map.fitBounds(bounds);
                }
                // Override our map zoom level once our fitBounds function runs (Make sure it only runs once) -->
                var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
                    this.setZoom(10);
                    google.maps.event.removeListener(boundsListener);
                });

            }
            