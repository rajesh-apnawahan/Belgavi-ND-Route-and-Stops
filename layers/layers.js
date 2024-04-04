var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BelgaviBoundary_1 = new ol.format.GeoJSON();
var features_BelgaviBoundary_1 = format_BelgaviBoundary_1.readFeatures(json_BelgaviBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundary_1.addFeatures(features_BelgaviBoundary_1);
var lyr_BelgaviBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundary_1, 
                style: style_BelgaviBoundary_1,
                popuplayertitle: "Belgavi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundary_1.png" /> Belgavi Boundary'
            });
var format_BelgaviRoutes20_2 = new ol.format.GeoJSON();
var features_BelgaviRoutes20_2 = format_BelgaviRoutes20_2.readFeatures(json_BelgaviRoutes20_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoutes20_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoutes20_2.addFeatures(features_BelgaviRoutes20_2);
var lyr_BelgaviRoutes20_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoutes20_2, 
                style: style_BelgaviRoutes20_2,
                popuplayertitle: "Belgavi Routes 20",
                interactive: true,
    title: 'Belgavi Routes 20<br />\
    <img src="styles/legend/BelgaviRoutes20_2_0.png" /> R Cbt-Khb 98-13<br />\
    <img src="styles/legend/BelgaviRoutes20_2_1.png" /> R Cbt-Khb 98-13 (#2)<br />\
    <img src="styles/legend/BelgaviRoutes20_2_2.png" /> R CBT-KHB 98-13 Route<br />\
    <img src="styles/legend/BelgaviRoutes20_2_3.png" /> R CBT-KHB 98-13 Route stats<br />\
    <img src="styles/legend/BelgaviRoutes20_2_4.png" /> R Cbt-Rst 98-1<br />\
    <img src="styles/legend/BelgaviRoutes20_2_5.png" /> R Kalenatti-Cbt 97-4<br />\
    <img src="styles/legend/BelgaviRoutes20_2_6.png" /> R Kalenatti-Cbt 97-4 (#2)<br />\
    <img src="styles/legend/BelgaviRoutes20_2_7.png" /> R Khb-Cbt 98-14<br />\
    <img src="styles/legend/BelgaviRoutes20_2_8.png" /> R Rst-Cbt 98-2<br />\
    <img src="styles/legend/BelgaviRoutes20_2_9.png" /> <br />'
        });
var format_BelgaviStops20_3 = new ol.format.GeoJSON();
var features_BelgaviStops20_3 = format_BelgaviStops20_3.readFeatures(json_BelgaviStops20_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops20_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops20_3.addFeatures(features_BelgaviStops20_3);
var lyr_BelgaviStops20_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops20_3, 
                style: style_BelgaviStops20_3,
                popuplayertitle: "Belgavi Stops 20",
                interactive: true,
    title: 'Belgavi Stops 20<br />\
    <img src="styles/legend/BelgaviStops20_3_0.png" /> S Cbt-Khb 98-13<br />\
    <img src="styles/legend/BelgaviStops20_3_1.png" /> S Cbt-Khb 98-13 (#2)<br />\
    <img src="styles/legend/BelgaviStops20_3_2.png" /> S Cbt-Rst 98-1<br />\
    <img src="styles/legend/BelgaviStops20_3_3.png" /> S Kalenatti-Cbt 97-4<br />\
    <img src="styles/legend/BelgaviStops20_3_4.png" /> S Kalenatti-Cbt 97-4 (#2)<br />\
    <img src="styles/legend/BelgaviStops20_3_5.png" /> S Khb-Cbt 98-14<br />\
    <img src="styles/legend/BelgaviStops20_3_6.png" /> S Rst-Cbt 98-2<br />\
    <img src="styles/legend/BelgaviStops20_3_7.png" /> <br />'
        });
var format_BelgaviRoute19_4 = new ol.format.GeoJSON();
var features_BelgaviRoute19_4 = format_BelgaviRoute19_4.readFeatures(json_BelgaviRoute19_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute19_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute19_4.addFeatures(features_BelgaviRoute19_4);
var lyr_BelgaviRoute19_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute19_4, 
                style: style_BelgaviRoute19_4,
                popuplayertitle: "Belgavi Route 19",
                interactive: true,
    title: 'Belgavi Route 19<br />\
    <img src="styles/legend/BelgaviRoute19_4_0.png" /> R Cbt-Honaga 89-9<br />\
    <img src="styles/legend/BelgaviRoute19_4_1.png" /> R Cbt-Kalenatti 97-3 (#2)<br />\
    <img src="styles/legend/BelgaviRoute19_4_2.png" /> R Cbt-Konewadi 97-1<br />\
    <img src="styles/legend/BelgaviRoute19_4_3.png" /> R Konewadi-Cbt 97-2<br />\
    <img src="styles/legend/BelgaviRoute19_4_4.png" /> R Konewadi-Cbt 97-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute19_4_5.png" /> R Modaga-Cbt 89-2<br />\
    <img src="styles/legend/BelgaviRoute19_4_6.png" /> R Modaga-Cbt 89-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute19_4_7.png" /> R Rcu-Cbt 89-14<br />\
    <img src="styles/legend/BelgaviRoute19_4_8.png" /> RCbt-Kalenatti 97-3<br />\
    <img src="styles/legend/BelgaviRoute19_4_9.png" /> <br />'
        });
var format_BelgaviStops19_5 = new ol.format.GeoJSON();
var features_BelgaviStops19_5 = format_BelgaviStops19_5.readFeatures(json_BelgaviStops19_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops19_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops19_5.addFeatures(features_BelgaviStops19_5);
var lyr_BelgaviStops19_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops19_5, 
                style: style_BelgaviStops19_5,
                popuplayertitle: "Belgavi Stops 19",
                interactive: true,
    title: 'Belgavi Stops 19<br />\
    <img src="styles/legend/BelgaviStops19_5_0.png" /> S  Cbt-Honaga 89-9<br />\
    <img src="styles/legend/BelgaviStops19_5_1.png" /> S Cbt-Kalenatti 97-3<br />\
    <img src="styles/legend/BelgaviStops19_5_2.png" /> S Cbt-Kalenatti 97-3 (#2)<br />\
    <img src="styles/legend/BelgaviStops19_5_3.png" /> S Cbt-Konewadi 97-1<br />\
    <img src="styles/legend/BelgaviStops19_5_4.png" /> S Konewadi-Cbt 97-2<br />\
    <img src="styles/legend/BelgaviStops19_5_5.png" /> S Konewadi-Cbt 97-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops19_5_6.png" /> S Modaga-Cbt 89-2<br />\
    <img src="styles/legend/BelgaviStops19_5_7.png" /> S Modaga-Cbt 89-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops19_5_8.png" /> S Rcu-Cbt 89-14<br />\
    <img src="styles/legend/BelgaviStops19_5_9.png" /> <br />'
        });
var format_BelgaviRoute18_6 = new ol.format.GeoJSON();
var features_BelgaviRoute18_6 = format_BelgaviRoute18_6.readFeatures(json_BelgaviRoute18_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute18_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute18_6.addFeatures(features_BelgaviRoute18_6);
var lyr_BelgaviRoute18_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute18_6, 
                style: style_BelgaviRoute18_6,
                popuplayertitle: "Belgavi Route 18",
                interactive: true,
    title: 'Belgavi Route 18<br />\
    <img src="styles/legend/BelgaviRoute18_6_0.png" /> R Cbt-Modaga 89-1<br />\
    <img src="styles/legend/BelgaviRoute18_6_1.png" /> R Cbt-Modaga 89-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute18_6_2.png" /> R Cbt-Rcu 88-11<br />\
    <img src="styles/legend/BelgaviRoute18_6_3.png" /> R Honaga-Cbt 88-10<br />\
    <img src="styles/legend/BelgaviRoute18_6_4.png" /> R Honaga-Kcs 88-8<br />\
    <img src="styles/legend/BelgaviRoute18_6_5.png" /> R Kcs-Honaga 88-7<br />\
    <img src="styles/legend/BelgaviRoute18_6_6.png" /> R Kcs-Rcu 88-5<br />\
    <img src="styles/legend/BelgaviRoute18_6_7.png" /> R Rcu-Kcs 88-6<br />\
    <img src="styles/legend/BelgaviRoute18_6_8.png" /> <br />'
        });
