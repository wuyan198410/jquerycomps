(function(b,a){b(["JC.BaseMVC","JC.AutoComplete","JC.AutoSelect"],function(){Bizs.AutoSelectComplete=c;JC.f.addAutoInit(c);function c(d){d&&(d=$(d));if(c.getInstance(d)){return c.getInstance(d)}c.getInstance(d,this);this._model=new c.Model(d);this._view=new c.View(this._model);this._init();JC.log("AutoSelectComplete inited",new Date().getTime())}c.getInstance=function(d,e){if(typeof d=="string"&&!/</.test(d)){d=$(d)}if(!(d&&d.length)||(typeof d=="string")){return}typeof e!="undefined"&&d.data(c.Model._instanceName,e);return d.data(c.Model._instanceName)};c.init=function(d){var e=[];d=$(d||document);if(d&&d.length){if(d.hasClass(".js_bizAutoSelectComplete")){e.push(new c(d))}else{d.find("input.js_bizAutoSelectComplete").each(function(){e.push(new c(this))})}}return e};c.prototype={_beforeInit:function(){JC.log("AutoSelectComplete _beforeInit",new Date().getTime())},_initHanlderEvent:function(){var d=this;d.on("BASC_SELECT_CHANGED",function(f,h){JC.log("Bizs.AutoSelectComplete all changed",new Date().getTime());d.trigger("BASC_ALL_CHANGE",[h]);var g=h.val(),h,g,e;if(!g){d.trigger("BASC_CLEAR");d.trigger("BASC_CHANGE",[h])}else{JC.AutoComplete.ajaxUpdate(d._model.selector(),JC.f.printf(d._model.bascAjaxUrl(),g),function(i){d.trigger("BASC_CHANGE",[h,g,i]);var j=this;if(d._model.firstUpdate()){d._model.firstUpdate(false);d.trigger("BASC_FIRST_UPDATE",[i,j]);return}d.trigger("BASC_CLEAR")})}});d.on("BASC_CLEAR",function(){var e=JC.AutoComplete.getInstance(d._model.selector());if(!e){return}e.clear()});d.on("BASC_ALL_CHANGE",function(e,g){var f=JC.AutoComplete.getInstance(d._model.selector());if(g.is(":visible")&&g.val()){if(f){d._model.selector().show()}else{d._model.selector().hide()}}else{d._model.selector().hide()}});d.on("BASC_CHANGE",function(f,i,h,e){JC.log("BASC_CHANGE",new Date().getTime(),h,e);var g=JC.AutoComplete.getInstance(d._model.selector());if(!(h&&e&&e.length)){d._model.selector().hide();JC.log("hide")}else{d._model.selector().show()}});d.on("BASC_FIRST_UPDATE",function(f,e,g){var h=g.idVal();if(!h){return}$.each(e,function(j,i){if(i.id==h){g.selector().val(i.label);return false}})})},_inited:function(){JC.log("AutoSelectComplete _inited",new Date().getTime());this._model.selector().attr("cacDataFilter",c.Model.DATA_FILTER_NAME);this._model.injectDefaultSelectCallback()}};BaseMVC.buildModel(c);c.Model._instanceName="AutoSelectComplete";c.Model.INS_COUNT=1;c.Model.DATA_FILTER_NAME="BizsAutoSelectCompleteDataFilter";c.Model.prototype={init:function(){JC.log("AutoSelectComplete.Model.init:",new Date().getTime());this._insCount=c.Model.INS_COUNT++;this._firstUpdate=true},firstUpdate:function(d){typeof d!="undefined"&&(this._firstUpdate=d);return this._firstUpdate},insCount:function(){return this._insCount},bascDefaultSelect:function(){var d=this.selectorProp("bascDefaultSelect");return d},injectDefaultSelectCallback:function(){var d=this,e=d.callbackProp(d.bascDefaultSelect(),"selectallchanged"),f="AutoSelectComplete_inject_"+d.insCount();if(d.bascDefaultSelect().attr("selectallchanged")==f){return}window[f]=function(g){if(e){e.apply(this,JC.f.sliceArgs(arguments))}$(d).trigger("TriggerEvent",["BASC_SELECT_CHANGED",g[g.length-1]])};d.bascDefaultSelect().attr("selectallchanged",f)},bascAjaxUrl:function(){var d=this.attrProp("bascAjaxUrl");return d},bascDefaultLabel:function(){var d=this.attrProp("bascDefaultLabel");return d},bascDefaultId:function(){var d=this.attrProp("bascDefaultId");return d}};BaseMVC.buildView(c);c.View.prototype={init:function(){JC.log("AutoSelectComplete.View.init:",new Date().getTime())}};BaseMVC.build(c,"Bizs");window[c.Model.DATA_FILTER_NAME]=function(d){if(d.data&&d.data.length){d=d.data}$.each(d,function(f,e){e.length&&(d[f]={id:e[0],label:e[1]})});return d};$(document).ready(function(){var d=0;c.autoInit&&(d=c.init())});return Bizs.AutoSelectComplete})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));