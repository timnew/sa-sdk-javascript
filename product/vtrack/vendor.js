(function(){



  var sd = window['sensorsDataAnalytic201505'];
  sd = window[sd];
  var _ = sd._;
  var sdkMain = sd.sdkMain;
  var sdkVisual = {};
  sd.sdkVisual = sdkVisual;
  var $ = sd.$;





var doT = {};
(function(){function define_url(it
/**/) {
var out='<div class="sensors-jssdk-trigger-box-out"> <div class="sensors-jssdk-trigger-box-header sensors-jssdk-clearfix"> 所有已埋点页面 </div> <div class="sensors-jssdk-trigger-box-content"> <ul> '; for(var key in it) {  out+=' <li class="sensors-jssdk-trigger-box-content-li"> <div class="sensors-jssdk-clearfix sensors-jssdk-trigger-box-content-title"> <span>'+(key || '' )+'</span> </div> <ul class="sensors-jssdk-trigger-box-content-list"> '; for(var keyUrl in it[key]) {  out+=' <li class="sensors-jssdk-clearfix"> <a href="'+(it[key][keyUrl])+'" title="'+(it[key][keyUrl])+'" target="_blank"> ... '+(keyUrl)+' </a> </li> '; } out+=' </ul> </li> '; } out+=' </ul> </div></div>';return out;
}var itself=define_url, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());doT.gtemplate = doT.gtemplate || {};doT.gtemplate['define_url'] = itself;}());
(function(){function head_box(it
/**/) {
var out='<div class="sensors-jssdk-head-out" sensors_ignore_tag="all"> <div class="sensors-jssdk-head-in"> <div class="sensors-jssdk-head-in-right">  <button class="sensors-jssdk-btn" data-sensors-action="define_url">切换已埋点页面</button> <button class="sensors-jssdk-btn" data-sensors-action="trigger_box">本页埋点</button> <button class="sensors-jssdk-btn" data-sensors-action="exit_login">退出</button> <button class="sensors-jssdk-btn" style="background:#097;font-weight:bold;" data-sensors-action="mini-right"> &gt; </button>  <!-- <button class="sensors-jssdk-btn" style="display:none;background:#097;font-weight:bold;" data-sensors-action="mini-right-2"> &lt; </button>           --> </div> <div class="sensors-jssdk-head-in-left"> <a href="javascript:;" style="cursor:move;background:url(https://www.sensorsdata.cn/img/logo-6a5f89d488.svg) no-repeat scroll center center / 120px 41px;display: inline-block;height:40px;text-decoration:none !important;width: 130px;"> </a> </div> <div class="sensors-jssdk-head-in-main"> <button data-sensors-action="define_mode" class="sensors-jssdk-btn';if(it.navStatus === 'defineMode'){out+=' sensors-jssdk-btn-success';}out+='" >埋点模式</button> <button data-sensors-action="test_mode" class="sensors-jssdk-btn';if(it.navStatus === 'testMode'){out+=' sensors-jssdk-btn-success';}out+='" >测试模式</button> </div>  </div> </div>';return out;
}var itself=head_box, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());doT.gtemplate = doT.gtemplate || {};doT.gtemplate['head_box'] = itself;}());
(function(){function popover_box(it
/**/) {
var out='<div class="sensors-jssdk-modal-dialog sensors-jssdk-modal-box"> <div class="sensors-jssdk-modal-content"> <div class="sensors-jssdk-modal-header"> <button type="button" class="sensors-jssdk-close" data-dismiss="modal" aria-hidden="true"> &times; </button> <div class="sensors-jssdk-color-green" style="font-size: 14px;line-height:1;font-weight:bold;margin:0;"> 添加埋点 </div> </div> <div class="sensors-jssdk-modal-body"><div style="position: relative;padding:0;margin:0;"><div style="color:#f11;display:none;padding: 5px 0;text-align: left;" class="sensors-jssdk-popover-head-error-notice"></div> <div class="sensors-jssdk-popover-line"> <p class="sensors-jssdk-color-green">事件名</p> <div> <input class="sensors-jssdk-input-large" type="text" data-name="name" value="'+(it.name || '')+'" placeholder="支持英文、数字和下划线"/> </div> </div> <div class="sensors-jssdk-popover-line"> <p class="sensors-jssdk-color-green">事件显示名</p> <div> <input class="sensors-jssdk-input-large" type="text" data-name="cname" value="'+(it.cname || '')+'"/> </div> </div> <div class="sensors-jssdk-popover-line sensors-jssdk-popover-line-url-radio">  <p class="sensors-jssdk-color-green">URL匹配方式</p> <div class="clearfix"> <div class="sensors-jssdk-gselectbox-out"> <select data-name="sensorsdata-vtrack-url-radio"> <option value="fixed">固定URL</option> <option value="part">部分匹配</option> <option title="可以使用js正则表达式匹配url" value="regexp">正则匹配</option> </select> </div> <input style="float:right; width: 69%; height: 36px;" class="sensors-jssdk-input-large" type="text" data-name="url" value="'+(it.url || '')+'"/>             </div> </div> <div class="sensors-jssdk-popover-line"> <p class="sensors-jssdk-color-green">限定元素内容</p> <div class="sensors-jssdk-clearfix">  <div class="sensors-jssdk-gselectbox-out"> <select data-name="selfTextCheck"> <option value="no">否</option> <option value="yes">是</option> </select> </div> <input style="float:right; width: 69%; height: 36px;" type="text" data-name="selfText" value="'+(it.selfText || '')+'"/> </div> </div> <p> <a href="javascript:;" class="sensors-jssdk-popover-button">添加埋点</a> </p> </div> </div> </div> </div>';return out;
}var itself=popover_box, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());doT.gtemplate = doT.gtemplate || {};doT.gtemplate['popover_box'] = itself;}());
(function(){function testmode_box(it
/**/) {
var out='<div id="sensors_jssdk_right_box" class="sensors-jssdk-right-box" style="border-radius: 2px;box-shadow:-3px 3px 6px #555;font-family: monospace;font-size:12px;line-height:12px;width: 300px; right: 0px; background: #eee; opacity:0.95; top:0; bottom:68px; position: fixed; z-index: 99999; overflow-y:auto;"> <section> <header style="cursor:move;padding:10px 20px;background:#2e384a;color:#ececee;"> 已触发事件 </header> <ul> </ul> </section></div>';return out;
}var itself=testmode_box, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());doT.gtemplate = doT.gtemplate || {};doT.gtemplate['testmode_box'] = itself;}());
(function(){function trigger_box(it
/**/) {
var out='<div class="sensors-jssdk-trigger-box-out"> <div class="sensors-jssdk-trigger-box-header sensors-jssdk-clearfix"> <button class="sensors-jssdk-trigger-box-deploy-btn" style="background:#19b27b;border:none;border-radius: 4px;color: #fff;float: right;padding: 6px;cursor: pointer;font-size:14px;font-weight:bold;">部署生效</button> <span class="sensors-jssdk-trigger-box-header-title-change">您有新的改动，需要部署才能生效</span> </div> <div class="sensors-jssdk-trigger-box-content"> <ul> '; for(var key in it) {  out+=' <li class="sensors-jssdk-trigger-box-content-li"> <div class="sensors-jssdk-clearfix sensors-jssdk-trigger-box-content-title"> <!--<span class="sensors-jssdk-trigger-box-content-delete"> X </span>--> <span>'+(it[key].cname || '' )+((' ( '+it[key].name+' ) ' )|| '')+'</span> </div> <ul class="sensors-jssdk-trigger-box-content-list"> ';var arr1=it[key].triggers;if(arr1){var obj,index=-1,l1=arr1.length-1;while(index<l1){obj=arr1[index+=1];out+=' <li class="sensors-jssdk-clearfix ';if((obj.to_del || !obj.deployed)){out+='sensors-jssdk-trigger-box-attention-red';}out+='" data-trigger="'+(String(obj.trigger_id))+'" data-deploy="'+(String(obj.deployed))+'">  ';if(obj.to_del){out+=' <span class="sensors-jssdk-trigger-box-left-sign"> — </span> <span class="sensors-jssdk-trigger-box-condition"><strike>点击 '+((obj.nthEle.join(' ') + (obj.selfAttr.text ? '且包含内容'+obj.selfAttr.text : '') ))+'</strike></span> ';}else if(obj.deployed){out+=' <span class="sensors-jssdk-trigger-box-left-sign" style="visibility: hidden;"> ＝ </span> <span class="sensors-jssdk-trigger-box-condition">点击 '+((obj.nthEle.join(' ') + (obj.selfAttr.text ? '且包含内容'+obj.selfAttr.text : '') ))+'</span> ';}else{out+=' <span class="sensors-jssdk-trigger-box-left-sign"> ＋ </span> <span class="sensors-jssdk-trigger-box-condition">点击 '+((obj.nthEle.join(' ') + (obj.selfAttr.text ? '且包含内容'+obj.selfAttr.text : '') ))+'</span> ';}out+=' ';if(!obj.to_del){out+=' <span class="sensors-jssdk-trigger-box-content-delete"> 删除 </span> ';}else{out+=' <span class="sensors-jssdk-trigger-box-content-revert"> 恢复 </span> ';}out+=' </li> ';} } out+=' </ul> </li> '; } out+=' </ul> </div></div>';return out;
}var itself=trigger_box, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());doT.gtemplate = doT.gtemplate || {};doT.gtemplate['trigger_box'] = itself;}());
sd.template = doT.gtemplate;