var format_BelgaviStops18_7 = new ol.format.GeoJSON();
var features_BelgaviStops18_7 = format_BelgaviStops18_7.readFeatures(json_BelgaviStops18_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops18_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops18_7.addFeatures(features_BelgaviStops18_7);
var lyr_BelgaviStops18_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops18_7, 
                style: style_BelgaviStops18_7,
                popuplayertitle: "Belgavi Stops 18",
                interactive: true,
    title: 'Belgavi Stops 18<br />\
    <img src="styles/legend/BelgaviStops18_7_0.png" /> S Cbt-Modaga 89-1<br />\
    <img src="styles/legend/BelgaviStops18_7_1.png" /> S Cbt-Modaga 89-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops18_7_2.png" /> S Cbt-Rcu 88-11<br />\
    <img src="styles/legend/BelgaviStops18_7_3.png" /> S Honaga-Cbt 88-10<br />\
    <img src="styles/legend/BelgaviStops18_7_4.png" /> S Honaga-Kcs 88-8<br />\
    <img src="styles/legend/BelgaviStops18_7_5.png" /> S Kcs-Honaga 88-7<br />\
    <img src="styles/legend/BelgaviStops18_7_6.png" /> S Kcs-Rcu 88-5<br />\
    <img src="styles/legend/BelgaviStops18_7_7.png" /> S Rcu-Kcs 88-6<br />\
    <img src="styles/legend/BelgaviStops18_7_8.png" /> <br />'
        });
var format_BelgaviRoute17_8 = new ol.format.GeoJSON();
var features_BelgaviRoute17_8 = format_BelgaviRoute17_8.readFeatures(json_BelgaviRoute17_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute17_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute17_8.addFeatures(features_BelgaviRoute17_8);
var lyr_BelgaviRoute17_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute17_8, 
                style: style_BelgaviRoute17_8,
                popuplayertitle: "Belgavi Route 17",
                interactive: true,
    title: 'Belgavi Route 17<br />\
    <img src="styles/legend/BelgaviRoute17_8_0.png" /> R Alarwad-Cbt 87A-2<br />\
    <img src="styles/legend/BelgaviRoute17_8_1.png" /> R Cbt-Alarwad 87A-1<br />\
    <img src="styles/legend/BelgaviRoute17_8_2.png" /> R Cbt-Khb 80-11<br />\
    <img src="styles/legend/BelgaviRoute17_8_3.png" /> R Cbt-Khb 80-11 (#2)<br />\
    <img src="styles/legend/BelgaviRoute17_8_4.png" /> R Cbt-Khb Colony 85A-1<br />\
    <img src="styles/legend/BelgaviRoute17_8_5.png" /> R Cbt-Khb Colony 85A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute17_8_6.png" /> R Khb colony-Cbt 85A-2<br />\
    <img src="styles/legend/BelgaviRoute17_8_7.png" /> R Khb-Cbt 80-12<br />\
    <img src="styles/legend/BelgaviRoute17_8_8.png" /> R Rtn-Cbt 78-3<br />\
    <img src="styles/legend/BelgaviRoute17_8_9.png" /> <br />'
        });
var format_BelgaviStops17_9 = new ol.format.GeoJSON();
var features_BelgaviStops17_9 = format_BelgaviStops17_9.readFeatures(json_BelgaviStops17_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops17_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops17_9.addFeatures(features_BelgaviStops17_9);
var lyr_BelgaviStops17_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops17_9, 
                style: style_BelgaviStops17_9,
                popuplayertitle: "Belgavi Stops 17",
                interactive: true,
    title: 'Belgavi Stops 17<br />\
    <img src="styles/legend/BelgaviStops17_9_0.png" /> S Alarwad-Cbt 87A-2<br />\
    <img src="styles/legend/BelgaviStops17_9_1.png" /> S Cbt-Alarwad 87A-1<br />\
    <img src="styles/legend/BelgaviStops17_9_2.png" /> S Cbt-Khb 80-11<br />\
    <img src="styles/legend/BelgaviStops17_9_3.png" /> S Cbt-Khb 80-11 (#2)<br />\
    <img src="styles/legend/BelgaviStops17_9_4.png" /> S Cbt-Khb Colony 85A-1<br />\
    <img src="styles/legend/BelgaviStops17_9_5.png" /> S Cbt-Khb Colony 85A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops17_9_6.png" /> S Khb colony-Cbt 85A-2<br />\
    <img src="styles/legend/BelgaviStops17_9_7.png" /> S Khb-Cbt 80-12<br />\
    <img src="styles/legend/BelgaviStops17_9_8.png" /> S Rtn-Cbt 78-3<br />\
    <img src="styles/legend/BelgaviStops17_9_9.png" /> <br />'
        });
var format_BelgaviRoute16_10 = new ol.format.GeoJSON();
var features_BelgaviRoute16_10 = format_BelgaviRoute16_10.readFeatures(json_BelgaviRoute16_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute16_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute16_10.addFeatures(features_BelgaviRoute16_10);
var lyr_BelgaviRoute16_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute16_10, 
                style: style_BelgaviRoute16_10,
                popuplayertitle: "Belgavi Route 16",
                interactive: true,
    title: 'Belgavi Route 16<br />\
    <img src="styles/legend/BelgaviRoute16_10_0.png" /> R Cbt-Mhn-Rtn 78-2<br />\
    <img src="styles/legend/BelgaviRoute16_10_1.png" /> R Cbt-Mhn-Rtn 78-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute16_10_2.png" /> R Cbt-Mhn-Rtn-Cbt 77-1<br />\
    <img src="styles/legend/BelgaviRoute16_10_3.png" /> R Cbt-Mhn-Rtn-Cbt 77-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute16_10_4.png" /> R Cbt-Mhn-Rtn-Cbt 77-3<br />\
    <img src="styles/legend/BelgaviRoute16_10_5.png" /> R Cbt-Vtm-Rtn-Cbt 71-10<br />\
    <img src="styles/legend/BelgaviRoute16_10_6.png" /> R Cbt-Vtm-Rtn-Cbt 71-10 (#2)<br />\
    <img src="styles/legend/BelgaviRoute16_10_7.png" /> R Cbt-Vtm-Rtn-Cbt 76-1<br />\
    <img src="styles/legend/BelgaviRoute16_10_8.png" /> R Cbt-Vtm-Rtn-Cbt 76-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute16_10_9.png" /> <br />'
        });
var format_BelgaviStops16_11 = new ol.format.GeoJSON();
var features_BelgaviStops16_11 = format_BelgaviStops16_11.readFeatures(json_BelgaviStops16_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops16_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops16_11.addFeatures(features_BelgaviStops16_11);
var lyr_BelgaviStops16_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops16_11, 
                style: style_BelgaviStops16_11,
                popuplayertitle: "Belgavi Stops 16",
                interactive: true,
    title: 'Belgavi Stops 16<br />\
    <img src="styles/legend/BelgaviStops16_11_0.png" /> S Cbt-Mhn-Rtn 78-2<br />\
    <img src="styles/legend/BelgaviStops16_11_1.png" /> S Cbt-Mhn-Rtn 78-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops16_11_2.png" /> S Cbt-Mhn-Rtn-Cbt 77-1<br />\
    <img src="styles/legend/BelgaviStops16_11_3.png" /> S Cbt-Mhn-Rtn-Cbt 77-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops16_11_4.png" /> S Cbt-Mhn-Rtn-Cbt 77-3<br />\
    <img src="styles/legend/BelgaviStops16_11_5.png" /> S Cbt-Vtm-Rtn-Cbt 71-10<br />\
    <img src="styles/legend/BelgaviStops16_11_6.png" /> S Cbt-Vtm-Rtn-Cbt 71-10 (#2)<br />\
    <img src="styles/legend/BelgaviStops16_11_7.png" /> S Cbt-Vtm-Rtn-Cbt 76-1<br />\
    <img src="styles/legend/BelgaviStops16_11_8.png" /> S Cbt-Vtm-Rtn-Cbt 76-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops16_11_9.png" /> <br />'
        });
var format_BelgaviRoute15_12 = new ol.format.GeoJSON();
var features_BelgaviRoute15_12 = format_BelgaviRoute15_12.readFeatures(json_BelgaviRoute15_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute15_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute15_12.addFeatures(features_BelgaviRoute15_12);
var lyr_BelgaviRoute15_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute15_12, 
                style: style_BelgaviRoute15_12,
                popuplayertitle: "Belgavi Route 15",
                interactive: true,
    title: 'Belgavi Route 15<br />\
    <img src="styles/legend/BelgaviRoute15_12_0.png" /> R Cbt-Bk kangralli-Cbt 66-5<br />\
    <img src="styles/legend/BelgaviRoute15_12_1.png" /> R Cbt-Bk kangralli-Cbt 66-5 (#2)<br />\
    <img src="styles/legend/BelgaviRoute15_12_2.png" /> R Cbt-Vtm-Rtn-Cbt 71-2<br />\
    <img src="styles/legend/BelgaviRoute15_12_3.png" /> R Cbt-Vtm-Rtn-Cbt 71-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute15_12_4.png" /> R Cbt-Vtm-Rtn-Cbt 77-1<br />\
    <img src="styles/legend/BelgaviRoute15_12_5.png" /> R Cbt-Vtm-Rtn-Cbt 77-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute15_12_6.png" /> R Kcs-Vaibhav nagar 67-3<br />\
    <img src="styles/legend/BelgaviRoute15_12_7.png" /> R Vaibhav nagar-Cbt 67-4<br />\
    <img src="styles/legend/BelgaviRoute15_12_8.png" /> <br />'
        });
