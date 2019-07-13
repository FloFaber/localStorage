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
window.storage("test",{"key":123456, "git":"gud"});
// true
window.storage("test").key;
// 123456
```

As you can see, this plugin will also convert JSON to arrays and objects and, of cource, back (if it's able to)

### Clear whole localStorage
Just pass 0 (zero) twice.
```javascript
 window.storage(0,0);
```
