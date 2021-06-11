var extent = ol.proj.transformExtent([-14.169172,49.205882,4.393046,61.483786],
                               'EPSG:4326', 'EPSG:3857');
var center = ol.proj.transform([-4.888063, 55.344834],
                               'EPSG:4326', 'EPSG:3857');
var view = new ol.View({
  projection: 'EPSG:3857',
  center: center,
  zoom: 5,
  minZoom: 4,
  maxZoom: 19
});

// OS 1900s layer
var os1900s = new ol.layer.Tile({
  title: 'Ordnance Survey Maps, 1900s',
      visible: false,
      opacity: 0.8,
  source: new ol.source.XYZ({
    urls:[
      'https://nls-0.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.png',
      'https://nls-1.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.png',
      'https://nls-2.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.png',
      'https://nls-3.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.png'
    ],
    extent: extent,
    minZoom: 1,
    maxZoom: 17,
    attributions: [
      new ol.Attribution({html: '<a href=\"http://maps.nls.uk/projects/subscription-api/\">National Library of Scotland</a>'})
    ],
    tilePixelRatio: 1.000000
  })
});

// ESRI World Layers
var esri_world_topo = new ol.layer.Tile({
  title: 'ESRI World Topographic Map',
        visible: false,
      source: new ol.source.XYZ({
              attributions: [
                new ol.Attribution({ html: 'Tiles &copy; <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'})
              ],
                  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                      'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        })
    });

var esri_world_imagery = new ol.layer.Tile({
  title: 'ESRI World Imagery',
      visible: false,
      source: new ol.source.XYZ({
              attributions: [
                new ol.Attribution({ html: 'Tiles &copy; <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer">ArcGIS</a>'})
              ],
                  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                      'World_Imagery/MapServer/tile/{z}/{y}/{x}'
        })
    });

// OpenStreetMap
var osm = new ol.layer.Tile({
    title: 'OpenStreetMap',
        visible: false,
    source: new ol.source.OSM(),
});

var baseLayers = [os1900s, esri_world_imagery, esri_world_topo, osm];
os1900s.setVisible(true);

// change map layers
var baselayerSelect = document.getElementById('baselayerSelect');
for (var x = 0; x < baseLayers.length; x++) {
          var checked = (baseLayers[x].getVisible()) ? "checked" : "";
          baselayerSelect.innerHTML += '<p><input type="radio" name="base" id="baseRadio'+ baseLayers[x].get('title') +
    '" value="' + x + '" onClick="switchbaseLayer(this.value)" ' + checked + '><span>' + baseLayers[x].get('title') + '</span></p>';
}

// building data points
var HealthLayer = new ol.layer.Tile({
  	title: "Health Services",
    source: new ol.source.XYZ({
       url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_HealthService&zoom={z}&x={x}&y={y}&format=image/png',
   }),
 });

var AssemblyLayer = new ol.layer.Tile({
  	title: "Assembly Buildings",
    source: new ol.source.XYZ({
       url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Assembly&zoom={z}&x={x}&y={y}&format=image/png',
   }),

 });

var BathsLayer = new ol.layer.Tile({
  	title: "Baths and Water Works",
    source: new ol.source.XYZ({
       url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Baths_WaterWorks&zoom={z}&x={x}&y={y}&format=image/png',
   }),

 });

var JusticeLayer = new ol.layer.Tile({
   	title: "Criminal Justice System",
     source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Justice&zoom={z}&x={x}&y={y}&format=image/png',
    }),

  });


var MillitaryLayer = new ol.layer.Tile({
    	title: "Military Structures",
      source: new ol.source.XYZ({
         url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Military&zoom={z}&x={x}&y={y}&format=image/png',
     }),

   });

var MuseumLayer = new ol.layer.Tile({
      title: "Museums and Galleries",
      source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Museum_Gallery&zoom={z}&x={x}&y={y}&format=image/png',
      }),

    });

var MonumentLayer = new ol.layer.Tile({
      title: "Palaces and Monuments",
      source: new ol.source.XYZ({
          url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Palace_Monument&zoom={z}&x={x}&y={y}&format=image/png',
       }),

     });

var PublicServiceLayer = new ol.layer.Tile({
      title: "Public Service Buildings",
      source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_PubliceService&zoom={z}&x={x}&y={y}&format=image/png',
        }),

      });

var RecreationLayer = new ol.layer.Tile({
      title: "Recreation Buildings",
      source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Recreation&zoom={z}&x={x}&y={y}&format=image/png',
         }),

       });

var ReligionLayer = new ol.layer.Tile({
    title: "Religious Buildings",
    source: new ol.source.XYZ({
      url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Religion&zoom={z}&x={x}&y={y}&format=image/png',
      }),

     });

var SchoolLayer = new ol.layer.Tile({
    title: "Schools and Colleges",
    source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Schools&zoom={z}&x={x}&y={y}&format=image/png',
        }),

      });

var TradeLayer = new ol.layer.Tile({
    title: "Commerce and Exchange Buildings",
    source: new ol.source.XYZ({
      url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Trade&zoom={z}&x={x}&y={y}&format=image/png',
    }),

    });