var format_Belgavistops15_13 = new ol.format.GeoJSON();
var features_Belgavistops15_13 = format_Belgavistops15_13.readFeatures(json_Belgavistops15_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belgavistops15_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belgavistops15_13.addFeatures(features_Belgavistops15_13);
var lyr_Belgavistops15_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Belgavistops15_13, 
                style: style_Belgavistops15_13,
                popuplayertitle: "Belgavi stops 15",
                interactive: true,
    title: 'Belgavi stops 15<br />\
    <img src="styles/legend/Belgavistops15_13_0.png" /> S Cbt-Bk kangralli-Cbt 66-5<br />\
    <img src="styles/legend/Belgavistops15_13_1.png" /> S Cbt-Bk kangralli-Cbt 66-5 (#2)<br />\
    <img src="styles/legend/Belgavistops15_13_2.png" /> S Cbt-Vtm-Rtn-Cbt 71-2<br />\
    <img src="styles/legend/Belgavistops15_13_3.png" /> S Cbt-Vtm-Rtn-Cbt 71-2 (#2)<br />\
    <img src="styles/legend/Belgavistops15_13_4.png" /> S Cbt-Vtm-Rtn-Cbt 77-1<br />\
    <img src="styles/legend/Belgavistops15_13_5.png" /> S Cbt-Vtm-Rtn-Cbt 77-1 (#2)<br />\
    <img src="styles/legend/Belgavistops15_13_6.png" /> S Kcs-Vaibhav nagar 67-3<br />\
    <img src="styles/legend/Belgavistops15_13_7.png" /> S Vaibhav nagar-Cbt 67-4<br />\
    <img src="styles/legend/Belgavistops15_13_8.png" /> <br />'
        });
var format_BelgaviRoute14_14 = new ol.format.GeoJSON();
var features_BelgaviRoute14_14 = format_BelgaviRoute14_14.readFeatures(json_BelgaviRoute14_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute14_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute14_14.addFeatures(features_BelgaviRoute14_14);
var lyr_BelgaviRoute14_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute14_14, 
                style: style_BelgaviRoute14_14,
                popuplayertitle: "Belgavi Route 14",
                interactive: true,
    title: 'Belgavi Route 14<br />\
    <img src="styles/legend/BelgaviRoute14_14_0.png" /> R Cbt-Mannikeri 66-7<br />\
    <img src="styles/legend/BelgaviRoute14_14_1.png" /> R Cbt-Nilaji 66-1<br />\
    <img src="styles/legend/BelgaviRoute14_14_2.png" /> R Cbt-Sonatti 66-3<br />\
    <img src="styles/legend/BelgaviRoute14_14_3.png" /> R Cbt-Sonatti 66-3 (#2)<br />\
    <img src="styles/legend/BelgaviRoute14_14_4.png" /> R Cbt-Vaibhav nagar 67-1<br />\
    <img src="styles/legend/BelgaviRoute14_14_5.png" /> R Mannikeri-Cbt 66-8<br />\
    <img src="styles/legend/BelgaviRoute14_14_6.png" /> R Nilaji-Cbt 66-2<br />\
    <img src="styles/legend/BelgaviRoute14_14_7.png" /> R Sonatti-Cbt 66-4<br />\
    <img src="styles/legend/BelgaviRoute14_14_8.png" /> R Vaibhav nagar-Kcs 67-2<br />\
    <img src="styles/legend/BelgaviRoute14_14_9.png" /> <br />'
        });
var format_BelgaviStops14_15 = new ol.format.GeoJSON();
var features_BelgaviStops14_15 = format_BelgaviStops14_15.readFeatures(json_BelgaviStops14_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops14_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops14_15.addFeatures(features_BelgaviStops14_15);
var lyr_BelgaviStops14_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops14_15, 
                style: style_BelgaviStops14_15,
                popuplayertitle: "Belgavi Stops 14",
                interactive: true,
    title: 'Belgavi Stops 14<br />\
    <img src="styles/legend/BelgaviStops14_15_0.png" /> S Cbt-Mannikeri 66-7<br />\
    <img src="styles/legend/BelgaviStops14_15_1.png" /> S Cbt-Nilaji 66-1<br />\
    <img src="styles/legend/BelgaviStops14_15_2.png" /> S Cbt-Sonatti 66-3<br />\
    <img src="styles/legend/BelgaviStops14_15_3.png" /> S Cbt-Sonatti 66-3 (#2)<br />\
    <img src="styles/legend/BelgaviStops14_15_4.png" /> S Cbt-Vaibhav nagar 67-1<br />\
    <img src="styles/legend/BelgaviStops14_15_5.png" /> S Mannikeri-Cbt 66-8<br />\
    <img src="styles/legend/BelgaviStops14_15_6.png" /> S Nilaji-Cbt 66-2<br />\
    <img src="styles/legend/BelgaviStops14_15_7.png" /> S Sonatti-Cbt 66-4<br />\
    <img src="styles/legend/BelgaviStops14_15_8.png" /> S Vaibhav nagar-Kcs 67-2<br />\
    <img src="styles/legend/BelgaviStops14_15_9.png" /> <br />'
        });
var format_BelgaviRoute13_16 = new ol.format.GeoJSON();
var features_BelgaviRoute13_16 = format_BelgaviRoute13_16.readFeatures(json_BelgaviRoute13_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute13_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute13_16.addFeatures(features_BelgaviRoute13_16);
var lyr_BelgaviRoute13_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute13_16, 
                style: style_BelgaviRoute13_16,
                popuplayertitle: "Belgavi Route 13",
                interactive: true,
    title: 'Belgavi Route 13<br />\
    <img src="styles/legend/BelgaviRoute13_16_0.png" /> R Cbt-Shaydri ngr 65A-1<br />\
    <img src="styles/legend/BelgaviRoute13_16_1.png" /> R Cbt-Shaydri ngr 65A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute13_16_2.png" /> R Dsc-Shaydri ngr 65A-9<br />\
    <img src="styles/legend/BelgaviRoute13_16_3.png" /> R Dsc-Shaydri ngr 65A-9 (#2)<br />\
    <img src="styles/legend/BelgaviRoute13_16_4.png" /> R Dsc-Shaydri ngr 65B-5<br />\
    <img src="styles/legend/BelgaviRoute13_16_5.png" /> R Dsc-Shaydri ngr 65B-5 (#2)<br />\
    <img src="styles/legend/BelgaviRoute13_16_6.png" /> R Shaydri ngr-Cbt 65A-2<br />\
    <img src="styles/legend/BelgaviRoute13_16_7.png" /> R Shaydri ngr-Dsc 65A-8<br />\
    <img src="styles/legend/BelgaviRoute13_16_8.png" /> <br />'
        });
var format_BelgaviStops13_17 = new ol.format.GeoJSON();
var features_BelgaviStops13_17 = format_BelgaviStops13_17.readFeatures(json_BelgaviStops13_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops13_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops13_17.addFeatures(features_BelgaviStops13_17);
var lyr_BelgaviStops13_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops13_17, 
                style: style_BelgaviStops13_17,
                popuplayertitle: "Belgavi Stops 13",
                interactive: true,
    title: 'Belgavi Stops 13<br />\
    <img src="styles/legend/BelgaviStops13_17_0.png" /> S Cbt-Shaydri ngr 65A-1<br />\
    <img src="styles/legend/BelgaviStops13_17_1.png" /> S Cbt-Shaydri ngr 65A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops13_17_2.png" /> S Dsc-Shaydri ngr 65A-9<br />\
    <img src="styles/legend/BelgaviStops13_17_3.png" /> S Dsc-Shaydri ngr 65A-9 (#2)<br />\
    <img src="styles/legend/BelgaviStops13_17_4.png" /> S Dsc-Shaydri ngr 65B-5<br />\
    <img src="styles/legend/BelgaviStops13_17_5.png" /> S Dsc-Shaydri ngr 65B-5 (#2)<br />\
    <img src="styles/legend/BelgaviStops13_17_6.png" /> S Shaydri ngr-Cbt 65A-2<br />\
    <img src="styles/legend/BelgaviStops13_17_7.png" /> S Shaydri ngr-Dsc 65A-8<br />\
    <img src="styles/legend/BelgaviStops13_17_8.png" /> <br />'
        });
