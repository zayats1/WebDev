(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'lab14'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'lab14'.");
    }
    root.lab14 = factory(typeof lab14 === 'undefined' ? {} : lab14, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function showPhoto(index) {
    var tmp = document.getElementById('current-photo');
    var currentPhoto = tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
    currentPhoto.src = 'pictures/' + index + '.jpg';
  }
  function main() {
    var tmp = document.getElementById('show-next-photo');
    var button = tmp instanceof HTMLButtonElement ? tmp : THROW_CCE();
    var currentPhotoIndex = {_v: 1};
    button.addEventListener('click', main$lambda(currentPhotoIndex));
  }
  function main$lambda($currentPhotoIndex) {
    return function (it) {
      var tmp0 = $currentPhotoIndex._v;
      $currentPhotoIndex._v = tmp0 + 1 | 0;
      Unit_getInstance();
      var tmp;
      if ($currentPhotoIndex._v > 3) {
        tmp = $currentPhotoIndex._v = 1;
      }
      document.title = 'hello';
      console.log('button was clicked');
      showPhoto($currentPhotoIndex._v);
    };
  }
  main();
  return _;
}));

//# sourceMappingURL=lab14.js.map