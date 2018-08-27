(function () {
  'use strict';

  var csInterface = new CSInterface();

  csInterface.addEventListener('com.init', function(evt) {
    console.log("Initializing console");
  });

  csInterface.addEventListener('console', function(evt) {
    console.log('JSX: ' + evt.data);
  });

  csInterface.addEventListener('com.mightyLayers.parse', function(evt) {
    console.log('PARSE: ' + evt.data);
    var result = JSON.parse(evt.data);
    console.log(result);
  });

  csInterface.addEventListener('mighty.rollcall', function(evt) {
    dispatchEvent('mighty.rollanswer', extFolder())
  });

  csInterface.addEventListener('parse', function(evt) {
    console.log('Disabled');
    // console.log('PARSE: ' + evt.data);
    // var result = JSON.parse(evt.data);
    // console.log(result);
    // var allRes = parseAll(evt.data);
    // console.log(allRes);
  });

  csInterface.addEventListener('com.playwrite.answer', function(evt) {
    // var data = trimEdges(evt.data, 1);
    console.log(evt);
  });


  function dispatchEvent(name, data) {
  	var event = new CSEvent(name, 'APPLICATION');
  	event.data = data;
  	csInterface.dispatchEvent(event);
  }

  csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", log);
    function log(event){
    console.log(event);
  }

}());
