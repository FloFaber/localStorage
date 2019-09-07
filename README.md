# localStorage
small and simplified version of the localStorage api


## Installation
Just add the following to your HTML-Page
```html
<script type="text/javascript" src="/destination-to-localstorage.js"></script>
```


## Usage

### Set item with name "name" and the value of "value"
```javascript
window.storage("name", "value");
// true
```

### Get item with name "name"
```javascript
window.storage("name");
// "value"
```

```javascript
window.storage("test",{"key":123456, "foo":"bar"});
// true
window.storage("test").key;
// 123456
```

As you can see, this plugin will also converts arrays and objects to JSON and back.

### Clear whole localStorage
Just pass 0 (zero) twice.
```javascript
 window.storage(0,0);
```
