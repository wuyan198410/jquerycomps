(function(b,a){b(["JC.common"],function(){(function(d){window.JC=window.JC||{log:function(){}};window.Suggest=JC.Suggest=c;function c(g){g&&(g=d(g));if(c.getInstance(g)){return c.getInstance(g)}c.getInstance(g,this);c._allIns.push(this);this._model=new f(g);this._view=new e(this._model);this._init()}c.prototype={_init:function(){var g=this;d([g._view,g._model]).on("BindEvent",function(h,j,i){g.on(j,i)});d([g._view,g._model]).on("TriggerEvent",function(h,j,i){g.trigger(j,[i])});g._view.init();g._model.init();g.selector().attr("autocomplete","off");g._initActionEvent();g.trigger("SuggestInited");return g},update:function(h,i){var g=this;typeof i=="undefined"&&(i=h);if(g._model.sugdatafilter()){i=g._model.sugdatafilter().call(this,i)}if(i&&i.q){g._model.cache(i.q,i)}this._view.update(i)},show:function(){this._view.show();return this},hide:function(){this._view.hide();return this},selector:function(){return this._model.selector()},layout:function(){return this._model.layout()},on:function(h,g){d(this).on(h,g);return this},trigger:function(h,g){d(this).trigger(h,g);return this},_initActionEvent:function(){var g=this;g.on("SuggestUpdate",g.update);g.on("SuggestInited",function(h){if(g._model.suginitedcallback()){g._model.suginitedcallback().call(g)}});g._model.selector().on("keyup",function(j){var h=d(this),l=h.val().trim(),k=j.keyCode,i=h.data("IgnoreTime");if(i&&(new Date().getTime()-i)<300){return}JC.log("keyup",l,new Date().getTime(),k);if(k){switch(k){case 38:case 40:j.preventDefault();case 37:case 39:return;case 27:g.hide();return}}if(!l){g.update();return}if(!g._model.layout().is(":visible")){if(g._model.cache(l)){g.update(g._model.cache(l));return}}if(g._model.preValue===l){return}g._model.preValue=l;if(g._model.cache(l)){g.update(g._model.cache(l));return}JC.log(l);if(g._model.sugqueryinterval()){if(g._model.timeout){clearTimeout(g._model.timeout)}g._model.timeout=setTimeout(function(){g._model.getData(l)},g._model.sugqueryinterval())}else{g._model.getData(l)}});g._model.selector().on("blur",function(h){g._model.timeout&&clearTimeout(g._model.timeout)});g._model.selector().on("keydown",function(i){var m=i.keyCode,h=d(this),n,k,l=g._model.items(),j;m==38&&(k=true);JC.log("keyup",new Date().getTime(),m);switch(m){case 38:case 40:n=g._model.nextIndex(k);if(n>=0&&n<l.length){i.preventDefault();j=d(l[n]);g._model.selectedIdentifier(j);g.selector().val(g._model.getKeyword(j));return}break;case 9:g.hide();return;case 13:g.hide();h.data("IgnoreTime",new Date().getTime());g._model.sugprevententer()&&i.preventDefault();break}});d(g._model.layout()).delegate(".js_sugItem","mouseenter",function(h){g._model.selectedIdentifier(d(this),true)});d(g._model.layout()).delegate(".js_sugItem","mouseleave",function(h){d(this).removeClass("active")});g.selector().on("click",function(h){h.stopPropagation();g.selector().trigger("keyup");c._hideOther(g)});d(g._model.layout()).delegate(".js_sugItem","click",function(i){var h=d(this),j=g._model.getKeyword(h);g.selector().val(j);g.hide();g.trigger("SuggestSelected",[h]);g._model.sugselectedcallback()&&g._model.sugselectedcallback().call(g,j);setTimeout(function(){g.selector().trigger("blur")},50)});if(g._model.sugautoposition()){d(window).on("resize",function(){if(g._model.layout().is(":visible")){g._view.show()}})}}};c.getInstance=function(g,h){if(typeof g=="string"&&!/</.test(g)){g=d(g)}if(!(g&&g.length)||(typeof g=="string")){return}typeof h!="undefined"&&g.data("SuggestInstace",h);return g.data("SuggestInstace")};c.isSuggest=function(g){var h;g&&(g=d(g)).length&&(h=g.is("[sugurl]")||g.is("sugstaticdatacb"));return h};c.autoInit=true;c.layoutTpl="";c.layoutTpl="";c.dataFilter;c._allIns=[];c._hideOther=function(k){for(var h=0,g=c._allIns.length;h<g;h++){if(c._allIns[h]._model._id!=k._model._id){c._allIns[h].hide()}}};function f(g){this._selector=g;this._id="Suggest_"+new Date().getTime()}f.prototype={init:function(){return this},selector:function(){return this._selector},suglayouttpl:function(){var g=this,i=c.layoutTpl||g.layoutTpl,h;(h=g.selector().attr("suglayouttpl"))&&(i=h);return i},layoutTpl:'<dl class="sug_layout js_sugLayout" style="display:none;"></dl>',layout:function(){var g=this;!g._layout&&g.selector().is("[suglayout]")&&(g._layout=JC.f.parentSelector(g.selector(),g.selector().attr("suglayout")));!g._layout&&(g._layout=d(g.suglayouttpl()),g._layout.hide(),g._layout.appendTo(document.body),(g._sugautoposition=true));!g._layout.hasClass("js_sugLayout")&&g._layout.addClass("js_sugLayout");if(g.sugwidth()){g._layout.css({width:g.sugwidth()+"px"})}g._layout.css({width:g._layout.width()+g.sugoffsetwidth()+"px"});return g._layout},sugautoposition:function(){this.layout().is("sugautoposition")&&(this._sugautoposition=JC.f.parseBool(this.layout().attr("sugautoposition")));return this._sugautoposition},sugwidth:function(){this.selector().is("[sugwidth]")&&(this._sugwidth=parseInt(this.selector().attr("sugwidth")));!this._sugwidth&&(this._sugwidth=this.sugplaceholder().width());return this._sugwidth},sugoffsetleft:function(){this.selector().is("[sugoffsetleft]")&&(this._sugoffsetleft=parseInt(this.selector().attr("sugoffsetleft")));!this._sugoffsetleft&&(this._sugoffsetleft=0);return this._sugoffsetleft},sugoffsettop:function(){this.selector().is("[sugoffsettop]")&&(this._sugoffsettop=parseInt(this.selector().attr("sugoffsettop")));!this._sugoffsettop&&(this._sugoffsettop=0);return this._sugoffsettop},sugoffsetwidth:function(){this.selector().is("[sugoffsetwidth]")&&(this._sugoffsetwidth=parseInt(this.selector().attr("sugoffsetwidth")));!this._sugoffsetwidth&&(this._sugoffsetwidth=0);return this._sugoffsetwidth},_dataCallback:function(g){d(this).trigger("TriggerEvent",["SuggestUpdate",g])},sugdatacallback:function(){var g=this;this.selector().is("[sugdatacallback]")&&(this._sugdatacallback=this.selector().attr("sugdatacallback"));!this._sugdatacallback&&(this._sugdatacallback=g._id+"_cb");!window[this._sugdatacallback]&&(window[this._sugdatacallback]=function(h){g._dataCallback(h)});return this._sugdatacallback},sugurl:function(g){this.selector().is("[sugurl]")&&(this._sugurl=this.selector().attr("sugurl"));!this.selector().is("[sugurl]")&&(this._sugurl="?word={0}&callback={1}");this._sugurl=JC.f.printf(this._sugurl,g,this.sugdatacallback());return this._sugurl},sugneedscripttag:function(){this._sugneedscripttag=true;this.selector().is("[sugneedscripttag]")&&(this._sugneedscripttag=JC.f.parseBool(this.selector().attr("sugneedscripttag")));return this._sugneedscripttag},getData:function(k){var h=this,i=this.sugurl(k),j,g="script_"+h._id;JC.log(i,new Date().getTime());if(this.sugneedscripttag()){d("#"+g).remove();j=JC.f.printf('<script id="{1}" src="{0}"><\/script>',i,g);d(j).appendTo(document.body)}else{d.get(i,function(l){l=d.parseJSON(l);h._dataCallback(l)})}},cache:function(g,h){this._cache=this._cache||{};typeof h!="undefined"&&(this._cache[g]=h);return this._cache[g]},sugselectedcallback:function(){var g=this;this.selector().is("[sugselectedcallback]")&&(this._sugselectedcallback=this.selector().attr("sugselectedcallback"));return this._sugselectedcallback?window[this._sugselectedcallback]:null},suginitedcallback:function(){var g=this;this.selector().is("[suginitedcallback]")&&(this._suginitedcallback=this.selector().attr("suginitedcallback"));return this._suginitedcallback?window[this._suginitedcallback]:null},sugdatafilter:function(){var g=this;this.selector().is("[sugdatafilter]")&&(this._sugdatafilter=this.selector().attr("sugdatafilter"));this._sugdatafilter=this._sugdatafilter||c.dataFilter;return this._sugdatafilter?window[this._dataCallback]:null},sugqueryinterval:function(){this.selector().is("[sugqueryinterval]")&&(this._sugqueryinterval=parseInt(this.selector().attr("sugqueryinterval")));this._sugqueryinterval=this._sugqueryinterval||200;return this._sugqueryinterval},sugprevententer:function(){var g;this.selector().is("[sugprevententer]")&&(g=JC.f.parseBool(this.selector().attr("sugprevententer")));return g},timeout:null,preValue:null,keyindex:-1,nextIndex:function(h){var i=this.items(),g=i.length;if(h){if(this.keyindex<=0){this.keyindex=g-1}else{this.keyindex--}}else{if(this.keyindex>=g-1){this.keyindex=0}else{this.keyindex++}}return this.keyindex},items:function(){return this.layout().find(".js_sugItem")},selectedIdentifier:function(h,g){this._preSelected&&this._preSelected.removeClass("active");h.addClass("active");g&&(this.keyindex=parseInt(h.attr("keyindex")));this._preSelected=h},getKeyword:function(g){var i=g.attr("keyword");try{i=decodeURIComponent(i)}catch(h){}return i},currentData:function(g){typeof g!="undefined"&&(this._currentData=g);return this._currentData},sugsubtagname:function(){var h="dd",g;(g=this.selector().attr("sugsubtagname"))&&(h=g);return h},sugplaceholder:function(){var g=this.selector();this.selector().is("[sugplaceholder]")&&(g=JC.f.parentSelector(this.selector(),this.selector().attr("sugplaceholder")));return g}};function e(g){this._model=g}e.prototype={init:function(){return this},show:function(){var g=this;d(this).trigger("TriggerEvent",["SuggestBeforeShow"]);this._model.layout().css("z-index",window.ZINDEX_COUNT++);this.autoposition();this._model.layout().show();setTimeout(function(){g._model.layout().show()},10);d(this).trigger("TriggerEvent",["SuggestShow"])},autoposition:function(){if(!this._model.sugautoposition()){return}var g=this,h=g._model.sugplaceholder().offset(),i=g._model.sugplaceholder().height();g._model.layout().css({left:h.left+g._model.sugoffsetleft()+"px",top:h.top+g._model.sugoffsettop()+i+"px"})},hide:function(){this._model.layout().hide();this.reset();d(this).trigger("TriggerEvent",["SuggestHide"])},update:function(k){var h=this,g=[],q,p,o,l=h._model.sugsubtagname();if(!(k&&k.s&&k.s.length)){h.hide();return}for(var n=0,m=k.s.length;n<m;n++){p=k.s[n],o=p,q=k.q||"";o=o.replace(q,JC.f.printf("<b>{0}</b>",q));g.push(JC.f.printf('<{4} keyword="{2}" keyindex="{3}" class="js_sugItem">{1}</{4}>',q,o,encodeURIComponent(p),n,l))}h._model.layout().html(g.join(""));JC.log("suggest update");this.reset();h._model.currentData(k);d(this).trigger("TriggerEvent",["SuggestUpdated"]);h.show()},reset:function(){JC.log("suggest reset");this._model.keyindex=-1;this._model.layout().find(".js_sugItem").removeClass("active");d(this).trigger("TriggerEvent",["SuggestReset"])}};d(document).delegate("input[type=text]","focus",function(h){var g=d(this),i=c.getInstance(g);if(i||!c.isSuggest(g)||!c.autoInit){return}JC.log("Suggest input fined:",g.attr("name"),new Date().getTime());i=new c(g)});d(document).on("click",function(g){d("dl.js_sugLayout, div.js_sugLayout").hide()})}(jQuery));return JC.Suggest})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));