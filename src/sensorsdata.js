/**
 * @fileoverview sensors analytic javascript sdk
 * @author shengyonggen@sensorsdata.cn
 */

@@include('include/json2.js')

@@if (sensorsdata_mode === 'vtrack') {
  @@include('include/promise.min.js')
}

(function(sd) {

  sd = window[sd];

  var _ = sd._ = {};

@@if (sensorsdata_mode === 'vtrack') {
  @@include('include/jquery.js')
  sd.$ = $;

  sd.customEv = $({});
}  
  // 默认配置
  sd.para = sd.para || {};
  sd.para_default = {
    cross_subdomain: true,
    show_log: true,
    debug_mode: false,
    debug_mode_upload: false,
    vtrack_prefix: false
  };
  // 合并配置
  for (var i in sd.para_default){
    if(sd.para[i] === void 0){
      sd.para[i] = sd.para_default[i];
    }
  }
  // 优化配置
  if(!/sa\.gif/.test(sd.para.server_url)){
    sd.para.server_url = sd.para.server_url.replace(/\/(sa)\\?/,'/$1.gif');
  }
  sd.para.debug_mode_url = sd.para.debug_mode_url || sd.para.server_url.replace('sa.gif','debug');
  
  // 是否需要非cache，等于每次请求文件
  if (sd.para.noCache === true) {
    sd.para.noCache = '?' + (new Date()).getTime();
  } else {
    sd.para.noCache = '';
  }

  // 是否需要给可视化埋点加前缀



  @@include('include/detector.min.js')

  @@include('include/sdk.js')

@@if (sensorsdata_mode === 'vtrack') {
  @@include('include/vtrack.sdk.js')
}

@@if (sensorsdata_mode !== 'vtrack') {
  sd.init();
}


})(window['sensorsDataAnalytic201505']);
