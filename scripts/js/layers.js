//Pixels
var base_1 = L.marker([7, -29])
	base_1.bindPopup('Base 1');

var resource_1 = L.marker([-60, -30])
	resource_1.bindPopup('Resource 1');

var ally_1 = L.marker([-25, 40])
	ally_1.bindPopup('Ally 1');
	
var enemy_1 = L.marker([20, 56])
	enemy_1.bindPopup('Enemy 1');

// Layer Groups
var lg_DL = L.layerGroup([base_1]);

var lg_resources = L.layerGroup([resource_1]);

var lg_ally = L.layerGroup([ally_1]);

var lg_enemy = L.layerGroup([enemy_1]);

var overlays = {
	"Dying Light" : lg_DL,
	"Resources" : lg_resources,
	"Allies" : lg_ally,
	"Enemies" : lg_enemy
}

// Add layer control
L.control.layers(null, overlays).addTo(map);