var format_BelgaviRoute12_18 = new ol.format.GeoJSON();
var features_BelgaviRoute12_18 = format_BelgaviRoute12_18.readFeatures(json_BelgaviRoute12_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute12_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute12_18.addFeatures(features_BelgaviRoute12_18);
var lyr_BelgaviRoute12_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute12_18, 
                style: style_BelgaviRoute12_18,
                popuplayertitle: "Belgavi Route 12",
                interactive: true,
    title: 'Belgavi Route 12<br />\
    <img src="styles/legend/BelgaviRoute12_18_0.png" /> R Cbt-Bk kangralli-Cbt 58-1<br />\
    <img src="styles/legend/BelgaviRoute12_18_1.png" /> R Cbt-Bk kangralli-Cbt 58-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute12_18_2.png" /> R Cbt-Police colony 64-1<br />\
    <img src="styles/legend/BelgaviRoute12_18_3.png" /> R Cbt-Police colony 64-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute12_18_4.png" /> R Cbt-Shaydri ngr 64-7<br />\
    <img src="styles/legend/BelgaviRoute12_18_5.png" /> R Cbt-Shaydri ngr 64-7 (#2)<br />\
    <img src="styles/legend/BelgaviRoute12_18_6.png" /> R Khanagav-Cbt 57B-12<br />\
    <img src="styles/legend/BelgaviRoute12_18_7.png" /> R Police colony-Cbt 64-2<br />\
    <img src="styles/legend/BelgaviRoute12_18_8.png" /> <br />'
        });
var format_BelgaviStops12_19 = new ol.format.GeoJSON();
var features_BelgaviStops12_19 = format_BelgaviStops12_19.readFeatures(json_BelgaviStops12_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops12_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops12_19.addFeatures(features_BelgaviStops12_19);
var lyr_BelgaviStops12_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops12_19, 
                style: style_BelgaviStops12_19,
                popuplayertitle: "Belgavi Stops 12",
                interactive: true,
    title: 'Belgavi Stops 12<br />\
    <img src="styles/legend/BelgaviStops12_19_0.png" /> Cbt-Bk kangralli-Cbt 58-1<br />\
    <img src="styles/legend/BelgaviStops12_19_1.png" /> Cbt-Bk kangralli-Cbt 58-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops12_19_2.png" /> Cbt-Police colony 64-1<br />\
    <img src="styles/legend/BelgaviStops12_19_3.png" /> Cbt-Police colony 64-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops12_19_4.png" /> Cbt-Shaydri ngr 64-7<br />\
    <img src="styles/legend/BelgaviStops12_19_5.png" /> Cbt-Shaydri ngr 64-7 (#2)<br />\
    <img src="styles/legend/BelgaviStops12_19_6.png" /> Khanagav-Cbt 57B-12<br />\
    <img src="styles/legend/BelgaviStops12_19_7.png" /> Police colony-Cbt 64-2<br />\
    <img src="styles/legend/BelgaviStops12_19_8.png" /> <br />'
        });
var format_BelgaviRoute11_20 = new ol.format.GeoJSON();
var features_BelgaviRoute11_20 = format_BelgaviRoute11_20.readFeatures(json_BelgaviRoute11_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute11_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute11_20.addFeatures(features_BelgaviRoute11_20);
var lyr_BelgaviRoute11_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute11_20, 
                style: style_BelgaviRoute11_20,
                popuplayertitle: "Belgavi Route 11",
                interactive: true,
    title: 'Belgavi Route 11<br />\
    <img src="styles/legend/BelgaviRoute11_20_0.png" /> R Cbt-Honaga 57A-1<br />\
    <img src="styles/legend/BelgaviRoute11_20_1.png" /> R Cbt-Honaga 57A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute11_20_2.png" /> R Cbt-Khanagav 57B-11<br />\
    <img src="styles/legend/BelgaviRoute11_20_3.png" /> R Cbt-Khanagav 57B-11 (#2)<br />\
    <img src="styles/legend/BelgaviRoute11_20_4.png" /> R Cbt-Ramtirth nagar 57A-9<br />\
    <img src="styles/legend/BelgaviRoute11_20_5.png" /> R Cbt-Ramtirth nagar 57A-9 (#2)<br />\
    <img src="styles/legend/BelgaviRoute11_20_6.png" /> R Honaga-Cbt 57A-2<br />\
    <img src="styles/legend/BelgaviRoute11_20_7.png" /> R Ramtirth nagar-Cbt 57A-10<br />\
    <img src="styles/legend/BelgaviRoute11_20_8.png" /> <br />'
        });
var format_BelgaviStops11_21 = new ol.format.GeoJSON();
var features_BelgaviStops11_21 = format_BelgaviStops11_21.readFeatures(json_BelgaviStops11_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops11_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops11_21.addFeatures(features_BelgaviStops11_21);
var lyr_BelgaviStops11_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops11_21, 
                style: style_BelgaviStops11_21,
                popuplayertitle: "Belgavi Stops 11",
                interactive: true,
    title: 'Belgavi Stops 11<br />\
    <img src="styles/legend/BelgaviStops11_21_0.png" /> Cbt-Honaga 57A-1<br />\
    <img src="styles/legend/BelgaviStops11_21_1.png" /> Cbt-Honaga 57A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops11_21_2.png" /> Cbt-Khanagav 57B-11<br />\
    <img src="styles/legend/BelgaviStops11_21_3.png" /> Cbt-Khanagav 57B-11 (#2)<br />\
    <img src="styles/legend/BelgaviStops11_21_4.png" /> Cbt-Ramtirth nagar 57A-9<br />\
    <img src="styles/legend/BelgaviStops11_21_5.png" /> Cbt-Ramtirth nagar 57A-9 (#2)<br />\
    <img src="styles/legend/BelgaviStops11_21_6.png" /> Honaga-Cbt 57A-2<br />\
    <img src="styles/legend/BelgaviStops11_21_7.png" /> Ramtirth nagar-Cbt 57A-10<br />\
    <img src="styles/legend/BelgaviStops11_21_8.png" /> <br />'
        });
var format_BelgaviRoute10_22 = new ol.format.GeoJSON();
var features_BelgaviRoute10_22 = format_BelgaviRoute10_22.readFeatures(json_BelgaviRoute10_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute10_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute10_22.addFeatures(features_BelgaviRoute10_22);
var lyr_BelgaviRoute10_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute10_22, 
                style: style_BelgaviRoute10_22,
                popuplayertitle: "Belgavi Route 10",
                interactive: true,
    title: 'Belgavi Route 10<br />\
    <img src="styles/legend/BelgaviRoute10_22_0.png" /> R Cbt-Kaveri ngr 53-1<br />\
    <img src="styles/legend/BelgaviRoute10_22_1.png" /> R Cbt-Kaveri ngr 53-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute10_22_2.png" /> R Cbt-Kondaskopp 56-1<br />\
    <img src="styles/legend/BelgaviRoute10_22_3.png" /> R Cbt-Shahu nagar-Cbt 56-3<br />\
    <img src="styles/legend/BelgaviRoute10_22_4.png" /> R Cbt-Shahu nagar-Cbt 56-3 (#2)<br />\
    <img src="styles/legend/BelgaviRoute10_22_5.png" /> R Kaveri ngr-Cbt 53-2<br />\
    <img src="styles/legend/BelgaviRoute10_22_6.png" /> R Kaveri ngr-Cbt 53-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute10_22_7.png" /> R Kondaskopp-Cbt 56-2<br />\
    <img src="styles/legend/BelgaviRoute10_22_8.png" /> <br />'
        });
var format_BelgaviStops10_23 = new ol.format.GeoJSON();
var features_BelgaviStops10_23 = format_BelgaviStops10_23.readFeatures(json_BelgaviStops10_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops10_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops10_23.addFeatures(features_BelgaviStops10_23);
var lyr_BelgaviStops10_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops10_23, 
                style: style_BelgaviStops10_23,
                popuplayertitle: "Belgavi Stops 10",
                interactive: true,
    title: 'Belgavi Stops 10<br />\
    <img src="styles/legend/BelgaviStops10_23_0.png" /> Cbt-Kaveri ngr 53-1<br />\
    <img src="styles/legend/BelgaviStops10_23_1.png" /> Cbt-Kaveri ngr 53-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops10_23_2.png" /> Cbt-Kondaskopp 56-1<br />\
    <img src="styles/legend/BelgaviStops10_23_3.png" /> Cbt-Shahu nagar-Cbt 56-3<br />\
    <img src="styles/legend/BelgaviStops10_23_4.png" /> Cbt-Shahu nagar-Cbt 56-3 (#2)<br />\
    <img src="styles/legend/BelgaviStops10_23_5.png" /> Kaveri ngr-Cbt 53-2<br />\
    <img src="styles/legend/BelgaviStops10_23_6.png" /> Kaveri ngr-Cbt 53-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops10_23_7.png" /> <br />'
        });
