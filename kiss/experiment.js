/*globals queryUtil:true*/
define(['lodash'], function (_) {
  'use strict';

  if (typeof window !== 'object') {
    return {
      load: function (name, parentRequire, onLoad) {
        onLoad(false);
      },
      isOpen: _.constant(false)
    };
  }

  function isOpen(name) {
    var model = window.rendererModel || window.editorModel || {};
    return _.some(model.runningExperiments, function(value, expName) {
      return expName.toLowerCase() === name.toLowerCase() && value === 'new';
    });
  }

  return {
    load: function (name, parentRequire, onload) {
      onload(isOpen(name));
    },
    isOpen: isOpen
  };
});
