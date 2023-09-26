var plugin = function () {
  return window.NativeAudio;
};
var NativeAudio = /** @class */ (function () {
  function NativeAudio() {
  }

  NativeAudio.setOptions = function (options, successCallback, errorCallback) {
    var plu = plugin();
    return plu.setOptions.apply(plu, arguments);
  };

  NativeAudio.preloadSimple = function (id, assetPath, successCallback, errorCallback) {
    var plu = plugin();
    return plu.preloadSimple.apply(plu, arguments);
  };

  NativeAudio.preloadComplex = function (id, assetPath, volume, voices, delay, streamType, successCallback, errorCallback) {
    var plu = plugin();
    return plu.preloadComplex.apply(plu, arguments);
  };

  NativeAudio.play = function (id, successCallback, errorCallback, completeCallback) {
    var plu = plugin();
    return plu.play.apply(plu, arguments);
  };

  NativeAudio.stop = function (id, successCallback, errorCallback) {
    var plu = plugin();
    return plu.stop.apply(plu, arguments);
  };

  NativeAudio.loop = function (id, successCallback, errorCallback) {
    var plu = plugin();
    return plu.loop.apply(plu, arguments);
  };

  NativeAudio.unload = function (id, successCallback, errorCallback) {
    var plu = plugin();
    return plu.unload.apply(plu, arguments);
  };

  NativeAudio.setVolumeForComplexAsset = function (id, volume, successCallback, errorCallback) {
    var plu = plugin();
    return plu.setVolumeForComplexAsset.apply(plu, arguments);
  };
  
  return NativeAudio;
}());
export default NativeAudio;
