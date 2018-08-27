var doc = app.documents[0];






function readLayers(layer){
  var mirror = {};
  var l, thisLayer;
  if (!arguments.length) {
    l = doc.layers;
    for (var i = 0; i < l.length; i++) {
      thisLayer = l[i];
      if (thisLayer.layers.length > 0) {
        mirror[thisLayer.name] = readLayers(thisLayer);
      } else {
        mirror[thisLayer.name] = thisLayer;
      }
    }
  } else {
    thisLayer = layer;
    mirror[thisLayer.name] = thisLayer.name;
  }
  return JSON.stringify(mirror);
}
