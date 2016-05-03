  _.loadScript = function (para) {
    para = _.extend({
      success: function(){},
      error: function(){}
    },para);
    return new Promise(function (resolve,reject){
      var g = null;
      if (para.type === 'css') {
        g = document.createElement('link');
        g.rel = 'stylesheet';
        g.href = para.url;
      }
      if (para.type === 'js') {
        g = document.createElement('script');
        g.async = 'async';
        g.src = para.url;
        g.type = 'text/javascript';
      }
      g.onload = g.onreadystatechange = function () {
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
          resolve();
          para.success();
          g.onload = g.onreadystatechange = null;
        }
      };
      g.onerror = function () {
        reject();
        para.error();
        g.onerror = null;
      };
      document.getElementsByTagName('head')[0].appendChild(g);
    });
  };



  function SdkMain(){
    // 是否load过


    // jsonp名字
    this.jsonpCallback = 'sensorsDataAnalytic201505callback';

    var urlParse = new _.urlParse(sa.para.server_url);

    this.apiDomain = sd.para.vtrack_server_api ? sd.para.vtrack_server_api : urlParse._values.Origin+'/api';

    // token
    this.tokenUrl = this.apiDomain + '/vtrack/edit_mode';
    // define event
    this.defineUrl = this.apiDomain + '/vtrack/event';
    // 所有绑定的事件
    this.getAllVtrackUrl = this.apiDomain + '/vtrack/binding/Web.json';
    // 显示所有vtack的事件
    this.vtrackEventsUrl = this.apiDomain + '/vtrack/events/all';

    // config
    this.deployUrl = sd.para.vtrack_config_file || (this.apiDomain + '/vtrack/config/Web.json');


    // 可视化模式cookie名字
    this.visualCookie = 'sensorsdata2015_visual_mode';
    // 可视化模式session时长20分
    this.visualCookieExistTime = 20*60 + 's';
    // 可视化模式search
    this.visualSearchName = '?sensorsdata_visual_mode_in';

    this.visualCookieNavStatusName = 'navStatus';
    // 存储调试模式中的测试数据的
    this.visualStorageName = 'sensorsdata_vtrack_data';

    var sdk_url = sd.para.sdk_url.replace(/\/[^\/]+$/,'');
    var sdk_version = sd.para.sdk_url.match(/\/[^\/]+$/,'')[0].replace(/^\/[^\.]+/,'').replace(/[^.]+$/,'');

    this.sdkJsUrl = sd.para.vtrack_js_file || (sdk_url + '/vendor' + sdk_version + 'js' + sd.para.noCache);
    this.sdkCssUrl = sd.para.vtrack_css_file || (sdk_url + '/vendor' + sdk_version + 'css' + sd.para.noCache);

    this.deployData = null;

    this.init();
  }

  SdkMain.prototype = {
    browserIsSupport: function(){
      // 必须支持localstorage的浏览器
      if(typeof window.localStorage === "object" && window.localStorage.setItem){
        return true;
      }else{
        return false;
      }
    },
    showErrorTip: function(obj){
      if(typeof obj !== 'object'){
        return false;
      }
      var errorTip = $('<div style="background:#e55b41;border:none;border-radius:8px;color:#fff;font-size:18px;left:50%;margin-left:-300px;padding:15px;position: fixed;text-align: center;top: 0;width:600px;z-index:9999;">'+obj.tip+'</div>');
      
      errorTip.appendTo(document.body);

      setTimeout(function(){
        
        obj.func && obj.func();
        errorTip.remove();

      },obj.time);
    },
    getLifeCookieNavStatus: function(){
      return this.getLifeCookie()[this.visualCookieNavStatusName];
    },
    // 获取生命周期内的cookie obj
    getLifeCookie: function(){
      var str = _.cookie.get(this.visualCookie);
      if(str === null){
        return {};
      }else{
        return JSON.parse(str);
      }
    },
    setLifeCookieNavStatus: function(value){
      this.setLifeCookie(this.visualCookieNavStatusName,value);
    },
    // 设置生命周期内的cookie
    setLifeCookie: function(key,value){
      var cookieVal = _.cookie.get(this.visualCookie);
      var cookieObj = cookieVal ? JSON.parse(cookieVal) : {} ;
      if(typeof key === 'undefined'){
        if(cookieVal){
          _.cookie.set(this.visualCookie, cookieVal, this.visualCookieExistTime);
        }else{
          _.cookie.set(this.visualCookie, '{}', this.visualCookieExistTime);
        }
      }else{
        cookieObj[key] = value;
        _.cookie.set(this.visualCookie, JSON.stringify(cookieObj), this.visualCookieExistTime);
      }

    },
    removeLifeCookie: function(){
      _.cookie.remove(this.visualCookie);
    },

    isShowVisual: function(){          

      var url = location.href;
      var replaceTag = '';

      var me = this;

      function removeUrlPara (){
        /*
        if(url.indexOf('?' + me.visualSearchName) !== -1){
          if(url.indexOf('?' + me.visualSearchName + '&') !== -1){
            replaceTag = me.visualSearchName + '&';
          }else{
            replaceTag = '\\?' + me.visualSearchName;
          }
        } else {
          if(url.indexOf(me.visualSearchName)+'&' !== -1){
              replaceTag = me.visualSearchName + '&';
          }else{
              replaceTag = me.visualSearchName;
          }
        }

        url = url.replace(new RegExp(replaceTag),'');
        
*/
        url = url.replace(/\?sensorsdata_visual_mode_in/,'');

        location.replace(url);

      }

      if(!this.browserIsSupport()){
        me.showErrorTip({
          tip:'对不起，可视化埋点暂不支持你当前的浏览器，请升级至ie10以上，推荐使用chrome，firefox，safari等浏览器',
          time:10000
        });
        return false;
      }

      if(url.indexOf(this.visualSearchName) !== -1){
        // 如果有参数
        this.getToken({
          successCallback:function(){
            window.localStorage.removeItem(me.visualStorageName);
            me.setLifeCookie();
            removeUrlPara();
          },errorCallback:function(){

            me.showErrorTip({
              time: 5000,
              tip: '您未被授权，请检查链接是否有效',
              func: function(){
                //me.removeLifeCookie();        
                removeUrlPara();
              }
            });
            
          }
        });

      }else if(_.cookie.get(this.visualCookie)){
        // 如果是
        this.getToken({
          successCallback:function(){
            me.enterVisibleMode();
          },errorCallback:function(){
            me.removeLifeCookie();
            me.enterNormalMode();    
          }
        });

      }else{
        this.enterNormalMode();
      }

    },
    getDeployFile: function(){
      return  _.loadScript({
        url: this.deployUrl,
        type:'js'
      });
    },
    getToken: function(para){
      var me = this;
      para = para || {};
      para.enterNext = para.enterNext || true;

      para = _.extend({
        successCallback: function(){},
        errorCallback: function(){}
      },para);



      return _.ajax({
          cors: true,
          type: 'GET',
          url: me.tokenUrl + '?url=' + location.href.replace(me.visualSearchName,''),
          header:{cors: "true"},
          success: function(data){
            if(data.login === true){
              para.successCallback();
            }else{
              para.errorCallback();
            }
          },
          error: function(){
            para.errorCallback();
          }
        });

    },


    initJsonp: function(){
      var me = this;
      window[this.jsonpCallback] = {};
      window[this.jsonpCallback].vTrack = function(data){
        me.deployData = data.binding;
      };
    },
    init: function(){
      this.initJsonp();
      this.isShowVisual();
    },

    //------------visible mode
    enterVisibleMode: function(){
      var me = this;
      // 每隔10分钟set一次coookie用来保证前端用户一直登录
      setInterval(function(){
        me.setLifeCookie();
        _.ajax({
          cors: true,
          type: 'GET',
          url: me.tokenUrl,
          header:{cors: "true"}
        });
      },1000*60*10);

      // 标志是visual模式
      sd.vtrack_mode = 'visualMode';

      // 登录成功，设置cookie表示已经登录
      this.setLifeCookie();


      // 这里可以再优化下，如果没加载成功，提示
      var me = this;
      var loadJs = _.loadScript({
        url: me.sdkJsUrl,
        type: 'js'
      });

      var loadCss = _.loadScript({
        url: me.sdkCssUrl,
        type: 'css'
      });


    },

    //-------------normal mode
    enterNormalMode: function(){
      sd.vtrack_mode = 'normalMode';

      var me = this;
      this.getDeployFile().then(function(){
        me.parseDeployFile();
      });
      this.sdkInit();
    },
    parseDeployFile: function(){         
      this.requireData = this.checkUrl(this.deployData);
      this.listenEvents();
    },
    getEle: function(data){

      var ele = $(data.nthEle.join(' '));

      if(data.selfAttr && data.selfAttr.text !== void 0){

        ele = ele.filter(':contains('+data.selfAttr.text+')');
      }

      return ele;
    },
    // {'eventProxy':[],'eventBind':[]}
          //listen vtrack events all  普通模式下，监听事件
    listenEvents: function(){
      var data = this.requireData;
      var me = this;
      for(var i =0; i< data.length; i++){
          this.getEle(data[i]).on('click',function(ev){
              return function(){
                me.doVTrackAction(ev);
              }
          }(data[i]) );
      }
    },
    doVTrackAction: function(data){
      sd.track(data.eventName,{
//        $lib:'vtrack_js',
        $from_vtrack: String(data.trigger_id)
//        $lib_method: 'vtrack'
      });


    },
    //--------------normal file
    sdkInit: function(){

      sd.init();

    },
    // 检测url是否符合当前页面
    checkUrl: function(data){
      var returnData = [];
      var currentUrl = location.href.replace(/#.*$/,'');
      var urlObj = null;
      for(var i in data){
        if(_.isJSONString(i)){
          urlObj = JSON.parse(i);
        }else{
          continue;
        }
        urlObj.url = urlObj.url.replace(/#.*$/,'');
        // 所有网站
        if(urlObj.url === ''){
          returnData = returnData.concat(data[i]);
          //把＃后的认为一致
        }else if(urlObj.mode === 'fixed'){
          if(urlObj.url === currentUrl){
            returnData = returnData.concat(data[i]);
          }
        }else if(urlObj.mode === 'part'){
          if(currentUrl.indexOf(urlObj.url) !== -1){
            returnData = returnData.concat(data[i]); 
          }
        }else if(urlObj.mode === 'regexp'){
          if((new RegExp(urlObj.url)).test(currentUrl)){
            returnData = returnData.concat(data[i]);
          }
        }
      }
      return returnData;
    }
  };

  sd.sdkMain = new SdkMain();