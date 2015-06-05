window.onload = function() {
var xhr = new XMLHttpRequest();
var map;

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
                source: new ol.source.ImageWMS({
                  url: 'http://lipas.cc.jyu.fi/geoserver/lipas/wms?',
                  params: {'LAYERS': 'lipas_kaikki_kohteet'},
                  serverType: 'geoserver'
                })
              })
        ],
        target: 'map',
        view: view
    });
}


};