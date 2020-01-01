// Layer Groups
var lg_DL = L.layerGroup([base_1]);

var lg_chitin = L.layerGroup([chitin]);

var lg_coal = L.layerGroup([coal, coal_2]);

var lg_ally = L.layerGroup([ally_1]);

var lg_enemy = L.layerGroup([enemy_1]);

var overlays = {
	"Dying Light" : lg_DL,
	"Chitin" : lg_chitin,
	"Coal" : lg_coal,
	"Allies" : lg_ally,
	"Enemies" : lg_enemy
}

// Add layer control
L.control.layers(null, overlays).addTo(map);