var format_BelgaviRoute9_24 = new ol.format.GeoJSON();
var features_BelgaviRoute9_24 = format_BelgaviRoute9_24.readFeatures(json_BelgaviRoute9_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute9_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute9_24.addFeatures(features_BelgaviRoute9_24);
var lyr_BelgaviRoute9_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute9_24, 
                style: style_BelgaviRoute9_24,
                popuplayertitle: "Belgavi Route 9",
                interactive: true,
    title: 'Belgavi Route 9<br />\
    <img src="styles/legend/BelgaviRoute9_24_0.png" /> R Cbt-Gp colony 52A-1<br />\
    <img src="styles/legend/BelgaviRoute9_24_1.png" /> R Cbt-Gp colony 52A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute9_24_2.png" /> R Dsc-Kadarwadi 50-5<br />\
    <img src="styles/legend/BelgaviRoute9_24_3.png" /> R Gp colony-Cbt 52A-2<br />\
    <img src="styles/legend/BelgaviRoute9_24_4.png" /> R Gp colony-Cbt 52A-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute9_24_5.png" /> R Kadarwadi-Cbt 50-10<br />\
    <img src="styles/legend/BelgaviRoute9_24_6.png" /> R Kadarwadi-Cbt 50-2<br />\
    <img src="styles/legend/BelgaviRoute9_24_7.png" /> R Kadarwadi-Cbt 50-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute9_24_8.png" /> R Kadarwadi-Dsc 50-4<br />\
    <img src="styles/legend/BelgaviRoute9_24_9.png" /> <br />'
        });
var format_BelgaviStops9_25 = new ol.format.GeoJSON();
var features_BelgaviStops9_25 = format_BelgaviStops9_25.readFeatures(json_BelgaviStops9_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops9_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops9_25.addFeatures(features_BelgaviStops9_25);
var lyr_BelgaviStops9_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops9_25, 
                style: style_BelgaviStops9_25,
                popuplayertitle: "Belgavi Stops 9",
                interactive: true,
    title: 'Belgavi Stops 9<br />\
    <img src="styles/legend/BelgaviStops9_25_0.png" /> Cbt-Gp colony 52A-1<br />\
    <img src="styles/legend/BelgaviStops9_25_1.png" /> Cbt-Gp colony 52A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops9_25_2.png" /> Dsc-Kadarwadi 50-5<br />\
    <img src="styles/legend/BelgaviStops9_25_3.png" /> Gp colony-Cbt 52A-2<br />\
    <img src="styles/legend/BelgaviStops9_25_4.png" /> Gp colony-Cbt 52A-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops9_25_5.png" /> Kadarwadi-Cbt 50-10<br />\
    <img src="styles/legend/BelgaviStops9_25_6.png" /> Kadarwadi-Cbt 50-2<br />\
    <img src="styles/legend/BelgaviStops9_25_7.png" /> Kadarwadi-Cbt 50-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops9_25_8.png" /> Kadarwadi-Dsc 50-4<br />\
    <img src="styles/legend/BelgaviStops9_25_9.png" /> <br />'
        });
var format_BelgaviRoute8_26 = new ol.format.GeoJSON();
var features_BelgaviRoute8_26 = format_BelgaviRoute8_26.readFeatures(json_BelgaviRoute8_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute8_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute8_26.addFeatures(features_BelgaviRoute8_26);
var lyr_BelgaviRoute8_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute8_26, 
                style: style_BelgaviRoute8_26,
                popuplayertitle: "Belgavi Route 8",
                interactive: true,
    title: 'Belgavi Route 8<br />\
    <img src="styles/legend/BelgaviRoute8_26_0.png" /> R Cbt-Kadarwadi 50-1<br />\
    <img src="styles/legend/BelgaviRoute8_26_1.png" /> R Cbt-Kadarwadi 50-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute8_26_2.png" /> R Cbt-Kakati 47-1<br />\
    <img src="styles/legend/BelgaviRoute8_26_3.png" /> R Cbt-Majagaon 46A-1<br />\
    <img src="styles/legend/BelgaviRoute8_26_4.png" /> R Cbt-Majagaon 46A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute8_26_5.png" /> R Kadarwadi-Cbt 50-2<br />\
    <img src="styles/legend/BelgaviRoute8_26_6.png" /> R Kakati-Cbt 47-2<br />\
    <img src="styles/legend/BelgaviRoute8_26_7.png" /> R Majagaon-Cbt 46A-2<br />\
    <img src="styles/legend/BelgaviRoute8_26_8.png" /> R Majagaon-Cbt 46A-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute8_26_9.png" /> <br />'
        });
var format_BelgaviStops8_27 = new ol.format.GeoJSON();
var features_BelgaviStops8_27 = format_BelgaviStops8_27.readFeatures(json_BelgaviStops8_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops8_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops8_27.addFeatures(features_BelgaviStops8_27);
var lyr_BelgaviStops8_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops8_27, 
                style: style_BelgaviStops8_27,
                popuplayertitle: "Belgavi Stops 8",
                interactive: true,
    title: 'Belgavi Stops 8<br />\
    <img src="styles/legend/BelgaviStops8_27_0.png" /> Cbt-Kadarwadi 50-1<br />\
    <img src="styles/legend/BelgaviStops8_27_1.png" /> Cbt-Kadarwadi 50-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops8_27_2.png" /> Cbt-Kakati 47-1<br />\
    <img src="styles/legend/BelgaviStops8_27_3.png" /> Cbt-Majagaon 46A-1<br />\
    <img src="styles/legend/BelgaviStops8_27_4.png" /> Cbt-Majagaon 46A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops8_27_5.png" /> Kadarwadi-Cbt 50-2<br />\
    <img src="styles/legend/BelgaviStops8_27_6.png" /> Kakati-Cbt 47-2<br />\
    <img src="styles/legend/BelgaviStops8_27_7.png" /> Majagaon-Cbt 46A-2<br />\
    <img src="styles/legend/BelgaviStops8_27_8.png" /> Majagaon-Cbt 46A-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops8_27_9.png" /> <br />'
        });
var format_BelgaviRoute7_28 = new ol.format.GeoJSON();
var features_BelgaviRoute7_28 = format_BelgaviRoute7_28.readFeatures(json_BelgaviRoute7_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute7_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute7_28.addFeatures(features_BelgaviRoute7_28);
var lyr_BelgaviRoute7_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute7_28, 
                style: style_BelgaviRoute7_28,
                popuplayertitle: "Belgavi Route 7",
                interactive: true,
    title: 'Belgavi Route 7<br />\
    <img src="styles/legend/BelgaviRoute7_28_0.png" /> R Cbt-Muchandi 33-11<br />\
    <img src="styles/legend/BelgaviRoute7_28_1.png" /> R Cbt-Muchandi 33-11 (#2)<br />\
    <img src="styles/legend/BelgaviRoute7_28_2.png" /> R Cbt-Ramtirth nagar 31-15<br />\
    <img src="styles/legend/BelgaviRoute7_28_3.png" /> R Cbt-Ramtirth nagar 31-15 (#2)<br />\
    <img src="styles/legend/BelgaviRoute7_28_4.png" /> R Muchandi-Cbt 33-12<br />\
    <img src="styles/legend/BelgaviRoute7_28_5.png" /> R Muchandi-Cbt 33-12 (#2)<br />\
    <img src="styles/legend/BelgaviRoute7_28_6.png" /> R Ramtirth nagar-Cbt 31-16<br />\
    <img src="styles/legend/BelgaviRoute7_28_7.png" /> R Ramtirth nagar-Cbt 31-16 (#2)<br />\
    <img src="styles/legend/BelgaviRoute7_28_8.png" /> <br />'
        });
