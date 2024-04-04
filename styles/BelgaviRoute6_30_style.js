var size = 0;
var placement = 'point';
function categories_BelgaviRoute6_30(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'R Cbt-Hng 31-13':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,230,120,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Hng 31-13 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,64,79,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Vdg 30A-1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(23,218,82,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Vdg 30A-1 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(209,140,71,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Hng-Cbt 31-14':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,112,200,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Hng-Cbt 31-14 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(60,48,202,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Vantamuri-Cbt 29B-10':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(74,206,191,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Vdg-Cbt 30A-2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,131,204,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Vdg-Cbt 30A-2 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(169,52,223,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,232,133,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BelgaviRoute6_30 = function(feature, resolution){
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
    
var style = categories_BelgaviRoute6_30(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
