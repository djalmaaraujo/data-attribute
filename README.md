# Data Attribute
This library uses a alternative to HTML5 Data Attribute, making use of a Hash to store data attributes values.

# Why
DOM is slow. You can find an [incredible article by Stoyan Stefanov](http://calendar.perfplanet.com/2012/efficient-html5-data-attributes/) demonstrating the problem and the solution.

# Usage
## get()
```
var element = document.getElementById('someId');
var data = DataAttrStorage.get(element);
```

## set()
```
var element = document.getElementById('someId');
DataAttrStorage.set(element, {
	foo: 'bar',
	john: 'doe'
});
```

## remove()
You can use this method when you DOM element is removed from the DOM. Preventing memory leak

```
DataAttrStorage.remove(element);
```

## clear()
Remove all data attributes from the library

```
DataAttrStorage.clear();
```