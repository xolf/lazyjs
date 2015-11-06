# LazyJS

## Lazy loading for elements

### Installation

Include the __LazyJS__ javascript file.
```html
<script src="lazy.js"></script>
```

Link to the __LazyJS__ stylesheet, if you're using our animations.
```html
<link href="lazyjs.css" rel="stylesheet">
```

### Example

```js
LazyJs({"animation": "blockroll"});
```
```html
<div id="example" class="lazyjs" data-origin="http://example.com"></div>
```
This example will create an animation in the `example` container while __LazyJS__ is loading the data from `http://example.com`.

### Animation

__LazyJS__ can display some animations for your during the content is loading. 
```js
LazyJs({"animation": "windows8"});
```
Some available animatios are:

- `windows8`
- `blockroll`
- `thecube`


#### Technical stuff

Command for minifying JavaScript `java -jar yuicompressor-2.4.8.jar lazy.js -o lazy.min.js`