var format_BelgaviStops7_29 = new ol.format.GeoJSON();
var features_BelgaviStops7_29 = format_BelgaviStops7_29.readFeatures(json_BelgaviStops7_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops7_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops7_29.addFeatures(features_BelgaviStops7_29);
var lyr_BelgaviStops7_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops7_29, 
                style: style_BelgaviStops7_29,
                popuplayertitle: "Belgavi Stops 7",
                interactive: true,
    title: 'Belgavi Stops 7<br />\
    <img src="styles/legend/BelgaviStops7_29_0.png" /> Cbt-Muchandi 33-11<br />\
    <img src="styles/legend/BelgaviStops7_29_1.png" /> Cbt-Muchandi 33-11 (#2)<br />\
    <img src="styles/legend/BelgaviStops7_29_2.png" /> Cbt-Ramtirth nagar 31-15<br />\
    <img src="styles/legend/BelgaviStops7_29_3.png" /> Cbt-Ramtirth nagar 31-15 (#2)<br />\
    <img src="styles/legend/BelgaviStops7_29_4.png" /> Muchandi-Cbt 33-12<br />\
    <img src="styles/legend/BelgaviStops7_29_5.png" /> Muchandi-Cbt 33-12 (#2)<br />\
    <img src="styles/legend/BelgaviStops7_29_6.png" /> Ramtirth nagar-Cbt 31-16<br />\
    <img src="styles/legend/BelgaviStops7_29_7.png" /> Ramtirth nagar-Cbt 31-16 (#2)<br />\
    <img src="styles/legend/BelgaviStops7_29_8.png" /> <br />'
        });
var format_BelgaviRoute6_30 = new ol.format.GeoJSON();
var features_BelgaviRoute6_30 = format_BelgaviRoute6_30.readFeatures(json_BelgaviRoute6_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute6_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute6_30.addFeatures(features_BelgaviRoute6_30);
var lyr_BelgaviRoute6_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute6_30, 
                style: style_BelgaviRoute6_30,
                popuplayertitle: "Belgavi Route 6",
                interactive: true,
    title: 'Belgavi Route 6<br />\
    <img src="styles/legend/BelgaviRoute6_30_0.png" /> R Cbt-Hng 31-13<br />\
    <img src="styles/legend/BelgaviRoute6_30_1.png" /> R Cbt-Hng 31-13 (#2)<br />\
    <img src="styles/legend/BelgaviRoute6_30_2.png" /> R Cbt-Vdg 30A-1<br />\
    <img src="styles/legend/BelgaviRoute6_30_3.png" /> R Cbt-Vdg 30A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute6_30_4.png" /> R Hng-Cbt 31-14<br />\
    <img src="styles/legend/BelgaviRoute6_30_5.png" /> R Hng-Cbt 31-14 (#2)<br />\
    <img src="styles/legend/BelgaviRoute6_30_6.png" /> R Vantamuri-Cbt 29B-10<br />\
    <img src="styles/legend/BelgaviRoute6_30_7.png" /> R Vdg-Cbt 30A-2<br />\
    <img src="styles/legend/BelgaviRoute6_30_8.png" /> R Vdg-Cbt 30A-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute6_30_9.png" /> <br />'
        });
var format_BelgaviStops6_31 = new ol.format.GeoJSON();
var features_BelgaviStops6_31 = format_BelgaviStops6_31.readFeatures(json_BelgaviStops6_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops6_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops6_31.addFeatures(features_BelgaviStops6_31);
var lyr_BelgaviStops6_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops6_31, 
                style: style_BelgaviStops6_31,
                popuplayertitle: "Belgavi Stops 6",
                interactive: true,
    title: 'Belgavi Stops 6<br />\
    <img src="styles/legend/BelgaviStops6_31_0.png" /> Cbt-Hng 31-13<br />\
    <img src="styles/legend/BelgaviStops6_31_1.png" /> Cbt-Hng 31-13 (#2)<br />\
    <img src="styles/legend/BelgaviStops6_31_2.png" /> Cbt-Vdg 30A-1<br />\
    <img src="styles/legend/BelgaviStops6_31_3.png" /> Cbt-Vdg 30A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops6_31_4.png" /> Hng-Cbt 31-14<br />\
    <img src="styles/legend/BelgaviStops6_31_5.png" /> Hng-Cbt 31-14 (#2)<br />\
    <img src="styles/legend/BelgaviStops6_31_6.png" /> Vantamuri-Cbt 29B-10<br />\
    <img src="styles/legend/BelgaviStops6_31_7.png" /> Vdg-Cbt 30A-2<br />\
    <img src="styles/legend/BelgaviStops6_31_8.png" /> Vdg-Cbt 30A-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops6_31_9.png" /> <br />'
        });
var format_BelgaviRoute5_32 = new ol.format.GeoJSON();
var features_BelgaviRoute5_32 = format_BelgaviRoute5_32.readFeatures(json_BelgaviRoute5_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute5_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute5_32.addFeatures(features_BelgaviRoute5_32);
var lyr_BelgaviRoute5_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute5_32, 
                style: style_BelgaviRoute5_32,
                popuplayertitle: "Belgavi Route 5",
                interactive: true,
    title: 'Belgavi Route 5<br />\
    <img src="styles/legend/BelgaviRoute5_32_0.png" /> R Cbt-Mavinkatti 29B-1<br />\
    <img src="styles/legend/BelgaviRoute5_32_1.png" /> R Cbt-Mavinkatti 29B-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute5_32_2.png" /> R Cbt-Sulebhavi 29B-7<br />\
    <img src="styles/legend/BelgaviRoute5_32_3.png" /> R Cbt-Sulebhavi 29B-7 (#2)<br />\
    <img src="styles/legend/BelgaviRoute5_32_4.png" /> R Cbt-Vantamuri 29B-9<br />\
    <img src="styles/legend/BelgaviRoute5_32_5.png" /> R Mavinkatti-Cbt 29B-2<br />\
    <img src="styles/legend/BelgaviRoute5_32_6.png" /> R Mavinkatti-Cbt 29B-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute5_32_7.png" /> R Sulebhavi-Cbt 29B-8<br />\
    <img src="styles/legend/BelgaviRoute5_32_8.png" /> R Sulebhavi-Cbt 29B-8 (#2)<br />\
    <img src="styles/legend/BelgaviRoute5_32_9.png" /> <br />'
        });
var format_BelgaviStops5_33 = new ol.format.GeoJSON();
var features_BelgaviStops5_33 = format_BelgaviStops5_33.readFeatures(json_BelgaviStops5_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops5_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops5_33.addFeatures(features_BelgaviStops5_33);
var lyr_BelgaviStops5_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops5_33, 
                style: style_BelgaviStops5_33,
                popuplayertitle: "Belgavi Stops 5",
                interactive: true,
    title: 'Belgavi Stops 5<br />\
    <img src="styles/legend/BelgaviStops5_33_0.png" /> Cbt-Mavinkatti 29B-1<br />\
    <img src="styles/legend/BelgaviStops5_33_1.png" /> Cbt-Mavinkatti 29B-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops5_33_2.png" /> Cbt-Sulebhavi 29B-7<br />\
    <img src="styles/legend/BelgaviStops5_33_3.png" /> Cbt-Sulebhavi 29B-7 (#2)<br />\
    <img src="styles/legend/BelgaviStops5_33_4.png" /> Cbt-Vantamuri 29B-9<br />\
    <img src="styles/legend/BelgaviStops5_33_5.png" /> Mavinkatti-Cbt 29B-2<br />\
    <img src="styles/legend/BelgaviStops5_33_6.png" /> Mavinkatti-Cbt 29B-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops5_33_7.png" /> Sulebhavi-Cbt 29B-8<br />\
    <img src="styles/legend/BelgaviStops5_33_8.png" /> Sulebhavi-Cbt 29B-8 (#2)<br />\
    <img src="styles/legend/BelgaviStops5_33_9.png" /> <br />'
        });
var format_BelgaviRoute4_34 = new ol.format.GeoJSON();
var features_BelgaviRoute4_34 = format_BelgaviRoute4_34.readFeatures(json_BelgaviRoute4_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute4_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute4_34.addFeatures(features_BelgaviRoute4_34);
var lyr_BelgaviRoute4_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute4_34, 
                style: style_BelgaviRoute4_34,
                popuplayertitle: "Belgavi Route 4",
                interactive: true,
    title: 'Belgavi Route 4<br />\
    <img src="styles/legend/BelgaviRoute4_34_0.png" /> R Cbt-Kanabaragi 29A-12<br />\
    <img src="styles/legend/BelgaviRoute4_34_1.png" /> R Cbt-Kanabaragi 29A-12 (#2)<br />\
    <img src="styles/legend/BelgaviRoute4_34_2.png" /> R Cbt-Kolikoppa 29A-7<br />\
    <img src="styles/legend/BelgaviRoute4_34_3.png" /> R Cbt-Sulebhavi 29A-9<br />\
    <img src="styles/legend/BelgaviRoute4_34_4.png" /> R Cbt-Sulebhavi 29A-9 (#2)<br />\
    <img src="styles/legend/BelgaviRoute4_34_5.png" /> R Kadoli-Cbt 29A-6<br />\
    <img src="styles/legend/BelgaviRoute4_34_6.png" /> R Kolikoppa-Cbt 29A-8<br />\
    <img src="styles/legend/BelgaviRoute4_34_7.png" /> R Sulebhavi-Cbt 29A-10<br />\
    <img src="styles/legend/BelgaviRoute4_34_8.png" /> R Sulebhavi-Cbt 29A-10 (#2)<br />\
    <img src="styles/legend/BelgaviRoute4_34_9.png" /> <br />'
        });
