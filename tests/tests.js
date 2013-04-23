test( "Library exists", function() {
  ok(DataAttrStorage, "Passed!" );
});

test( "Security: Don't allow access to 'Storage' variable", function() {
  ok(DataAttrStorage.storage == undefined, "Passed!");
});

test( "Get a element", function() {
  var element = {
    __data: {
      hello: 'world'
    }
  };

  DataAttrStorage.set(element, element.__data);

  var element = DataAttrStorage.get(element);

  ok(element.hello === 'world', "Passed!");
});

test( "Set a element", function() {
  var element = {};

  DataAttrStorage.set(element, {
    foo: 'bar',
    something: 'else'
  });

  ok(DataAttrStorage.get(element).foo = "bar", "Passed!");
});

test( "Clear all database", function() {
  var element = {};

  DataAttrStorage.set(element, {
    foo: 'bar',
    something: 'else',
    ok: false
  });

  DataAttrStorage.clear();

  ok(DataAttrStorage.get(element) === undefined, "Passed!");
});