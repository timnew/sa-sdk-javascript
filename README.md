# sa-sdk-javascript
Sensors Analytics JavaScript SDK

http://www.sensorsdata.cn/manual/js_sdk.html


## Extremely Simplified Bootstrap Code
Put following code after the `SD Js SDK`
```js
window.sensorsDataAnalytic201505 = 'sa';
window.sa = {
  _q: [ ],
  _t: Date.now(),
  para: {
    name: 'sa',
    server_url: 'http://xx.com/sa?token=xxx'
  }
};
```

## Predefined Events
```js
window.sensorsDataAnalytic201505 = 'sa';
window.sa = {
  _q: [
    ['<method>', [ <params> ]]
  ],
  _t: Date.now(),
  para: {
    name: 'sa',
    server_url: 'http://xx.com/sa?token=xxx'
  }
};
```

```js
window.sensorsDataAnalytic201505 = 'sa';
window.sa = {
  _q: [
    ['identify', ['wx:xxxx']],
    ['track', ['page_view', { page: 'page_name' }]]
  ],
  _t: Date.now(),
  para: {
    name: 'sa',
    server_url: 'http://xx.com/sa?token=xxx'
  }
};

// sa.identify('wx:xxxx');
// sa.track('page_view', { page: 'page_name' });

```

## Only register SDK
```js
var firstScriptDom = document.getElementsByTagName('script')[0];
var sdkScriptDom = document.createElement('script');
sdkScriptDom.src = 'https://static.sensorsdata.cn/sdk/sensorsdata.1.3.5.js';
firstScriptDom.parentNode.insertBefore(sdkScriptDom, firstScriptDom);    
```