var SocialCareLayer = new ol.layer.Tile({
   title: "Social Care Facilities",
   source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_SocialCare&zoom={z}&x={x}&y={y}&format=image/png',
        }),

    });

var LibraryLayer = new ol.layer.Tile({
   title: "Libraries",
   source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Library&zoom={z}&x={x}&y={y}&format=image/png',
        }),

});

var all_buildings = new ol.layer.Group({
	title: "All Buildings", 	
	layers: [AssemblyLayer,BathsLayer,TradeLayer,JusticeLayer,HealthLayer,LibraryLayer,MillitaryLayer,MuseumLayer,MonumentLayer,PublicServiceLayer,RecreationLayer,ReligionLayer,SchoolLayer,SocialCareLayer], 
});

var dataLayers = [AssemblyLayer,BathsLayer,TradeLayer,JusticeLayer,HealthLayer,LibraryLayer,MillitaryLayer,MuseumLayer,MonumentLayer,PublicServiceLayer,RecreationLayer,ReligionLayer,SchoolLayer,SocialCareLayer,all_buildings];
// AssemblyLayer.setVisible(true);

// change data layers
var dataSelect = document.getElementById('dataSelect');
   for (var x = 0; x < dataLayers.length; x++) {
       var option = document.createElement('option');
       option.appendChild(document.createTextNode(dataLayers[x].get('title')));
       option.setAttribute('value', x);
       option.setAttribute('id', 'baseOption' + dataLayers[x].get('title'));
       dataSelect.appendChild(option);
   }

// choropleth map layers
var Eng_Choropleth = new ol.layer.Tile({
   title: "Population of England and Wales by registration districts, 1901",
   source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_England_population&zoom={z}&x={x}&y={y}&format=image/png',
        }),
   visible: false,
   opacity: 0.5
    });

var Scot_Choropleth = new ol.layer.Tile({
   title: "Population of Scotland by districts of county, 1951",
   source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Scotland_population&zoom={z}&x={x}&y={y}&format=image/png',
        }),
   visible: false,
   opacity: 0.4
    });

var choroplethMaps = [Eng_Choropleth,Scot_Choropleth];

// create map object
var map = new ol.Map({
  layers: [os1900s, Eng_Choropleth, Scot_Choropleth, AssemblyLayer],
  renderer: 'canvas',
  target: 'map',
  view: view,
  controls: ol.control.defaults({ attributionOptions: { collapsed: true, collapsible: true }}),
  loadTilesWhileAnimating: true,
  logo: false
});

map.addControl(new ol.control.ZoomSlider());
map.addControl(new ol.control.ScaleLine({ units:'metric' }));

function switchbaseLayer(index) {
  map.getLayers().getArray()[0].setVisible(false);
  map.getLayers().removeAt(0);
  map.getLayers().insertAt(0,baseLayers[index]);
  var baselayerSelected = baseLayers[index];
  baselayerSelected.setVisible(true);
  setZoomLayers();
}

//choropleth map legends
var legend1 = document.getElementById("population_legend_england");
var legend2 = document.getElementById("population_legend_scotland");
legend1.style.display = "none";
legend2.style.display = "none";

var choropleth_england_checkbox = document.getElementById('choropleth_england');
choropleth_england_checkbox.addEventListener('change', function() {
		if (document.querySelector('#choropleth_england:checked') !== null)
		{
   			 map.getLayers().getArray()[1].setVisible(true);
    			legend1.style.display = "block";
		}
		else
		{
   			map.getLayers().getArray()[1].setVisible(false);
    			legend1.style.display = "none";
		}
	});

var choropleth_scotland_checkbox = document.getElementById('choropleth_scotland');
choropleth_scotland_checkbox.addEventListener('change', function() {
		if (document.querySelector('#choropleth_scotland:checked') !== null)
		{
   			 map.getLayers().getArray()[2].setVisible(true);
    			legend2.style.display = "block";
		}
		else
		{
   			map.getLayers().getArray()[2].setVisible(false);
    			legend2.style.display = "none";
		}
	});

//clear choropleth map layer
function clearSelected(){
    map.getLayers().getArray()[1].setVisible(false);
    map.getLayers().getArray()[2].setVisible(false);
    var radioBox1 = document.getElementById("baseRadioPopulation of England and Wales by registration districts, 1901");
    var radioBox2 = document.getElementById("baseRadioPopulation of Scotland by districts of county, 1951");
    radioBox1.checked=false;
    radioBox2.checked=false;
    legend1.style.display = "none";
    legend2.style.display = "none";
}

function switchChoropleths(index) {
  legend1.style.display = "none";
  legend2.style.display = "none";
  map.getLayers().getArray()[1].setVisible(false);
  map.getLayers().removeAt(1);
  map.getLayers().insertAt(1,choroplethMaps[index]);
  var choroplethSelected = choroplethMaps[index];
  choroplethSelected.setVisible(true);
  if (index == 0) {
    legend1.style.display = "block";
  } else {
    legend2.style.display = "block";
  }
}

