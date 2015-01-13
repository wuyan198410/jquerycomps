(function(b,a){b(["JC.AjaxUpload"],function(){Bizs.MultiUpload=c;JC.use&&!JC.AjaxUpload&&JC.use("JC.AjaxUpload");function c(d){d&&(d=$(d));if(JC.BaseMVC.getInstance(d,c)){return JC.BaseMVC.getInstance(d,c)}JC.BaseMVC.getInstance(d,c,this);this._model=new c.Model(d);this._view=new c.View(this._model);this._init();JC.log(c.Model._instanceName,"all inited",new Date().getTime())}c.init=function(d){var e=[];d=$(d||document);if(d&&d.length){if(d.hasClass("js_bizMultiUpload")){e.push(new c(d))}else{d.find("div.js_bizMultiUpload").each(function(){e.push(new c(this))})}}return e};BaseMVC.build(c);JC.f.extendObject(c.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var d=this;d.on("inited",function(){d._model.saveAjaxUploadHandler();d._model.injectAjaxHandler();d.trigger("CheckItemLimit")});d.on("AjaxDone",function(g,f,h,j){var i=d._model.bmuTpl(),e=d._model.bmuBoxSelector();if(!(e&&e.length)){return}if(f.errorno){return}d._view.newItem(f,i,e)});d.on("ItemAdded",function(h,e,g,f){JC.f.safeTimeout(function(){d.trigger("CheckItemLimit")},d,"OnItemAdded",10);d._model.bmuItemAddedCallback()&&d._model.bmuItemAddedCallback().call(d,e,g,f)});d.on("ItemDeleted",function(e,f){d._model.bmuItemDeletedCallback()&&d._model.bmuItemDeletedCallback().call(d,f,d._model.bmuBoxSelector())});d.on("CheckItemLimit",function(){d._view.checkItemLimit()});d._model.bmuBoxSelector().delegate(d._model.bmuRemoveDelegate(),"click",function(){var e=JC.f.parentSelector(this,d._model.bmuRemoveItemParentSelector());e&&e.length&&e.remove();d.updateStatus();d.trigger("ItemDeleted",[this])})},_inited:function(){this.trigger("inited")},updateStatus:function(){this.trigger("CheckItemLimit");return this}});c.Model._instanceName="MultiUpload";c.Model._insCount=1;c.Model._handlerPrefix="bizMultiUploadHandler_";JC.f.extendObject(c.Model.prototype,{init:function(){this._id=c.Model._insCount++},bmuItemLimit:function(){return this.intProp("bmuItemLimit")},id:function(d){typeof d!="undefined"&&(this._id=d);return this._id},bmuBoxSelector:function(){var d=this._bmuBoxSelector||this.selectorProp("bmuBoxSelector");!(d&&d.length)&&(d=this.selector().find(".bmuBoxSelector"));if(!(d&&d.length)){d=this._bmuBoxSelector=$('<dl class="bmuBoxSelector"></dl>');this._bmuBoxSelector.appendTo(this.selector())}return d},bmuTplSelector:function(){var d=this.selectorProp("bmuTplSelector");!(d&&d.length)&&(d=this.selector().find(".bmuTplSelector"));return d},bmuTpl:function(){var e=['<dd class="js_multiUploadItem">','<input type="hidden" name="file[]" value="{0}" class="js_multiUploadHidden" />','<a href="{0}" target="_blank"><label class="js_multiUploadLabel">{1}</label></a>','&nbsp;<button type="button" class="AURemove js_removeUploadItem"></button>',"</dd>"].join(""),d=this.bmuTplSelector();d&&d.length&&(e=JC.f.scriptContent(d));return e},bmuAjaxUploadSelector:function(){var d=this.selectorProp("bmuAjaxUploadSelector");!(d&&d.length)&&(d=this.selector().find(".js_compAjaxUpload"));return d},ajaxUploadIns:function(){var d;this.bmuAjaxUploadSelector()&&this.bmuAjaxUploadSelector().length&&(d=JC.BaseMVC.getInstance(this.bmuAjaxUploadSelector(),JC.AjaxUpload));return d},bmuItemDelegate:function(){return this.attrProp("bmuItemDelegate")||">"},bmuItems:function(){return this.bmuBoxSelector().find(this.bmuItemDelegate())},bmuRemoveDelegate:function(){return this.attrProp("bmuRemoveDelegate")||".js_removeUploadItem"},bmuRemoveItemParentSelector:function(){return this.attrProp("bmuRemoveItemParentSelector")||"("},saveAjaxUploadHandler:function(){this._ajaxUploadDoneHandler=this.windowProp(this.bmuAjaxUploadSelector(),"cauUploadDoneCallback");this._ajaxUploadErrorHandler=this.windowProp(this.bmuAjaxUploadSelector(),"cauUploadErrorCallback")},ajaxUploadDoneHandler:function(){return this._ajaxUploadDoneHandler},ajaxUploadErrorHandler:function(){return this._ajaxUploadErrorHandler},injectAjaxHandler:function(){var e=this,d=c.Model._handlerPrefix,h=d+"done"+this.id(),g=d+"error"+this.id(),f=d+"cancel"+this.id();this.setAjaxUplaodHandler(h,"cauUploadDoneCallback",function(j,i){var k=this;e.ajaxUploadDoneHandler()&&e.ajaxUploadDoneHandler().call(k,j,i);e.trigger("AjaxDone",[j,i,k])});this.setAjaxUplaodHandler(g,"cauBeforeUploadErrCallback",function(){JC.f.safeTimeout(function(){e.trigger("CheckItemLimit")},e,"OnError",10)});this.setAjaxUplaodHandler(f,"cauCancelCallback",function(){JC.f.safeTimeout(function(){e.trigger("CheckItemLimit")},e,"OnCancel",10)})},setAjaxUplaodHandler:function(d,f,e){window[d]=e;this.bmuAjaxUploadSelector().attr(f,d)},bmuItemAddedCallback:function(){return this.callbackProp("bmuItemAddedCallback")},bmuItemDeletedCallback:function(){return this.callbackProp("bmuItemDeletedCallback")}});JC.f.extendObject(c.View.prototype,{init:function(){},newItem:function(f,g,e){JC.dir(f);g=JC.f.printf(g,f.data.url,f.data.name);var d=$(g);d.appendTo(e);this.trigger("ItemAdded",[d,f,e]);JC.f.autoInit&&JC.f.autoInit(d)},checkItemLimit:function(){var d=this,f=this._model.bmuItemLimit(),g,e=d._model.ajaxUploadIns();if(!f){return}g=d._model.bmuItems();g=g||[];if(!e){return}if(g.length>=f){e.disable()}else{e.enable()}}});$(document).ready(function(){c.autoInit&&JC.f.safeTimeout(function(){c.init()},null,"MultiUploadInit",2)});return Bizs.MultiUpload})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));