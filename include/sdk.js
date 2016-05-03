  var ArrayProto = Array.prototype
    , FuncProto = Function.prototype
    , ObjProto = Object.prototype
    , slice = ArrayProto.slice
    , toString = ObjProto.toString
    , hasOwnProperty = ObjProto.hasOwnProperty
    , navigator = window.navigator
    , document = window.document
    , userAgent = navigator.userAgent
    , LIB_VERSION = '@@sdk_version';

  var logger = typeof logger === 'object' ? logger : {};
  logger.info = function() {
    if(!sd.para.show_log){
      return false;
    }

    if (typeof console === 'object' && console.log) {
      try{
        return console.log.apply(console, arguments);
      }catch(e){
        console.log(arguments[0]);
      }
    }
  };



  (function() {
    var nativeBind = FuncProto.bind,
      nativeForEach = ArrayProto.forEach,
      nativeIndexOf = ArrayProto.indexOf,
      nativeIsArray = Array.isArray,
      breaker = {};

    var each = _.each = function(obj, iterator, context) {
      if (obj == null) {
        return false;
      }
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
            return false;
          }
        }
      } else {
        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            if (iterator.call(context, obj[key], key, obj) === breaker) {
              return false;
            }
          }
        }
      }
    };

    _.extend = function(obj) {
      each(slice.call(arguments, 1), function(source) {
        for (var prop in source) {
          if (source[prop] !== void 0) {
            obj[prop] = source[prop];
          }
        }
      });
      return obj;
    };

    // 如果已经有的属性不覆盖,如果没有的属性加进来
    _.coverExtend = function(obj) {
      each(slice.call(arguments, 1), function(source) {
        for (var prop in source) {
          if (source[prop] !== void 0 && obj[prop] === void 0) {
            obj[prop] = source[prop];
          }
        }
      });
      return obj;
    };

    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) === '[object Array]';
      };

    _.isFunction = function(f) {
      try {
        return /^\s*\bfunction\b/.test(f);
      } catch (x) {
        return false;
      }
    };

    _.isArguments = function(obj) {
      return !!(obj && hasOwnProperty.call(obj, 'callee'));
    };

    _.toArray = function(iterable) {
      if (!iterable) {
        return [];
      }
      if (iterable.toArray) {
        return iterable.toArray();
      }
      if (_.isArray(iterable)) {
        return slice.call(iterable);
      }
      if (_.isArguments(iterable)) {
        return slice.call(iterable);
      }
      return _.values(iterable);
    };

    _.values = function(obj) {
      var results = [];
      if (obj == null) {
        return results;
      }
      each(obj, function(value) {
        results[results.length] = value;
      });
      return results;
    };

    _.include = function(obj, target) {
      var found = false;
      if (obj == null) {
        return found;
      }
      if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
        return obj.indexOf(target) != -1;
      }
      each(obj, function(value) {
        if (found || (found = (value === target))) {
          return breaker;
        }
      });
      return found;
    };

    _.includes = function(str, needle) {
      return str.indexOf(needle) !== -1;
    };

  })();

  _.inherit = function(subclass, superclass) {
    subclass.prototype = new superclass();
    subclass.prototype.constructor = subclass;
    subclass.superclass = superclass.prototype;
    return subclass;
  };

  _.isObject = function(obj) {
    return toString.call(obj) == '[object Object]';
  };

  _.isEmptyObject = function(obj) {
    if (_.isObject(obj)) {
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  _.isString = function(obj) {
    return toString.call(obj) == '[object String]';
  };

  _.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };

  _.isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  _.isNumber = function(obj) {
    return (toString.call(obj) == '[object Number]' && /[\d\.]+/.test(String(obj)));
  };

  _.isJSONString = function(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  };

  _.encodeDates = function(obj) {
    _.each(obj, function(v, k) {
      if (_.isDate(v)) {
        obj[k] = _.formatDate(v);
      } else if (_.isObject(v)) {
        obj[k] = _.encodeDates(v); // recurse
      }
    });
    return obj;
  };

  _.formatDate = function(d) {
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    return d.getFullYear() + '-'
      + pad(d.getMonth() + 1) + '-'
      + pad(d.getDate()) + ' '
      + pad(d.getHours()) + ':'
      + pad(d.getMinutes()) + ':'
      + pad(d.getSeconds()) + '.'
      + pad(d.getMilliseconds());
  };

  _.searchObjDate = function(o) {
    if (_.isObject(o)) {
      _.each(o, function(a, b) {
        if (_.isObject(a)) {
          _.searchObjDate(o[b]);
        } else {
          if (_.isDate(a)) {
            o[b] = _.formatDate(a);
          }
        }
      });
    }
  };

  // 只能是sensors满足的数据格式
  _.strip_sa_properties = function(p) {
    if (!_.isObject(p)) {
      return p;
    }
    _.each(p, function(v, k) {
      // 如果是数组，把值自动转换成string
      if (_.isArray(v)) {
        var temp = [];
        _.each(v, function(arrv) {
          if(_.isString(arrv)){
            temp.push(arrv);
          }else{
            logger.info('您的数据-', v, '的数组里的值必须是字符串,已经将其删除');
          }
        });
        if(temp.length !== 0){
          p[k] = temp;
        }else{
          delete p[k];
          logger.info('已经删除空的数组');
        }
      }
      // 只能是字符串，数字，日期,布尔，数组
      if (!(_.isString(v) || _.isNumber(v) || _.isDate(v) || _.isBoolean(v) || _.isArray(v))) {
        logger.info('您的数据-', v, '-格式不满足要求，我们已经将其删除');
        delete p[k];
      }
    });
    return p;
  };

  _.strip_empty_properties = function(p) {
    var ret = {};
    _.each(p, function(v, k) {
      if (_.isString(v) && v.length > 0) {
        ret[k] = v;
      }
    });
    return ret;
  };

  _.utf8Encode = function(string) {
    string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    var utftext = '', start, end;
    var stringl = 0, n;

    start = end = 0;
    stringl = string.length;

    for (n = 0; n < stringl; n++) {
      var c1 = string.charCodeAt(n);
      var enc = null;

      if (c1 < 128) {
        end++;
      } else if ((c1 > 127) && (c1 < 2048)) {
        enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
      } else {
        enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
      }
      if (enc !== null) {
        if (end > start) {
          utftext += string.substring(start, end);
        }
        utftext += enc;
        start = end = n + 1;
      }
    }

    if (end > start) {
      utftext += string.substring(start, string.length);
    }

    return utftext;
  };

  _.detector = detector;

  _.base64Encode = function(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = '', tmp_arr = [];
    if (!data) {
      return data;
    }
    data = _.utf8Encode(data);
    do {
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
      case 1:
        enc = enc.slice(0, -2) + '==';
        break;
      case 2:
        enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
  };

  _.UUID = (function() {
    var T = function() {
      var d = 1 * new Date()
        , i = 0;
      while (d == 1 * new Date()) {
        i++;
      }
      return d.toString(16) + i.toString(16);
    };
    var R = function() {
      return Math.random().toString(16).replace('.', '');
    };
    var UA = function(n) {
      var ua = userAgent, i, ch, buffer = [], ret = 0;

      function xor(result, byte_array) {
        var j, tmp = 0;
        for (j = 0; j < byte_array.length; j++) {
          tmp |= (buffer[j] << j * 8);
        }
        return result ^ tmp;
      }

      for (i = 0; i < ua.length; i++) {
        ch = ua.charCodeAt(i);
        buffer.unshift(ch & 0xFF);
        if (buffer.length >= 4) {
          ret = xor(ret, buffer);
          buffer = [];
        }
      }

      if (buffer.length > 0) {
        ret = xor(ret, buffer);
      }

      return ret.toString(16);
    };

    return function() {
      var se = (screen.height * screen.width).toString(16);
      return (T() + '-' + R() + '-' + UA() + '-' + se + '-' + T());
    };
  })();

  _.getQueryParam = function(url, param) {
    param = param.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regexS = '[\\?&]' + param + '=([^&#]*)',
      regex = new RegExp(regexS),
      results = regex.exec(url);
    if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) {
      return '';
    } else {
      return decodeURIComponent(results[1]).replace(/\+/g, ' ');
    }
  };

  _.urlParse = function(para){
    var URLParser = function (a) {
      this._fields = {
          Username: 4,
          Password: 5,
          Port: 7,
          Protocol: 2,
          Host: 6,
          Path: 8,
          URL: 0,
          QueryString: 9,
          Fragment: 10
      };
      this._values = {
      };
      this._regex = null;
      this.version = 0.1;
      this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;

      if (typeof a != 'undefined') {
          this._parse(a)
      }
    }; 
    URLParser.prototype.setURL = function (a) {
        this._parse(a)
    }; 
    URLParser.prototype._initValues = function () {
        for (var a in this._fields) {
            this._values[a] = ''
        }
    }; 
    URLParser.prototype._parse = function (a) {
        this._initValues();
        var b = this._regex.exec(a);
        if (!b) {
            throw 'DPURLParser::_parse -> Invalid URL'
        }
        for (var c in this._fields) {
            if (typeof b[this._fields[c]] != 'undefined') {
                this._values[c] = b[this._fields[c]]
            }
        }
        this._values['Hostname'] = this._values['Host'].replace(/:\d+$/,'');
        this._values['Origin'] = this._values['Protocol'] + '://' + this._values['Hostname'];

    };
    return new URLParser(para);
  }


  _.cookie = {
    get: function(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
      }
      return null;
    },
    set: function(name, value, days, cross_subdomain, is_secure) {
      cross_subdomain = typeof cross_subdomain === 'undefined' ? sd.para.cross_subdomain : cross_subdomain;
      var cdomain = '', expires = '', secure = '';
      days = typeof days === 'undefined' ? 730 : days;

      if (cross_subdomain) {
        var matches = document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)
          , domain = matches ? matches[0] : '';

        cdomain = ((domain) ? '; domain=.' + domain : '');
      }
      // 0 session
      // -1 马上过期
      // 
      if (days !== 0) {
        var date = new Date();
      // 默认是填，可以是秒
        if(String(days).slice(-1) === 's' ){
          date.setTime(date.getTime() + (Number(String(days).slice(0,-1)) * 1000));          
        }else{
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        }

        expires = '; expires=' + date.toGMTString();
      }

      if (is_secure) {
        secure = '; secure';
      }

      document.cookie = name + '=' + encodeURIComponent(value) + expires
        + '; path=/' + cdomain + secure;
    },

    remove: function(name, cross_subdomain) {
      cross_subdomain = typeof cross_subdomain === 'undefined' ? sd.para.cross_subdomain : cross_subdomain;
      _.cookie.set(name, '', -1, cross_subdomain);

    }
  };

  // _.localStorage
  _.localStorage = {
    get: function(name) {
      return window.localStorage.getItem(name);
    },

    parse: function(name) {
      var storedValue;
      try {
        storedValue = JSON.parse(_.localStorage.get(name)) || null;
      } catch (err) {
      }
      return storedValue;
    },

    set: function(name, value) {
      window.localStorage.setItem(name, value);
    },

    remove: function(name) {
      window.localStorage.removeItem(name);
    }
  };

  _.getQueryParam = function(url, param) {
    param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + param + "=([^&#]*)",
      regex = new RegExp(regexS),
      results = regex.exec(url);
    if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) {
      return '';
    } else {
      return decodeURIComponent(results[1]).replace(/\+/g, ' ');
    }
  };

  _.xhr = function (cors) {
    if (cors){
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr){
        return xhr;
      } else if (typeof XDomainRequest != "undefined"){
        return new XDomainRequest();
      }else{
        return xhr;
      }
    }else{
      if(XMLHttpRequest){
        return new XMLHttpRequest();
      }
      if (window.ActiveXObject) {
        try {
          return new ActiveXObject('Msxml2.XMLHTTP')
        } catch (d) {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP')
          } catch (d) {
          }
        }
      }
    }
  };

  _.ajax = function(para){
    function getJSON(data){
       try{
          return JSON.parse(data);      
      }catch(e){
          return {};
      }
    }

    var g = _.xhr(para.cors);
    if(!para.type){
      para.type = para.data ? 'POST' : 'GET';
    }
    para = _.extend({
      success: function(){},
      error: function(){}
    },para);


    g.onreadystatechange = function () {
      if (g.readyState == 4) {
        if ((g.status >= 200 && g.status < 300) || g.status == 304) {
          para.success(getJSON(g.responseText));
        } else {
          para.error(getJSON(g.responseText),g.status);
        }
        g.onreadystatechange = null;
        g.onload = null;
      }
    };


    g.open(para.type, para.url, true);
    
    try{
      g.withCredentials = true;

      if(_.isObject(para.header)){
        for(var i in para.header){
          g.setRequestHeader(i,para.header[i]);
        }
      }

      if(para.data){
        g.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if(para.contentType === 'application/json'){
          g.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        }else{
          g.setRequestHeader("Content-type", "application/x-www-form-urlencoded");        
        }

      }
    }catch(e){}

    g.send(para.data || null);


  };

  _.info = {
    campaignParams: function() {
      var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ')
        , kw = ''
        , params = {};
      _.each(campaign_keywords, function(kwkey) {
        kw = _.getQueryParam(location.href, kwkey);
        if (kw.length) {
          params[kwkey] = kw;
        }
      });

      return params;
    },
    searchEngine: function(referrer) {
      if (referrer.search('https?://(.*)google.([^/?]*)') === 0) {
        return 'google';
      } else if (referrer.search('https?://(.*)bing.com') === 0) {
        return 'bing';
      } else if (referrer.search('https?://(.*)yahoo.com') === 0) {
        return 'yahoo';
      } else if (referrer.search('https?://(.*)duckduckgo.com') === 0) {
        return 'duckduckgo';
      } else {
        return null;
      }
    },

    browser: function(user_agent, vendor, opera) {
      var vendor = vendor || ''; // vendor is undefined for at least IE9
      if (opera || _.includes(user_agent, " OPR/")) {
        if (_.includes(user_agent, "Mini")) {
          return "Opera Mini";
        }
        return "Opera";
      } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
        return 'BlackBerry';
      } else if (_.includes(user_agent, "IEMobile") || _.includes(user_agent, "WPDesktop")) {
        return "Internet Explorer Mobile";
      } else if (_.includes(user_agent, "Edge")) {
        return "Microsoft Edge";
      } else if (_.includes(user_agent, "FBIOS")) {
        return "Facebook Mobile";
      } else if (_.includes(user_agent, "Chrome")) {
        return "Chrome";
      } else if (_.includes(user_agent, "CriOS")) {
        return "Chrome iOS";
      } else if (_.includes(vendor, "Apple")) {
        if (_.includes(user_agent, "Mobile")) {
          return "Mobile Safari";
        }
        return "Safari";
      } else if (_.includes(user_agent, "Android")) {
        return "Android Mobile";
      } else if (_.includes(user_agent, "Konqueror")) {
        return "Konqueror";
      } else if (_.includes(user_agent, "Firefox")) {
        return "Firefox";
      } else if (_.includes(user_agent, "MSIE") || _.includes(user_agent, "Trident/")) {
        return "Internet Explorer";
      } else if (_.includes(user_agent, "Gecko")) {
        return "Mozilla";
      } else {
        return "";
      }
    },
    browserVersion: function(userAgent, vendor, opera) {
      var browser = _.info.browser(userAgent, vendor, opera);
      var versionRegexs = {
        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
        "Microsoft Edge": /Edge\/(\d+(\.\d+)?)/,
        "Chrome": /Chrome\/(\d+(\.\d+)?)/,
        "Chrome iOS": /Chrome\/(\d+(\.\d+)?)/,
        "Safari": /Version\/(\d+(\.\d+)?)/,
        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
        "Opera": /(Opera|OPR)\/(\d+(\.\d+)?)/,
        "Firefox": /Firefox\/(\d+(\.\d+)?)/,
        "Konqueror": /Konqueror:(\d+(\.\d+)?)/,
        "BlackBerry": /BlackBerry (\d+(\.\d+)?)/,
        "Android Mobile": /android\s(\d+(\.\d+)?)/,
        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
        "Mozilla": /rv:(\d+(\.\d+)?)/
      };
      var regex = versionRegexs[browser];
      if (regex == undefined) {
        return null;
      }
      var matches = userAgent.match(regex);
      if (!matches) {
        return null;
      }
      return String(parseFloat(matches[matches.length - 2]));
    },

    os: function() {
      var a = userAgent;
      if (/Windows/i.test(a)) {
        if (/Phone/.test(a)) {
          return 'Windows Mobile';
        }
        return 'Windows';
      } else if (/(iPhone|iPad|iPod)/.test(a)) {
        return 'iOS';
      } else if (/Android/.test(a)) {
        return 'Android';
      } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
        return 'BlackBerry';
      } else if (/Mac/i.test(a)) {
        return 'Mac OS X';
      } else if (/Linux/.test(a)) {
        return 'Linux';
      } else {
        return '';
      }
    },

    device: function(user_agent) {
      if (/iPad/.test(user_agent)) {
        return 'iPad';
      } else if (/iPod/i.test(user_agent)) {
        return 'iPod';
      } else if (/iPhone/i.test(user_agent)) {
        return 'iPhone';
      } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
        return 'BlackBerry';
      } else if (/Windows Phone/i.test(user_agent)) {
        return 'Windows Phone';
      } else if (/Windows/i.test(user_agent)) {
        return 'Windows';
      } else if (/Macintosh/i.test(user_agent)) {
        return 'Macintosh';
      } else if (/Android/i.test(user_agent)) {
        return 'Android';
      } else if (/Linux/i.test(user_agent)) {
        return 'Linux';
      } else {
        return '';
      }
    },

    referringDomain: function(referrer) {
      var split = referrer.split('/');
      if (split.length >= 3) {
        return split[2];
      }
      return '';
    },

    properties: function() {
      return _.extend(_.strip_empty_properties({
        $os: detector.os.name,
        $model: detector.device.name
      }), {
        _browser_engine: detector.engine.name,
        $screen_height: screen.height,
        $screen_width: screen.width,
        $lib: 'js',
        $lib_version: String(LIB_VERSION),
        _browser: detector.browser.name,
        _browser_version: String(detector.browser.version)
      });
    },
    // 保存临时的一些变量，只针对当前页面有效
    currentProps: {},
    register: function(obj) {
      _.extend(_.info.currentProps, obj);
    }
  };

  /* 如果设置为傻瓜模式时，自动去设置一些属性，目前看来并不没有强烈需求，先注释掉

   var seniorProp = {
   data: {},
   init: function() {
   var _referrer = document.referrer;
   // set init register cookie
   store.setPropsOnce({
   _init_referrer: _referrer,
   _init_referrer_domain: _.info.referringDomain(_referrer)
   });
   // set init sessionRegister cookie
   store.setSessionPropsOnce({
   _session_referrer: _referrer,
   _session_referrer_domain: _.info.referringDomain(_referrer)
   });
   // set init props
   var source = _.info.campaignParams();
   this.data = {
   _current_url: location.href
   };
   _.extend(this.data, source);

   }
   };

   */

  var saEvent = {};

  saEvent.checkOption = {
    // event和property里的key要是一个合法的变量名，由大小写字母、数字、下划线和$组成，并且首字符不能是数字。
    regChecks: {
      regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
    },
    checkPropertiesKey: function(obj) {
      var me = this, flag = true;
      _.each(obj, function(content, key) {
        if (!me.regChecks.regName.test(key)) {
          flag = false;
        }
      });
      return flag;
    },
    check: function(a, b) {
      if (typeof this[a] === 'string') {
        return this[this[a]](b);
      } else {
        return this[a](b);
      }
    },
    str: function(s) {
      if (!_.isString(s)) {
        logger.info('请检查参数格式,必须是字符串');
        return false;
      } else {
        return true;
      }
    },
    properties: function(p) {
      _.strip_sa_properties(p);
      if (p) {
        if (_.isObject(p)) {
          if (this.checkPropertiesKey(p)) {
            return true;
          } else {
            logger.info('properties里的key必须是由字符串数字_组成，且不能是系统保留字');
            return false;
          }
        } else {
          logger.info('properties可以没有，但有的话必须是对象');
          return false;
        }
      } else {
        return true;
      }
    },
    propertiesMust: function(p) {
      _.strip_sa_properties(p);
      if (p === undefined || !_.isObject(p) || _.isEmptyObject(p)) {
        logger.info('properties必须是对象且有值');
        return false;
      } else {
        if (this.checkPropertiesKey(p)) {
          return true;
        } else {
          logger.info('properties里的key必须是由字符串数字_组成，且不能是系统保留字');
          return false;
        }
      }
    },
    // event要检查name
    event: function(s) {
      if (!_.isString(s) || !this['regChecks']['regName'].test(s)) {
        logger.info('请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字');
        return false;
      } else {
        return true;
      }

    },
    test_id: 'str',
    group_id: 'str',
    distinct_id: function(id) {
      if (_.isString(id) && /^.{1,255}$/.test(id)){
        return true;
      } else {
        logger.info('distinct_id必须是不能为空，且小于255位的字符串');
        return false;
      }
    }
  };

  saEvent.check = function(p) {
    var flag = true;
    for (var i in p) {
      if (!this.checkOption.check(i, p[i])) {
        return false;
      }
    }
    return flag;
  };

  saEvent.send = function(p) {
    var data = {
      distinct_id: store.getDistinctId(),
      properties: {}
    };
    _.extend(data, p);
    if (_.isObject(p.properties) && !_.isEmptyObject(p.properties)) {
      _.extend(data.properties, p.properties);
    }
    // profile时不传公用属性
    if (!p.type || p.type.slice(0, 7) !== 'profile') {
      // 传入的属性 > 当前页面的属性 > session的属性 > cookie的属性 > 预定义属性
      data.properties = _.extend({}, _.info.properties(), store.getProps(), store.getSessionProps(), _.info.currentProps, data.properties);
    }
    data.time = new Date() * 1;
    _.searchObjDate(data);
    
  @@if (sensorsdata_mode === 'vtrack'){
    if(sd.vtrack_mode && sd.vtrack_mode !== 'normalMode'){
      if(data && data.properties && ('$from_vtrack' in data.properties)){
        sd.customEv.trigger('debugInfo',data);
      }

    } else }if (sd.para.debug_mode === true){
      logger.info(data);
      this.debugPath(JSON.stringify(data));
    }else{
      logger.info(data);
      this.serverPath(JSON.stringify(data));
    }

  };

  // 发送debug数据请求
  saEvent.debugPath = function(data){
    var url = '';
    if (sd.para.debug_mode_url.indexOf('?') !== -1) {
      url = sd.para.debug_mode_url + '&data=' + encodeURIComponent(_.base64Encode(data));
    } else {
      url = sd.para.debug_mode_url + '?data=' + encodeURIComponent(_.base64Encode(data));
    }

    _.ajax({
      url: url,
      type: 'GET',
      cors: true,
      header:{'Dry-Run': String(sd.para.debug_mode_upload)}
    });

  };

  // 发送请求
  saEvent.serverPath = function(data) {
    sd.requestImg = new Image();
    sd.requestImg.onload = sd.requestImg.onerror = function() {
      if (sd.requestImg) {
        sd.requestImg.onload = null;
        sd.requestImg.onerror = null;
        sd.requestImg = null;  
      }
    };
    
    if (sd.para.server_url.indexOf('?') !== -1) {
      sd.requestImg.src = sd.para.server_url + '&data=' + encodeURIComponent(_.base64Encode(data));
    } else {
      sd.requestImg.src = sd.para.server_url + '?data=' + encodeURIComponent(_.base64Encode(data));
    }

  };

  var store = sd.store = {
    getProps: function() {
      return this._state.props;
    },
    getSessionProps: function() {
      return this._sessionState;
    },
    getDistinctId: function() {
      return this._state.distinct_id;
    },
    toState: function(ds) {
      var state = null;
      if (ds !== null && (typeof (state = JSON.parse(ds)) === 'object')) {
        this._state = state;
        return state.distinct_id;
      }else{
        return null;
      }
    },
    initSessionState: function() {
      var ds = _.cookie.get('sensorsdata2015session');
      var state = null;
      if (ds !== null && (typeof (state = JSON.parse(ds)) === 'object')) {
        this._sessionState = state;
      }
    },
    setOnce: function(a, b) {
      if (!(a in this._state)) {
        this.set(a, b);
      }
    },
    set: function(name, value) {
      this._state[name] = value;
      this.save();
    },
    // 针对当前页面修改
    change: function(name, value) {
      this._state[name] = value;
    },
    setSessionProps: function(newp) {
      var props = this._sessionState;
      _.extend(props, newp);
      this.sessionSave(props);
    },
    setSessionPropsOnce: function(newp) {
      var props = this._sessionState;
      _.coverExtend(props, newp);
      this.sessionSave(props);
    },
    setProps: function(newp) {
      var props = this._state.props || {};
      _.extend(props, newp);
      this.set('props', props);
    },
    setPropsOnce: function(newp) {
      var props = this._state.props || {};
      _.coverExtend(props, newp);
      this.set('props', props);
    },
    sessionSave: function(props) {
      this._sessionState = props;
      _.cookie.set('sensorsdata2015session', JSON.stringify(this._sessionState), 0);
    },
    save: function() {
      if(sd.para.cross_subdomain){
        _.cookie.set('sensorsdata2015jssdkcross', JSON.stringify(this._state), 730, true);
      }else{
        _.cookie.set('sensorsdata2015jssdk', JSON.stringify(this._state), 730, false);
      }
    },
    _sessionState: {},
    _state: {},
    init: function() {
      var ds = _.cookie.get('sensorsdata2015jssdk');
      var cs = _.cookie.get('sensorsdata2015jssdkcross');
      var cross = null;
      if(sd.para.cross_subdomain){
        cross = cs;
        if(ds !== null){
          logger.info('在根域且子域有值，删除子域的cookie');
          // 如果是根域的，删除以前设置在子域的
          _.cookie.remove('sensorsdata2015jssdk',false);
          _.cookie.remove('sensorsdata2015jssdk',true);
        }
        if(cross === null && ds !== null){
          logger.info('在根域且根域没值，子域有值，根域＝子域的值',ds);
          cross = ds;
        }
      }else{
        logger.info('在子域');
        cross = ds;
      }
      this.initSessionState();
      if (cross !== null && this.toState(cross)) {
        //如果是根域且根域没值
        if(sd.para.cross_subdomain && cs === null){
          logger.info('在根域且根域没值，保存当前值到cookie中');
          this.save();
        }
      } else {
        logger.info('没有值，set值');
        this.set('distinct_id', _.UUID());
      }
    }
  };

  var commonWays = {
    // 获取谷歌标准参数
    getUtm: function() {
      return _.info.campaignParams();
    },
    // 获取当前页面停留时间
    getStayTime: function() {
      return ((new Date()) - sd._t) / 1000;
    },
    //set init referrer
    setInitReferrer: function() {
      var _referrer = document.referrer;
      sd.setOnceProfile({
        _init_referrer: _referrer,
        _init_referrer_domain: _.info.referringDomain(_referrer)
      });
    },
    // set init sessionRegister cookie
    setSessionReferrer: function() {
      var _referrer = document.referrer;
      store.setSessionPropsOnce({
        _session_referrer: _referrer,
        _session_referrer_domain: _.info.referringDomain(_referrer)
      });
    },
    // set default referrr and pageurl
    setDefaultAttr: function() {
      _.info.register({
        _current_url: location.href,
        _referrer: document.referrer,
        _referring_domain: _.info.referringDomain(document.referrer)
      });
    },

    cookie: function() {


    }



  };

  // 一些常见的方法
  sd.quick = function() {
    var arg = Array.prototype.slice.call(arguments);
    var arg0 = arg[0];
    var arg1 = arg.slice(1);
    if (typeof arg0 === 'string' && commonWays[arg0]) {
      return commonWays[arg0].apply(sd, arg1);
    } else if (typeof arg0 === 'function') {
      arg0.apply(sd, arg1);
    } else {
      logger.info('quick方法中没有这个功能'+arg[0]);
    }
  };


  /*
   * @param {string} event
   * @param {string} properties
   * */
  sd.track = function(e, p) {
    if (saEvent.check({event: e, properties: p})) {
      saEvent.send({
        type: 'track',
        event: e,
        properties: p
      });
    }
  };

  /*
   * @param {object} properties
   * */
  sd.setProfile = function(p) {
    if (saEvent.check({propertiesMust: p})) {
      saEvent.send({
        type: 'profile_set',
        properties: p
      });
    }
  };

  sd.setOnceProfile = function(p) {
    if (saEvent.check({propertiesMust: p})) {
      saEvent.send({
        type: 'profile_set_once',
        properties: p
      });
    }
  };

  /*
   * @param {object} properties
   * */
  sd.appendProfile = function(p) {
    if (saEvent.check({propertiesMust: p})) {
      _.each(p, function(value, key){
        if (_.isString(value)) {
          p[key] = [value];
        }else if(_.isArray(value)){

        }else{
          delete p[key];
          logger.info('appendProfile属性的值必须是字符串或者数组');
        }
      });
      if(!_.isEmptyObject(p)){
        saEvent.send({
          type: 'profile_append',
          properties: p
        });
      }
    }
  };
  /*
   * @param {object} properties
   * */
  sd.incrementProfile = function(p) {
    var str = p;
    if (_.isString(p)) {
      p = {}
      p[str] = 1;
    }
    function isChecked(p) {
      for (var i in p) {
        if (!/-*\d+/.test(String(p[i]))) {
          return false;
        }
      }
      return true;
    }

    if (saEvent.check({propertiesMust: p})) {
      if (isChecked(p)) {
        saEvent.send({
          type: 'profile_increment',
          properties: p
        });
      } else {
        logger.info('profile_increment的值只能是数字');
      }
    }
  };

  sd.deleteProfile = function() {
    saEvent.send({
      type: 'profile_delete'
    });
    store.set('distinct_id', _.UUID());
  };
  /*
   * @param {object} properties
   * */
  sd.unsetProfile = function(p) {
    var str = p;
    var temp = {};
    if (_.isString(p)) {
      p = [];
      p.push(str);
    }
    if (_.isArray(p)) {
      _.each(p, function(v) {
        if (_.isString(v)) {
          temp[v] = true;
        } else {
          logger.info('profile_unset给的数组里面的值必须时string,已经过滤掉', v);
        }
      });
      saEvent.send({
        type: 'profile_unset',
        properties: temp
      });
    } else {
      logger.info('profile_unset的参数是数组');
    }
  };
  /*
   * @param {string} distinct_id
   * */
  sd.identify = function(id, isSave) {
    if (typeof id === 'undefined') {
      store.set('distinct_id', _.UUID());
    } else if (saEvent.check({distinct_id: id})) {

      if (isSave === true) {
        store.set('distinct_id', id);
      } else {
        store.change('distinct_id', id);
      }

    } else {
      logger.info('identify的参数必须是字符串');
    }
  };
  /*
   * 这个接口是一个较为复杂的功能，请在使用前先阅读相关说明:http://www.sensorsdata.cn/manual/track_signup.html，并在必要时联系我们的技术支持人员。
   * @param {string} distinct_id
   * @param {string} event
   * @param {object} properties
   * */
  sd.trackSignup = function(id, e, p) {
    if (saEvent.check({distinct_id: id, event: e, properties: p})) {
      saEvent.send({
        original_id: store.getDistinctId(),
        distinct_id: id,
        type: 'track_signup',
        event: e,
        properties: p
      });
      store.set('distinct_id', id);
    }
  };
  /*
   * @param {string} testid
   * @param {string} groupid
   * */
  sd.trackAbtest = function(t, g) {
    if (saEvent.check({test_id: t, group_id: g})) {
      saEvent.send({
        type: 'track_abtest',
        properties: {
          test_id: t,
          group_id: g
        }
      });
    }
  };

  sd.registerPage = function(obj) {
    if (saEvent.check({properties: obj})) {
      _.extend(_.info.currentProps, obj);
    } else {
      logger.info('register输入的参数有误');
    }
  };

  sd.register = function(props) {
    if (saEvent.check({properties: props})) {
      store.setProps(props);
    } else {
      logger.info('register输入的参数有误');
    }
  };

  sd.registerOnce = function(props) {
    if (saEvent.check({properties: props})) {
      store.setPropsOnce('props', props);
    } else {
      logger.info('registerOnce输入的参数有误');
    }
  };

  sd.registerSession = function(props) {
    if (saEvent.check({properties: props})) {
      store.setSessionProps(props);
    } else {
      logger.info('registerSession输入的参数有误');
    }
  };

  sd.registerSessionOnce = function(props) {
    if (saEvent.check({properties: props})) {
      store.setSessionPropsOnce(props);
    } else {
      logger.info('registerSessionOnce输入的参数有误');
    }
  };

  sd.init = function() {
    store.init();
    /* 傻瓜模式，暂时注释掉
     if (sd._mode) {
     seniorProp.init();
     }
     */
    _.each(sd._q, function(content) {
      sd[content[0]].apply(sd, slice.call(content[1]));
    });

  };