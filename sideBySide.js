var opacity = 1;

var extent = ol.proj.transformExtent([-14.169172,49.205882,4.393046,61.483786],
                               'EPSG:4326', 'EPSG:3857');
var center = ol.proj.transform([-4.888063, 55.344834],
                               'EPSG:4326', 'EPSG:3857');
var view = new ol.View({
  projection: 'EPSG:3857',
  center: center,
  zoom: 7,
  minZoom:3
});

// OS 1900s layer
var overlay = new ol.layer.Tile({
  title: 'Great Britain, OS 1900s',
      visible: false,
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

//point data
var HealthLayer = new ol.layer.Tile({
  	title: "Health Services",
    source: new ol.source.XYZ({
       url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_HealthService&zoom={z}&x={x}&y={y}&format=image/png',
       format: new ol.format.GeoJSON()
   }),
    visible: false,
    //style:
 });

var AssemblyLayer = new ol.layer.Tile({
  	title: "Assembly Buildings",
    source: new ol.source.XYZ({
       url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Assembly&zoom={z}&x={x}&y={y}&format=image/png',
       format: new ol.format.GeoJSON()
   }),
    visible: false,
 });

var BathsLayer = new ol.layer.Tile({
  	title: "Baths and Water Works",
    source: new ol.source.XYZ({
       url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Baths_WaterWorks&zoom={z}&x={x}&y={y}&format=image/png',
       format: new ol.format.GeoJSON()
   }),
    visible: false,
 });

var JusticeLayer = new ol.layer.Tile({
   	title: "Criminal Justice System",
     source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Justice&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
    }),
     visible: false,
  });


var MillitaryLayer = new ol.layer.Tile({
    	title: "Military Structures",
      source: new ol.source.XYZ({
         url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Military&zoom={z}&x={x}&y={y}&format=image/png',
         format: new ol.format.GeoJSON()
     }),
      visible: false,
   });

var MuseumLayer = new ol.layer.Tile({
      title: "Museums and Galleries",
      source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Museum_Gallery&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
      }),
       visible: false,
    });

var MonumentLayer = new ol.layer.Tile({
      title: "Palaces and Monuments",
      source: new ol.source.XYZ({
          url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Palace_Monument&zoom={z}&x={x}&y={y}&format=image/png',
          ormat: new ol.format.GeoJSON()
       }),
        visible: false,
     });

var PublicServiceLayer = new ol.layer.Tile({
      title: "Public Service Buildings",
      source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_PubliceService&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
        }),
         visible: false,
      });

var RecreationLayer = new ol.layer.Tile({
      title: "Recreation Buildings",
      source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Recreation&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
         }),
          visible: false,
       });

var ReligionLayer = new ol.layer.Tile({
    title: "Religious Buildings",
    source: new ol.source.XYZ({
      url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Religion&zoom={z}&x={x}&y={y}&format=image/png',
      format: new ol.format.GeoJSON()
      }),
      visible: false,
     });

var SchoolLayer = new ol.layer.Tile({
    title: "Schools and Colleges",
    source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Schools&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
        }),
    visible: false,
      });

var TradeLayer = new ol.layer.Tile({
    title: "Commerce and Exchange Buildings",
    source: new ol.source.XYZ({
      url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Trade&zoom={z}&x={x}&y={y}&format=image/png',
      format: new ol.format.GeoJSON()
    }),
    visible: false,
    });

var SocialCareLayer = new ol.layer.Tile({
   title: "Social Care Facilities",
   source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_SocialCare&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
        }),
  visible: false,
    });

var LibraryLayer = new ol.layer.Tile({
   title: "Libraries",
   source: new ol.source.XYZ({
        url: 'https://geoserver2.nls.uk/geoserver/gwc/service/gmaps?layers=nls:Cynthia_Library&zoom={z}&x={x}&y={y}&format=image/png',
        format: new ol.format.GeoJSON()
        }),
  visible: false,
});

var maprightLayers = [overlay];
overlay.setVisible(true);

var mapleftLayers = [overlay];
overlay.setVisible(true);

var datarightLayers = [AssemblyLayer,BathsLayer,TradeLayer,JusticeLayer,HealthLayer,LibraryLayer,MillitaryLayer,MuseumLayer,MonumentLayer,PublicServiceLayer,RecreationLayer,ReligionLayer,SchoolLayer,SocialCareLayer];
AssemblyLayer.setVisible(true);
var dataleftLayers = [BathsLayer,AssemblyLayer,TradeLayer,JusticeLayer,HealthLayer,LibraryLayer,MillitaryLayer,MuseumLayer,MonumentLayer,PublicServiceLayer,RecreationLayer,ReligionLayer,SchoolLayer,SocialCareLayer];
BathsLayer.setVisible(true);

