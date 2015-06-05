var map, featureLayer;

window.onload = function() {
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://avoindata.maanmittauslaitos.fi/mapcache/wmts?service=wmts&request=getcapabilities&version=1.0.0', true);

xhr.onload = function() {
    if (xhr.status == 200) {
        init();
    }
};
xhr.send();

function init() {
    //Proj4 is required because OPenLayer 3 does not support EPSG:3067
    //Config from http://epsg.io/3067
    proj4.defs("EPSG:3067","+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    //Map limits
    var extent = [50199.4814, 6582464.0358, 761274.6247, 7799839.8902];
    ol.proj.get('EPSG:3067').setExtent(extent);

    var view = new ol.View({
        center: [385703.6428654035, 6671882.4065274615],
        projection: 'EPSG:3067',
        zoom: 11
    });

    var parser = new ol.format.WMTSCapabilities();
    var capabilities = parser.read(xhr.responseXML);

    featureLayer = new ol.layer.Vector({
        source: new ol.source.Vector()
    });

    map = new ol.Map({
        layers: [
            /*new ol.layer.Tile({
                title: 'Maastokartta',
                type: 'base',
                visible: true,
                source: new ol.source.WMTS(ol.source.WMTS.optionsFromCapabilities(capabilities, {
                  layer: 'maastokartta'
                }))
            }), */
            new ol.layer.Tile({
                title: 'Taustakartta',
                type: 'base',
                visible: true,
                source: new ol.source.WMTS(ol.source.WMTS.optionsFromCapabilities(capabilities, {
                  layer: 'taustakartta'
                }))
            }),
            new ol.layer.Image({
                extent: extent,
                visible: false,
                source: new ol.source.ImageWMS({
                  url: 'http://lipas.cc.jyu.fi/geoserver/lipas/wms?',
                  params: {'LAYERS': 'lipas_kaikki_kohteet'},
                  serverType: 'geoserver'
                })
              }),
            featureLayer
        ],
        overlays: [OLPopups.getPopupOverlay()],
        target: 'map',
        view: view
    });

    /**
     * Add a click handler to the map to render the popup.
     */
    map.on('singleclick', OLPopups.showPopup);
}

getNearestSports();

};

function getNearestSports (argument) {
    $.get('http://api.hel.fi/lipas/v1/venue/?format=json', function (data) {
        var source = featureLayer.getSource();

        // Remove old features from map
        source.clear();

        for (var i = 0; i < data.results.length; i++) {
            if (data.results[i].wkb_geometry.type != 'Point')
                continue;

            var coordinates = data.results[i].wkb_geometry.coordinates;
            var feature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform(coordinates, 'EPSG:4326', 'EPSG:3067'))
            });

            source.addFeature(feature);
        }
    });
}