//json格式化


var JSONTree = new function() {

  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '/': '&#x2F;'
  };

  var defaultSettings = {
    indent: 2
  };

  var id = 0;
  var instances = 0;

  this.create = function(data, settings) {
    instances += 1;
    return _span(_jsVal(data, 0, false), {class: 'jstValue'});
  };

  var _escape = function(text) {
    return text.replace(/[&<>'"]/g, function(c) {
      return escapeMap[c];
    });
  };

  var _id = function() {
    return instances + '_' + id++;
  };

  var _jsVal = function(value, depth, indent) {
    if (value !== null) {
      var type = typeof value;
      switch (type) {
        case 'boolean':
          return _jsBool(value, indent ? depth : 0);
        case 'number':
          return _jsNum(value, indent ? depth : 0);
        case 'string':
          return _jsStr(value, indent ? depth : 0);
        default:
          if (value instanceof Array) {
            return _jsArr(value, depth, indent);
          } else {
            return _jsObj(value, depth, indent);
          }
      }
    } else {
      return _jsNull(indent ? depth : 0);
    }
  };

  var _jsObj = function(object, depth, indent) {
    var id = _id();
    var content = Object.keys(object).map(function(property) {
      return _property(property, object[property], depth + 1, true);
    }).join(_comma());
    var body = [
      _openBracket('{', indent ? depth : 0, id),
      _span(content, {id: id}),
      _closeBracket('}', depth)
    ].join('\n');
    return _span(body, {})
  };

  var _jsArr = function(array, depth, indent) {
    var id = _id();
    var body = array.map(function(element) {
      return _jsVal(element, depth + 1, true);
    }).join(_comma());
    var arr = [
      _openBracket('[', indent ? depth : 0, id),
      _span(body, {id: id}),
      _closeBracket(']', depth)
    ].join('\n');
    return arr;
  };

  var _jsStr = function(value, depth) {
    return _span(_indent(_quote(_escape(value)), depth), {class: 'jstStr'});
  };

  var _jsNum = function(value, depth) {
    return _span(_indent(value, depth), {class: 'jstNum'});
  };

  var _jsBool = function(value, depth) {
    return _span(_indent(value, depth), {class: 'jstBool'});
  };

  var _jsNull = function(depth) {
    return _span(_indent('null', depth), {class: 'jstNull'});
  };

  var _property = function(name, value, depth) {
    var property = _indent(_quote(_escape(name)) + ': ', depth);
    var propertyValue = _span(_jsVal(value, depth, false), {});
    return _span(property + propertyValue, {class: 'jstProperty'});
  }

  var _quote = function(value) {
    return '"' + value + '"';
  }

  var _comma = function() {
    return _span(',\n', {class: 'jstComma'});
  }

  var _span = function(value, attrs) {
    return _tag('span', attrs, value);
  }

  var _tag = function(tag, attrs, content) {
    return '<' + tag + Object.keys(attrs).map(function(attr) {
          return ' ' + attr + '="' + attrs[attr] + '"';
        }).join('') + '>' +
        content +
        '</' + tag + '>';
  }

  var _openBracket = function(symbol, depth, id) {
    return (
    _span(_indent(symbol, depth), {class: 'jstBracket'}) +
    _span('', {class: 'jstFold', onclick: window['sensorsDataAnalytic201505'] + '.JSONTree.toggle(\'' + id + '\')'})
    );
  }

  this.toggle = function(id) {
    var element = document.getElementById(id);
    var parent = element.parentNode;
    var toggleButton = element.previousElementSibling;
    if (element.className === '') {
      element.className = 'jstHiddenBlock';
      parent.className = 'jstFolded';
      toggleButton.className = 'jstExpand';
    } else {
      element.className = '';
      parent.className = '';
      toggleButton.className = 'jstFold';
    }
  }

  var _closeBracket = function(symbol, depth) {
    return _span(_indent(symbol, depth), {});
  }

  var _indent = function(value, depth) {
    return Array((depth * 2) + 1).join(' ') + value;
  };
};
sd.JSONTree = JSONTree;


  var SAS = {};
  // 需要过滤的元素
  SAS.IGNORE = {
    tag: 'sensors_ignore_tag',
    iself: 'self',
    iall: 'all',
    // 过滤已有的class样式
    iclass: {
      'sensors-outline-highlight-frame': true,
      'sensors-outline-highlight-frame-deployed': true,
      'sensors-outline-highlight-frame-select': true
    }
  };

