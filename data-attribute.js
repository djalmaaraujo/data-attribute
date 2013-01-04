var DataAttrStorage = function () {
  var storage = {};

  return {
    clear: function () {
      storage = {};
    },

    get: function (dom) {
      return storage[dom.__data];
    },

    remove: function () {
      delete storage[dom];
    },

    set: function (dom, data) {
      if (!dom.__data) {
        dom.__data = {};
      }

      storage[dom.__data] = data;
    }
  };
}();