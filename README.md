# LazyJS

## Lazy loading for elements

### Installation

Include the __LazyJS__ javascript file
```html
<script src="lazy.js"></script>
```

Link to the __LazyJS__ stylesheet, if you're using our animation
```html
<link href="lazyjs.css" rel="stylesheet">
```

### Example

```js
LazyJs({"animation": true});
```
```html
<div id="example" class="lazyjs" data-origin="http://example.com"></div>
```
This example will create an animation in the `example` container while __LazyJS__ is loading the data from `http://example.com`.

Command for minifying JavaScript `java -jar yuicompressor-2.4.8.jar lazy.js -o lazy.min.js`