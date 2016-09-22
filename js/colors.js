var colors = function(dataLength){

  var baseColors = [
    '#337AB7',
    '#904196',
    '#A84343',
    '#CCB657',
    '#1FAF84'
  ];

  var _colorMultiplier = function(colors){
    var colorsWithShades = [];
    var loopCount = dataLength / colors.length;

    _.each(colors, function(colorVal){
      var colorScale = chroma.bezier(['lightyellow', colorVal]).scale().colors(loopCount + 1);
      colorScale.reverse();
      for (var i = 0; i < loopCount; i++){
        colorsWithShades.push(colorScale[i]);
      }
    });

    return colorsWithShades;
  };

  return _colorMultiplier(baseColors);;
};
