// TODO: Create a map variable
var map;
console.log("loaded script.js")
// TODO: Complete the following function to initialize the map
function initMap() {
    // TODO: use a constructor to create a new map JS object. You can use the coordinates
    // we used, 40.7413549, -73.99802439999996 or your own!
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7413549,
            lng: -73.99802439999996
        },
        zoom: 10
    });
    //specific point on the map
    var tribeca = {
        lat:40.719526, 
        lng: -74.0089934
    };
    var marker = new google.maps.Marker({
        position: tribeca,
        map: map,
        title: "First Marker!"
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Do you ever fell like an InfoWindw , floating through the wind, " + "ready to start again?"
    });
    marker.addListener('click', function(){
        infowindow.open(map, marker);
    });
}