// messages for different data layers
var message1 = "<p><ul><li>assembly rooms</li><li>gymnasiums</li><li>town/city halls</li></ul></p>";
var message2 = "<p><ul><li>wash houses</li><li>public baths</li><li>water works</li></ul></p>";
var message3 = "<p><ul><li>custom houses</li><li>exchanges</li><li>market houses</li><li>auction marts</li><li>banks</li></ul></p>"
var message4 = "<p><ul><li>bridewells</li><li>prisons</li><li>police stations</li><li>law courts</li></ul></p>";
var message5 = "<p><ul><li>hospitals</li><li>infirmaries</li><li>dispensaries</li></ul></p>";
var message6 = "<p><ul><li>public libraries</li><li>reading rooms</li><li>athenaeums</li><li>literary institutes</li></ul></p>";
var message7 = "<p><ul><li>barracks</li><li>drill halls</li></ul></p>";
var message8 = "<p><ul><li>museums</li><li>galleries</li></ul></p>";
var message9 = "<p><ul><li>palaces</li><li>monuments</li></ul></p>";
var message10 = "<p><ul><li>railway stations</li><li>coastguard stations</li><li>fire stations</li><li>post offices</li><li>public offices</li><li>municipal offices</li></ul></p>";
var message11 = "<p><ul><li>theatres</li><li>aquaria</li><li>skating rinks</li><li>clubs</li></ul></p>";
var message12 = "<p><ul><li>cathedrals</li><li>churches</li><li>chapels</li></ul></p>";
var message13 = "<p><ul><li>colleges</li><li>schools</li></ul></p>";
var message14 = "<p><ul><li>almshouses</li><li>asylums</li><li>workhouses</li></ul></p>";
var message15 = "<p><ul><li>Assembly Buildings</li><li>Baths and Water Works</li><li>Commerce and Exchange Buildings</li><li>Criminal Justice System</li><li>Health Services</li><li>Libraries</li><li>Military Structures</li><li>Museums and Galleries</li><li>Palaces and Monuments</li><li>Public Service Buildings</li><li>Recreation Buildings</li><li>Schools and Colleges</li><li>Social Care Facilities</li></ul></p>";


var messages = [message1,message2,message3,message4,message5,message6,message7,message8,message9,message10,message11,message12,message13,message14,message15];

var changeData = function(index) {
//  map.getLayers().getArray()[3].setVisible(false);
  map.getLayers().removeAt(3);
  map.getLayers().insertAt(3,dataLayers[index]);
//  map.getLayers().getArray()[3].setVisible(true);
  //update popup box information
  var showMessage = document.getElementById('messageBox');
  while (showMessage.childNodes.length > 1) {
    showMessage.removeChild(showMessage.lastChild);
  }
  var setting = "'none'";
  showMessage.innerHTML += '<span class="closebtn" onclick="this.parentElement.style.display=' + setting + ';">&times;</span>';
  showMessage.innerHTML += '<h3>' + dataLayers[index].get('title') + '</h3>';
  showMessage.innerHTML += messages[index];
  showMessage.style.display = "block";
}

//zoom to extent
function resetZoom() {
  map.getView().fit(extent, map.getSize());
}

// function to update background layer display of the zoom_statement div at different zoom levels if OS 1900s layer is present
  function setZoomLayers() {

	var mapZoom = map.getView().getZoom();
	var mapZoomNo = parseInt(mapZoom);

	if ((map.getLayers().getArray()[0].get('title') == 'Ordnance Survey Maps, 1900s') && (mapZoomNo < 11 ))
	{
	document.getElementById('zoom_statement').innerHTML = "Background map: OS 1:1 million, 1905. Zoom in to see public buildings layer.";
 	}
	else if ((map.getLayers().getArray()[0].get('title') == 'Ordnance Survey Maps, 1900s') && (mapZoomNo > 10 ) && (mapZoomNo < 13 ))
	{
	document.getElementById('zoom_statement').innerHTML = "Background map: OS Quarter-Inch, 1900-1906. Zoom in to see public buildings layer.";
 	}

	else if ((map.getLayers().getArray()[0].get('title') == 'Ordnance Survey Maps, 1900s') && (mapZoomNo > 12 ) && (mapZoomNo < 15 ))

	{
	 document.getElementById('zoom_statement').innerHTML = "Background map: OS One-Inch <strong>2nd edition</strong>, 1896-1911. Zoom in to see public buildings layer.";
 	}

	else if ((map.getLayers().getArray()[0].get('title') == 'Ordnance Survey Maps, 1900s') && (mapZoomNo > 14 ))

	{
	document.getElementById('zoom_statement').innerHTML = "Background map: OS six-inch <strong>2nd edition, 1888-1913; Public buildings layer</strong>.";
	 }

	else
	{
 	document.getElementById('zoom_statement').innerHTML = "";
	}
}
setZoomLayers();

// event listener to update background layer display of the zoom_statement div at different zoom levels if OS 1900s layer is present
map.getView().on('change:resolution', setZoomLayers);
