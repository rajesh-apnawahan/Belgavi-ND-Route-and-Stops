var size = 0;
var placement = 'point';
function categories_BelgaviRoute13_16(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'R Cbt-Shaydri ngr 65A-1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,97,169,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Cbt-Shaydri ngr 65A-1 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(99,83,203,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Dsc-Shaydri ngr 65A-9':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,189,101,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Dsc-Shaydri ngr 65A-9 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,126,202,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Dsc-Shaydri ngr 65B-5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(181,90,206,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Dsc-Shaydri ngr 65B-5 (#2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,206,105,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Shaydri ngr-Cbt 65A-2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(55,231,193,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'R Shaydri ngr-Dsc 65A-8':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,201,49,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,80,60,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BelgaviRoute13_16 = function(feature, resolution){
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
    
var style = categories_BelgaviRoute13_16(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