// create map object
var mapleft = new ol.Map({
  layers: [overlay,BathsLayer],
  renderer: 'canvas',
  target: 'mapleft',
  view: view,
  controls: ol.control.defaults({ attributionOptions: { collapsed: true, collapsible: true }}),
  loadTilesWhileAnimating: true,
  logo: false
});

mapleft.addControl(new ol.control.ZoomSlider());
mapleft.addControl(new ol.control.ScaleLine({ units:'metric' }));

var mapright = new ol.Map({
  layers: [overlay,AssemblyLayer],
  renderer: 'canvas',
  target: 'mapright',
  view: view,
  controls: ol.control.defaults({ attributionOptions: { collapsed: true, collapsible: true }}),
  loadTilesWhileAnimating: true,
  logo: false
});

var layerSelectLeft = document.getElementById('SelectLeft');
   for (var x = 0; x < dataleftLayers.length; x++) {
       var option = document.createElement('option');
       option.appendChild(document.createTextNode(dataleftLayers[x].get('title')));
       option.setAttribute('value', x);
       option.setAttribute('id', 'baseOption' + dataleftLayers[x].get('title'));
       layerSelectLeft.appendChild(option);
   }

var layerSelectRight = document.getElementById('SelectRight');
   for (var x = 0; x < datarightLayers.length; x++) {
       var option = document.createElement('option');
       option.appendChild(document.createTextNode(datarightLayers[x].get('title')));
       option.setAttribute('value', x);
       option.setAttribute('id', 'baseOption' + datarightLayers[x].get('title'));
       layerSelectRight.appendChild(option);
   }

// Change right-hand map data
var changemapright = function(index) {
  mapright.getLayers().getArray()[1].setVisible(false);
  mapright.getLayers().removeAt(1);
  mapright.getLayers().insertAt(1,datarightLayers[index]);
  mapright.getLayers().getArray()[1].setVisible(true);
}

// Change left-hand map data
var changemapleft = function(index) {
  mapleft.getLayers().getArray()[1].setVisible(false);
  mapleft.getLayers().removeAt(1);
  mapleft.getLayers().insertAt(1,dataleftLayers[index]);
  mapleft.getLayers().getArray()[1].setVisible(true);
}

//zoom to extent
function resetZoomL() {
  mapleft.getView().fit(extent, mapleft.getSize());
}


// function to update background layer display of the zoom_statement div at different zoom levels if OS 1900s layer is present
  function setZoomLayers() {

	var mapZoom = mapright.getView().getZoom();
	var mapZoomNo = parseInt(mapZoom);

	if ((mapright.getLayers().getArray()[0].get('title') == 'Great Britain, OS 1900s') && (mapZoomNo < 11 ))
	{
	document.getElementById('zoom_statement_R').innerHTML = "Background map: OS 1:1 million, 1905. Zoom in to see public buildings layer.";
 	}
	else if ((mapright.getLayers().getArray()[0].get('title') == 'Great Britain, OS 1900s') && (mapZoomNo > 10 ) && (mapZoomNo < 13 ))
	{
	document.getElementById('zoom_statement_R').innerHTML = "Background map: OS Quarter-Inch, 1900-1906. Zoom in to see public buildings layer.";
 	}

	else if ((mapright.getLayers().getArray()[0].get('title') == 'Great Britain, OS 1900s') && (mapZoomNo > 12 ) && (mapZoomNo < 15 ))

	{
	 document.getElementById('zoom_statement_R').innerHTML = "Background map: OS One-Inch <strong>2nd edition</strong>, 1896-1911. Zoom in to see public buildings layer.";
 	}

	else if ((mapright.getLayers().getArray()[0].get('title') == 'Great Britain, OS 1900s') && (mapZoomNo > 14 ))

	{
	document.getElementById('zoom_statement_R').innerHTML = "Background map: OS six-inch <strong>2nd edition, 1888-1913; Public buildings layer</strong>.";
	 }

	else
	{
 	document.getElementById('zoom_statement_R').innerHTML = "";
	}
}
setZoomLayers();

// event listener to update background layer display of the zoom_statement div at different zoom levels if OS 1900s layer is present
mapright.getView().on('change:resolution', setZoomLayers);