var format_BelgaviStops4_35 = new ol.format.GeoJSON();
var features_BelgaviStops4_35 = format_BelgaviStops4_35.readFeatures(json_BelgaviStops4_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops4_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops4_35.addFeatures(features_BelgaviStops4_35);
var lyr_BelgaviStops4_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops4_35, 
                style: style_BelgaviStops4_35,
                popuplayertitle: "Belgavi Stops 4",
                interactive: true,
    title: 'Belgavi Stops 4<br />\
    <img src="styles/legend/BelgaviStops4_35_0.png" /> Cbt-Kanabaragi 29A-12<br />\
    <img src="styles/legend/BelgaviStops4_35_1.png" /> Cbt-Kanabaragi 29A-12 (#2)<br />\
    <img src="styles/legend/BelgaviStops4_35_2.png" /> Cbt-Kolikoppa 29A-7<br />\
    <img src="styles/legend/BelgaviStops4_35_3.png" /> Cbt-Sulebhavi 29A-9<br />\
    <img src="styles/legend/BelgaviStops4_35_4.png" /> Cbt-Sulebhavi 29A-9 (#2)<br />\
    <img src="styles/legend/BelgaviStops4_35_5.png" /> Kadoli-Cbt 29A-6<br />\
    <img src="styles/legend/BelgaviStops4_35_6.png" /> Kolikoppa-Cbt 29A-8<br />\
    <img src="styles/legend/BelgaviStops4_35_7.png" /> Sulebhavi-Cbt 29A-10<br />\
    <img src="styles/legend/BelgaviStops4_35_8.png" /> Sulebhavi-Cbt 29A-10 (#2)<br />\
    <img src="styles/legend/BelgaviStops4_35_9.png" /> <br />'
        });
var format_BelgaviRoute3_36 = new ol.format.GeoJSON();
var features_BelgaviRoute3_36 = format_BelgaviRoute3_36.readFeatures(json_BelgaviRoute3_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute3_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute3_36.addFeatures(features_BelgaviRoute3_36);
var lyr_BelgaviRoute3_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute3_36, 
                style: style_BelgaviRoute3_36,
                popuplayertitle: "Belgavi Route 3",
                interactive: true,
    title: 'Belgavi Route 3<br />\
    <img src="styles/legend/BelgaviRoute3_36_0.png" /> R Cbt-Devgiri 29A-1<br />\
    <img src="styles/legend/BelgaviRoute3_36_1.png" /> R Cbt-Devgiri 29A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute3_36_2.png" /> R Cbt-Kadoli 29A-5<br />\
    <img src="styles/legend/BelgaviRoute3_36_3.png" /> R Cbt-Kadoli 29A-5 (#2)<br />\
    <img src="styles/legend/BelgaviRoute3_36_4.png" /> R Cbt-Kanabaragi 29A-3<br />\
    <img src="styles/legend/BelgaviRoute3_36_5.png" /> R Cbt-Kanabaragi 29A-3 (#2)<br />\
    <img src="styles/legend/BelgaviRoute3_36_6.png" /> R Devgiri-Cbt 29A-2<br />\
    <img src="styles/legend/BelgaviRoute3_36_7.png" /> R Devgiri-Cbt 29A-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute3_36_8.png" /> R Kanabaragi-Cbt 29A-4<br />\
    <img src="styles/legend/BelgaviRoute3_36_9.png" /> <br />'
        });
var format_BelgaviStops3_37 = new ol.format.GeoJSON();
var features_BelgaviStops3_37 = format_BelgaviStops3_37.readFeatures(json_BelgaviStops3_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops3_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops3_37.addFeatures(features_BelgaviStops3_37);
var lyr_BelgaviStops3_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops3_37, 
                style: style_BelgaviStops3_37,
                popuplayertitle: "Belgavi Stops 3",
                interactive: true,
    title: 'Belgavi Stops 3<br />\
    <img src="styles/legend/BelgaviStops3_37_0.png" /> Cbt-Devgiri 29A-1<br />\
    <img src="styles/legend/BelgaviStops3_37_1.png" /> Cbt-Devgiri 29A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops3_37_2.png" /> Cbt-Kadoli 29A-5<br />\
    <img src="styles/legend/BelgaviStops3_37_3.png" /> Cbt-Kadoli 29A-5 (#2)<br />\
    <img src="styles/legend/BelgaviStops3_37_4.png" /> Cbt-Kanabaragi 29A-3<br />\
    <img src="styles/legend/BelgaviStops3_37_5.png" /> Cbt-Kanabaragi 29A-3 (#2)<br />\
    <img src="styles/legend/BelgaviStops3_37_6.png" /> Devgiri-Cbt 29A-2<br />\
    <img src="styles/legend/BelgaviStops3_37_7.png" /> Devgiri-Cbt 29A-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops3_37_8.png" /> Kanabaragi-Cbt 29A-4<br />\
    <img src="styles/legend/BelgaviStops3_37_9.png" /> <br />'
        });
var format_BelgaviRoute2_38 = new ol.format.GeoJSON();
var features_BelgaviRoute2_38 = format_BelgaviRoute2_38.readFeatures(json_BelgaviRoute2_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute2_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute2_38.addFeatures(features_BelgaviRoute2_38);
var lyr_BelgaviRoute2_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute2_38, 
                style: style_BelgaviRoute2_38,
                popuplayertitle: "Belgavi Route 2",
                interactive: true,
    title: 'Belgavi Route 2<br />\
    <img src="styles/legend/BelgaviRoute2_38_0.png" /> R Cbt-Savagaon 26-3<br />\
    <img src="styles/legend/BelgaviRoute2_38_1.png" /> R Cbt-Sulaga 26-1<br />\
    <img src="styles/legend/BelgaviRoute2_38_2.png" /> R Cbt-Sulaga 26-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute2_38_3.png" /> R Savagaon-Cbt 26-4<br />\
    <img src="styles/legend/BelgaviRoute2_38_4.png" /> R Sulaga-Cbt 26-2<br />\
    <img src="styles/legend/BelgaviRoute2_38_5.png" /> R Sulaga-Cbt 26-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute2_38_6.png" /> R Vdg-Cbt 20-4<br />\
    <img src="styles/legend/BelgaviRoute2_38_7.png" /> R Vdg-Cbt 20-4 (#2)<br />\
    <img src="styles/legend/BelgaviRoute2_38_8.png" /> <br />'
        });
var format_BelgaviStops2_39 = new ol.format.GeoJSON();
var features_BelgaviStops2_39 = format_BelgaviStops2_39.readFeatures(json_BelgaviStops2_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops2_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops2_39.addFeatures(features_BelgaviStops2_39);
var lyr_BelgaviStops2_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops2_39, 
                style: style_BelgaviStops2_39,
                popuplayertitle: "Belgavi Stops 2",
                interactive: true,
    title: 'Belgavi Stops 2<br />\
    <img src="styles/legend/BelgaviStops2_39_0.png" /> Cbt-Savagaon 26-3<br />\
    <img src="styles/legend/BelgaviStops2_39_1.png" /> Cbt-Sulaga 26-1<br />\
    <img src="styles/legend/BelgaviStops2_39_2.png" /> Cbt-Sulaga 26-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops2_39_3.png" /> Savagaon-Cbt 26-4<br />\
    <img src="styles/legend/BelgaviStops2_39_4.png" /> Sulaga-Cbt 26-2<br />\
    <img src="styles/legend/BelgaviStops2_39_5.png" /> Sulaga-Cbt 26-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops2_39_6.png" /> Vdg-Cbt 20-4<br />\
    <img src="styles/legend/BelgaviStops2_39_7.png" /> Vdg-Cbt 20-4 (#2)<br />\
    <img src="styles/legend/BelgaviStops2_39_8.png" /> <br />'
        });
