var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UMKMKarangawen_1 = new ol.format.GeoJSON();
var features_UMKMKarangawen_1 = format_UMKMKarangawen_1.readFeatures(json_UMKMKarangawen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMKarangawen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMKarangawen_1.addFeatures(features_UMKMKarangawen_1);
var lyr_UMKMKarangawen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMKarangawen_1, 
                style: style_UMKMKarangawen_1,
                popuplayertitle: "UMKM Karangawen",
                interactive: true,
                title: '<img src="styles/legend/UMKMKarangawen_1.png" /> UMKM Karangawen'
            });

lyr_OSMStandard_0.setVisible(true);lyr_UMKMKarangawen_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UMKMKarangawen_1];
lyr_UMKMKarangawen_1.set('fieldAliases', {'Nama': 'Nama', 'X': 'X', 'Y': 'Y', 'Keterangan': 'Keterangan', 'LINK_FOTO': 'LINK_FOTO', 'PATH_FOTO': 'PATH_FOTO', });
lyr_UMKMKarangawen_1.set('fieldImages', {'Nama': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Keterangan': 'TextEdit', 'LINK_FOTO': 'Hidden', 'PATH_FOTO': 'Hidden', });
lyr_UMKMKarangawen_1.set('fieldLabels', {'Nama': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_UMKMKarangawen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});