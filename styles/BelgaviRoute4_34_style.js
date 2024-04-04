var size = 0;
var placement = 'point';
function categories_BelgaviRoute4_34(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'R Cbt-Kanabaragi 29A-12':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,165,209,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Kanabaragi 29A-12 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,150,115,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Kolikoppa 29A-7':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(104,200,176,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Sulebhavi 29A-9':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,205,17,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Sulebhavi 29A-9 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,84,216,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Kadoli-Cbt 29A-6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,228,102,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Kolikoppa-Cbt 29A-8':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,119,143,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Sulebhavi-Cbt 29A-10':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,17,193,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Sulebhavi-Cbt 29A-10 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,51,215,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,222,24,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BelgaviRoute4_34 = function(feature, resolution){
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
    
var style = categories_BelgaviRoute4_34(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
