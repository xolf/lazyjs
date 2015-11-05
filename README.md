# LazyJS

## Lazy loading for elements

### Example

```js
LazyJs({"animation": true});
```
```tml
<div id="example" class="lazyjs" data-origin="http://example.com"></div>
```
This example will create an animation in the `example` container while LazyJS is loading the data from `http://example.com`.

Command for minifying JavaScript `java -jar yuicompressor-2.4.8.jar lazy.js -o lazy.min.js`