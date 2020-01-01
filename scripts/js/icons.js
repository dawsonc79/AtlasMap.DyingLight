var Shadow = L.Icon.extend({
    		options: {
    			iconSize: [20, 20],
    			iconAnchor: [10, 20],
   	 			popupAnchor: [-3, -76],
    			shadowUrl: 'images/shadow.png',
    			shadowSize: [20, 20],
    			shadowAnchor: [8, 20]
    		}
		});

var Shadow_2 = L.Icon.extend({
    		options: {
    			iconSize: [40, 40],
    			iconAnchor: [20, 20],
   	 			popupAnchor: [-3, -76],
    			shadowUrl: 'images/shadow.png',
    			shadowSize: [20, 20],
    			shadowAnchor: [8, 20]
    		}
		});

var coalIcon = new Shadow({iconUrl:'images/resources/Coal.png'})

var chitinIcon = new Shadow({iconUrl:'images/resources/Chitin.png'})

var companyIcon = new Shadow_2({iconUrl:'images/DLlogo.png'})