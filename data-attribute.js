// Generated by CoffeeScript 1.6.2
(function() {
  this.DataAttrStorage = (function() {
    function DataAttrStorage() {
      this.clear();
    }

    DataAttrStorage.prototype.clear = function() {
      return this.storage = {};
    };

    DataAttrStorage.prototype.get = function(dom) {
      return this.storage[dom.__data];
    };

    DataAttrStorage.prototype.remove = function(dom) {
      return delete this.storage[dom];
    };

    DataAttrStorage.prototype.set = function(dom, data) {
      var _ref;

      if ((_ref = dom.__data) == null) {
        dom.__data = {};
      }
      return this.storage[dom.__data] = data;
    };

    return DataAttrStorage;

  })();

}).call(this);
