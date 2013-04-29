var DataAttr = new DataAttrStorage();

test( "Library exists", function() {
  ok(DataAttr instanceof DataAttrStorage, "Passed!" );
});

test( "Get a element", function() {
  var element = {
    __data: {
      hello: 'world'
    }
  };

  DataAttr.set(element, element.__data);

  var element = DataAttr.get(element);

  ok(element.hello === 'world', "Passed!");
});

test( "Set a element", function() {
  var element = {};

  DataAttr.set(element, {
    foo: 'bar',
    something: 'else'
  });

  ok(DataAttr.get(element).foo = "bar", "Passed! ");
});

test( "Clear all database", function() {
  var element = {};

  DataAttr.set(element, {
    foo: 'bar',
    something: 'else',
    ok: false
  });

  DataAttr.clear();

  ok(DataAttr.get(element) === undefined, "Passed!");
});