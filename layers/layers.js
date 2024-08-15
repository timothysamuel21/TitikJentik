var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WilayahAdministrasiPasirkaliki_1 = new ol.format.GeoJSON();
var features_WilayahAdministrasiPasirkaliki_1 = format_WilayahAdministrasiPasirkaliki_1.readFeatures(json_WilayahAdministrasiPasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasiPasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasiPasirkaliki_1.addFeatures(features_WilayahAdministrasiPasirkaliki_1);
var lyr_WilayahAdministrasiPasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahAdministrasiPasirkaliki_1, 
                style: style_WilayahAdministrasiPasirkaliki_1,
                popuplayertitle: "Wilayah Administrasi Pasir kaliki",
                interactive: true,
                title: '<img src="styles/legend/WilayahAdministrasiPasirkaliki_1.png" /> Wilayah Administrasi Pasir kaliki'
            });
var format_BatasRWPasirKaliki_2 = new ol.format.GeoJSON();
var features_BatasRWPasirKaliki_2 = format_BatasRWPasirKaliki_2.readFeatures(json_BatasRWPasirKaliki_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRWPasirKaliki_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRWPasirKaliki_2.addFeatures(features_BatasRWPasirKaliki_2);
var lyr_BatasRWPasirKaliki_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRWPasirKaliki_2, 
                style: style_BatasRWPasirKaliki_2,
                popuplayertitle: "Batas RW Pasir Kaliki",
                interactive: true,
                title: '<img src="styles/legend/BatasRWPasirKaliki_2.png" /> Batas RW Pasir Kaliki'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_TitikPerindukkanJentik_5 = new ol.format.GeoJSON();
var features_TitikPerindukkanJentik_5 = format_TitikPerindukkanJentik_5.readFeatures(json_TitikPerindukkanJentik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerindukkanJentik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerindukkanJentik_5.addFeatures(features_TitikPerindukkanJentik_5);
var lyr_TitikPerindukkanJentik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerindukkanJentik_5, 
                style: style_TitikPerindukkanJentik_5,
                popuplayertitle: "Titik Perindukkan Jentik",
                interactive: true,
                title: '<img src="styles/legend/TitikPerindukkanJentik_5.png" /> Titik Perindukkan Jentik'
            });
var format_WilayahPenyebaranJentik_6 = new ol.format.GeoJSON();
var features_WilayahPenyebaranJentik_6 = format_WilayahPenyebaranJentik_6.readFeatures(json_WilayahPenyebaranJentik_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahPenyebaranJentik_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahPenyebaranJentik_6.addFeatures(features_WilayahPenyebaranJentik_6);
var lyr_WilayahPenyebaranJentik_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahPenyebaranJentik_6, 
                style: style_WilayahPenyebaranJentik_6,
                popuplayertitle: "Wilayah Penyebaran Jentik",
                interactive: true,
                title: '<img src="styles/legend/WilayahPenyebaranJentik_6.png" /> Wilayah Penyebaran Jentik'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_WilayahAdministrasiPasirkaliki_1.setVisible(true);lyr_BatasRWPasirKaliki_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_TitikPerindukkanJentik_5.setVisible(true);lyr_WilayahPenyebaranJentik_6.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_WilayahAdministrasiPasirkaliki_1,lyr_BatasRWPasirKaliki_2,lyr_Sungai_3,lyr_Jalan_4,lyr_TitikPerindukkanJentik_5,lyr_WilayahPenyebaranJentik_6];
lyr_WilayahAdministrasiPasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_BatasRWPasirKaliki_2.set('fieldAliases', {'AREA': 'AREA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Sungai_3.set('fieldAliases', {});
lyr_Jalan_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TitikPerindukkanJentik_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_WilayahPenyebaranJentik_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_WilayahAdministrasiPasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_BatasRWPasirKaliki_2.set('fieldImages', {'AREA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {});
lyr_Jalan_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TitikPerindukkanJentik_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_WilayahPenyebaranJentik_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_WilayahAdministrasiPasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_BatasRWPasirKaliki_2.set('fieldLabels', {'AREA': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Sungai_3.set('fieldLabels', {});
lyr_Jalan_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TitikPerindukkanJentik_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_WilayahPenyebaranJentik_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_WilayahPenyebaranJentik_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});