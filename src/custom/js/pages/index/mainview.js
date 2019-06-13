$(() => {
    buildCurrentMapGuard()
});
let neighborhoods = [
    {lat: 10.795012, lng: 106.676346},
    {lat: 10.794348, lng: 106.671143},
    {lat: 10.791787, lng: 106.675477},
    {lat: 10.793041, lng: 106.670670},
    {lat: 10.797981, lng: 106.655947},
    {lat: 10.797391, lng: 106.658018},
    {lat: 10.799130, lng: 106.657138},
    {lat: 10.797591, lng: 106.655915},
    {lat: 10.794640, lng: 106.655368},
    {lat: 10.795778, lng: 106.653737},
];
var markers = [];
var map;
const initMap = () => {
    map = new google.maps.Map(document.querySelector('.parking-map'), {
        zoom: 15,
        center: {lat: 10.798606, lng: 106.667205},
        disableDefaultUI: true
    });
}
const drop = () => {
    clearMarkers();
    for (let i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
};
const clearMarkers = () => {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
};
function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            icon: '../src/img/icon.png',
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}

const buildCurrentMapGuard = () => {


initMap();
drop();

};
