# sa-sdk-javascript
Sensors Analytics JavaScript SDK

http://www.sensorsdata.cn/manual/js_sdk.html


## Extremely Simplified Bootstrap Code
Put following code after the `SD Js SDK`
```js
window.sensorsDataAnalytic201505 = 'sa';
window.sa = {
  _q: [],
  _t: Date.now(),
  para: {
    name: 'sa',
    server_url: 'http://xx.com/sa?token=xxx'
  }
};
```
