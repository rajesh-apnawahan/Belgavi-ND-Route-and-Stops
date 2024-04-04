var size = 0;
var placement = 'point';
function categories_BelgaviRoute3_36(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'R Cbt-Devgiri 29A-1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,212,63,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Devgiri 29A-1 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,131,234,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Kadoli 29A-5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(28,174,227,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Kadoli 29A-5 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,220,87,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Kanabaragi 29A-3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(126,44,225,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Kanabaragi 29A-3 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,207,86,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Devgiri-Cbt 29A-2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,37,198,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Devgiri-Cbt 29A-2 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(24,218,153,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Kanabaragi-Cbt 29A-4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,117,77,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,115,158,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BelgaviRoute3_36 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("layer");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("layer") !== null) {
        labelText = String(feature.get("layer"));
    }
    
var style = categories_BelgaviRoute3_36(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
