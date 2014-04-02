(function(b,a){b(["JC.BaseMVC"],function(){JC.AutoComplete=c;var e=$(document),d=$(window);function c(f){f&&(f=$(f));if(c.getInstance(f)){return c.getInstance(f)}c.getInstance(f,this);this._model=new c.Model(f);this._view=new c.View(this._model);this._init();JC.log("AutoComplete inited",new Date().getTime())}c.getInstance=function(f,g){if(typeof f=="string"&&!/</.test(f)){f=$(f)}if(!(f&&f.length)||(typeof f=="string")){return}typeof g!="undefined"&&f.data(c.Model._instanceName,g);return f.data(c.Model._instanceName)};c.init=function(f){var g=[];f=$(f||document);if(f&&f.length){if(f.hasClass("js_compAutoComplete")){g.push(new c(f))}else{f.find("input.js_compAutoComplete").each(function(){g.push(new c(this))})}}return g};c.update=function(f,h,i){var g=c.getInstance(f);!g&&(g=new c(f));g&&g.update(h,i);return g};c.ajaxUpdate=function(f,h,i){var g=c.getInstance(f);!g&&(g=new c(f));g&&g.ajaxUpdate(h,i);return g};c.dataFilter;c.fixHtmlEntity=true;c.hideAllPopup=function(){$("ul.js_compAutoCompleteBox").each(function(){var f=$(this),h=f.parent(),g;if(h.hasClass("AC_layoutBox")){h.hide();g=h}else{f.hide();g=f}g.data("AC_INS")&&g.data("AC_INS").trigger("unbind_event")})};BaseMVC.build(c);JC.f.extendObject(c.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var f=this;f._model.selector().on("click",function(j){f.trigger("bind_event");j.stopPropagation();JC.f.safeTimeout(function(){},f._model.selector(),"SHOW_AC_POPUP",50);if(!f._model.popup().is(":visible")){f.trigger("show_popup")}});f._model.selector().on("focus",function(){f.trigger("bind_event");f.trigger("show_popup")});f.on("show_popup",function(){f.trigger("hide_all_popup");f._view.updateList();f.trigger(c.Model.SHOW);f.selector().addClass(c.Model.CLASS_FAKE)});f._model.selector().on("blur",function(){f._model.preVal=f._model.selector().val().trim();f.selector().removeClass(c.Model.CLASS_FAKE);f._model.verifyKey()});e.on("click",function(){f.trigger("unbind_event")});f.on("bind_event",function(j){f.trigger("unbind_event");e.on("keyup",h);e.on("keydown",g)});f.on("unbind_event",function(j){e.off("keyup",h);e.off("keydown",g)});function h(k){var l=k.keyCode,j=$(this),m=j.val().trim();if(l==38||l==40){c.Model.isScroll=true}JC.log("keyup",l,new Date().getTime());if(l){switch(l){case 38:case 40:k.preventDefault();case 37:case 39:return;case 27:f.trigger(c.Model.HIDDEN);return}}}function g(j){var k=j.keyCode,l=f._model.selector().val().trim();if(k==38||k==40){c.Model.isScroll=true}JC.log("keydown",k,new Date().getTime());if(k){switch(k){case 40:case 38:case 13:if(!f._model.popup().is(":visible")){return}break}if(!f._model.popup().is(":visible")){f.trigger(c.Model.SHOW)}switch(k){case 40:case 38:f.trigger(c.Model.UPDATE_LIST_INDEX,[k,j]);return;case 37:case 39:return;case 13:f.trigger(c.Model.ENTER,[j]);return;case 9:case 27:f.trigger(c.Model.HIDDEN);return}}f._model.keydownTimeout(setTimeout(function(){f.trigger(c.Model.UPDATE_LIST)},200))}f._model.layoutPopup().data("AC_INS",f);f._model.layoutPopup().on("click",function(j){j.stopPropagation()});f._model.layoutPopup().delegate("li","click",function(k,l){var j=$(this);if(!j.is("["+f._model.cacLabelKey()+"]")){return}f.trigger(c.Model.CHANGE,[j]);!f._model.cacMultiSelect()&&f.trigger(c.Model.HIDDEN);f.selector().trigger("cacItemClickHanlder",[j,f]);f._model.cacItemClickHanlder()&&f._model.cacItemClickHanlder().call(f,j);!l&&f._model.blurTimeout(setTimeout(function(){f._model.selector().trigger("blur")},50))});f._model.layoutPopup().delegate(".AC_closePopup","click",function(j){f.trigger("hide_all_popup")});f._model.layoutPopup().delegate(".AC_clear","click",function(j){f.selector().val("")});f.on("hide_all_popup",function(){c.hideAllPopup()});f.on(c.Model.HIDDEN,function(){f._view.hide()});f.on(c.Model.SHOW,function(){f._view.show()});f._model.layoutPopup().delegate("li","mouseenter",function i(j){if(c.Model.isScroll){return}f._view.updateIndex($(this).attr("data-index"),true)});f.on(c.Model.ENTER,function(k,j){f._model.cacPreventEnter()&&j.preventDefault();var l=f._model.selectedItem();l&&l.length&&l.trigger("click");!f._model.boolProp("cacMultiSelect")&&f.trigger(c.Model.HIDDEN)});f.on(c.Model.UPDATE_LIST_INDEX,function(k,l,j){j.preventDefault();f._view.updateListIndex(l==40?true:false);var m=f._model.selectedItem();m&&m.length&&f.trigger(c.Model.CHANGE,[m])});f.on(c.Model.UPDATE_LIST,function(j){this._view.updateList(this._model.selector())});f.on(c.Model.CHANGE,function(j,k){f._model.setSelectorData(k)});f.on(c.Model.UPDATE,function(k,j,l){f._model.initPopupData(j);f._view.build(j);l&&l.call(f,j)});f.on(c.Model.CLEAR,function(j){f._model.selector().val("");f._model.setIdSelectorData()});f._model.selector().on(c.Model.REMOVE,function(){try{f._model.popup().remove()}catch(j){}});f.on("select_item",function(j,k){if(typeof k=="undefined"){return}var l=f._model.popup(),m;if(!(l&&l.length)){return}m=l.find(JC.f.printf("li[data-id={0}]",k));m&&m.length&&m.trigger("click",[true])});f.on(c.Model.CLEAR_DATA,function(){f.trigger(c.Model.UPDATE,[[]])})},_inited:function(){var f=this;f._model.initData=f._model.dataItems();f.ajaxUpdate();if(!f._model.selector().is("[validCheckTimeout]")){f._model.selector().attr("validCheckTimeout",f._model.cacValidCheckTimeout())}},idSelector:function(){return this._model.cacIdSelector()},idVal:function(f){typeof f!="undefined"&&this.trigger("select_item");return this._model.cacIdVal()},ajaxUpdate:function(f,g){this._model.ajaxData(f,g);return this},show:function(){var f=this;setTimeout(function(){f.trigger("bind_event");f.trigger(c.Model.SHOW)},1);return f},hide:function(){this.trigger(c.Model.HIDDEN);return this},popup:function(){return this._model.popup()},update:function(g,h){var f=this;JC.log(this.selector().attr("class"),new Date().getTime());f._model.clearCache();!f._model.firstUpdate&&f.clear();f._model.firstUpdate=false;g=f._model.cacDataFilter(g);f.trigger(c.Model.UPDATE,[g]);f.trigger(c.Model.UPDATE_LIST);typeof h!="undefined"&&f.trigger("select_item",[h]);return f},clear:function(){this.trigger(c.Model.CLEAR);return this},clearAll:function(){this.trigger(c.Model.CLEAR);this.trigger(c.Model.CLEAR_DATA);return this},fixPosition:function(){var f=this._model.popup();f&&f.length&&f.is(":visible")&&this._view.show();return this}});c.Model._instanceName="AutoComplete";c.Model.UPDATE="AC_UPDATE";c.Model.CLEAR="AC_CLEAR";c.Model.CLEAR_DATA="AC_CLEAR_DATA";c.Model.ENTER="AC_ENTER";c.Model.CHANGE="AC_CHANGE";c.Model.HIDDEN="AC_HIDDEN";c.Model.SHOW="AC_SHOW";c.Model.UPDATE_LIST="AC_UPDATE_LIST";c.Model.UPDATE_LIST_INDEX="AC_UPDATE_LIST_INDEX";c.Model.REMOVE="AC_AUTOCOMPLETE_REMOVE";c.Model.CLASS_ACTIVE="AC_active";c.Model.CLASS_FAKE="AC_fakebox";c.Model.AJAX_CACHE={};JC.f.extendObject(c.Model.prototype,{init:function(){this.initData;this._cache={};this.firstUpdate=true},listItemTpl:function(){var f=JC.f.printf("<li "+this.cacIdKey()+'="{0}" '+this.cacLabelKey()+'="{1}" data-index="{2}" class="AC_listItem {3}">{1}</li>');this.is("[cacListItemTpl]")&&(f=JC.f.scriptContent(this.selectorProp("cacListItemTpl")));return f},cacItemClickHanlder:function(){return this.callbackProp("cacItemClickHanlder")},popup:function(){var f=this,g=f.selector().data("AC_panel");!g&&(g=this.selectorProp("cacPopup"));if(!(g&&g.length)){g=$(JC.f.printf('<ul class="AC_box js_compAutoCompleteBox"{0}>{1}</ul>',' style="position:absolute;"','<li class="AC_noData">'+f.cacNoDataText()+"</li>"));f.selector().data("AC_panel",g);f.cacMultiSelect()?g.appendTo(f.layoutPopup()):g.appendTo(document.body)}if(!this._inited){this._inited=true;g.css({width:f.cacBoxWidth()+"px"})}return g},layoutPopup:function(){if(!this._layoutPopup){if(this.cacMultiSelect()){this._layoutPopup=$('<div class="AC_layoutBox"></div>');this._layoutPopup.appendTo(document.body)}else{this._layoutPopup=this.popup()}}return this._layoutPopup},initPopupData:function(f){this.initData=f},verifyKey:function(){if(!this.cacStrictData()){return}var g=this,m=this.selector().val().trim(),k=[],f=g.selector().is("[cacIdKey]"),l;if(!m){g.selector().val("");g.setIdSelectorData();return}if(m){var j=g.cacIdVal(),i,h;$.each(g.initData,function(p,o){if(f){var n=o.label.trim();if(n===m){l=true;!h&&g.setIdSelectorData(o.id);h=true}if(n===m&&!j){g.setIdSelectorData(j=o.id)}if(n===m&&o.id===j){k.push(o);!i&&(g.setIdSelectorData(o.id));i=true;l=true;return false}}else{if(o.label.trim()==m){k.push(o);l=true}}})}if(!l){g.selector().val("");g.setIdSelectorData()}},cache:function(f){if(!(f in this._cache)){this._cache[f]=this.keyData(f)||this.initData}return this._cache[f]},clearCache:function(){this._cache={}},dataItems:function(){var f=this,h=f.listItems(),g=[];h.each(function(k,j){var i=$(this);g.push({id:i.attr(f.cacIdKey())||"",label:i.attr(f.cacLabelKey())})});return g},ajaxData:function(g,h){var f=this,g=g||f.attrProp("cacAjaxDataUrl");if(!g){return}if(g in c.Model.AJAX_CACHE){$(f).trigger("TriggerEvent",[c.Model.UPDATE,c.Model.AJAX_CACHE[g],h]);return}$.get(g).done(function(i){i=$.parseJSON(i);i=f.cacDataFilter(i);c.Model.AJAX_CACHE[g]=i;$(f).trigger("TriggerEvent",[c.Model.UPDATE,c.Model.AJAX_CACHE[g],h])})},keyData:function(f){var h=this,g=h.initData,l=0,k=h.cacCasesensitive(),n=f.toLowerCase(),j=[[],[],[],[]],i=[];for(l=0;l<g.length;l++){var m=g[l].label.toLowerCase();if(g[l].label.indexOf(f)==0){j[g[l].tag=0].push(g[l])}else{if(!k&&m.indexOf(n)==0){j[g[l].tag=1].push(g[l])}else{if(g[l].label.indexOf(f)>0){j[g[l].tag=2].push(g[l])}else{if(!k&&m.indexOf(n)>0){j[g[l].tag=3].push(g[l])}}}}}$.each(j,function(p,o){i=i.concat(o)});return i},setSelectorData:function(g){g&&(g=$(g));if(!(g&&g.length)){return}var f=this,i=g.attr(f.cacLabelKey()).trim(),h=g.attr(f.cacIdKey()).trim();f.selector().val(i);f.selector().attr("cacIdVal",h);f.setIdSelectorData(h)},setIdSelectorData:function(g){var f=this;if(!(f.cacIdSelector()&&f.cacIdSelector().length)){return}if(typeof g!="undefined"){f.cacIdSelector().val(g);f.selector().attr("cacIdVal",g)}else{f.cacIdSelector().val("");f.selector().attr("cacIdVal","")}},listItems:function(){var f;this.popup()&&this.popup().length&&(f=this.popup().find(this.cacSubItemsSelector()));return f},selectedItem:function(){var f;this.listItems().each(function(){var g=$(this);if(g.hasClass(c.Model.CLASS_ACTIVE)){f=g;return false}});return f},keyupTimeout:function(f){this._keyupTimeout&&clearTimeout(this._keyupTimeout);this._keyupTimeout=f},keydownTimeout:function(f){this._keydownTimeout&&clearTimeout(this._keydownTimeout);this._keydownTimeout=f},blurTimeout:function(f){this._blurTimeout&&clearTimeout(this._blurTimeout);this._blurTimeout=f},cacDataFilter:function(g){var f=this,h=f.callbackProp("cacDataFilter")||c.dataFilter;h&&(g=h(g));if(f.cacFixHtmlEntity()){$.each(g,function(j,i){i.label&&(i.label=$("<p>"+i.label+"</p>").text())})}return g},cacNoDataText:function(){var f=this.attrProp("cacNoDataText")||"数据加载中, 请稍候...";return f},cacValidCheckTimeout:function(){var f=this.intProp("cacValidCheckTimeout")||c.validCheckTimeout||1;return f},cacStrictData:function(){var f=this.boolProp("cacStrictData");return f},cacFixHtmlEntity:function(){var f=c.fixHtmlEntity;this.selector().is("[cacFixHtmlEntity]")&&(f=this.boolProp("cacFixHtmlEntity"));return f},cacLabelKey:function(){var f=this.attrProp("cacLabelKey")||"data-label";return f},cacIdKey:function(f){typeof f!="undefined"&&(this.selector().attr("cacIdKey",f));var g=this.attrProp("cacIdKey")||this.cacLabelKey();return g},cacIdVal:function(){var f=this,g=f.attrProp("cacIdVal");f.cacIdSelector()&&f.cacIdSelector().length&&(g=f.cacIdSelector().val());g=(g||"").trim();return g},cacIdSelector:function(){var f=this.selectorProp("cacIdSelector");return f},cacPreventEnter:function(){var f;f=this.selector().is("[cacPreventEnter]")&&JC.f.parseBool(this.selector().attr("cacPreventEnter"));return f},cacBoxWidth:function(){var f=0||this.intProp("cacBoxWidth");!f&&(f=this.selector().width());return f},cacCasesensitive:function(){return this.boolProp("cacCasesensitive")},cacSubItemsSelector:function(){var f=this.attrProp("cacSubItemsSelector")||"li";f+="["+this.cacLabelKey()+"]";return f},cacMultiSelect:function(){return this.boolProp("cacMultiSelect")}});JC.f.extendObject(c.View.prototype,{init:function(){var f=this;f._model.listItems().each(function(g){$(this).attr("data-index",g)}).removeClass(c.Model.CLASS_ACTIVE).first().addClass(c.Model.CLASS_ACTIVE)},hide:function(){var f=this;f._model.layoutPopup().hide()},show:function(){var f=this,g=f._model.selector().offset(),l=f._model.selector().prop("offsetHeight"),i=f._model.selector().prop("offsetWidth");f._model.layoutPopup().css({top:g.top+l+"px",left:g.left+"px"});var k,m=f._model.selector().val().trim(),h=f._model.cacIdVal(),j=f._model.cacLabelKey()!=f._model.cacIdKey();f._model.listItems().each(function(){var n=$(this),p=n.attr(f._model.cacLabelKey()),o=n.attr(f._model.cacIdKey());n.removeClass(c.Model.CLASS_ACTIVE);if(m==p){if(j&&h){h==o&&n.addClass(c.Model.CLASS_ACTIVE);k=n}else{n.addClass(c.Model.CLASS_ACTIVE);k=n}}});if(!k){f._model.listItems().first().addClass(c.Model.CLASS_ACTIVE)}f._model.layoutPopup().show()},updateList:function(){var f=this,i,k=[],j=f._model.selector().val().trim(),g=f._model.cacIdVal(),h;if(!j){h=f._model.initData}else{h=f._model.cache(j,g)}h&&f.build(h)},build:function(g){var f=this,h=0,i=[];if(g.length==0){f.hide();f._model.popup().html(JC.f.printf('<li class="AC_noData">{0}</li>',f._model.cacNoDataText()))}else{for(;h<g.length;h++){i.push(JC.f.printf(f._model.listItemTpl(),g[h].id,g[h].label,h,h===0?c.Model.CLASS_ACTIVE:""))}f._model.popup().html(i.join(""))}f._model.cacMultiSelect()&&!f._model.layoutPopup().find(".AC_addtionItem").length&&$(JC.f.printf('<div class="AC_addtionItem" style="text-align: right; padding-right: 5px;"><div>{0}{1}</div></div>','<a href="javascript:;" class="AC_control AC_clear">清除</a>&nbsp;','<a href="javascript:;" class="AC_control AC_closePopup">关闭</a>')).appendTo(f._model.layoutPopup())},currentIndex:function(g){var f=this,j=f._model.popup(),i=f._model.listItems(),h=-1;if(!i.length){return}i.each(function(l){var k=$(this);if(k.hasClass(c.Model.CLASS_ACTIVE)){h=l;return false}});if(h<0){h=g?0:i.length-1}else{h=g?h+1:h-1;if(h<0){h=i.length-1}else{if(h>=i.length){h=0}}}return h},updateListIndex:function(g){var f=this,h=f.currentIndex(g);f.updateIndex(h)},updateIndex:function(g,i){var f=this,h=f._model.listItems();f.removeActiveClass();$(h[g]).addClass(c.Model.CLASS_ACTIVE);!i&&f.setScroll(g)},setScroll:function(h){var f=this,k=f._model.listItems().eq(h),i=k.position().top+k.height(),g=f._model.popup().innerHeight(),j=f._model.popup().scrollTop();i=i+j;if(h==-1){f._model.selector().focus();f._model.listItems().removeClass(c.Model.CLASS_ACTIVE)}else{f._model.listItems().removeClass(c.Model.CLASS_ACTIVE);k.addClass(c.Model.CLASS_ACTIVE);if(i>g){f._model.popup().scrollTop(i-g)}if(k.position().top<0){f._model.popup().scrollTop(0)}}c.Model.SCROLL_TIMEOUT&&clearTimeout(c.Model.SCROLL_TIMEOUT);c.Model.SCROLL_TIMEOUT=setTimeout(function(){c.Model.isScroll=false},500)},removeActiveClass:function(){this._model.listItems().removeClass(c.Model.CLASS_ACTIVE)}});$.event.special[c.Model.REMOVE]={remove:function(f){if(f.handler){f.handler()}}};$(window).on("resize",function(f){$("input.js_compAutoComplete").each(function(){var g=c.getInstance($(this));g&&g.fixPosition()})});$(document).on("click",function(){c.hideAllPopup()});$(document).delegate("input.js_compAutoComplete","focus",function(f){!c.getInstance(this)&&new c(this)});return JC.AutoComplete})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));