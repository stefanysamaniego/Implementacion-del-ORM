const mymap = L.map('mapa').setView([-0.373154, -78.500779], 55)
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
tiles.addTo(mymap)



function onMapClick(e) {
    const marker = L.marker([-0.373248, -78.500737]).addTo(mymap);
    fetch('/mostrar', {method: 'GET'})
    .then(res => res.json())
    .then(data =>{})    
}


