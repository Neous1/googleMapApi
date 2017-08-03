// TODO: Create a map variable
var map;
//create a new blank array for all trhe listing markers.
var markers=[];
function initMap() {
    // TODO: use a constructor to create a new map JS object. You can use the coordinates
    // we used, 40.7413549, -73.99802439999996 or your own!
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7413549,
            lng: -73.99802439999996
        },
        zoom: 13,
        mapTypeControl: false
    });
    //These are the real estate listing that will be shown to the user 
    // normally we'd have thewe in a database instead

    var locations = [{
            title: 'Park Ave Penthouse',
            location: {
                lat: 40.7713024,
                lng: -73.9632393
            }
        },
        {
            title: 'Chelsea Loft',
            location: {
                lat: 40.7444883,
                lng: -73.9949465
            }
        },
        {
            title: 'Union Square Open Floor Plan',
            location: {
                lat: 40.7347062,
                lng: -73.9895759
            }
        },
        {
            title: 'East Village Hip Studio',
            location: {
                lat: 40.7281777,
                lng: -73.984377
            }
        },
        {
            title: 'TriBeCa Artsy Bachelor Pad',
            location: {
                lat: 40.7195264,
                lng: -74.0089934
            }
        },
        {
            title: 'Chinatown Homey Space',
            location: {
                lat: 40.7180628,
                lng: -73.9961237
            }
        }
    ];
    var largeInfoWindow = new google.maps.InfoWindow();
    
    //the following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        //Get the position per location , and put into markers array.
        var position = locations[i].location;
        var title = locations[i].title;
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });

        //Push the marker to our array of markers.
        markers.push(marker);
        //Create an onclick even to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfoWindow);
        });
        // bounds.extend(markers[i].position);
    }
    
}
//this function populates the infowindow when th emakrer is clicked. We'll only allow one infowindow which will open at the marker that is clicked , an pupulate based on that marker's position.
function populateInfoWindow(marker, infowindow){
    //check to make sure the infowindow is not already opened on this marker.
    if(infowindow.marker != marker){
        infowindow.marker = marker;
        infowindow.setContent("<div>" + marker.title + "</div>");
        infowindow.open(map, marker);
        //make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener("closedlick", function(){
            infowindow.setMarker = null;
        });
    }
}
//This function will loop through the markers array adn display them all.
function showListings(){
    var bounds = new google.maps.LatLngBounds();
    //Extend the boundaries of hte map for each marker adn display the arker
    for (var i=0; i<markers.length; i++){
        markers[i].setMap(map);
        bouds.extend(marker[i].position);
    }
    map.fitBounds(bounds);
}

//This funciton will loop thour the listing s and hide them all.
function hideListings(){
    for (var i=0; i<markers.length; i++){
        markers[i].setMap(null);
    }
}