// suggest
var Awesomplete = (function () {

var _ = function (input, o) {
  var me = this;

  // Setup

  this.input = $(input);
  this.input.setAttribute("autocomplete", "off");
  this.input.setAttribute("aria-autocomplete", "list");

  o = o || {};

  configure(this, {
    minChars: 2,
    maxItems: 10,
    autoFirst: false,
    data: _.DATA,
    filter: _.FILTER_CONTAINS,
    sort: _.SORT_BYLENGTH,
    item: _.ITEM,
    replace: _.REPLACE,
    onClose: function(){},
    awesomplete_select: function(){}
  }, o);

  this.index = -1;

  // Create necessary elements

  this.container = $.create("div", {
    className: "sensors-jssdk-awesomplete",
    around: input
  });

  this.ul = $.create("ul", {
    'sensors-jssdk-awes-hidden': "sensors-jssdk-awes-hidden",
    inside: this.container
  });

  this.status = $.create("span", {
    className: "sensors-jssdk-visually-hidden",
    role: "status",
    "aria-live": "assertive",
    "aria-relevant": "additions",
    inside: this.container
  });

  // Bind events

  $.bind(this.input, {
    'focus': this.evaluate.bind(this), 
    "input": this.evaluate.bind(this),
    "blur": this.close.bind(this),
    "keydown": function(evt) {
      var c = evt.keyCode;

      // If the dropdown `ul` is in view, then act on keydown for the following keys:
      // Enter / Esc / Up / Down
      if(me.opened) {
        if (c === 13 && me.selected) { // Enter
          evt.preventDefault();
          me.select();
        }
        else if (c === 27) { // Esc
          me.close();
        }
        else if (c === 38 || c === 40) { // Down/Up arrow
          evt.preventDefault();
          me[c === 38? "previous" : "next"]();
        }
      }
    }
  });

  $.bind(this.input.form, {"submit": this.close.bind(this)});

  $.bind(this.ul, {"mousedown": function(evt) {
    var li = evt.target;

    if (li !== this) {

      while (li && !/li/i.test(li.nodeName)) {
        li = li.parentNode;
      }

      if (li && evt.button === 0) {  // Only select on left click
        evt.preventDefault();
        me.select(li, evt.target);
      }
    }
  }});

  if (this.input.hasAttribute("list")) {
    this.list = "#" + this.input.getAttribute("list");
    this.input.removeAttribute("list");
  }
  else {
    this.list = this.input.getAttribute("data-list") || o.list || [];
  }

  _.all.push(this);
};

_.prototype = {
  set list(list) {
    if (Array.isArray(list)) {
      this._list = list;
    }
    else if (typeof list === "string" && list.indexOf(",") > -1) {
        this._list = list.split(/\s*,\s*/);
    }
    else { // Element or CSS selector
      list = $(list);

      if (list && list.children) {
        var items = [];
        slice.apply(list.children).forEach(function (el) {
          if (!el.disabled) {
            var text = el.textContent.trim();
            var value = el.value || text;
            var label = el.label || text;
            if (value !== "") {
              items.push({ label: label, value: value });
            }
          }
        });
        this._list = items;
      }
    }

    if (document.activeElement === this.input) {
      this.evaluate();
    }
  },

  get selected() {
    return this.index > -1;
  },

  get opened() {
    return !this.ul.hasAttribute("sensors-jssdk-awes-hidden");
  },

  close: function () {
    this.ul.setAttribute("sensors-jssdk-awes-hidden", "");
    this.index = -1;

    $.fire(this.input, "sensors-jssdk-awesomplete-close");
  },

  open: function () {
    this.ul.removeAttribute("sensors-jssdk-awes-hidden");

    if (this.autoFirst && this.index === -1) {
      this.goto(0);
    }

    $.fire(this.input, "sensors-jssdk-awesomplete-open");
  },

  next: function () {
    var count = this.ul.children.length;

    this.goto(this.index < count - 1? this.index + 1 : -1);
  },

  previous: function () {
    var count = this.ul.children.length;

    this.goto(this.selected? this.index - 1 : count - 1);
  },

  // Should not be used, highlights specific item without any checks!
  goto: function (i) {
    var lis = this.ul.children;

    if (this.selected) {
      lis[this.index].setAttribute("aria-selected", "false");
    }

    this.index = i;

    if (i > -1 && lis.length > 0) {
      lis[i].setAttribute("aria-selected", "true");
      this.status.textContent = lis[i].textContent;

      $.fire(this.input, "sensors-jssdk-awesomplete-highlight", {
        text: this.suggestions[this.index]
      });
    }
  },

  select: function (selected, origin) {
    if (selected) {
      this.index = $.siblingIndex(selected);
    } else {
      selected = this.ul.children[this.index];
    }

    if (selected) {
      var suggestion = this.suggestions[this.index];

      this.awesomplete_select({text: suggestion,
        origin: origin || selected});

      var allowed = $.fire(this.input, "sensors-jssdk-awesomplete-select", {
        text: suggestion,
        origin: origin || selected
      });

      if (allowed) {
        this.replace(suggestion);
        this.close();
        $.fire(this.input, "sensors-jssdk-awesomplete-select-complete", {
          text: suggestion
        });
      }
    }

  },

  evaluate: function() {
    var me = this;
    var value = this.input.value;

    if (value.length >= this.minChars && this._list.length >= 0) {
      this.index = -1;
      // Populate list with options that match
      this.ul.innerHTML = "";
      this.suggestions = this._list
        .map(function(item) {
          return new Suggestion(me.data(item, value));
        })
        .filter(function(item) {
          return me.filter(item, value);
        })
        .sort(this.sort)
        .slice(0, this.maxItems);
      this.suggestions.forEach(function(text) {
          me.ul.appendChild(me.item(text, value));
        });

      if (this.ul.children.length === 0) {
        this.close();
      } else {
        this.open();
      }
    }
    else {
      this.close();
    }
  }
};

// Static methods/properties

_.all = [];

_.FILTER_CONTAINS = function (text, input) {
  return RegExp($.regExpEscape(input.trim()), "i").test(text);
};

_.FILTER_STARTSWITH = function (text, input) {
  return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
};

_.SORT_BYLENGTH = function (a, b) {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a < b? -1 : 1;
};

_.ITEM = function (text, input) {
  var html = input === '' ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");
  return $.create("li", {
    innerHTML: html,
    "aria-selected": "false"
  });
};

_.REPLACE = function (text) {
  this.input.value = text.value;
};

_.DATA = function (item/*, input*/) { return item; };

// Private functions

function Suggestion(data) {
  var o = Array.isArray(data)
    ? { label: data[0], value: data[1] }
    : typeof data === "object" && "label" in data && "value" in data ? data : { label: data, value: data };

  this.label = o.label || o.value;
  this.value = o.value;
}
Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
  get: function() { return this.label.length; }
});
Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
  return "" + this.label;
};

function configure(instance, properties, o) {
  for (var i in properties) {
    var initial = properties[i],
        attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

    if (typeof initial === "number") {
      instance[i] = parseInt(attrValue);
    }
    else if (initial === false) { // Boolean options must be false by default anyway
      instance[i] = attrValue !== null;
    }
    else if (initial instanceof Function) {
      instance[i] = null;
    }
    else {
      instance[i] = attrValue;
    }

    if (!instance[i] && instance[i] !== 0) {
      instance[i] = (i in o)? o[i] : initial;
    }
  }
}

// Helpers

var slice = Array.prototype.slice;

function $(expr, con) {
  return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
}

function $$(expr, con) {
  return slice.call((con || document).querySelectorAll(expr));
}

$.create = function(tag, o) {
  var element = document.createElement(tag);

  for (var i in o) {
    var val = o[i];

    if (i === "inside") {
      $(val).appendChild(element);
    }
    else if (i === "around") {
      var ref = $(val);
      ref.parentNode.insertBefore(element, ref);
      element.appendChild(ref);
    }
    else if (i in element) {
      element[i] = val;
    }
    else {
      element.setAttribute(i, val);
    }
  }

  return element;
};

$.bind = function(element, o) {
  if (element) {
    for (var event in o) {
      var callback = o[event];

      event.split(/\s+/).forEach(function (event) {
        element.addEventListener(event, callback);
      });
    }
  }
};

$.fire = function(target, type, properties) {
  var evt = document.createEvent("HTMLEvents");

  evt.initEvent(type, true, true );

  for (var j in properties) {
    evt[j] = properties[j];
  }

  return target.dispatchEvent(evt);
};

$.regExpEscape = function (s) {
  return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
};

$.siblingIndex = function (el) {
  /* eslint-disable no-cond-assign */
  for (var i = 0; el = el.previousElementSibling; i++);
  return i;
};


_.$ = $;
_.$$ = $$;

