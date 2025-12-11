var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_RBI_50K_2023_SumateraUtara_1 = new ol.format.GeoJSON();
var features_RBI_50K_2023_SumateraUtara_1 = format_RBI_50K_2023_SumateraUtara_1.readFeatures(json_RBI_50K_2023_SumateraUtara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI_50K_2023_SumateraUtara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI_50K_2023_SumateraUtara_1.addFeatures(features_RBI_50K_2023_SumateraUtara_1);
var lyr_RBI_50K_2023_SumateraUtara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI_50K_2023_SumateraUtara_1, 
                style: style_RBI_50K_2023_SumateraUtara_1,
                popuplayertitle: 'RBI_50K_2023_Sumatera Utara',
                interactive: true,
                title: '<img src="styles/legend/RBI_50K_2023_SumateraUtara_1.png" /> RBI_50K_2023_Sumatera Utara'
            });
var format_CAGARBUDAYA_PT_50K_2 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_2 = format_CAGARBUDAYA_PT_50K_2.readFeatures(json_CAGARBUDAYA_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_2.addFeatures(features_CAGARBUDAYA_PT_50K_2);
var lyr_CAGARBUDAYA_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAGARBUDAYA_PT_50K_2, 
                style: style_CAGARBUDAYA_PT_50K_2,
                popuplayertitle: 'CAGARBUDAYA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_2.png" /> CAGARBUDAYA_PT_50K'
            });
var format_DANAU_AR_50K_3 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_3 = format_DANAU_AR_50K_3.readFeatures(json_DANAU_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_3.addFeatures(features_DANAU_AR_50K_3);
var lyr_DANAU_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_50K_3, 
                style: style_DANAU_AR_50K_3,
                popuplayertitle: 'DANAU_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_3.png" /> DANAU_AR_50K'
            });
var format_CAGARBUDAYA_PT_50K_4 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_4 = format_CAGARBUDAYA_PT_50K_4.readFeatures(json_CAGARBUDAYA_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_4.addFeatures(features_CAGARBUDAYA_PT_50K_4);
var lyr_CAGARBUDAYA_PT_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAGARBUDAYA_PT_50K_4, 
                style: style_CAGARBUDAYA_PT_50K_4,
                popuplayertitle: 'CAGARBUDAYA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_4.png" /> CAGARBUDAYA_PT_50K'
            });
var format_DANAU_AR_50K_5 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_5 = format_DANAU_AR_50K_5.readFeatures(json_DANAU_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_5.addFeatures(features_DANAU_AR_50K_5);
var lyr_DANAU_AR_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_50K_5, 
                style: style_DANAU_AR_50K_5,
                popuplayertitle: 'DANAU_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_5.png" /> DANAU_AR_50K'
            });
var format_CAGARBUDAYA_PT_50K_6 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_6 = format_CAGARBUDAYA_PT_50K_6.readFeatures(json_CAGARBUDAYA_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_6.addFeatures(features_CAGARBUDAYA_PT_50K_6);
var lyr_CAGARBUDAYA_PT_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAGARBUDAYA_PT_50K_6, 
                style: style_CAGARBUDAYA_PT_50K_6,
                popuplayertitle: 'CAGARBUDAYA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_6.png" /> CAGARBUDAYA_PT_50K'
            });
var format_danautoba_7 = new ol.format.GeoJSON();
var features_danautoba_7 = format_danautoba_7.readFeatures(json_danautoba_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danautoba_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danautoba_7.addFeatures(features_danautoba_7);
var lyr_danautoba_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_danautoba_7, 
                style: style_danautoba_7,
                popuplayertitle: 'danau toba',
                interactive: true,
                title: '<img src="styles/legend/danautoba_7.png" /> danau toba'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_RBI_50K_2023_SumateraUtara_1.setVisible(true);lyr_CAGARBUDAYA_PT_50K_2.setVisible(true);lyr_DANAU_AR_50K_3.setVisible(true);lyr_CAGARBUDAYA_PT_50K_4.setVisible(true);lyr_DANAU_AR_50K_5.setVisible(true);lyr_CAGARBUDAYA_PT_50K_6.setVisible(true);lyr_danautoba_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_RBI_50K_2023_SumateraUtara_1,lyr_CAGARBUDAYA_PT_50K_2,lyr_DANAU_AR_50K_3,lyr_CAGARBUDAYA_PT_50K_4,lyr_DANAU_AR_50K_5,lyr_CAGARBUDAYA_PT_50K_6,lyr_danautoba_7];
lyr_RBI_50K_2023_SumateraUtara_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAGARBUDAYA_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAGARBUDAYA_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAGARBUDAYA_PT_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_danautoba_7.set('fieldAliases', {'id': 'id', 'danau': 'danau', });
lyr_RBI_50K_2023_SumateraUtara_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CAGARBUDAYA_PT_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_DANAU_AR_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'OTODAN': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'SEDIMN': 'Range', 'VLCSDN': 'TextEdit', 'QUAAR': 'Range', 'CRH': 'TextEdit', 'KPTS': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'LOKASI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CAGARBUDAYA_PT_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_DANAU_AR_50K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'OTODAN': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'SEDIMN': 'Range', 'VLCSDN': 'TextEdit', 'QUAAR': 'Range', 'CRH': 'TextEdit', 'KPTS': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'LOKASI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CAGARBUDAYA_PT_50K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_danautoba_7.set('fieldImages', {'id': 'TextEdit', 'danau': 'TextEdit', });
lyr_RBI_50K_2023_SumateraUtara_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CAGARBUDAYA_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DANAU_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CAGARBUDAYA_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DANAU_AR_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CAGARBUDAYA_PT_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_danautoba_7.set('fieldLabels', {'id': 'no label', 'danau': 'no label', });
lyr_danautoba_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});