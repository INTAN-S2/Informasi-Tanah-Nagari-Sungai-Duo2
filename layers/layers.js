var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SungaiDuoNilai_1 = new ol.format.GeoJSON();
var features_SungaiDuoNilai_1 = format_SungaiDuoNilai_1.readFeatures(json_SungaiDuoNilai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiDuoNilai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiDuoNilai_1.addFeatures(features_SungaiDuoNilai_1);
var lyr_SungaiDuoNilai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiDuoNilai_1, 
                style: style_SungaiDuoNilai_1,
                popuplayertitle: 'Sungai Duo Nilai',
                interactive: true,
                title: '<img src="styles/legend/SungaiDuoNilai_1.png" /> Sungai Duo Nilai'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_SungaiDuoNilai_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_SungaiDuoNilai_1];
lyr_SungaiDuoNilai_1.set('fieldAliases', {'TIPEHAK': 'TIPEHAK', 'NIB': 'NIB', 'PENGGUNAAN': 'PENGGUNAAN', 'RANGE_ZNT': 'RANGE_ZNT', });
lyr_SungaiDuoNilai_1.set('fieldImages', {'TIPEHAK': '', 'NIB': '', 'PENGGUNAAN': '', 'RANGE_ZNT': '', });
lyr_SungaiDuoNilai_1.set('fieldLabels', {'TIPEHAK': 'inline label - always visible', 'NIB': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'RANGE_ZNT': 'inline label - always visible', });
lyr_SungaiDuoNilai_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});