return _;

}());



  var Utils = {};
  Utils.Formatting = {
    escape: function(str) {
      return str.replace(/"/g, '\\"').replace(/'/g, '\\\'');
    },
    capitalize: function(str, leadingOnly) {
      var capitalizeWord;
      if (str == null) {
        str = '';
      }
      capitalizeWord = function(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
      };
      if (leadingOnly) {
        return capitalizeWord(str);
      }
      return str.split(' ').map(capitalizeWord).join(' ');
    },
    numberWithCommas: function(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    formatApproximateNumber: function(num) {
      if (num > 1000000000) {
        return "" + ((num / 1000000000).toFixed(1)) + "B";
      }
      if (num > 1000000) {
        return "" + ((num / 1000000).toFixed(1)) + "M";
      }
      if (num > 10000) {
        return "" + ((num / 1000).toFixed(1)) + "K";
      }
      return this.numberWithCommas(Math.floor(num));
    }
  };


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.sensors-jssdk-modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.sensors-jssdk-modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('sensors-jssdk-modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('sensors-jssdk-fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('sensors-jssdk-in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e);

      if(that.options.sacallback){
        that.options.sacallback();
      }
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('sensors-jssdk-in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('sensors-jssdk-fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('sensors-jssdk-modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('sensors-jssdk-fade') ? 'sensors-jssdk-fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('sensors-jssdk-modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('sensors-jssdk-in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('sensors-jssdk-in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('sensors-jssdk-fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'sensors-jssdk-modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}($);



  $.fn.gSelectBox = function(){
    return $(this).each(function(a,b){
      $(b).css({position:'relative'});
      var label=$('<label></label>');
      $(b).prepend(label);
      var arrow = $('<i class="sensors_jssdk_gselect_box_arrow">&lt;</i>');
      arrow.css({color: 'rgb(0, 178, 122)',display:'block',font: '14px Comic Sans MS',position: 'absolute',right: '10px',top: '8px',transform: 'rotate(270deg)'});
      $(b).prepend(arrow);
      var select = $(b).find('select');
      select.addClass('sensors_jssdk_gselect_box_select').css({cursor:'pointer',position:'absolute',opacity:0,width:'100%',height:'100%',left:0,top:0}).off('change').on('change',function(){
        label.text($(this).find('option:checked').text());
      });
      label.text(select.find('option:checked').text());

    });
  };


  // draggable
  (function(){
    $.fn.gdrag = function(o) {
      o = $.extend({
        bar: null,
        sty: 'draggable'
      }, o);
      $(this).each(function() {
        $(this).on('mousedown',function(e) {
          if(e.target.tagName === 'BUTTON'){
            return false;
          }
          var that = o.bar || $(this),
            startfx = e.pageX,
            startfy = e.pageY,
            starttx = that.offset().left,
            startty = that.offset().top;
          e.preventDefault();
          $(document).on("mousemove", movehand).on("mouseup", uphand);
          function movehand(event) {
            that.addClass(o.sty).offset({
              top: startty + event.pageY - startfy,
              left: starttx + event.pageX - startfx
            })
            if(!o.keepBottom){
              that.css({
                bottom: 'auto'
              });
            }
            event.stopPropagation();
          }
          function uphand(event) {
            that.removeClass(o.sty);
            $(document).off("mousemove", movehand).off("mouseup", uphand);
            event.stopPropagation();
          }
        })
      });
      return $(this);
    };
  })();





  // highlight

    function Highlight(className) {
      this.state = [];
      this.highlightClass = className;
    }

    Highlight.prototype = {
      // 下次再次掉用时会自动清楚上次的
      add: function($t) {
        this.removeAll();
        this.addMore($t)
      },
      remove: function($t) {
        $t.removeClass(this.highlightClass);
      },
      removeAll: function() {
        for (var i = 0; i < this.state.length; i++) {
          if (this.state[i]) {
            this.state[i].removeClass(this.highlightClass);
          }
        }
        this.state = [];
      },
      removeHTML: function() {
        $('.' + this.highlightClass).removeClass(this.highlightClass);
        this.state = [];
      },
      // 多次的掉用，不会清除上次的
      addMore: function($t) {
        $t.addClass(this.highlightClass);
        this.state.push($t);
      }
    };


    var highlightSelected = new Highlight('sensors-outline-highlight-frame');
    var highlightDeployedSelected = new Highlight('sensors-outline-highlight-frame-deployed');









  function EventDefine() {

  }

  EventDefine.prototype = {
    getSelector: function() {
      var classes, href, id, selector, text;
      selector = this.targetText('tag');
      id = this.targetText('id');
      if (id) {
        selector += "#" + id;
      }
      classes = this.targetTextMulti('classes');
      classes = classes != null ? classes.filter(Utils.Display.isValidAttr) : void 0;
      if (classes.length) {
        selector += "." + (classes.join('.'));
      }
      href = this.targetText('href');
      if (href) {
        selector += "[href=" + (Utils.Formatting.escape(href)) + "]";
      }
      text = this.targetText('text');
      if (text) {
        selector += ":contains(" + (Utils.Formatting.escape(text)) + ")";
      }
      return selector;
    },
    getSelfAttr: function($target) {


      var selector = {}, text, href, tagName = $target.prop('tagName').toLowerCase();


/*
      if (tagName === 'a') {
        href = $target.attr('href');
        if (href) {
          selector.href = Utils.Formatting.escape(href);
        }
        text = $target.text();
        if (text) {
          selector.text = Utils.Formatting.escape(text);
        }

      } else if (tagName === 'input') {


      } else if (tagName !== 'html' && tagName !== 'body') {
        text = $target.text();
        if (text) {
          selector.text = Utils.Formatting.escape(text);
        }
      }
*/
      text = $target.text();
      if (text) {
        selector.text = text;
        //Utils.Formatting.escape(text);
      }

      return selector;

    },
    toSelector: function($target) {
      var isValidAttr = function(attr) {
        return /^[\w-]+$/g.test(attr);
      };
      var classes, err, finalSelector, id, illegalId, produceSelector, selector, tag, _ref;
      tag = $target.prop('tagName').toLowerCase();
      id = $target.attr('id');

// todo     classes = _.compact((_ref = $target.attr('class')) != null ? _ref.split(' ') : void 0);
      
      _ref = $target.prop('className');
      if(_ref != null){
          _ref = ' ' + $target.prop('className') + ' ';
          for(var i in SAS.IGNORE.iclass){
            
            _ref = _ref.replace(' ' + i + ' ', '');

          }
          _ref = _ref.replace(/^\s+/,'').replace(/\s+$/,'');
          if(_ref === ''){
            classes = [];
          }else{
            classes = _ref.split(' ')
          }
      }else{
        classes = [];  
      }
      

      selector = tag;
      if (id) {
        selector += "#" + id;
      }
      produceSelector = function(classes) {
        if (classes.length) {
          return "" + selector + "." + (classes.join('.'));
        } else {
          return selector;
        }
      };
      try {
        finalSelector = produceSelector(classes);
        $(finalSelector);
      } catch (_error) {
        err = _error;
        classes = classes.filter(isValidAttr);
        finalSelector = produceSelector(classes);
      }
      return finalSelector;
    },
    toAllSelector: function($target) {
      var $parent, newSelSize, newSelector, parts, selSize, selector, targetSel;
      selector = this.toSelector($target);
      $parent = $target.parent();
      selSize = $(selector).length;

      while ($parent.prop('tagName') !== 'BODY' && selSize !== 1) {

        newSelector = '' + (this.toSelector($parent)) + ' ' + selector;
        newSelSize = $(newSelector).length;
        if (newSelSize < selSize) {
          selector = newSelector;
          selSize = newSelSize;
        }
        $parent = $parent.parent();
      }


      var nthEle = selector;
      var selfAttr = this.getSelfAttr($target);
/*
      var lastSelector = selector;
      if (selSize !== 1) {
        for(var i in selfAttr) {
          if (i !== 'text') {
            lastSelector = lastSelector.filter('['+i+'*="'+selfAttr[i]+'"]');
          } else {
            lastSelector = lastSelector.filter(':contains("'+selfAttr[i]+'")');
          }
          if(lastSelector.length === 1){
            return {}
          }
        }
      }
*/

      /*
       targetSel = this.setTargetSelector();
       if ($('.heap-tooltip-ignore-containers input:checked').length) {
       selector = targetSel;
       } else {
       parts = selector.split(' ');
       parts.splice(parts.length - 1, 1, targetSel);
       selector = parts.join(' ');
       }*/


      return {
        nthEle: nthEle,
        selfAttr: selfAttr
      };

    }


  };



// 浮层模块
function Floatlayer(){

    this.ignore = SAS.IGNORE;

    //this.textErrorEle = this.eleError.text();

    this.verifyRule = Floatlayer.rule;


  this.eleOut = $('<div class="sensors-jssdk-modal sensors-jssdk-fade" id="sensorsdata_vtrack_floatlayer_out" tabindex="-1" role="dialog" aria-hidden="true" sensors_ignore_tag="all"></div>');
  this.eleOut.appendTo($(document.body));


  this.tpl = sd.template.popover_box;

  this.eleOut.on('hide.bs.modal', function () {
    highlightSelected.removeAll();
  });


  }

  Floatlayer.rule = {
    name: function(val){
      var reg = /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i;
      return reg.test(val) ? true : '英文事件名只支持英文、数字和下划线，且不能是预置名字。';
    },
    url: function(val){
      return val !== '' ? true : 'url不能为空';
    },
    selfText: function(val){
     return val !== '' ? true : '包含内容不能为空';
    }
  };


Floatlayer.prototype = {
   init: function(obj) {


    this.target = obj.target;
    this.selector = obj.selector;

    var $parent = this.target;
    if($parent.prop('tagName') === 'BODY' || $parent.attr(this.ignore.tag) === this.ignore.iself){
      return false;
    }
    $parent = $parent.parent();
    while ($parent.prop('tagName') !== 'BODY') {
      if ($parent.attr(this.ignore.tag) === this.ignore.iall) {
        return false;
      }
      $parent = $parent.parent();
    }

    highlightSelected.add(this.target);
    this.show();


  },
  getEleData: function(){

    this.dataDefine = {
      name: '',
      nthEle: this.selector.nthEle.split(' '),
      //selfAttr: this.selector.selfAttr,
      selfText: this.selector.selfAttr.text
    }
    return this.dataDefine;
  },
  checkUrlMethodShow: function(){
    // 文峰要求如果是没有search和hash的url，就默认是固定匹配
    var href = location.href.replace(/\?$/,'').replace(/#$/,'');
    var mode = 'part';
    if (location.search === '' && location.hash === '') {
      mode = 'fixed';
    }

    this.eleOut.find('[data-name="sensorsdata-vtrack-url-radio"]').val(mode);
    var urlInput = this.eleOut.find('[data-name="url"]');
    urlInput.val(href);

    if(mode === 'fixed'){
      urlInput.prop('disabled',true);
    }else if(mode === 'part'){
      urlInput.prop('disabled',false);
      href = href.replace(/\?.+$/,'').replace(/#.+$/,'');
      urlInput.val(href);
    }

    try {
      urlInput.get(0).selectionStart = urlInput.get(0).value.length;
    }catch(e){}

  },  
  show: function(){
    var me = this;
    var data = this.getEleData();
    this.eleOut.html(this.tpl(data));

    this.checkUrlMethodShow();

    this.eleOut.find('.sensors-jssdk-gselectbox-out').gSelectBox();

    this.eleOut.modal({
      sacallback: function(){
         setTimeout(function(){

            var name = me.eleOut.find('input[data-name="name"]');
            var cname = me.eleOut.find('input[data-name="cname"]');


            _.ajax({
              url: sdkMain.vtrackEventsUrl,
              cors: true,
              header:{cors: "true"},
              success: function(data){
                data = data || [];
                if(data.length === 0){
                  return false;
                }

                var suggest = new Awesomplete(name[0], {
                  filter: Awesomplete.FILTER_CONTAINS,
                  maxItems: 10,
                  list: data,
                  minChars:0,
                  data: function (text, input) {
                    return {label:text.name + ' (' + text.cname + ')',value:text.name,cname:text.cname};
                  },
                  awesomplete_select: function(text,origin){
                    var nameval = text.text.value;
                    if(nameval !== ''){
                      var name2 = $.grep(data,function(obj){
                        return obj.name === nameval;
                      });
                      if(name2.length !== 0){
                        cname.val(name2[0].cname);
                      }else{
                        cname.val('');
                      }
                    }
                  }
                });

                name.focus().on('input',function(){
                  var nameval = name.val();
                  if(nameval !== ''){
                    var name2 = $.grep(data,function(obj){
                      return obj.name === nameval;
                    });
                    if(name2.length !== 0){
                      cname.val(name2[0].cname);
                    }else{
                      cname.val('');
                    }
                  }
                });


              },
              error: function(){
              }
            });




          },0);
      }
    });

    this.events_();

 


  },
  events_: function(){
    var me = this;
    this.eleOut.find('.sensors-jssdk-popover-button').off().on('click',function(){
      me.defineEvent();
    });

    this.eleOut.find('[data-name="sensorsdata-vtrack-url-radio"]').on('change',function(){
      me.eleOut.find('[data-name="url"]').prop('disabled',false);
    });

    var ele = this.eleOut.find('[data-name="selfText"]');
    var eleSelect = this.eleOut.find('[data-name="selfTextCheck"]');
    eleSelect.on('change',function(){  
      if($(this).val() === 'yes'){
        ele.show();
      }else{
        ele.hide();
      }
    });

    if(eleSelect.val() === 'yes'){
      ele.show();
    }else{
      ele.hide();
    }



  },
  close: function(){
    this.eleOut.modal('hide');    
  },
  getSelfSelector: function(){
    var out = this.eleOut;
    var selfSelector = {};
    //var selector = $(this.dataDefine.nthEle);

    if(out.find('[data-name="selfTextCheck"] option:checked').val() === 'yes'){
      selfSelector.text = out.find('[data-name="selfText"]').val();
    }
    return selfSelector;
  },
  getDefineData: function(){

    var out = this.eleOut;
    return {
      name: out.find('[data-name="name"]').val(),
      cname: out.find('[data-name="cname"]').val(),
      url: out.find('[data-name="url"]').val(),
      urlMode: out.find('[data-name="sensorsdata-vtrack-url-radio"] option:checked').val(),
      selfAttr: this.getSelfSelector()
      //selector: this.getSelector()
    };
  },
  checkDefineData: function(pageDefineData){
    var temp = null;
    for(var i in pageDefineData){
      if(this.verifyRule[i]){
        temp = this.verifyRule[i](pageDefineData[i]);
        if(temp !== true){
          return temp;
        }
      }

    }
    return true;
  },
  closePop: function(){
    highlightSelected.removeAll();
    sdkVisual.floatlayer.close();
  },
//   {name:'事件名', url:'', triggers:  JSON.stringify {nthEle:['层级从外到内'],selfAttr:{href:'',text:''},url:''}}
  defineEvent: function(){
    var me = this;

    var originalData = this.getDefineData();
    var dataEvent = {};

    dataEvent.name = originalData.name;
    if (originalData.cname !== '') {
      dataEvent.cname = originalData.cname;
    }

    dataEvent.triggers = [];
    dataEvent.triggers[0] = {};
    dataEvent.triggers[0].lib = 'Web';
    dataEvent.triggers[0].url = JSON.stringify({
      url: originalData.url,
      mode: originalData.urlMode,
      origin: location.href
    });
    dataEvent.triggers[0].config = {};
    dataEvent.triggers[0].snapshot = '';

    
    dataEvent.triggers[0].config.eventName = originalData.name;
//    dataEvent.triggers[0].config.cname = originalData.cname;

// 注意先后顺序问题，影响
    dataEvent.triggers[0].config.nthEle = this.dataDefine.nthEle;
    dataEvent.triggers[0].config.selfAttr = originalData.selfAttr;

//      dataEvent.triggers[0].config.selector = orginal.selector;
//      dataEvent.triggers[0].config.url = dataEvent.url;

    dataEvent.triggers[0].config = JSON.stringify(dataEvent.triggers[0].config);


    var dataCheck = {
      name: originalData.name, 
      url: originalData.url
    };
    /*
    if(this.eleOut.find('[data-name="selfTextCheck"]').is(':visible')){
      dataCheck.selfText = originalData.selfAttr.text || '';
    }*/
    var data = this.checkDefineData(dataCheck);



    if(typeof data === 'string' || !data){
      this.showError(data);
      return false;
    }

    _.ajax({
      url: sdkMain.defineUrl,
      type:'POST',
      cors: true,
      header:{cors: "true"},
      contentType: 'application/json',
      data: JSON.stringify(dataEvent),
      success: function(data){
        me.closePop();
        sdkVisual.triggerBox.show();
      },
      error: function(data,code){
        if(code === 409){
          me.showError('已经有了相同的埋点条件');
        }
      }

    });


  },

  showError: function(data){
    var errorEle = this.eleOut.find('.sensors-jssdk-popover-head-error-notice');
    errorEle.text(data).show();
    setTimeout(function(){
      errorEle.hide();
    },6000)

  }

}


sdkVisual.floatlayer = new Floatlayer();

  function HeaderBar(para) {
    this.tpl = sd.template.head_box;
    this.bar = null;
    this.btnDefine = null;
    this.btnTest = null;
    this.btnQuit = null;
    this.btnMini = null;

    this.data = para.data;

    this.init();
  }

  HeaderBar.prototype = {
    init: function() {

      var tpl = this.tpl(this.data);
      this.bar = $(tpl);

      $(document.body).append(this.bar);

      this.btnDefine = this.bar.find('[data-sensors-action="define_mode"]');
      this.btnTest = this.bar.find('[data-sensors-action="test_mode"]');
      this.btnQuit = this.bar.find('[data-sensors-action="exit_login"]');

      this.btnDefineUrl = this.bar.find('[data-sensors-action="define_url"]');
      this.btnTrigger = this.bar.find('[data-sensors-action="trigger_box"]');  

      this.btnMini = this.bar.find('[data-sensors-action="mini-right"]');
      this.btnMini2 = $('<div sensors_ignore_tag="all" class="sensors-jssdk-head-out" style="width: auto;display:none;"> <div class="sensors-jssdk-head-in"><div class="sensors-jssdk-head-in-right" style="width: auto;"><button data-sensors-action="mini-right-2" style="background: rgb(0, 153, 119) none repeat scroll 0% 0%; font-weight: bold;" class="sensors-jssdk-btn"> &lt; </button></div></div></div>');
      $(document.body).append(this.btnMini2);

      this.events_();
    },
    quit: function() {
      var me = this;
      _.ajax({
        url: sdkMain.tokenUrl,
        type: 'delete',
        cors: true,
        header:{cors: "true"},
        success:function(){
          sdkMain.removeLifeCookie();
          location.reload();
        },
        error: function(){

        }
      });

    },
    defineMode: function() {
      if(this.btnDefine.hasClass('sensors-jssdk-btn-success')){
       return false;
      }else{
        sdkMain.setLifeCookieNavStatus('defineMode');

        location.reload();
      }
    },
    testMode: function() {
      if(this.btnTest.hasClass('sensors-jssdk-btn-success')){
        return false;
      }else{
        sdkMain.setLifeCookieNavStatus('testMode');

        location.reload();
      }
    },
    events_: function() {
      var me = this;

      me.bar.gdrag({except:'button'});
 

      this.btnDefine.on('click', function() {
        me.defineMode();
      });
      this.btnTest.on('click', function() {
        me.testMode();
      });
      this.btnQuit.on('click', function() {
        me.quit();
      });
      this.btnDefineUrl.on('click', function(){
        sdkVisual.triggerBox.hide();
        sdkVisual.defineUrlBox.toggle(me.btnDefineUrl);
      });
      this.btnTrigger.on('click', function(){
        sdkVisual.defineUrlBox.hide();
        sdkVisual.triggerBox.toggle(me.btnTrigger);
      });


      this.btnMini.on('click',function(){
        me.btnMini2.show();
        me.bar.hide();

      });

      this.btnMini2.on('click',function(){
        me.btnMini2.hide();
        me.bar.show();
      });



    }
  };







  function TestMode(data){
    this.dataStore = [];
    this.maxStoreTime = 10;
    this.init();
  }
  TestMode.prototype = {
    addToStore: function(data){
      var storage = [];
      this.dataStore.unshift(data);

      if(this.dataStore.length > this.maxStoreTime){
        storage = this.dataStore.slice(0,this.maxStoreTime);
      }else{
        storage = this.dataStore;
      }
      this.save(storage);
    },
    save: function(data){
      _.localStorage.set(sdkMain.visualStorageName,JSON.stringify(data));
    },
    get: function(){
      var historyStr = '';
      if(localStorage.getItem(sdkMain.visualStorageName) !== null){
        historyStr = _.localStorage.parse(sdkMain.visualStorageName) || '';
      }
      return historyStr;
    },
    init : function(){
      sd.init();
      var me = this;
      sd.customEv.on('debugInfo',function(ev,data){
        me.showTrackInfo(data,'vtrack')
      });

      sdkVisual.headerBar.btnDefineUrl.hide();
      sdkVisual.headerBar.btnTrigger.hide();
    },
    createTestBox: function(){
      var tpl = sd.template.testmode_box({});
      tpl = $(tpl);
      
      var data = this.get();

      if ($.isArray(data)) {
        this.dataStore = data.slice(0,10);
      }


      $(document.body).append(tpl);

      this.eleOutput = tpl.find('ul');

      tpl.find('header').gdrag({bar: tpl, keepBottom: true});

      this.eleOutput.append(this.dataStore.join(''));


    },
      //parse vtrack events all
    parseData: function(data){
      this.dataUndeployed = data.binding;
      this.requireData = sdkMain.checkUrl(this.dataUndeployed);
      this.listenEvents();

    },
    getEle: function(data){
      var newEle = null;

      //var ele = all.filter(':not([sensors_ignore_tag])');

      var ele = $(data.nthEle.join(' '));

      if(data.selfAttr && data.selfAttr.text !== void 0){

        ele = ele.filter(':contains('+data.selfAttr.text+')');
      }
      ele.each(function(a,b){
        b = $(b);
        if(b.closest('[' + SAS.IGNORE.tag + '="' + SAS.IGNORE.iall + '"]').length === 0 && b.attr(SAS.IGNORE.tag) !== SAS.IGNORE.iself){
          newEle = newEle? newEle.add(b) : b;
        }
      });
      return newEle;
    },
      //测试模式下的 listen vtrack events all
    listenEvents: function(){
      var data = this.requireData;
      var me = this;
      var tempEle = null;
      for(var i =0; i< data.length; i++){
        tempEle = this.getEle(data[i]);
        if(tempEle){
          tempEle.on('click',function(data){
              return function(){
                me.showOutput(data);
              }
          }(data[i]) );  
        }
      }
    },
      //测试模式下 显示debug信息
    showOutput: function(data){
      var str = '<li>';

      str += data.eventName != null ? '<span style="color:#ff4e00;">'+data.eventName+'</span><span>' : '未定义事件名';
      str += data.deployed ? '（已部署）' : '（未部署）';
      var date = new Date();
      function left2(data){
        data = String(data);
        if(data.length === 1){
          return '0'+data;
        }else{
          return data;
        }
      }
      str += left2(date.getHours()) + ':' + left2(date.getMinutes()) + ':' + left2(date.getSeconds()) + '</span>';


      this.storeStr_ = str;

      sd.sdkMain.doVTrackAction(data);



    },
    showTrackInfo: function(data, mode){
      var str = this.storeStr_ + '<br/>';

      str += JSONTree.create(data);
      str += '</li>';

      this.addToStore(str);

      str = $(str).hide().css({background:'#cfe5d8'});

      this.eleOutput.prepend(str);
      str.slideDown();
      setTimeout(function(){
        str = str.css({background:'none'});        
      },1500);

    }





  }











  function NoTrackMain() {

    this.switchNav();

  }

  NoTrackMain.prototype = {
    switchNav: function(){
      var navState = sdkMain.getLifeCookieNavStatus() || 'defineMode';
      sdkVisual.headerBar = new HeaderBar({data:{navStatus: navState}});

      if(navState === 'defineMode'){
        this.showDefineMode();
      }else if(navState === 'testMode'){
        this.showTestMode();
      }
    },
    showTestMode: function() {
            // 标志是test模式
      sd.vtrack_mode = 'testMode';


      $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.prop('tagName') === 'A') {
          e.preventDefault();
        }
      });

      //render
      sdkVisual.testMode = new TestMode();

      //get vtrack events all
      _.ajax({
        url: sdkMain.getAllVtrackUrl,
        cors: true,
        header:{cors: "true"},
        success: function(data){
          sdkVisual.testMode.parseData(data);
        },
        error: function(){

        }
      });

      sdkVisual.testMode.createTestBox();

    },
    showDefineMode: function() {      
      sd.vtrack_mode = 'defineMode';

      var eventDefine = new EventDefine();

      //sdkVisual.triggerBox = new TriggerBox();

      // 过滤掉不需要的点击
      $(document).on('click', '[' + SAS.IGNORE.tag + '="' + SAS.IGNORE.iall + '"]', function(e) {
        e.stopPropagation();
      });

      $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.prop('tagName') === 'BODY' || target.prop('tagName') === 'HTML' || target.attr(SAS.IGNORE.tag) === SAS.IGNORE.iself) {
          return false;
        }
        var selector = eventDefine.toAllSelector($(e.target));
        sdkVisual.floatlayer.init({
          target: $(e.target),
          selector: selector
        });

      });



      $(document).on('click','a',function(e){
        if($(this).parents('[' + SAS.IGNORE.tag + '="' + SAS.IGNORE.iall + '"]').length === 0){
  
          var selector = eventDefine.toAllSelector($(e.target));
          sdkVisual.floatlayer.init({
            target: $(e.target),
            selector: selector
          });

          e.preventDefault();
          return false;

        }
      });

      //readyToHighlight();


    }


  };


  

  sdkVisual.main = new NoTrackMain();







function DefineUrlBox(){
  this.eleOut_ = null;
  this.templateOut_ = sd.template.define_url;

  this.vtrackDeleteUrl = sdkMain.apiDomain + '/vtrack/triggers';
  this.vtrackDeployUrl = sdkMain.apiDomain + '/vtrack/deploy/Web';
  this.init();

} 
DefineUrlBox.prototype = {
  init: function(){
    this.eleOut_ = $('<div sensors_ignore_tag="all" class="sensors-jssdk-trigger-box-outlet"></div>');
    
    $(document.body).append(this.eleOut_);
  },
  toggle: function(eleBtn){
    
    this.eleTitleBtn = eleBtn || sdkVisual.headerBar.btnDefineUrl;
    if(this.isShow){
      this.hide();
    }else{
      this.show();
    }
  },
  show: function(){
    this.eleTitleBtn = this.eleTitleBtn || sdkVisual.headerBar.btnDefineUrl;
    var me = this;
    this.eleOut_.hide();
    this.eleTitleBtn.addClass('sensors-jssdk-title-select');
    this.refreshList(function(){});
    me.eleOut_.css({right:-320,display:'block'}).animate({right:0},500);
    me.isShow = true;
  },
  hide: function(){
    if(!this.isShow){
      return false;
    }
    this.eleTitleBtn.removeClass('sensors-jssdk-title-select');
    var me = this;
    this.eleOut_.animate({right:-320},500,function(){
      me.eleOut_.hide();
    });

    this.isShow = false;
  },

  // 获取事件列表
  ajaxTriggerBox: function(){
    var me = this;
    return new Promise(function(rs,rj){
      _.ajax({
        url: sdkMain.getAllVtrackUrl,
        cors: true,
        header:{cors: "true"},
        success: function(data){
          data = data || {};
          rs(data);
        },
        error: function(){

        }
      });
    });
  },
  getOriginUrl: function(data){
    var urlObj = null;

    var urlDataByDomain = {};

    var urlDataByPage = {};

    var temp = null;

    function getOrigin(url){
      return _.urlParse(url)._values.Origin;
    }

    for(var i in data){
      if(_.isJSONString(i)){
        urlObj = JSON.parse(i);
      }else{
        continue;
      }

      temp = getOrigin(urlObj.origin);

      urlDataByDomain[temp] = urlDataByDomain[temp] || {};
      urlDataByDomain[temp][urlObj.origin.replace(temp,'')] = urlObj.origin;
    }
    
      // 所有网站
    return urlDataByDomain;

  },
  refreshList: function(callback){
    var me = this;
    // 按照trigger_id做key的列表，用来显示hover效果时选中的元素。
    this.dataByDomain = {};

    this.ajaxTriggerBox().then(function(data){

      var dataOrigin = null;
      if(data && data.binding){
        dataOrigin = me.getOriginUrl(data.binding);
      }
      
      me.eleOut_.html(me.templateOut_(dataOrigin));

      callback && callback(); 

    });
  }

}

sdkVisual.defineUrlBox = new DefineUrlBox();

/*
----逻辑流程图----
1. 以下情况，重新渲染列表。有新增trigger，删除已部署，删除未部署，点击部署生效
2. 删除已部署的数据时候，并不会真删除，而是把把数据保存下来
3. 是否有改动的判断，通过 是否有删除数据  和 有未部署的trigger
4. format的数据 ＝ ajax数据 ＋ 当前删除数据
5. 删除，增加，已部署的三种状态的表示如下
删除(肯定是部署) － 有部署的删除
部署   ＝ 已部署
未部署  ＋ 有未部署的增加
*/
function TriggerBox(){
  this.eleOut_ = null;
  this.templateOut_ = sd.template.trigger_box;

  this.eleTitleChange = null;


// 用来判断是否有未部署的
  this.dataTitleChange = false;
// 临时保存删除的状态,需要再部署后清楚
  this.dataToDelete = [];

  this.vtrackDeleteUrl = sdkMain.apiDomain + '/vtrack/triggers';
  this.vtrackDeployUrl = sdkMain.apiDomain + '/vtrack/deploy/Web';


  this.init();

//  this.show

} 
TriggerBox.prototype={
  init: function(){
    this.eleOut_ = $('<div sensors_ignore_tag="all" class="sensors-jssdk-trigger-box-outlet"></div>');
    
    $(document.body).append(this.eleOut_);
    this.events_();

    this.refreshAllDeployedSelect();
  },
  toggle: function(eleBtn){
    
    this.eleTitleBtn = eleBtn || sdkVisual.headerBar.btnTrigger;
    if(this.isShow){
      this.hide();
    }else{
      this.show();
    }
  },
  show: function(){
    var me = this;
    
    this.eleTitleBtn = this.eleTitleBtn || sdkVisual.headerBar.btnTrigger;

    this.eleOut_.hide();
    this.eleTitleBtn.addClass('sensors-jssdk-title-select');
    this.refreshList(function(){
    });
    me.eleOut_.css({right:-320,display:'block'}).animate({right:0},500);
    me.isShow = true;
  },
  hide: function(){
    if(!this.isShow){
      return false;
    }
    this.eleTitleBtn.removeClass('sensors-jssdk-title-select');

    var me = this;
    this.eleOut_.animate({right:-320},500,function(){
      me.eleOut_.hide();
    });

    this.isShow = false;
  },
  hasChange: function(){
    // 判断是否有未部署的状态
    if(this.dataTitleChange === false && this.dataToDelete.length !== 0){
      this.dataTitleChange = true;
    }

    var eleTitleChange = this.eleOut_.find('.sensors-jssdk-trigger-box-header-title-change');
    if(this.dataTitleChange){
      eleTitleChange.css({color:'#f55'}).text('当前页面有未部署的改动');
      this.eleOut_.find('.sensors-jssdk-trigger-box-deploy-btn').show();
    }else{
      eleTitleChange.css({color:'#555'}).text('当前页面已部署的触发条件');
      this.eleOut_.find('.sensors-jssdk-trigger-box-deploy-btn').hide();
    }
  },
  events_: function(){
    var me = this;
    this.eleOut_.on('click','.sensors-jssdk-trigger-box-deploy-btn',function(){
      me.deployData();
    });
    this.eleOut_.on('click','.sensors-jssdk-trigger-box-content-delete',function(){
      var eleLi = $(this).closest('li');
      var id = eleLi.attr('data-trigger');
      if(eleLi.attr('data-deploy') === 'true'){
        me.dataToDelete.push(id);
        me.refreshList();
      }else{
        me.deleteTrigger([id],function(){
          me.refreshList();
        });
      }
    });
    
    this.eleOut_.on('click','.sensors-jssdk-trigger-box-content-revert',function(){
      var eleLi = $(this).closest('li');
      var id = eleLi.attr('data-trigger');
      
      
      me.dataToDelete.splice($.inArray(id,me.dataToDelete),1);

      me.refreshList();
    });


    this.eleOut_.on('mouseenter','.sensors-jssdk-trigger-box-content-list li',function(){
      me.hoverSelectedTrigger(true, $(this).attr('data-trigger'));
    }).on('mouseleave','.sensors-jssdk-trigger-box-content-list li',function(){
      me.hoverSelectedTrigger(false, $(this).attr('data-trigger'));
    });


  },
  // 获取事件列表
  ajaxTriggerBox: function(){
    var me = this;
    return new Promise(function(rs,rj){
      _.ajax({
        url: sdkMain.getAllVtrackUrl,
        cors: true,
        header:{cors: "true"},
        success: function(data){
          data = data || {};
          rs(data);
        },
        error: function(){

        }
      });
    });
  },
  ajaxAllEvents: function(){
    return new Promise(function(rs,rj){  
      _.ajax({
        url: sdkMain.vtrackEventsUrl,
        cors: true,
        header:{cors: "true"},
        success: function(data){
          data = data || {};
          rs(data);
        },
        error: function(){
        }
      });
    });
  },
  refreshList: function(callback){
    var me = this;

    // 重置数据
    this.dataTitleChange = false;
    // 按照trigger_id做key的列表，用来显示hover效果时选中的元素。
    this.dataByTriggerId = {};

    Promise.all([this.ajaxTriggerBox(),this.ajaxAllEvents()]).then(function(arr){

      // 当前页面的trigger，和cname
      var data = sdkMain.checkUrl(arr[0].binding),
        data2 = arr[1];

      // 刷新已部署
      me.refreshAllDeployedSelect(data);

      // format后的数据
      var formatData = {};
      // cname的对应关系
      var cnameRelation = {};

      // 获取cname
      $.each(data2,function(a,b){
        cnameRelation[b.name] = b.cname;
      });

      // 转化成event>trigger格式的数据
      $.each(data,function(a,b){
        // 把当前页面需要删除的数据标记
        if($.inArray( String(b.trigger_id), me.dataToDelete) !== -1){
          b.to_del = true;
        }
        // 判断是否有未部署的
        if(me.dataTitleChange === false &&  b.deployed === false){
          me.dataTitleChange = true;
        }
        
        //生成hover效果需要的数据
        me.dataByTriggerId[b.trigger_id] = b;


        if(formatData[b.eventName]){
          formatData[b.eventName].triggers.push(b);
        }else{
          formatData[b.eventName] = {};
          formatData[b.eventName].triggers = [b];
          formatData[b.eventName].cname = cnameRelation[b.eventName] || '';
          formatData[b.eventName].name = b.eventName;
        }

      });

      me.eleOut_.html(me.templateOut_(formatData));

      me.hasChange();

      callback && callback();




    });
  },

  // 删除事件
  deleteTrigger: function(data,callback){
    if(!$.isArray(data)){
      return false;
    }
    _.ajax({
      url: this.vtrackDeleteUrl,
      cors: true,
      type: 'DELETE',
      header:{cors:'true'},
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function() {
        callback && callback();
      }
    });


  },

  deployData: function(){
    var me = this;

    function callback(){
      _.ajax({
        cors: true,
        header:{cors: "true"},
        url: me.vtrackDeployUrl,
        type: 'PUT',
        success: function() {
          // 成功后，重置数据
          me.dataToDelete = [];
          me.dataTitleChange = false;

          me.refreshList();
        }
      });
    }
    // 如果有等待删除的，先删除掉
    if(this.dataTitleChange){
      if(this.dataToDelete.length !== 0){
        this.deleteTrigger(this.dataToDelete,callback);
      }else{
        callback();
      }
    }

  },
  refreshAllDeployedSelect: function(data){
    highlightDeployedSelected.removeAll();
    function refreshList(data){
      $.each(data,function(a,b){
        if(b.deployed === true){
          highlightDeployedSelected.addMore(sdkMain.getEle(b));
        }
      });
    }

    if(!data){
      this.ajaxTriggerBox().then(function(data){
        refreshList(sdkMain.checkUrl(data.binding));
      });
    }else{
      refreshList(data);
    }

  },
  hoverSelectedTrigger: function(isShow, data){
    var temp = this.dataByTriggerId[data];
    if(isShow){
      temp && sdkMain.getEle(temp).addClass('sensors-outline-highlight-frame-select');
    }else{
      temp && sdkMain.getEle(temp).removeClass('sensors-outline-highlight-frame-select');
    }

  }

}


sdkVisual.triggerBox = new TriggerBox();




})();
