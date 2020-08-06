import geoUtil from 'geolocation-utils';

// check whether a location is inside a circle
const center = {lat: 51, lon: 4}
const radius = 10000 // meters
console.log(geoUtil.insideCircle({lat: 51.3, lon: 4.5}, center, radius)  ) // true

//insideCircle({lat: 51.03, lon: 4.05}, center, radius) // true
//insideCircle({lat: 51.3, lon: 4.5}, center, radius)   // false