var format_BelgaviRoute1_40 = new ol.format.GeoJSON();
var features_BelgaviRoute1_40 = format_BelgaviRoute1_40.readFeatures(json_BelgaviRoute1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRoute1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRoute1_40.addFeatures(features_BelgaviRoute1_40);
var lyr_BelgaviRoute1_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRoute1_40, 
                style: style_BelgaviRoute1_40,
                popuplayertitle: "Belgavi Route 1",
                interactive: true,
    title: 'Belgavi Route 1<br />\
    <img src="styles/legend/BelgaviRoute1_40_0.png" /> R Ang-Cbt 1A-2<br />\
    <img src="styles/legend/BelgaviRoute1_40_1.png" /> R Ang-Cbt 1A-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute1_40_2.png" /> R Cbt-Ang 1A-1<br />\
    <img src="styles/legend/BelgaviRoute1_40_3.png" /> R Cbt-Ang 1A-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute1_40_4.png" /> R Cbt-Vdg 20-1<br />\
    <img src="styles/legend/BelgaviRoute1_40_5.png" /> R Cbt-Vdg 20-1 (#2)<br />\
    <img src="styles/legend/BelgaviRoute1_40_6.png" /> R Cbt-Vdg 20-3<br />\
    <img src="styles/legend/BelgaviRoute1_40_7.png" /> R Vdg-Cbt 20-2<br />\
    <img src="styles/legend/BelgaviRoute1_40_8.png" /> R Vdg-Cbt 20-2 (#2)<br />\
    <img src="styles/legend/BelgaviRoute1_40_9.png" /> <br />'
        });
var format_BelgaviStops1_41 = new ol.format.GeoJSON();
var features_BelgaviStops1_41 = format_BelgaviStops1_41.readFeatures(json_BelgaviStops1_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops1_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops1_41.addFeatures(features_BelgaviStops1_41);
var lyr_BelgaviStops1_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops1_41, 
                style: style_BelgaviStops1_41,
                popuplayertitle: "Belgavi Stops 1",
                interactive: true,
    title: 'Belgavi Stops 1<br />\
    <img src="styles/legend/BelgaviStops1_41_0.png" /> Cbt-Ang 1A-1<br />\
    <img src="styles/legend/BelgaviStops1_41_1.png" /> Cbt-Ang 1A-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops1_41_2.png" /> Cbt-Vdg 20-1<br />\
    <img src="styles/legend/BelgaviStops1_41_3.png" /> Cbt-Vdg 20-1 (#2)<br />\
    <img src="styles/legend/BelgaviStops1_41_4.png" /> Cbt-Vdg 20-3<br />\
    <img src="styles/legend/BelgaviStops1_41_5.png" /> Vdg-Cbt 20-2<br />\
    <img src="styles/legend/BelgaviStops1_41_6.png" /> Vdg-Cbt 20-2 (#2)<br />\
    <img src="styles/legend/BelgaviStops1_41_7.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BelgaviBoundary_1.setVisible(true);lyr_BelgaviRoutes20_2.setVisible(true);lyr_BelgaviStops20_3.setVisible(true);lyr_BelgaviRoute19_4.setVisible(true);lyr_BelgaviStops19_5.setVisible(true);lyr_BelgaviRoute18_6.setVisible(true);lyr_BelgaviStops18_7.setVisible(true);lyr_BelgaviRoute17_8.setVisible(true);lyr_BelgaviStops17_9.setVisible(true);lyr_BelgaviRoute16_10.setVisible(true);lyr_BelgaviStops16_11.setVisible(true);lyr_BelgaviRoute15_12.setVisible(true);lyr_Belgavistops15_13.setVisible(true);lyr_BelgaviRoute14_14.setVisible(true);lyr_BelgaviStops14_15.setVisible(true);lyr_BelgaviRoute13_16.setVisible(true);lyr_BelgaviStops13_17.setVisible(true);lyr_BelgaviRoute12_18.setVisible(true);lyr_BelgaviStops12_19.setVisible(true);lyr_BelgaviRoute11_20.setVisible(true);lyr_BelgaviStops11_21.setVisible(true);lyr_BelgaviRoute10_22.setVisible(true);lyr_BelgaviStops10_23.setVisible(true);lyr_BelgaviRoute9_24.setVisible(true);lyr_BelgaviStops9_25.setVisible(true);lyr_BelgaviRoute8_26.setVisible(true);lyr_BelgaviStops8_27.setVisible(true);lyr_BelgaviRoute7_28.setVisible(true);lyr_BelgaviStops7_29.setVisible(true);lyr_BelgaviRoute6_30.setVisible(true);lyr_BelgaviStops6_31.setVisible(true);lyr_BelgaviRoute5_32.setVisible(true);lyr_BelgaviStops5_33.setVisible(true);lyr_BelgaviRoute4_34.setVisible(true);lyr_BelgaviStops4_35.setVisible(true);lyr_BelgaviRoute3_36.setVisible(true);lyr_BelgaviStops3_37.setVisible(true);lyr_BelgaviRoute2_38.setVisible(true);lyr_BelgaviStops2_39.setVisible(true);lyr_BelgaviRoute1_40.setVisible(true);lyr_BelgaviStops1_41.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BelgaviBoundary_1,lyr_BelgaviRoutes20_2,lyr_BelgaviStops20_3,lyr_BelgaviRoute19_4,lyr_BelgaviStops19_5,lyr_BelgaviRoute18_6,lyr_BelgaviStops18_7,lyr_BelgaviRoute17_8,lyr_BelgaviStops17_9,lyr_BelgaviRoute16_10,lyr_BelgaviStops16_11,lyr_BelgaviRoute15_12,lyr_Belgavistops15_13,lyr_BelgaviRoute14_14,lyr_BelgaviStops14_15,lyr_BelgaviRoute13_16,lyr_BelgaviStops13_17,lyr_BelgaviRoute12_18,lyr_BelgaviStops12_19,lyr_BelgaviRoute11_20,lyr_BelgaviStops11_21,lyr_BelgaviRoute10_22,lyr_BelgaviStops10_23,lyr_BelgaviRoute9_24,lyr_BelgaviStops9_25,lyr_BelgaviRoute8_26,lyr_BelgaviStops8_27,lyr_BelgaviRoute7_28,lyr_BelgaviStops7_29,lyr_BelgaviRoute6_30,lyr_BelgaviStops6_31,lyr_BelgaviRoute5_32,lyr_BelgaviStops5_33,lyr_BelgaviRoute4_34,lyr_BelgaviStops4_35,lyr_BelgaviRoute3_36,lyr_BelgaviStops3_37,lyr_BelgaviRoute2_38,lyr_BelgaviStops2_39,lyr_BelgaviRoute1_40,lyr_BelgaviStops1_41];
lyr_BelgaviBoundary_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviRoutes20_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops20_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute19_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops19_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute18_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops18_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute17_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops17_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute16_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops16_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute15_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_Belgavistops15_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute14_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops14_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute13_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops13_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute12_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops12_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute11_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops11_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute10_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops10_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute9_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops9_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute8_26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops8_27.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute7_28.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops7_29.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute6_30.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops6_31.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute5_32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops5_33.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute4_34.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops4_35.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute3_36.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops3_37.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute2_38.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops2_39.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRoute1_40.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStops1_41.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviBoundary_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BelgaviRoutes20_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops20_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute19_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops19_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute18_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops18_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute17_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops17_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute16_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops16_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute15_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Belgavistops15_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute14_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops14_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute13_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops13_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute12_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops12_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute11_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops11_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute10_22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops10_23.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute9_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops9_25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute8_26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops8_27.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute7_28.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops7_29.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute6_30.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops6_31.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute5_32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops5_33.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute4_34.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops4_35.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute3_36.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops3_37.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute2_38.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops2_39.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRoute1_40.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStops1_41.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviBoundary_1.set('fieldLabels', {'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviRoutes20_2.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'descript_1': 'hidden field', 'altitude_1': 'hidden field', 'DIST_KM': 'hidden field', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops20_3.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', 'path': 'hidden field', });
lyr_BelgaviRoute19_4.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops19_5.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute18_6.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops18_7.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute17_8.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops17_9.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute16_10.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops16_11.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute15_12.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_Belgavistops15_13.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute14_14.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops14_15.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute13_16.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_BelgaviStops13_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute12_18.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops12_19.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute11_20.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops11_21.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_BelgaviRoute10_22.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops10_23.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute9_24.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops9_25.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute8_26.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops8_27.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute7_28.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops7_29.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute6_30.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_BelgaviStops6_31.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute5_32.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops5_33.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute4_34.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops4_35.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute3_36.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops3_37.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute2_38.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops2_39.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviRoute1_40.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops1_41.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviStops1_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});