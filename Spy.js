  var opacity = 1;

	var extent = ol.proj.transformExtent([-14.169172,49.205882,4.393046,61.483786],
																 'EPSG:4326', 'EPSG:3857');
	var center = ol.proj.transform([-4.888063, 55.344834],
																 'EPSG:4326', 'EPSG:3857');
	var view = new ol.View({
		projection: 'EPSG:3857',
		center: center,
		zoom: 5,
    minZoom:3,
    maxZoom:20
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

	var overlayLayers = [overlay];
	overlay.setVisible(true);

	var baseLayers = [osm,esri_world_imagery, esri_world_topo];
	osm.setVisible(true);

	var baselayerSelect = document.getElementById('baselayerSelect');
	for (var x = 0; x < baseLayers.length; x++) {
	          var checked = (baseLayers[x].getVisible()) ? "checked" : "";
	          baselayerSelect.innerHTML += '<p><input type="radio" name="base" id="baseRadio'+ baseLayers[x].get('title') +
			'" value="' + x + '" onClick="switchbaseLayer(this.value)" ' + checked + '><span>' + baseLayers[x].get('title') + '</span></p>';
	}

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

  var dataLayers = [AssemblyLayer,BathsLayer,TradeLayer,JusticeLayer,HealthLayer,LibraryLayer,MillitaryLayer,MuseumLayer,MonumentLayer,PublicServiceLayer,RecreationLayer,ReligionLayer,SchoolLayer,SocialCareLayer];
  AssemblyLayer.setVisible(true);

  var dataSelect = document.getElementById('dataSelect');
     for (var x = 0; x < dataLayers.length; x++) {
         var option = document.createElement('option');
         option.appendChild(document.createTextNode(dataLayers[x].get('title')));
         option.setAttribute('value', x);
         option.setAttribute('id', 'baseOption' + dataLayers[x].get('title'));
         dataSelect.appendChild(option);
     }

  // create map object
	var map = new ol.Map({
		layers: [osm, overlay, AssemblyLayer],
		renderer: 'canvas',
		target: 'map',
		view: view,
		controls: ol.control.defaults({ attributionOptions: { collapsed: true, collapsible: true }}),
		loadTilesWhileAnimating: true,
		logo: false
	});

	//view.fit(extent, map.getSize());

	map.addControl(new ol.control.ZoomSlider());
	map.addControl(new ol.control.ScaleLine({ units:'metric' }));

	function switchbaseLayer(index) {
    map.getLayers().getArray()[0].setVisible(false);
    map.getLayers().removeAt(0);
    map.getLayers().insertAt(0,baseLayers[index]);
    baselayerSelected = baseLayers[index];
	  baselayerSelected.setVisible(true);
}

var changeData = function(index) {
  map.getLayers().getArray()[2].setVisible(false);
  map.getLayers().removeAt(2);
  map.getLayers().insertAt(2,dataLayers[index]);
  map.getLayers().getArray()[2].setVisible(true);
}

var mouseposition =  new ol.control.MousePosition({
        projection: 'EPSG:4326',
        coordinateFormat: function(coordinate) {
    var hdms = ol.coordinate.toStringHDMS(coordinate);
      return '<strong>Lon/Lat: ' + ol.coordinate.format(coordinate, '{x}, {y}', 4) + '&nbsp; <br/>&nbsp;' + hdms + ' &nbsp;';
}
  });

map.addControl(mouseposition);

function createspy() {
      var maxwidth = map.getSize()[0];
      var maxradius = maxwidth / 3;

	jQuery('#mapslider').slider({
	  formater: function(value) {
	    radius = ( value / 100 ) * maxradius;
	    return 'Diameter: ' + value + '% screen width';
	  }
	});

	var Radius = 30;
      $("#mapslider").slider('setValue', Number(Radius));

//	updatespyURL();
      document.addEventListener('keydown', function(evt) {
        if (evt.which === 38) {
          radius = Math.min(radius + 5, 150);
          map.render();
          evt.preventDefault();
        } else if (evt.which === 40) {
          radius = Math.max(radius - 5, 25);
          map.render();
          evt.preventDefault();
        }
      });

     var mapspy = document.getElementById('map');

// get the pixel position with every move
		mapspy.addEventListener('mousemove', mousemoveListenerFn);
		mapspy.addEventListener('mouseout', mouseoutListenerFn);

// get the pixel position with every move
	      var mousePosition = null;

// before rendering the layer, do some clipping
		layerOrGroupOn(overlaySelected, 'precompose', clipCircle, true);

// after rendering the layer, restore the canvas context
		layerOrGroupOn(overlaySelected, 'postcompose', restoreClip, true);

		var size = map.getSize(); // [width,height] in pixels
		spyMousePosition = [size[0]/2,size[1]/2]; // Start in the middle
		map.render();
	}

	function layerOrGroupOn(layerOrGroup, type, listener, booOn) {
		// These listeners only work on layers, so for a group we need to set them for each layer in the group
		var isGroup = (layerOrGroup instanceof ol.layer.Group);
		if (booOn) {
			if (isGroup) {
				layerOrGroup.getLayers().forEach(function(layer){
					layer.on(type, listener);
				});
			} else { // is simply a Layer
				layerOrGroup.on(type, listener);
			}
		} else { // false
			if (isGroup) {
				layerOrGroup.getLayers().forEach(function(layer){
					layer.un(type, listener);
				});
			} else { // is simply a Layer
				layerOrGroup.un(type, listener);
			}
		}
	}

	function mousemoveListenerFn(event) {
			spyMousePosition = map.getEventPixel(event);
			map.render();
	};

	function mouseoutListenerFn(event) {
		//spyMousePosition = null; so leave it at the edge
		//map.render();
	};

  function resetZoom() {
    map.getView().fit(extent, map.getSize());
  }

	function clipCircle(event) {
	        var ctx = event.context;
	        var pixelRatio = event.frameState.pixelRatio;
	        ctx.save();
	        ctx.beginPath();
	        if (spyMousePosition) {
	          // only show a circle around the mouse
	           ctx.arc(spyMousePosition[0] * pixelRatio, spyMousePosition[1] * pixelRatio,
	            radius * pixelRatio, 0, 2 * Math.PI);
	            ctx.lineWidth = 5 * pixelRatio;
	            ctx.strokeStyle = 'rgba(0,0,0,0.5)';
	            ctx.stroke();
	         }
	        ctx.clip();
	}

	function restoreClip(event) {
		var ctx = event.context;
		ctx.restore(); // restores the most recently saved canvas state by popping the top entry in the drawing state stack
	}

// after rendering the layer, restore the canvas context
	overlaySelected = overlayLayers[0];
      	overlaySelected.on('postcompose', function(event) {
        var ctx = event.context;
        ctx.restore();
      });

createspy();

jQuery(document).ready(function() {
  jQuery('#opacityslider').slider({
   formater: function(value) {
	 opacity = value / 100;
	 map.getLayers().getArray()[1].setOpacity(opacity);
	 // overlay.layer.setOpacity(opacity);
	 return 'Opacity: ' + value + '%';
 }
});
});

// sets up a cross as a feature, places it in a vector layer, and adds the vector layer to the map
	var iconFeature = new ol.Feature();

		var iconStyle = new ol.style.Style({
		  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
		    anchor: [10, 10],
		    anchorXUnits: 'pixels',
		    anchorYUnits: 'pixels',
		    src: 'https://maps.nls.uk/geo/img/cross.png'
		  }))
		});

		iconFeature.setStyle(iconStyle);

		var vectorSource = new ol.source.Vector({
		  features: [iconFeature]
		});

		var vectorLayerMouseCross = new ol.layer.Vector({
		  source: vectorSource,
		  title: 'vectorMouseCross'
		});

		var maplayerlength = map.getLayers().getLength();
	    	map.getLayers().insertAt(maplayerlength,vectorLayerMouseCross);

// event handler to display cross position based on pointer location
 	map.on('pointermove', function(event) {
    var coord = event.coordinate;
		iconFeature.setGeometry( new ol.geom.Point(coord) );
	});

// removes the cross when mouse enters the header div
	jQuery("#header").on("mouseenter", function(event) {
		iconFeature.setGeometry(null);
	});
